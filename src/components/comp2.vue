<template>
  <v-stepper v-model="e13" vertical>
    <v-stepper-step complete step="1">
      Name of step 1
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
      <v-btn @click="e13 = 2" color="primary">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step complete step="2">Name of step 2</v-stepper-step>

    <v-stepper-content step="2">
      <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
      <v-btn @click="e13 = 3" color="primary">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :rules="[() => false]" step="3">
      Ad templates
      <small>Alert message</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
      <v-btn @click="e13 = 4" color="primary">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>

    <v-stepper-content step="4">
      <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>
      <v-btn @click="e13 = 1" color="primary">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e13: 2
      };
    }
  };
</script>
