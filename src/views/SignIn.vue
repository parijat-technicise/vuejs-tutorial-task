<template>
  <div>
    <v-row dense>
      <v-col cols="12" md="5" class="">
        <div
          class="rounded-lg fill-height pl-15 pr-15 pt-15"
          style="height: '90vh'"
        >
          <div style="alignItems= 'left'">
            <a href="https://aims2health.com">
              <img
                src="@/assets/aims2health-with-caption.png"
                alt="Logo"
                height="60" /></a
            ><br />
            <font class="font-weight-black mt-2" style="font-size: 30px"
              >Welcome to AIMS2HEALTH</font
            >
            <v-form v-model="valid" ref="form">
              <v-container>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email or Phone Number"
                  placeholder="Enter your email or phone number"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  placeholder="Enter your password"
                  required
                  outlined
                  :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="value ? 'text' : 'password'"
                  @click:append="value = !value"
                ></v-text-field>
                <v-btn @click="userLogin" block color="primary">Log in</v-btn>
              </v-container>
            </v-form>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <img
          src="@/assets/featureimage-doctor.png"
          class="rounded-lg fill-height"
          alt=""
          width="100%"
          height="100%"
      /></v-col>
    </v-row>
    <footer>
      <v-row>
        <v-col
          ><font style="float: inline-start">
            © Copyright AIMS2Health 2021. All rights reserved.
          </font></v-col
        >
        <v-col
          ><font style="tfloat: inline-end">
            © Copyright AIMS2Health 2021. All rights reserved.
          </font>
        </v-col>
        <v-col> </v-col>
      </v-row>

      <!-- <footer class="d-flex align-end flex-column mb-6">
          © Copyright AIMS2Health 2021. All rights reserved.
        </footer> -->
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Signip",
  data() {
    return {
      valid: false,
      value: false,
      password: "",
      passwordRules: [
        (v) => !!v || "Passoword is required",
        (v) => v.length >= 8 || "Passowrd must be greater than 8 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(v) ||
          /^[0]?[6789]\d{9}$/.test(v) ||
          "Please enter valid email id or phone number",
      ],
    };
  },
  watch: {},
  methods: {
    async userLogin() {
      if (this.$refs.form?.validate()) {
        console.log("Form Data===", this.email, this.password);
      }
    },
  },
});
</script>
