<template>
  <v-card
    flat
    tile
  >
    <v-container
      :key="type"
      fluid
      grey
      grid-list-md
      lighten-4
      v-for="type in types"
    >
      <v-subheader>{{ type }}</v-subheader>

      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex
          :key="card"
          md4
          sm6
          v-for="card in cards"
          xs12
        >
          <v-card>
            <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="300px"
            >
              <span
                class="headline white--text pl-3 pt-3"
                v-text="card.title"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                :color="social.color"
                :key="i"
                class="white--text"
                fab
                icon
                small
                v-for="(social, i) in socials"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      types: ['Places to Be', 'Places to See'],
      cards: ['Good', 'Best', 'Finest'],
      socials: [
        {
          icon: 'fab fa-facebook',
          color: 'indigo'
        },
        {
          icon: 'fab fa-linkedin',
          color: 'cyan darken-1'
        },
        {
          icon: 'fab fa-instagram',
          color: 'red lighten-3'
        }
      ]
    }),

    methods: {
      getImage () {
        const min = 550;
        const max = 560;

        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  };
</script>
