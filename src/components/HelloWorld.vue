<template>
  <v-layout
    style="height: 200px;"
    wrap
  >
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs8>
          <v-card>
            <v-card-title primary-title>
              预览
            </v-card-title>
            <v-divider></v-divider>
            <component :is="comp" :key="index" v-for="(comp, index) in previewComps"></component>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card>
            <v-card-title primary-title>
              布局
            </v-card-title>
            <v-divider></v-divider>
            <div class="comp-wrapper">
              <v-btn @click="insertComp(0)" color="primary" round>
                下方插入组件
                <v-icon>add</v-icon>
              </v-btn>
            </div>
            <div :key="index" class="comp-wrapper"
                 v-for="(com, index) in selectedComps">
              <div class="comp-title">
                {{com.title}}
              </div>
              <v-btn @click="insertComp(index + 1)" color="primary" round>
                下方插入组件
                <v-icon>add</v-icon>
              </v-btn>
              <v-btn @click="removeComp(index)" color="error" round>
                移除当前组件
                <v-icon>clear</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      fixed
      floating
      temporary
      v-model="drawer"
    >
      <v-list class="pt-0" dense>
        <v-list-tile
          :key="item.title"
          @click="selectedComp(item)"
          v-for="item in comps"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    methods: {
      removeComp (index) {
        this.selectedComps.removeIndex(index);
      },
      insertComp (index) {
        this.index = index;
        this.toggleDrawer();
      },
      toggleDrawer () {
        this.drawer = !this.drawer;
      },
      selectedComp (item) {
        this.selectedComps.add(item, this.index);
        this.toggleDrawer();
      }
    },
    computed: {
      previewComps () {
        return this.selectedComps.map(comp => {
          return require(`${comp.path}.vue`).default;
        });
      }
    },
    data () {
      return {
        drawer: null,
        index: -1,
        selectedComps: [],
        render: [],
        comps: [
          { title: '组件1', icon: 'dashboard', name: 'comp1', path: './comp1' },
          { title: '组件2', icon: 'dashboard', name: 'comp2', path: './comp2' },
          { title: '组件3', icon: 'dashboard', name: 'comp3', path: './comp3' },
          { title: '组件4', icon: 'dashboard', name: 'comp4', path: './comp4' },
          { title: '组件5', icon: 'dashboard', name: 'comp5', path: './comp5' },
          { title: '组件6', icon: 'dashboard', name: 'comp6', path: './comp6' },
          { title: '组件7', icon: 'dashboard', name: 'comp7', path: './comp7' },
          { title: '组件8', icon: 'dashboard', name: 'comp8', path: './comp8' }
        ]
      };
    }
  };
</script>

<style lang="stylus">
  .comp-wrapper
    padding: 16px;
    margin-top: 8px;
    text-align: center;
    background-color: lightgray;

    .comp-title
      margin-bottom: 16px;
      font-size: 24px;
      font-weight: 700;
</style>
