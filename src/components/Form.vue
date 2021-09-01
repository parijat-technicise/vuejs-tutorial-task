<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="eventName"
      label="Name"
      placeholder="Enter Event Name"
      outlined
      required
    ></v-text-field>
    <v-col>
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateFormatted"
            label="Date"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            @blur="date = parseDate(dateFormatted)"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          @input="menu1 = false"
        ></v-date-picker>
      </v-menu>
      <p>
        Date in ISO format: <strong>{{ date }}</strong>
      </p>
    </v-col>
    <v-text-field
      v-model="description"
      label="Description"
      placeholder="Enter Description"
      outlined
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
      Add Event
    </v-btn>

    <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn> -->

    <!-- <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
  </v-form>
</template>

<script lang="ts">
export default {
  name: "Form",
  data: (vm) => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    menu1: false,
    menu2: false,

    valid: true,
    eventName: "",
    description: "",
    eventList: [],
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date: string): string {
      if (!date) return "";

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date: string): string {
      if (!date) return "";

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    submit(): string {
      let eventobj = {
        name: this.eventName,
        eventdate: this.date,
        description: this.description,
      };
      console.log("FormData==", eventobj);
      this.eventList.push(eventobj);
      console.log("EventlistArray===", this.eventList);
      this.$emit("add-event", eventobj);
      (this.eventName = ""),
        (this.date = new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10)),
        (this.description = "");
    },
  },
};
</script>
