<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Contador1" :valor="10" />
  <Contador titulo="Contador2" :valor="operacion()"/>
  <Contador titulo="Contador3"/>
  <h2>Titulo en padre</h2>
   <Pregunta />
  
   -->
  <PokemonPage/>
</template>

<script>
import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage,
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
