<template>
  <n-card>
    <n-form ref="formRef" :label-width="80" :model="hotel" :rules="rules">
      <n-space>
        <n-row :gutter="10">
          <n-col :span="12">
            <n-form-item label="Hotel Name" path="name">
              <n-input v-model:value="hotel.name" placeholder="Enter Name" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel Phone Number" path="phone_number">
              <n-input v-model:value="hotel.phone_number" placeholder="Enter Phone Number" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel Owner" path="owner">
              <n-input v-model:value="hotel.owner" placeholder="Enter Owner Name" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel Owner Phone" path="owner_phone">
              <n-input v-model:value="hotel.owner_phone" placeholder="Enter Owner Phone" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel Address" path="address">
              <n-input v-model:value="hotel.address" placeholder="Enter Address" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel City" path="city">
              <n-input v-model:value="hotel.city" placeholder="Enter City" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel State" path="state">
              <n-input v-model:value="hotel.state" placeholder="Enter State" />
            </n-form-item>
          </n-col>
          <n-col :span="12">
            <n-form-item label="Hotel Country" path="country">
              <n-input v-model:value="hotel.country" placeholder="Enter Country" />
            </n-form-item>
          </n-col>
        </n-row>
      </n-space>
      <n-space justify="end" :size="0">
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
  </n-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInst } from 'naive-ui';
  import { createHotelApi } from '@/api/hotel/hotel';

  const formRef = ref<FormInst | null>(null);
  const hotel: any = ref({});
  const emits = defineEmits(['created']);

  const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
      if (!errors) {
        createHotelApi(hotel.value).then((result: any) => {
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
    name: {
      required: true,
      message: 'Please Enter name',
      trigger: 'blur',
    },
    phone_number: {
      required: true,
      message: 'Please Select phone number',
      trigger: 'blur',
    },
    owner: {
      required: true,
      message: 'Please Enter owner name',
      trigger: 'blur',
    },
    owner_phone: {
      required: true,
      message: 'Please Enter owner phone number',
      trigger: 'blur',
    },
    address: {
      required: true,
      message: 'Please Enter street no',
      trigger: 'blur',
    },
    city: {
      required: true,
      message: 'Please Enter city',
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
  });
</script>

<style lang="less" scoped></style>
