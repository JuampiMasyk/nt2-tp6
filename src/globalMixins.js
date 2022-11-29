import Vue from 'vue'

const miMixinGlobal = {
    methods: {
      PickColor() {      
        let quantity;    
        if (this.$store.state.isHardNav) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity);
      },
      randomInt() {
        return Math.floor(Math.random() * 256);
      },
      createRandomStringColor() {      
        var newColor =
          "rgb(" +
          this.randomInt() +
          ", " +
          this.randomInt() +
          ", " +
          this.randomInt() +
          ")";
        return newColor;
      },
      createNewColors(numbers) {      
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }
        return arr;
      },      
      restart() {                        
        this.$store.dispatch('setColours', this.createNewColors(this.$store.state.colorCount));
        this.$store.dispatch('setPickedColor', this.$store.state.colors[this.PickColor()]);            
        this.$store.dispatch('setMensaje', '');
        this.$store.dispatch('setTermino', false);        
      },
    },
    computed: {       
    }    
}

Vue.mixin(miMixinGlobal)