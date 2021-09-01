<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <p>
          Events: <strong>{{ objectsvalue }}</strong>
        </p>
        <v-textarea outlined name="input-7-4" label=""></v-textarea>
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
      eventOutPutArray: [] as EventObject[],
    };
  },
  props: { objects: [] },
  // methods: {
  //   updateEvent(objects: EventObject) {
  //     this.updateEventData.push(objects);
  //   },
  // },
};
</script>
