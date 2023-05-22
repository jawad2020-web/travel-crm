<template>
  <n-card>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
      <n-space style="display: block">
        <n-card title="Booking Details" style="margin-bottom: 10px">
          <n-row gutter="12">
            <n-col :span="6">
              <n-form-item label="Customer Name" path="customer_name">
                <n-input
                  v-model:value="formValue.customer_name"
                  placeholder="Enter Customer Name"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Booking Status" path="booking_status">
                <n-input
                  v-model:value="formValue.booking_status"
                  placeholder="Enter Booking Status"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Group No" path="group_no">
                <n-input v-model:value="formValue.group_no" placeholder="Enter Group No" />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Group Name" path="group_name">
                <n-input v-model:value="formValue.group_name" placeholder="Enter Group Name" />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Category" path="category">
                <n-input v-model:value="formValue.category" placeholder="Enter Category" />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Approval Date" path="approval_date">
                <n-date-picker
                  style="width: 100%"
                  v-model:value="formValue.approval_date"
                  type="datetime"
                  clearable
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Expected Departure" path="expected_departure">
                <n-date-picker
                  style="width: 100%"
                  v-model:value="formValue.expected_departure"
                  type="datetime"
                  clearable
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Confirmed Ticket" path="confirmed_ticket">
                <n-switch v-model:value="formValue.confirmed_ticket" />
              </n-form-item>
            </n-col>
          </n-row>
        </n-card>
        <n-card title="Visa Details" style="display: flex; width: 100%">
          <n-grid :cols="24" style="width: 100%">
            <n-gi :span="8">
              <n-form-item label="IATA" path="iata">
                <n-input
                  style="width: 100%"
                  v-model:value="formValue.iata"
                  placeholder="Enter iata"
                />
              </n-form-item>
            </n-gi>
            <n-gi :span="8">
              <n-form-item label="Visa Company" path="visa_company">
                <n-input v-model:value="formValue.visa_company" placeholder="Enter Visa Company" />
              </n-form-item>
            </n-gi>
            <n-gi :span="8">
              <n-form-item label="Visa Status" path="visa_status">
                <n-input v-model:value="formValue.visa_status" placeholder="Enter Visa Status" />
              </n-form-item>
            </n-gi>
          </n-grid>
        </n-card>
      </n-space>
      <n-space :vertical="true" style="align-items: center">
        <n-form-item>
          <n-button style="alignment: center"> Create</n-button>
        </n-form-item>
      </n-space>
    </n-form>
  </n-card>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const formValue: any = ref({});
  const rules = ref({
    company_name: {
      required: true,
      message: 'Please Enter Name',
      trigger: 'blur',
    },
  });

  onMounted(() => {});
</script>

<style scoped>
  .light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
