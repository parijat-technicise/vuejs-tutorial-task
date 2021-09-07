<template>
  <Parent />
</template>

<script lang="ts">
import Vue from "vue";
import Parent from "../components/Parent.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Parent,
  },
});
</script>
