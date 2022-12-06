<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <router-link to="/auth/login">
        <v-btn elevation="2"> 로그인 </v-btn>
      </router-link>
    </v-responsive>
  </v-container>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
