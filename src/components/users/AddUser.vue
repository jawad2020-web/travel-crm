<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
    <n-form-item style="padding-top: 24px" label="Email" path="email">
      <n-input v-model:value="formValue.email" placeholder="Enter email" />
    </n-form-item>
    <n-form-item label="User Type" path="user_type">
      <n-select
        v-model:value="formValue.user_type"
        filterable
        placeholder="Select Option"
        :options="[
          { label: 'Company Admin', value: 'company admin' },
          { label: 'User', value: 'user' },
        ]"
      />
    </n-form-item>
    <n-form-item v-if="formValue.user_type === 'company admin'" label="Company" path="company_id">
      <company-selector
        v-model:value="formValue.company_id"
        label-field="company_name"
        value-field="id"
        :tag="false"
      />
    </n-form-item>
    <n-form-item style="padding-top: 24px" label="Roles" path="roles">
      <role-selector
        v-model:value="formValue.roles"
        label-field="name"
        value-field="id"
        :tag="true"
      />
    </n-form-item>
    <n-form-item style="padding-top: 24px" label="Password" path="password">
      <n-input type="password" v-model:value="formValue.password" placeholder="Enter password" />
    </n-form-item>
    <n-form-item style="padding-top: 24px" label="Confirm Password" path="confirmPassword">
      <n-input
        type="password"
        v-model:value="formValue.confirmPassword"
        placeholder="Enter confirm password"
      />
    </n-form-item>
    <n-space :vertical="true" style="align-items: center">
      <n-form-item>
        <n-button style="alignment: center" @click="handleValidateClick"> Create</n-button>
      </n-form-item>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInst } from 'naive-ui';
  import { createUserApi } from '@/api/user/user';

  const formValue: any = ref({});
  const formRef = ref<FormInst | null>(null);
  const emits = defineEmits(['created']);
  const rules = ref({
    email: {
      required: true,
      message: 'Please Enter Name',
      trigger: 'blur',
    },
    user_type: {
      required: true,
      message: 'Please Select User Type',
      trigger: 'blur',
    },
    // roles: {
    //   required: true,
    //   message: 'Please Select User Role',
    //   trigger: 'blur',
    // },
    password: {
      required: true,
      message: 'Please Enter User password',
      trigger: 'blur',
    },
  });

  const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
      if (!errors) {
        // const { name, permissions } = formValue.value;
        createUserApi({ ...formValue.value }).then((result) => {
          window['$message'].success(result.message);
          emits('created', result.result);
        });
      } else {
        console.log(errors);
        window['$message'].error('Please fill out required fields');
      }
    });
  };
</script>

<style lang="less" scoped></style>
