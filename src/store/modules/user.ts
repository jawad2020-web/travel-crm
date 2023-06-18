import { defineStore } from 'pinia';
import { store } from '@/store';
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types';
import { ResultEnum } from '@/enums/httpEnum';
import { getUserInfoApi, loginApi } from '@/api/auth/auth';
import { storage } from '@/utils/Storage';
import _ from 'lodash';

export type Profile = {
  address: string;
  city: string;
  country: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture: string;
  state: string;
};

export type UserInfoType = {
  email: string;
  user_type: string;
  profile: Profile;
};

export interface IUserState {
  token: string;
  email: string;
  permissions: any[];
  info: UserInfoType;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): IUserState => ({
    token: storage.get(ACCESS_TOKEN, ''),
    email: '',
    permissions: [],
    info: storage.get(CURRENT_USER, {}),
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getEmail(): string {
      return this.email;
    },
    getPermissions(): [any][] {
      return this.permissions;
    },
    getUserInfo(): UserInfoType {
      return this.info;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setPermissions(permissions: any) {
      this.permissions = permissions;
    },
    setUserInfo(info: UserInfoType) {
      this.info = info;
    },
    // Log in
    async login(params: any) {
      const response = await loginApi(params);
      const { result, code } = response;
      if (code === ResultEnum.SUCCESS) {
        const ex = 7 * 24 * 60 * 60;
        storage.set(ACCESS_TOKEN, result.token, ex);
        storage.set(CURRENT_USER, result, ex);
        this.setToken(result.token);
        this.setUserInfo(result);
      }
      return response;
    },

    // Get user information
    async getInfo() {
      const result = await getUserInfoApi();
      if (result) {
        const permissionsList = this.allPermissions(result);
        this.setPermissions(permissionsList);
        this.setUserInfo(result);
      } else {
        const permissionsList = [];
        this.setPermissions(permissionsList);
        this.setUserInfo(result);
      }
      return result;
    },

    allPermissions(user: any) {
      let rolePermissions: string[] = [];
      if (user?.roles) {
        for (const role of user.roles) {
          rolePermissions = [...role.permissions.map((permission: any) => permission.name)];
        }
      }
      const userPermissions = user?.permissions.map((permission: any) => permission.name) || [];

      return _.uniq([...userPermissions, ...rolePermissions]);
    },

    // Logout
    async logout() {
      this.setPermissions([]);
      this.setUserInfo({
        email: '',
        user_type: '',
        profile: {
          address: '',
          city: '',
          country: '',
          first_name: '',
          last_name: '',
          phone_number: '',
          profile_picture: '',
          state: '',
        },
      });
      storage.remove(ACCESS_TOKEN);
      storage.remove(CURRENT_USER);
    },
  },
});

// Need to be used outside the setup
export function useUser() {
  return useUserStore(store);
}
