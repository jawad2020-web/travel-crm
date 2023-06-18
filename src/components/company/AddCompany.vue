<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
    <n-row :gutter="10">
      <n-col :span="12">
        <n-form-item label="Name" path="company_name">
          <n-input v-model:value="formValue.company_name" placeholder="Enter Name" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Phone" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Enter Phone" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Address" path="address">
          <n-input v-model:value="formValue.address" placeholder="Enter Address" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="City" path="city">
          <n-input v-model:value="formValue.city" placeholder="Enter City" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="State" path="state">
          <n-input v-model:value="formValue.state" placeholder="Enter State" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Country" path="country">
          <n-input v-model:value="formValue.country" placeholder="Enter Country" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item label="Logo" path="logo">
          <n-input v-model:value="formValue.logo" placeholder="Enter Logo" />
        </n-form-item>
      </n-col>
    </n-row>
    <n-space justify="end" :wrap="true" :size="0">
      <n-form-item
        :theme-overrides="{
          feedbackHeightSmall: '0',
          feedbackHeightMedium: '0',
          labelHeightMedium: '0',
          labelHeightSmall: '0',
        }"
      >
        <n-button type="success" @click="handleValidateClick"> Create</n-button>
      </n-form-item>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInst } from 'naive-ui';
  import { createCompanyApi } from '@/api/company/company';

  const formValue: any = ref({});
  const formRef = ref<FormInst | null>(null);
  const emits = defineEmits(['created']);

  const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
      if (!errors) {
        createCompanyApi({ ...formValue.value }).then((result: any) => {
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
    company_name: {
      required: true,
      message: 'Please Enter Name',
      trigger: 'blur',
    },
    phone: {
      required: true,
      message: 'Please Enter Phone',
      trigger: 'blur',
    },
    address: {
      required: true,
      message: 'Please Enter address',
      trigger: 'blur',
    },
    city: {
      required: true,
      message: 'Please Enter City',
      trigger: 'blur',
    },
    state: {
      required: true,
      message: 'Please Enter state',
      trigger: 'blur',
    },
    country: {
      required: true,
      message: 'Please Enter country',
      trigger: 'blur',
    },
    logo: {
      required: true,
      message: 'Please Enter logo',
      trigger: 'blur',
    },
  });
</script>

<style lang="less" scoped></style>
