<template>
  <n-card :bordered="false" class="proCard">
    <div class="result-box">
      <n-result
        status="success"
        title="Operation succeeded"
        description="The submission result page is used to feedback the processing results of a series of operation tasks. If it is only a simple operation, the gray area can display some supplementary information."
      >
        <div class="result-box-extra">
          <p>Application submitted and awaiting review by the finance department. </p>
        </div>
        <template #footer>
          <div class="flex justify-center mb-4">
            <n-space align="center">
              <n-button type="info" @click="goHome">Go Home</n-button>
              <n-button>View Details</n-button>
              <n-button>Print</n-button>
            </n-space>
          </div>
        </template>
      </n-result>
    </div>
  </n-card>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useThemeVars } from 'naive-ui';

  const router = useRouter();
  const themeVars = useThemeVars();

  const getTableHeaderColor = computed(() => {
    return themeVars.value.tableHeaderColor;
  });

  function goHome() {
    router.push('/');
  }
</script>
<style lang="less" scoped>
  .result-box {
    width: 72%;
    margin: 0 auto;
    text-align: center;
    padding-top: 5px;

    &-extra {
      padding: 24px 40px;
      text-align: left;
      background: v-bind(getTableHeaderColor);
      border-radius: 4px;
    }
  }
</style>
