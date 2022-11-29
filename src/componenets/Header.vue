<template >
  <section class="src-componentes-header">
    <div id="header" :style="{ 'background-color':  $store.state.termino?$store.state.pickedColor:'steelblue'}">
      <h1>
        The Great <br />
        <span id="colorDisplay"> {{  $store.state.pickedColor }} </span>                
        <br />        
        Guessing Game
      </h1>            
      <Navigator  />
      <Container  />     
      
      
    </div>
     
  </section>
</template>

<script >
import Navigator from './Navigator.vue'
import Container from './Container.vue'
export default {
  name: "src-componentes-header",
  components: {
    Navigator,
    Container
  },
  props: [],
  mounted() {    
    this.restart();
  },
  data() {
    return {   
    };
  },
  methods: {

  },
  computed: {},
};
</script>

<style scoped lang="css" >
.src-componentes-fondo {
}

</style>
