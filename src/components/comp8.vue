<template>
  <v-tabs
    color="cyan"
    dark
    next-icon="mdi-arrow-right-bold-box-outline"
    prev-icon="mdi-arrow-left-bold-box-outline"
    show-arrows
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab
      :href="'#tab-' + i"
      :key="i"
      v-for="i in 30"
    >
      Item {{ i }}
    </v-tab>

    <v-tabs-items>
      <v-tab-item
        :key="i"
        :value="'tab-' + i"
        v-for="i in 30"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>
<script>
  export default {
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      };
    }
  };
</script>
