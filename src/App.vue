<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="logo.png"
            transition="scale-transition"
            width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
          icon
          @click="showSettings=!showSettings"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fill-height fluid>
        <v-row justify="center" v-show="showSettings">
          <v-card
              class="mx-auto"
          >
            <v-card-title>
              Settings
            </v-card-title>

            <v-card-text>
              <v-container fluid>
                <v-switch v-model="translate" label="Translate input to Hangul."></v-switch>
                <p>The keyboard layout used here is the <a href="https://en.wikipedia.org/wiki/Keyboard_layout#/media/File:KB_South_Korea.svg">Dubeolsik layout</a>. Only works with desktop computers.</p>
                <v-divider :inset="true" vertical></v-divider>
                <v-switch v-model="ones" label="Ones (1,2,3,4,5,6,7,8,9)"></v-switch>
                <v-switch v-model="tens" label="Tens (e.g. 10, 40, 90)"></v-switch>
                <v-switch v-model="hundreds" label="Hundreds (e.g. 200,500)"></v-switch>
                <v-switch v-model="thousands" label="Thousands (e.g. 3.000, 9.000)"></v-switch>
                <v-switch v-model="tenthousands" label="Tenthousands (e.g. 10.000,40.000)"></v-switch>
                <v-switch v-model="hundredthousands" label="Hundreds of thousands (e.g. 700.000)"></v-switch>
                <v-switch v-model="millions" label="Millions (e.g. 123.000.000)"></v-switch>
                <v-switch v-model="billion" label="Billion (e.g. 4.000.000.000)"></v-switch>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row justify="center" align="center" v-show="!showSettings">
          <Challenge
              :translate="translate"
              :ones="ones"
              :tens="tens"
              :hundreds="hundreds"
              :thousands="thousands"
              :tenthousands="tenthousands"
              :hundredthousands="hundredthousands"
              :millions="millions"
              :billion="billion">

          </Challenge>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Challenge from "@/components/Challenge";

export default {
  name: 'App',

  components: {
    Challenge
  },

  data: () => ({
    showSettings: false,
    ones: true,
    tens: true,
    hundreds: true,
    thousands: false,
    tenthousands: false,
    hundredthousands: false,
    millions: false,
    billion: false,
    translate: false
  }),
};
</script>
