<template>
  <v-card
      class="mx-auto"
      max-width="500"
  >
    <v-card-title>
      <span v-if="correct>0" class="pr-3">
        <v-icon color="info">
          mdi-thumb-up
        </v-icon>
        {{ correct }}
      </span>
      <span v-if="wrongs>0">
        <v-icon color="error">
          mdi-thumb-down
        </v-icon>
        {{ wrongs }}
      </span>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-2"
          icon
          @click="number = gennumber(); shownsolution = ''"
      >
        <v-icon>
          mdi-cached
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-snackbar
        v-model="failbar"
        timeout="1000"
        top
        color="error"
        vertical
        min-width="0"
    >
      <v-icon color="white" size="110">
        mdi-thumb-down
      </v-icon>

      <template v-slot:action="{ attrs }">
        <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="failbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
        v-model="successbar"
        timeout="1000"
        top
        color="info"
        vertical
        min-width="0"
    >
      <v-icon color="white" size="110">
        mdi-thumb-up
      </v-icon>

      <template v-slot:action="{ attrs }">
        <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="successbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-card-text>
      <v-container>
        <v-row class="d-flex justify-center">
            <span class="font-weight-bold text-center pb-16 pt-5" style="font-size:6rem;">
              {{ number }}
            </span>
        </v-row>
        <v-row>
          <hangul-input
              v-model="value"
              solo
              label="Enter your solution."
              hide-details="auto"
              clearable
              :translate="translate"
              v-on:enter="check"
              v-on:clear="setClearHandler"
          ></hangul-input>
        </v-row>
        <v-row>
          <v-text-field
              :value="shownsolution"
              :append-outer-icon="shownsolution === ''? 'mdi-help' : 'mdi-close'"
              label="Show solution"
              type="text"
              readonly
              @click:append-outer="showSolution"
          ></v-text-field>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-2"
          text
          @click="check"
      >
        Check
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import HangulInput from "@/components/HangulInput";

export default {
  name: "Challenge",
  components: {
    HangulInput
  },
  props: ['ones', 'tens', 'hundreds', 'thousands', 'tenthousands', 'hundredthousands', 'millions', 'billion', 'translate'],
  data() {
    return {
      value: '',
      number: 0,
      clearinput: undefined,
      shownsolution: "",
      text: "",
      successbar: false,
      failbar: false,
      correct: 0,
      wrongs: 0
    }
  },
  methods: {
    showSolution() {
      if (this.shownsolution === "") {
        this.shownsolution = this.solution(this.number);
      } else {
        this.shownsolution = "";
      }
    },
    setClearHandler(handler) {
      this.clearinput = handler;
    },
    check() {
      if (this.value === "")
        return;
      if (this.value === this.solution(this.number)) {
        this.text = "Sucess!";
        this.correct += 1;
        this.number = this.gennumber();
        this.shownsolution = "";
        if (this.clearinput !== undefined && this.translate) {
          this.clearinput();
        } else {
          this.value = "";
        }
        this.successbar = true;
      } else {
        this.wrongs += 1;
        this.failbar = true;
      }
    },
    solution(number) {
      const sino_ones = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
      const sino_counts = ['', '십', '백', '천', '만', '십', '백', '천', '억', '십'];
      if (number === 0)
        return "영";
      let index = 0;
      let solution = "";
      while (number > 0) {
        const one = number % 10;

        if (one > 0 || index === 4 || index === 8) {
          solution = sino_counts[index] + solution;
        }
        if ((index > 0 && one > 1) || index === 0) {
          solution = sino_ones[one] + solution;
        }

        number -= one;
        number /= 10;
        index += 1;
      }
      return solution;
    },
    procrandom(len) {
      const rand = Math.random();
      return Math.floor(rand * Math.pow(10, len));
    },
    gennumber() {
      let task = 0;

      if (this.ones) {
        task += this.procrandom(1);
      }
      if (this.tens) {
        task += this.procrandom(1) * 10;
      }
      if (this.hundreds) {
        task += this.procrandom(1) * 100;
      }
      if (this.thousands) {
        task += this.procrandom(1) * 1000;
      }
      if (this.tenthousands) {
        task += this.procrandom(1) * 10000;
      }
      if (this.hundredthousands) {
        task += this.procrandom(1) * 100000;
      }
      if (this.millions) {
        task += this.procrandom(3) * 1000000;
      }
      if (this.billion) {
        task += this.procrandom(1) * 1000000000;
      }

      return task;
    }
  },
  mounted() {
    this.number = this.gennumber();
  }
}
</script>

<style scoped>

</style>