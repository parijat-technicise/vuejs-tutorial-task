<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <p>
          Events: <strong>{{ objects.length }}</strong>
        </p>
        <label>{{objects}}</label>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { EventObject } from "../Model";

export default {
  name: "Output",
  data: function () {
    return {
      formatedObject: "",
    };
  },
  props: { objects: [] as EventObject[] },
  
  watch: {
    convertObject(objects:any) {
      let formatedObject = objects.tostring();
    },
  },
};
</script>
