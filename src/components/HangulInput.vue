<template>
  <v-text-field
      :label="label"
      :placeholder="placeholder"
      :solo="solo"
      :filled="filled"
      :outlined="outlined"
      :clearable="clearable"
      :value="text"
      v-on:keydown="keydownhandler"
      v-on:keyup="keyuphandler"
      v-on:keypress="keypresshandler"
  ></v-text-field>
</template>

<script>
import * as Hangul from 'hangul-js';

export default {
  name: "HangulInput",
  props: ['label', 'placeholder', 'solo', 'filled', 'outlined', 'clearable', 'value', 'translate'],
  data() {
    return {
      hangullist: []
    }
  },
  created() {
    this.$emit('clear', this.clear);
  },
  computed: {
    text() {
      return Hangul.assemble(this.hangullist);
    }
  },
  methods: {
    clear() {
      this.hangullist.splice(0);
    },
    selection(target) {
      let start = target.selectionStart;
      let end = target.selectionEnd;

      const prefix = Hangul.d(this.text.substring(0, start));
      const selection = Hangul.d(this.text.substring(start, end));

      const p_len = prefix.length;
      const s_len = selection.length;
      this.hangullist.splice(p_len, s_len);

      return [p_len, s_len];
    },
    delete(key, target) {
      const [p_len, s_len] = this.selection(target);
      if (s_len > 0)
        return;
      switch (key) {
        case 'Backspace':
          this.hangullist.splice(p_len - 1, 1);
          break;
        case 'Delete':
          this.hangullist.splice(p_len, 1);
          break;
      }
      this.$nextTick(() => {
        target.selectionEnd = Hangul.a(this.hangullist.slice(0, p_len - 1)).length;
      });
    },
    insert(char, target) {
      const p_len = this.selection(target)[0];
      this.hangullist.splice(p_len, 0, char);
      this.$nextTick(() => {
        target.selectionEnd = Hangul.a(this.hangullist.slice(0, p_len + 1)).length;
      });
    },
    keypresshandler(event) {
      switch (event.code) {
        case 'Enter':
        case 'NumpadEnter':
          this.$emit('enter');
          break;
      }
      if(!this.translate) {
        return;
      }

      event.preventDefault();

      if (event.shiftKey) {
        switch (event.code) {
          case 'KeyQ':
            this.insert('ㅃ', event.target);
            break;
          case 'KeyW':
            this.insert('ㅉ', event.target);
            break;
          case 'KeyE':
            this.insert('ㄸ', event.target);
            break;
          case 'KeyR':
            this.insert('ㄲ', event.target);
            break;
          case 'KeyT':
            this.insert('ㅆ', event.target);
            break;

          case 'KeyO':
            this.insert('ㅒ', event.target);
            break;
          case 'KeyP':
            this.insert('ㅖ', event.target);
            break;

          default:
            break;
            //this.insert(event.key, event.target);
        }
      } else {
        switch (event.code) {
          case 'KeyQ':
            this.insert('ㅂ', event.target);
            break;
          case 'KeyW':
            this.insert('ㅈ', event.target);
            break;
          case 'KeyE':
            this.insert('ㄷ', event.target);
            break;
          case 'KeyR':
            this.insert('ㄱ', event.target);
            break;
          case 'KeyT':
            this.insert('ㅅ', event.target);
            break;
          case 'KeyY':
            this.insert('ㅛ', event.target);
            break;
          case 'KeyU':
            this.insert('ㅕ', event.target);
            break;
          case 'KeyI':
            this.insert('ㅑ', event.target);
            break;
          case 'KeyO':
            this.insert('ㅐ', event.target);
            break;
          case 'KeyP':
            this.insert('ㅔ', event.target);
            break;

          case 'KeyA':
            this.insert('ㅁ', event.target);
            break;
          case 'KeyS':
            this.insert('ㄴ', event.target);
            break;
          case 'KeyD':
            this.insert('ㅇ', event.target);
            break;
          case 'KeyF':
            this.insert('ㄹ', event.target);
            break;
          case 'KeyG':
            this.insert('ㅎ', event.target);
            break;
          case 'KeyH':
            this.insert('ㅗ', event.target);
            break;
          case 'KeyJ':
            this.insert('ㅓ', event.target);
            break;
          case 'KeyK':
            this.insert('ㅏ', event.target);
            break;
          case 'KeyL':
            this.insert('ㅣ', event.target);
            break;

          case 'KeyZ':
            this.insert('ㅋ', event.target);
            break;
          case 'KeyX':
            this.insert('ㅌ', event.target);
            break;
          case 'KeyC':
            this.insert('ㅊ', event.target);
            break;
          case 'KeyV':
            this.insert('ㅍ', event.target);
            break;
          case 'KeyB':
            this.insert('ㅠ', event.target);
            break;
          case 'KeyN':
            this.insert('ㅜ', event.target);
            break;
          case 'KeyM':
            this.insert('ㅡ', event.target);
            break;

          case 'Enter':
          case 'NumpadEnter':
            this.$emit('enter');
            break;

          default:
            break;
            //this.insert(event.key, event.target);
        }
      }
      this.$emit('input', this.text);
    },
    keydownhandler(event) {
      if(!this.translate) {
        return;
      }

      switch (event.code) {
        case 'Backspace':
        case 'Delete':
          event.preventDefault();
          this.delete(event.code, event.target);
      }
      this.$emit('input', this.text);
    },
    keyuphandler(event) {
      if(!this.translate) {
        return;
      }

      switch (event.code) {
        case 'Delete':
        case 'Backspace':
          event.preventDefault();
          return;
        case 'ControlLeft':
        case 'ControlRight':
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'AltLeft':
        case 'AltRight':
        case 'Enter':
          return;
      }
    }
  }
}
</script>

<style scoped>

</style>