<template>
  <v-app class="pa-6">
    <Header />
    <Sidebar />
    <!-- <v-main class="mx-4 mt-2">
      <router-view />
    </v-main> -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header/Header.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import "./Layout.scss";

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  components: { Header, Sidebar },
});
</script>
