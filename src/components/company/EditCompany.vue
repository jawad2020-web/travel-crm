<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
    <n-row :gutter="5">
      <n-col :span="12">
        <n-form-item style="padding-top: 24px" label="Name" path="company_name">
          <n-input v-model:value="formValue.company_name" placeholder="Enter Name" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item style="padding-top: 4px" label="Phone" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="Enter Phone" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item style="padding-top: 4px" label="Address" path="address">
          <n-input v-model:value="formValue.address" placeholder="Enter Address" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item style="padding-top: 4px" label="City" path="city">
          <n-input v-model:value="formValue.city" placeholder="Enter City" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item style="padding-top: 4px" label="State" path="state">
          <n-input v-model:value="formValue.state" placeholder="Enter State" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item style="padding-top: 4px" label="Country" path="country">
          <n-input v-model:value="formValue.country" placeholder="Enter Country" />
        </n-form-item>
      </n-col>
      <n-col :span="12">
        <n-form-item style="padding-top: 4px" label="Logo" path="logo">
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
        }"
      >
        <n-button type="success" @click="handleValidateClick"> Update</n-button>
      </n-form-item>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInst } from 'naive-ui';
  import { getCompanyApi, updateCompanyApi } from '@/api/company/company';

  const formValue: any = ref({});
  const formRef = ref<FormInst | null>(null);
  const emits = defineEmits(['updated']);
  const props = defineProps({
    id: {
      type: Number,
    },
  });
  // fetch single Role  using id
  getCompanyApi(props.id).then((result) => {
    formValue.value = result;
  });

  const rules = ref({
    name: {
      required: true,
      message: 'Please Enter Name',
      trigger: 'blur',
    },
  });

  const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
      if (!errors) {
        // const { name, description, permissions } = formValue.value;
        updateCompanyApi(formValue.value.id, { ...formValue.value }).then((result) => {
          window['$message'].success(result.message);
          emits('updated', result);
        });
      } else {
        console.log(errors);
        window['$message'].error('Invalid');
      }
    });
  };
</script>

<style lang="less" scoped></style>
