<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-btn elevation="2">
        <router-link to="/login"> 로그인 </router-link>
      </v-btn>
    </v-responsive>
  </v-container>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
