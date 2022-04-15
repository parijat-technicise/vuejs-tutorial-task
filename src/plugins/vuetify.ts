// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
// import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const opts = {};

export default new Vuetify(opts);
// export default new Vuetify({
//   icons: {
//     iconfont: "mdi", // default - only for display purposes
//   },
// });
