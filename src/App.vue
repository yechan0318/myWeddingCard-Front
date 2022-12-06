<template>
  <v-app>
    <v-main>
      <router-view />
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
});
</script>
