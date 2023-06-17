<template>
  <n-card title="Hotels">
    <template #header-extra>
      <n-space>
        <n-button type="success" @click="router.push({ name: 'hotel_add' })"> Add New </n-button>
      </n-space>
    </template>
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
            <th>ID</th>
            <th>Hotel Name</th>
            <th>Hotel Phone</th>
            <th>Owner Name</th>
            <th>Owner Phone</th>
            <th>Address</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="list.length === 0">
            <td colspan="8" class="data_placeholder"> Record Not Exist </td>
          </tr>
          <tr v-else v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phone_number }}</td>
            <td>{{ item.owner }}</td>
            <td>{{ item.owner_phone }}</td>
            <td>
              {{ item.address + ' ' + item.city + ' ' + item.state + ' ' + item.country }}
            </td>
            <td>{{ item.created_at }}</td>
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
    </n-space>
  </n-card>
</template>
<script lang="ts" setup>
  import { getHotelsApi, deleteHotelApi } from '@/api/hotel/hotel';
  import { useRouter } from 'vue-router';
  import { userPagination } from '@/hooks/userPagination';
  import { ref, onMounted, h } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';
  import type { Component } from 'vue';
  import { NIcon, NPagination } from 'naive-ui';
  import { MoreOutlined, EditOutlined, DeleteOutlined } from '@vicons/antd';

  const router = useRouter();
  const dialog = useDialog();
  const selectedOption: any = ref(null);
  const selectedId = ref();
  const message = useMessage();
  const { getList, list, page, pageSizes, itemCount, pageSize, params }: any =
    userPagination(getHotelsApi);
  console.log('hotel list =>>', list);
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
    deleteHotelApi(selectedId.value)
      .then((result: any) => {
        message.success(result.message);
        getList();
        Loading.finish();
        dialog.destroyAll;
      })
      .catch((result) => {
        message.error(result.message);
        Loading.finish();
        dialog.destroyAll;
      });
    selectedId.value = null;
    selectedOption.value = null;
  }
  const actionOperation = (item: any) => {
    if (selectedOption.value === 'edit') {
      router.push({ name: 'hotel_update', params: { id: item.id } });
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
  .data_placeholder {
    text-align: center;
    color: gray;
    padding: 20px 0;
    font-size: 18px;
    font-style: italic;
  }
</style>
