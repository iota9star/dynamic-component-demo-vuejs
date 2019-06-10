<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue动态模板</span>
        <span class="font-weight-light"> 测试</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data () {
      return {
        //
      };
    }
  };
</script>
