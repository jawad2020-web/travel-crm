<template>
  <n-card :bordered="false" class="proCard">
    <div class="result-box">
      <n-result
        status="info"
        title="Prompt"
        description="This submission will be automatically transferred to the other party's account within 24 hours. If you make a mistake, please withdraw it in time"
      >
        <div class="result-box-extra">
          <p>Your submission is as follows:</p>
          <p class="mt-3">
            <n-space align="center">
              <n-icon size="20" color="#18a058">
                <CheckCircleOutlined />
              </n-icon>
              <span>Transfer to Alipay account (189****5426): ￥1980</span>
              <n-button type="info" text>Withdraw now</n-button>
            </n-space>
          </p>
          <p class="mt-3">
            <n-space>
              <n-icon size="20" color="#18a058">
                <CheckCircleOutlined />
              </n-icon>
              <span>Transfer to Alipay account (187****5426): ￥2980</span>
              <n-button type="info" text>Withdraw Now</n-button>
            </n-space>
          </p>
        </div>
        <template #footer>
          <div class="flex justify-center mb-4">
            <n-space align="center">
              <n-button type="info" @click="goHome">Go Home</n-button>
              <n-button>View Details</n-button>
              <n-button>Withdraw All</n-button>
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
  import { CheckCircleOutlined } from '@vicons/antd';

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
