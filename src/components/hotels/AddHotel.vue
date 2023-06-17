<template>
  <n-card>
    <n-form ref="formRef" :label-width="80" :model="hotel" :rules="rules">
      <n-row :gutter="10">
        <n-col :span="24">
          <n-space :vertical="true">
            <n-card title="Hotel Inventory">
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
            </n-card>
            <n-card title="Room Inventory" class="flex w-full mb-1">
              <template #header-extra>
                <n-space>
                  <n-button type="success" @click="showRoomModal = true"> Add Room</n-button>
                </n-space>
              </template>
              <n-row gutter="12">
                <n-table v-if="hotel.rooms.length" :striped="true">
                  <thead>
                    <tr>
                      <th>Hotel Id</th>
                      <th>Room No</th>
                      <th>Floor No</th>
                      <th>Price Type</th>
                      <th>Purchase Price</th>
                      <th>Sale Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in hotel.rooms" :key="index">
                      <td>{{ item.hotel_id }}</td>
                      <td>{{ item.room_no }}</td>
                      <td>{{ item.floor_no }}</td>
                      <td>{{ item.price_type }}</td>
                      <td>{{ item.purchase_price }}</td>
                      <td>{{ item.sale_price }}</td>
                      <td>
                        <n-button
                          strong
                          secondary
                          circle
                          type="error"
                          @click="hotel.rooms.splice(index, 1)"
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
                          @click="editRoom(item, index)"
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
        </n-col>
        <n-space justify="end">
          <n-form-item :theme-overrides="{ labelHeightSmall: '0', feedbackHeightSmall: '0' }">
            <n-button type="success" @click="handleValidateClick"> create</n-button>
          </n-form-item>
        </n-space>
      </n-row>
      <n-modal style="width: 70%" v-model:show="showRoomModal" preset="dialog">
        <template #header>
          <div>{{ modelTitle }}</div>
        </template>
        <n-space :vertical="true">
          <n-card title="Inventory">
            <n-row :gutter="10">
              <n-col :span="12">
                <n-form-item label="Room No" path="room_no">
                  <n-input v-model:value="room.room_no" placeholder="Enter Room No" />
                </n-form-item>
              </n-col>
            </n-row>
            <n-row :gutter="10">
              <n-col :span="12">
                <n-form-item label="Floor" path="floor_no">
                  <n-input v-model:value="room.floor_no" placeholder="Enter Floor" />
                </n-form-item>
              </n-col>
              <n-col :span="12">
                <n-form-item label="Price Type" path="price_type">
                  <n-input v-model:value="room.price_type" placeholder="Enter Price Type" />
                </n-form-item>
              </n-col>
              <n-col :span="12">
                <n-form-item label="Purchase Price" path="purchase_price">
                  <n-input v-model:value="room.purchase_price" placeholder="Enter Purchase Price" />
                </n-form-item>
              </n-col>
              <n-col :span="12">
                <n-form-item label="Sale Price" path="sale_price">
                  <n-input v-model:value="room.sale_price" placeholder="Enter Sale Price" />
                </n-form-item>
              </n-col>
            </n-row>
          </n-card>
          <n-row>
            <n-button strong secondary circle type="success" size="large" @click="addRoom">
              <template #icon>
                <n-icon size="30">
                  <SaveArrowRight20Filled />
                </n-icon>
              </template>
            </n-button>
          </n-row>
        </n-space>
      </n-modal>
    </n-form>
  </n-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInst } from 'naive-ui';
  import { useRouter } from 'vue-router';
  import { SaveArrowRight20Filled, Delete20Filled, NotepadEdit20Filled } from '@vicons/fluent';
  import { createHotelApi } from '@/api/hotel/hotel';

  const formRef = ref<FormInst | null>(null);
  const hotel: any = ref({
    rooms: [],
  });
  const room: any = ref({});
  const showRoomModal = ref(false);
  const modelTitle = ref('Add Hotel');
  const loading = ref(false);
  const router = useRouter();

  function addRoom() {
    showRoomModal.value = false;
    hotel.value.rooms.push(room.value);
    room.value = {};
    modelTitle.value = 'Add Room';
  }

  function editRoom(item: any, index: any) {
    room.value = item;
    hotel.value.rooms.splice(index, 1);
    modelTitle.value = 'Update Room';
    showRoomModal.value = true;
  }
  const emits = defineEmits(['created']);

  const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
      if (!errors) {
        console.log('hotel object ==>', hotel.value);
        loading.value = true;
        createHotelApi(hotel.value).then((result: any) => {
          window['$message'].success(result.message);
          emits('created', result.result);
          loading.value = false;
          router.replace('/hotel');
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
