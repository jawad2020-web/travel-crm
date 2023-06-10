import { ref } from 'vue';
import { getCompaniesApi } from '@/api/company/company';

/**
 * @description Paginated Data
 */
let timer: any = null;

export function useCompany(tag = false) {
  const companyLoading = ref(false);
  const filteredCompany: any = ref([]);
  const filterCompany = (query = '') => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      companyLoading.value = true;
      getCompaniesApi({ company_name: query, pageSize: 1000 })
        .then((result) => {
          filteredCompany.value = result.data;
          if (tag && query) {
            if (!filteredCompany.value.some((company: any) => company.company_name === query)) {
              filteredCompany.value.unshift({ id: 0, company_name: query });
            }
          }
          companyLoading.value = false;
        })
        .catch(() => {
          companyLoading.value = false;
        });
    }, 500);
  };
  filterCompany();
  return { filterCompany, filteredCompany, companyLoading };
}
