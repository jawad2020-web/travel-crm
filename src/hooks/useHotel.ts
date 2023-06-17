import { ref } from 'vue';
import { getHotelsApi } from '@/api/hotel/hotel';

/**
 * @description Paginated Data
 */
let timer: any = null;
export function useHotel(tag = false) {
  const hotelsLoading = ref(false);
  const filteredHotels: any = ref([]);
  const filterHotels = (query = '') => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      hotelsLoading.value = true;
      getHotelsApi({ name: query, pageSize: 1000 })
        .then((result: any) => {
          filteredHotels.value = result.data;
          if (tag && query) {
            if (!filteredHotels.value.some((role: any) => role.name === query)) {
              filteredHotels.value.unshift({ id: 0, name: query });
            }
          }
          hotelsLoading.value = false;
        })
        .catch(() => {
          hotelsLoading.value = false;
        });
    }, 500);
  };
  filterHotels();
  return { filterHotels, filteredHotels, hotelsLoading };
}
