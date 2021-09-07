<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="6" md="4">
        <Form  @add-event="updateEvent" />
      </v-col>
      <v-col cols="12" md="8">
        <Calendar :event="updateEventData" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" md="4">
        <Output :objects="updateEventData" />
      </v-col>
      <v-col cols="12" md="8"> &nbsp; </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "../components/Form.vue";
import Calendar from "../components/Calendar.vue";
import Output from "../components/Output.vue";
import { EventObject } from "../Model";

export default Vue.extend({
  name: "Parent",

  components: {
    Form,
    Calendar,
    Output,
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00",
      },
      {
        name: `Thomas' Birthday`,
        start: "2019-01-10",
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30",
      },
    ],
    updateEventData: [] as EventObject[],
  }),
  methods: {
    updateEvent(obj: EventObject) {
      console.log("DatafromChild", obj);
      this.updateEventData.push(obj);
      console.log("EventArray", this.updateEventData);
    },
  },
});
</script>
