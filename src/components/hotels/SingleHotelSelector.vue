<template>
  <n-select
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
    :loading="hotelsLoading"
    :options="filteredHotels"
    @search="filterHotels"
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useHotel } from '@/hooks/useHotel';

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
        default: 'Search Hotel',
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      multiple: {
        type: Boolean,
        default: true,
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
      const { filterHotels, filteredHotels, hotelsLoading } = useHotel(props.tag);
      const selectValue = ref(null);
      return {
        filterHotels,
        filteredHotels,
        hotelsLoading,
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
