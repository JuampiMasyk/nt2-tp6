<template>
  <section class="src-componentes-container">
    
    <div id="container">
      <div v-for="i in $store.state.colorCount" :key="i">
        <div
          class="square"
          ref="squares"          
          :style="{ 'background-color': $store.state.colors[i - 1] }" 

          @click="chequea"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-container",
  props: [],
  mounted() {
            
  },
  data() {
    return {      
    };
  },
  methods: {      
      setAllColorsTo(color) {
          let squares = this.$refs.squares
          squares.map((square) => {
            square.style.backgroundColor = color
        })
      },
    chequea(e){
      const color = e.target.style.backgroundColor
      if (color ===  this.$store.state.pickedColor )      {
        this.setAllColorsTo(color)        
        this.$store.dispatch('setMensaje', 'You Picked Right!');               
        this.$store.dispatch('setTermino', true);
      }
      else{
         e.target.style.backgroundColor = "#232323";         
         this.$store.dispatch('setMensaje', 'Try Again!');               
      }      
    }
  },
  computed: {},
}
</script>

<style scoped lang="css" >
.src-componentes-container {
}
</style>