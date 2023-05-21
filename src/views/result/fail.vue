<template>
  <n-card :bordered="false" class="proCard">
    <div class="result-box">
      <n-result
        status="error"
        title="Operation failed"
        description="Please check and modify the following information before submitting again."
      >
        <div class="result-box-extra">
          <p>Your submission has the following errors:</p>
          <p class="mt-3">
            <n-space align="center">
              <n-icon size="20" color="#f0a020">
                <InfoCircleOutlined />
              </n-icon>
              <span>Certification photo is not clear enough</span>
              <n-button type="info" text>Edit Now</n-button>
            </n-space>
          </p>
          <p class="mt-3">
            <n-space>
              <n-icon size="20" color="#f0a020">
                <InfoCircleOutlined />
              </n-icon>
              <span
                >Remarks contain sensitive characters and cannot contain political references</span
              >
              <n-button type="info" text>Edit Now</n-button>
            </n-space>
          </p>
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
  import { useThemeVars } from 'naive-ui';
  import { useRouter } from 'vue-router';
  import { InfoCircleOutlined } from '@vicons/antd';

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
