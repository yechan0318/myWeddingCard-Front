<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
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