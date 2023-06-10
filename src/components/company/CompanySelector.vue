<template>
  <n-select
    :multiple="multiple"
    :filterable="true"
    :tag="tag"
    :placeholder="placeholder"
    :on-update:value="onChangeValue"
    v-model:value="selectValue"
    :clearable="clearable"
    :remote="true"
    :clear-filter-after-select="false"
    :label-field="labelField"
    :value-field="valueField"
    :loading="companyLoading"
    :options="filteredCompany"
    @search="filterCompany"
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useCompany } from '@/hooks/company/useCompany';

  export default defineComponent({
    props: {
      modelValue: {
        type: [String, Array, Object, Number, Boolean],
      },
      labelField: {
        type: String,
        default: 'name',
      },
      placeholder: {
        type: String,
        default: 'Search Company',
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      tag: {
        type: Boolean,
        default: false,
      },
      valueField: {
        type: String,
        default: 'id',
      },
    },
    emits: ['update:modelValue'],
    setup(props) {
      const { filterCompany, filteredCompany, companyLoading } = useCompany(props.tag);
      const selectValue = ref(null);
      return {
        filterCompany,
        filteredCompany,
        companyLoading,
        selectValue,
      };
    },
    watch: {
      modelValue: function (value) {
        this.selectValue = value;
      },
    },
    methods: {
      onChangeValue(value: any) {
        this.$emit('update:modelValue', value);
      },
    },
  });
</script>
