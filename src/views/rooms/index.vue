<template>
  <n-card title="Rooms">
    <n-space :vertical="true">
      <n-input
        type="text"
        size="small"
        v-model:value="params.name"
        @change="fetchList"
        placeholder="Email"
      />
      <n-table :bordered="true" :single-line="false" size="small" :striped="true">
        <thead>
          <tr>
            <th>Hotel Id</th>
            <th>Room No</th>
            <th>Floor No</th>
            <th>Price Type</th>
            <th>Purchase Price</th>
            <th>Sale Price</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="list.length === 0">
            <td colspan="7" class="data_placeholder"> Record Not Exist </td>
          </tr>
          <tr v-else v-for="item in list" :key="item.id">
            <td>{{ item.hotel_id }}</td>
            <td>{{ item.room_no }}</td>
            <td>{{ item.floor_no }}</td>
            <td>{{ item.price_type }}</td>
            <td>{{ item.purchase_price }}</td>
            <td>{{ item.sale_price }}</td>
            <td>{{ item.is_active == '1' ? 'active' : 'Not active' }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.updated_at }}</td>
            <td>
              <n-dropdown
                @click="actionOperation(item)"
                :onSelect="selectedAction"
                trigger="click"
                :options="moreOptions"
              >
                <n-button size="small" :circle="true">
                  <n-icon>
                    <more-outlined />
                  </n-icon>
                </n-button>
              </n-dropdown>
            </td>
          </tr>
        </tbody>
      </n-table>
      <n-pagination
        v-model:page="page"
        v-model:page-size="pageSize"
        :item-count="itemCount"
        :page-sizes="pageSizes"
        size="small"
        :show-quick-jumper="true"
        :show-size-picker="true"
      />
      <n-button
        type="primary"
        size="large"
        :circle="true"
        style="position: fixed; bottom: 30px; right: 40px"
        @click="showModal = true"
        v-permission="{ action: ['can view add categories'] }"
      >
        <template #icon>
          <n-icon>
            <plus-outlined />
          </n-icon>
        </template>
      </n-button>
      <n-modal style="width: 70%" v-model:show="showModal" preset="dialog">
        <template #header>
          <div>Create New Room</div>
        </template>
        <n-space :vertical="true">
          <add-room
            @created="
              getList();
              showModal = false;
            "
          />
        </n-space>
      </n-modal>
      <n-modal style="width: 70%" v-model:show="showEditModal" preset="dialog">
        <template #header>
          <div>Update Room</div>
        </template>
        <n-space :vertical="true">
          <edit-room
            :id="selectedId"
            @updated="
              getList();
              showEditModal = false;
            "
          />
        </n-space>
      </n-modal>
    </n-space>
  </n-card>
</template>

<script lang="ts" setup>
  import { getRoomsApi, deleteRoomApi } from '@/api/hotel/room/rooms';
  import { userPagination } from '@/hooks/userPagination';
  import { ref, onMounted, h } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';
  import type { Component } from 'vue';
  import { NIcon, NPagination } from 'naive-ui';
  import { MoreOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@vicons/antd';
  import AddRoom from '@/components/hotels/rooms/AddRoom.vue';
  import EditRoom from '@/components/hotels/rooms/EditRoom.vue';

  const dialog = useDialog();
  const showModal = ref(false);
  const selectedOption: any = ref(null);
  const showEditModal = ref(false);
  const selectedId = ref();
  const message = useMessage();
  const { getList, list, page, pageSizes, itemCount, pageSize, params }: any =
    userPagination(getRoomsApi);
  const renderIcon = (icon: Component) => {
    return () => {
      return h(NIcon, null, {
        default: () => h(icon),
      });
    };
  };

  const moreOptions = ref([
    {
      label: 'Edit',
      key: 'edit',
      icon: renderIcon(EditOutlined),
    },
    {
      label: 'Delete',
      key: 'delete',
      icon: renderIcon(DeleteOutlined),
    },
  ]);

  function confirmationDialog() {
    dialog.error({
      title: 'Confirmation',
      content: () => 'Are you sure you want to delete?',
      positiveText: 'Delete',
      negativeText: 'Cancel',
      onPositiveClick: deleteOperation,
    });
  }

  function deleteOperation() {
    const Loading = window['$loading'] || null;
    Loading.start();
    deleteRoomApi(selectedId.value)
      .then((result: any) => {
        message.success(result.message);
        getList();
        Loading.finish();
      })
      .catch((result) => {
        message.error(result.message);
        Loading.finish();
      });
    selectedId.value = null;
    selectedOption.value = null;
  }

  const actionOperation = (item: any) => {
    if (selectedOption.value === 'edit') {
      showEditModal.value = true;
      selectedId.value = item.id;
    } else if (selectedOption.value === 'delete') {
      selectedId.value = item.id;
      confirmationDialog();
    }
  };

  const selectedAction = (key: any) => {
    selectedOption.value = key;
  };
  const fetchList = () => {
    getList(params.value);
  };
  onMounted(() => {
    getList();
  });
</script>

<style lang="less" scoped>
  .item_center {
    text-align: center;
  }
  .data_placeholder {
    text-align: center;
    color: gray;
    padding: 20px 0;
    font-size: 18px;
    font-style: italic;
  }
</style>
