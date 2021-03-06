export const frequency = {
  name:'frequency',
  props: {
    value:Number,
    note: {
      type:Object,
      default() {
        return {
          pitch:0,
          octave:3,
        }
      }
    }
  },
  data() {
    return {
      pitch: this.note.pitch,
      octave: this.note.octave,
    }
  },
  template:`
  <div class="row">
    <note-knob v-model="pitch" :octave="octave" @up="octave++" @down="octave--">{{freq}}
    </note-knob>
    <knob :hint="false" v-model="octave" :accuracy="0" :step="1" :min="-4" :max="8">{{octave}}</knob>
  </div>
  `,
  computed: {
    freq() {
      let freq = this.getFrequency();
      this.$emit('input',freq)
      return freq
    },
  },
  methods: {
    getFrequency() {
      return this.$noteFreq(this.pitch, this.octave)
    }
  },
}
