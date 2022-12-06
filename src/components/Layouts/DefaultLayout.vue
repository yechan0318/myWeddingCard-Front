<template>
  <v-app>
    <v-container ma-0 pa-0 fill-height>
      <Header />
      <router-view />
      <Footer />
    </v-container>
  </v-app>
</template>

<script long="ts">
import { defineComponent } from "vue";
import Header from "@/components/Layouts/Header/Header.vue";
import Footer from "@/components/Layouts/Footer/Footer.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
});
</script>