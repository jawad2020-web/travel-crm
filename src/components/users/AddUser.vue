<template>
  <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
    <n-form-item style="padding-top: 24px" label="Name" path="name">
      <n-input v-model:value="formValue.name" placeholder="Enter Name" />
    </n-form-item>
    <n-form-item style="padding-top: 24px" label="Permissions" path="permissions">
      <permission-selector
        v-model:value="formValue.permissions"
        label-field="name"
        value-field="id"
        :tag="true"
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
  import { createRoleApi } from '@/api/role/role';

  const formValue: any = ref({});
  const formRef = ref<FormInst | null>(null);
  const emits = defineEmits(['created']);
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
        const { name, permissions } = formValue.value;
        createRoleApi({ name, permissions }).then((result) => {
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
