import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { defineComponent } from 'vue';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta' | 'children'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface Meta {
  // name
  title: string;
  // Whether to ignore permissions
  ignoreAuth?: boolean;
  permissions?: string[];
  // whether to cache
  noKeepAlive?: boolean;
  // Is it fixed on the tab
  affix?: boolean;
  // icon on the tab
  icon?: string;
  // jump address
  frameSrc?: string;
  // External link jump address
  externalLink?: string;
  //hide
  hidden?: boolean;
}

export interface Menu {
  title: string;
  label: string;
  key: string;
  meta: RouteMeta;
  name: string;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
  icon?: any;
  path: string;
  permissions?: string[];
  redirect?: string;
  sort?: number;
}

export interface IModuleType {
  default: Array<RouteRecordRaw> | RouteRecordRaw;
}
