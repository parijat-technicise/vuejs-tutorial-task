<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <p>
          Events: <strong>{{ objects.length }}</strong>
        </p>
        <label>{{ objects }}</label>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { EventObject } from "../Model";

export default Vue.extend({
  name: "Output",
  props: { objects: [] as EventObject[] },
  data: function () {
    return {
      formatedObject: "",
    };
  },
  
  watch: {
    convertObject(objects:any) {
      let formatedObject = objects.tostring();
    },
  },
});
</script>
