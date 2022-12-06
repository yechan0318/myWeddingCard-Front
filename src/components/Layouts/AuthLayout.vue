<template>
  <v-app>
    <v-container ma-0 pa-0 fill-height>
      <router-view />
    </v-container>
  </v-app>
</template>

<script long="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayOut",
});
</script>