<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="event"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import { EventObject } from "../Model";
export default {
  data: () => ({
    // props: { updateEventData: [] },
    date: new Date(),
    today: this.date.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    // events: [
    //   {
    //     name: "Weekly Meeting",
    //     start: "2021-09-01 09:00",
    //     end: "2021-09-01 10:00",
    //   },
    //   {
    //     name: `Thomas' Birthday`,
    //     start: "2019-01-10",
    //   },
    //   {
    //     name: "Mash Potatoes",
    //     start: "2019-01-09 12:30",
    //     end: "2019-01-09 15:30",
    //   },
    // ],
    props: { event: [] as EventObject[] },
  }),
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
};
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>
