<template>
  <div>
    <h1>안뇽 !</h1>
    <h2>라우터 테스트</h2>
    <router-link to="/home/test"> 테스트하러 가기</router-link>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style>
</style>