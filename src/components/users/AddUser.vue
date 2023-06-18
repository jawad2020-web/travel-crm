<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
    <n-row :gutter="10">
      <n-col :span="12">
        <n-form-item label="First Name" path="first_name">
          <n-input v-model:value="formValue.profile.first_name" placeholder="Enter Name" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Last Name" path="last_name">
          <n-input v-model:value="formValue.profile.last_name" placeholder="Enter Name" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Email" path="email">
          <n-input v-model:value="formValue.email" placeholder="Enter email" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Password" path="password">
          <n-input
            type="password"
            v-model:value="formValue.password"
            showPasswordOn="click"
            placeholder="Enter password"
          />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Confirm Password" path="confirmPassword">
          <n-input
            type="password"
            v-model:value="formValue.confirmPassword"
            showPasswordOn="click"
            placeholder="Enter confirm password"
          />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Roles" path="roles">
          <role-selector
            v-model:value="formValue.roles"
            label-field="name"
            value-field="id"
            :tag="true"
          />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="User Type" path="user_type">
          <n-select
            v-model:value="formValue.user_type"
            filterable
            placeholder="Select Option"
            :options="[
              { label: 'Company Admin', value: 'company admin' },
              { label: 'Agent', value: 'agent' },
              { label: 'User', value: 'user' },
            ]"
          />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item
          v-if="formValue.user_type === 'company admin'"
          label="Company"
          path="company_id"
        >
          <company-selector
            v-model:value="formValue.company_id"
            label-field="company_name"
            value-field="id"
            :tag="false"
          />
        </n-form-item>
      </n-col>
    </n-row>
    <n-space justify="end" :wrap="true" :size="0">
      <n-form-item
        :theme-overrides="{
          feedbackHeightSmall: '0',
          feedbackHeightMedium: '0',
          labelHeightMedium: '0',
        }"
      >
        <n-button type="success" @click="handleValidateClick"> create</n-button>
      </n-form-item>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInst } from 'naive-ui';
  import { createUserApi } from '@/api/user/user';

  const formValue: any = ref({
    profile: {},
  });
  const formRef = ref<FormInst | null>(null);
  const emits = defineEmits(['created']);

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
    password: {
      required: true,
      message: 'Please Enter Password',
      trigger: 'blur',
    },
    confirmPassword: {
      required: true,
      message: 'Please Enter Confirm Password',
      trigger: 'blur',
    },
  });
</script>

<style lang="less" scoped></style>
