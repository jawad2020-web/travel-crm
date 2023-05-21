import { ref, watch } from 'vue';
/**
 * @description Paginated Data
 */
export function userPagination(api: Function) {
  const list = ref([]);
  const page = ref(1);
  const params = ref({});
  const emptyState = ref(false);
  const itemCount = ref(0);
  const pageSizes = ref([10, 20, 30, 40, 50, 100]);
  const pageSize = ref(10);
  const getList = () => {
    api({ ...params.value, page: page.value, pageSize: pageSize.value }).then((result: any) => {
      list.value = result.data;
      itemCount.value = result.meta.total;
      if (result.meta.total === 0) {
        emptyState.value = true;
      }
    });
  };
  watch([page, pageSize], (value, oldValue) => {
    page.value = value[1] !== oldValue[1] ? 1 : page.value;
    getList();
  });
  return { getList, emptyState, list, page, pageSizes, itemCount, pageSize, params };
}
