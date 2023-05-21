<template>
  <div class="flex justify-center page-container">
    <div class="text-center">
      <img src="~@/assets/images/exception/404.svg" alt="" />
    </div>
    <div class="text-center">
      <h1 class="text-base text-gray-500">Sorry, the page you visited does not exist</h1>
      <n-button type="info" @click="goHome">Back to the Home Page</n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  function goHome() {
    router.push('/');
  }
</script>

<style lang="less" scoped>
  .page-container {
    width: 100%;
    border-radius: 4px;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;

    .text-center {
      h1 {
        color: #666;
        padding: 20px 0;
      }
    }

    img {
      width: 350px;
      margin: 0 auto;
    }
  }
</style>
