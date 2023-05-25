<template>
  <n-card>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" size="small">
      <n-space style="display: block" vertical>
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
                <n-select
                  v-model:value="formValue.booking_status"
                  filterable
                  placeholder="Search Status"
                  :options="[
                    { label: 'Draft', value: 'draft' },
                    { label: 'Processing', value: 'processing' },
                    { label: 'Final', value: 'Final' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Group No" path="group_no">
                <n-input-number class="w-full" v-model:value="formValue.group_no" min="0" />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Group Name" path="group_name">
                <n-input v-model:value="formValue.group_name" placeholder="Enter Group Name" />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Category" path="category">
                <n-select
                  v-model:value="formValue.category"
                  filterable
                  placeholder="Search Category"
                  :options="[
                    { label: 'Basic', value: 'basic' },
                    { label: 'Individual', value: 'individual' },
                    { label: 'Premium', value: 'premium' },
                    { label: 'VIP', value: 'vip' },
                  ]"
                />
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
        <n-card title="Visa Details" style="display: flex; width: 100%; margin-bottom: 10px">
          <n-row gutter="12">
            <n-col :span="8">
              <n-form-item label="IATA" path="iata">
                <n-select
                  v-model:value="formValue.visaDetails.iata"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Basic', value: 'basic' },
                    { label: 'Individual', value: 'individual' },
                    { label: 'Premium', value: 'premium' },
                    { label: 'VIP', value: 'vip' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Visa Company" path="visa_company">
                <n-input
                  v-model:value="formValue.visaDetails.visa_company"
                  placeholder="Enter Visa Company"
                />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Visa Status" path="visa_status">
                <n-select
                  v-model:value="formValue.visaDetails.visa_status"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Basic', value: 'basic' },
                    { label: 'Individual', value: 'individual' },
                    { label: 'Premium', value: 'premium' },
                    { label: 'VIP', value: 'vip' },
                  ]"
                />
              </n-form-item>
            </n-col>
          </n-row>
        </n-card>
        <n-card title="Hotel Details" class="flex w-full mb-1">
          <n-row gutter="12">
            <n-col :span="12">
              <n-form-item label="Room Type" path="room_type">
                <n-select
                  v-model:value="formValue.hotelDetails.room_type"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Double Bed', value: 'double bed' },
                    { label: 'Quad Bed', value: 'quad bed' },
                    { label: 'Quint Bed', value: 'quint bed' },
                    { label: 'Sharing', value: 'sharing' },
                    { label: 'Six Bed', value: 'six bed' },
                    { label: 'Triple Bed', value: 'triple bed' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="12">
              <n-form-item label="Package" path="Package">
                <n-select
                  v-model:value="formValue.hotelDetails.package"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'KPT-ONLY Accommodate', value: 'kpt only accommodate' },
                    { label: 'Standard', value: 'standard' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="18">
              <n-form-item label="Hotel 1" path="hotel1">
                <n-select
                  v-model:value="formValue.hotelDetails.hotel1"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Double Bed', value: 'double bed' },
                    { label: 'Quad Bed', value: 'quad bed' },
                    { label: 'Quint Bed', value: 'quint bed' },
                    { label: 'Sharing', value: 'sharing' },
                    { label: 'Six Bed', value: 'six bed' },
                    { label: 'Triple Bed', value: 'triple bed' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Night 1" path="night1">
                <n-input-number
                  class="w-full"
                  v-model:value="formValue.hotelDetails.night1"
                  min="0"
                />
              </n-form-item>
            </n-col>
            <n-col :span="18">
              <n-form-item label="Hotel 2" path="hotel1">
                <n-select
                  v-model:value="formValue.hotelDetails.hotel2"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Double Bed', value: 'double bed' },
                    { label: 'Quad Bed', value: 'quad bed' },
                    { label: 'Quint Bed', value: 'quint bed' },
                    { label: 'Sharing', value: 'sharing' },
                    { label: 'Six Bed', value: 'six bed' },
                    { label: 'Triple Bed', value: 'triple bed' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Night 2" path="night1">
                <n-input-number
                  class="w-full"
                  v-model:value="formValue.hotelDetails.night2"
                  min="0"
                />
              </n-form-item>
            </n-col>
            <n-col :span="18">
              <n-form-item label="Hotel 3" path="hotel1">
                <n-select
                  v-model:value="formValue.hotelDetails.hotel3"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Double Bed', value: 'double bed' },
                    { label: 'Quad Bed', value: 'quad bed' },
                    { label: 'Quint Bed', value: 'quint bed' },
                    { label: 'Sharing', value: 'sharing' },
                    { label: 'Six Bed', value: 'six bed' },
                    { label: 'Triple Bed', value: 'triple bed' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Night 3" path="night1">
                <n-input-number
                  class="w-full"
                  v-model:value="formValue.hotelDetails.night3"
                  min="0"
                />
              </n-form-item>
            </n-col>
          </n-row>
        </n-card>
        <n-card title="Members Details" class="flex w-full mb-1">
          <n-button @click="showMemberModal = true" type="success"> Add Member</n-button>
          <n-row gutter="12">
            <n-table v-if="formValue.members.length" :striped="true">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Family Name</th>
                  <th>Gender</th>
                  <th>Title</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in formValue.members" :key="index">
                  <td>{{ item.first_name }}</td>
                  <td>{{ item.family_name }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ item.title }}</td>
                  <td>
                    <n-button
                      strong
                      secondary
                      circle
                      type="error"
                      @click="formValue.members.splice(index, 1)"
                    >
                      <template #icon>
                        <n-icon>
                          <Delete20Filled />
                        </n-icon>
                      </template>
                    </n-button>
                    <n-button
                      strong
                      secondary
                      circle
                      type="success"
                      @click="editMember(item, index)"
                    >
                      <template #icon>
                        <n-icon>
                          <NotepadEdit20Filled />
                        </n-icon>
                      </template>
                    </n-button>
                  </td>
                </tr>
              </tbody>
            </n-table>
          </n-row>
        </n-card>
      </n-space>
      <n-space :vertical="true">
        <n-form-item>
          <n-button :loading="loading" type="success" @click="saveBooking">
            <template #icon>
              <n-icon>
                <SaveArrowRight20Filled />
              </n-icon>
            </template>
            Save Booking
          </n-button>
        </n-form-item>
      </n-space>
    </n-form>
    <n-modal style="width: 70%" v-model:show="showMemberModal" preset="dialog">
      <template #header>
        <div>{{ modelTitle }}</div>
      </template>
      <n-space :vertical="true">
        <n-card title="General Details" class="flex w-full mb-1">
          <n-row gutter="12">
            <n-col :span="8">
              <n-form-item label="First Name" path="first_name">
                <n-input v-model:value="bookingMember.first_name" placeholder="Enter First Name" />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Family Name" path="family_name">
                <n-input
                  v-model:value="bookingMember.family_name"
                  placeholder="Enter Family Name"
                />
              </n-form-item>
            </n-col>
            <n-col :span="5">
              <n-form-item label="Gender" path="gender">
                <n-select
                  v-model:value="bookingMember.gender"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="3">
              <n-form-item label="Family Head" path="family_head">
                <n-switch v-model:value="bookingMember.family_head" />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="DOB" path="dob">
                <n-date-picker class="w-full" v-model:value="bookingMember.dob" type="date" />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Marital Status" path="marital_status">
                <n-select
                  v-model:value="bookingMember.marital_status"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Single', value: 'single' },
                    { label: 'Married', value: 'married' },
                    { label: 'Divorced', value: 'divorced' },
                    { label: 'Widowed', value: 'widowed' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Title" path="marital_status">
                <n-input v-model:value="bookingMember.title" placeholder="Enter Title" />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Education" path="education">
                <n-select
                  v-model:value="bookingMember.education"
                  filterable
                  placeholder="Select Option"
                  :options="[
                    { label: 'Primary School', value: 'primary school' },
                    { label: 'High School', value: 'high school' },
                    { label: 'College Education', value: 'college education' },
                    { label: 'Higher Education', value: 'higher education' },
                    { label: 'No Education', value: 'no education' },
                  ]"
                />
              </n-form-item>
            </n-col>
            <n-col :span="8">
              <n-form-item label="Nationality" path="nationality">
                <n-input
                  v-model:value="bookingMember.nationality"
                  placeholder="Enter Nationality"
                />
              </n-form-item>
            </n-col>
          </n-row>
        </n-card>
        <n-card title="Passport Details" class="flex w-full mb-1">
          <n-row gutter="12">
            <n-col :span="6">
              <n-form-item label="Passport" path="passport">
                <n-input v-model:value="bookingMember.passport" placeholder="Enter Passport" />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Passport Type" path="passport_type">
                <n-input
                  v-model:value="bookingMember.passport_type"
                  placeholder="Enter Passport Type"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Issue Date" path="issue_date">
                <n-date-picker
                  class="w-full"
                  v-model:value="bookingMember.issue_date"
                  type="date"
                />
              </n-form-item>
            </n-col>
            <n-col :span="6">
              <n-form-item label="Expiry Date" path="expiry_date">
                <n-date-picker
                  class="w-full"
                  v-model:value="bookingMember.expiry_date"
                  type="date"
                />
              </n-form-item>
            </n-col>
          </n-row>
        </n-card>
        <n-card title="Relation Details" class="flex w-full mb-1">
          <n-row gutter="12">
            <n-col :span="12">
              <n-form-item label="Relation" path="relation">
                <n-input v-model:value="bookingMember.passport" placeholder="Enter Passport" />
              </n-form-item>
            </n-col>
            <n-col :span="12">
              <n-form-item label="Mehram Name" path="mehram_name">
                <n-input
                  v-model:value="bookingMember.mehram_name"
                  placeholder="Enter Mehram Name"
                />
              </n-form-item>
            </n-col>
          </n-row>
        </n-card>
        <n-row>
          <n-button strong secondary circle type="success" size="large" @click="addMemberToBooking">
            <template #icon>
              <n-icon size="30">
                <SaveArrowRight20Filled />
              </n-icon>
            </template>
          </n-button>
        </n-row>
      </n-space>
    </n-modal>
  </n-card>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { SaveArrowRight20Filled, Delete20Filled, NotepadEdit20Filled } from '@vicons/fluent';
  import { createBookingApi } from '@/api/booking/booking';

  const formValue: any = ref({
    visaDetails: {},
    hotelDetails: {},
    members: [],
  });
  const bookingMember: any = ref({});
  const showMemberModal = ref(false);
  const modelTitle = ref('Add Member');
  const loading = ref(false);
  const rules = ref({
    company_name: {
      required: true,
      message: 'Please Enter Name',
      trigger: 'blur',
    },
  });

  onMounted(() => {});

  function addMemberToBooking() {
    showMemberModal.value = false;
    formValue.value.members.push(bookingMember.value);
    bookingMember.value = {};
    modelTitle.value = 'Add Member';
  }

  function editMember(item, index) {
    bookingMember.value = item;
    formValue.value.members.splice(index, 1);
    modelTitle.value = 'Update Member';
    showMemberModal.value = true;
  }

  function saveBooking() {
    loading.value = true;
    createBookingApi({ ...formValue.value }).then((result) => {
      window['$message'].success(result.message);
      loading.value = false;
    });
  }
</script>
