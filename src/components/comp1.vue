<template>
  <v-container fluid>
    <v-sparkline
      :gradient="gradient"
      :gradient-direction="gradientDirection"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :stroke-linecap="lineCap"
      :value="value"
      auto-draw
    ></v-sparkline>

    <v-divider></v-divider>

    <v-layout wrap>
      <v-flex
        md6
        xs12
      >
        <v-layout align-center fill-height>
          <v-item-group mandatory v-model="gradient">
            <v-layout>
              <v-item :key="i" :value="gradient" v-for="(gradient, i) in gradients">
                <v-card
                  :style="{
                    background: gradient.length > 1
                      ? `linear-gradient(0deg, ${gradient})`
                      : gradient[0],
                    border: '2px solid',
                    borderColor: active ? '#222' : 'white'
                  }"
                  @click.native="toggle"
                  class="mr-2"
                  height="30"
                  slot-scope="{ active, toggle }"
                  width="30"
                ></v-card>
              </v-item>
            </v-layout>
          </v-item-group>
        </v-layout>
      </v-flex>

      <v-flex
        md6
        xs12
      >
        <v-slider
          label="Width"
          max="10"
          min="0.1"
          step="0.1"
          thumb-label
          v-model="width"
        ></v-slider>
      </v-flex>

      <v-flex xs6>
        <v-layout align-center fill-height>
          <v-subheader class="pl-0">Linecap</v-subheader>
          <v-btn-toggle mandatory v-model="lineCap">
            <v-btn flat value="butt">butt</v-btn>
            <v-btn flat value="round">round</v-btn>
            <v-btn flat value="square">square</v-btn>
          </v-btn-toggle>
        </v-layout>

        <v-layout align-center fill-height>
          <v-subheader class="pl-0">Gradient direction</v-subheader>
          <v-btn-toggle mandatory v-model="gradientDirection">
            <v-btn flat value="top">top</v-btn>
            <v-btn flat value="right">right</v-btn>
            <v-btn flat value="left">left</v-btn>
            <v-btn flat value="bottom">bottom</v-btn>
          </v-btn-toggle>
        </v-layout>
      </v-flex>

      <v-flex
        md6
        xs12
      >
        <v-slider
          label="Radius"
          max="25"
          min="0"
          thumb-label
          v-model="radius"
        ></v-slider>
      </v-flex>

      <v-flex
        md6
        offset-md6
        xs12
      >
        <v-slider
          label="Padding"
          max="25"
          min="0"
          thumb-label
          v-model="padding"
        ></v-slider>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea']
  ];

  export default {
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients
    })
  };
</script>
