<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonID="5" :showPokemon="true"/>
  <PokemonImagen :pokemonID="80" :showPokemon="false"/>
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerIdPokemonFachada from "../helpers/pokemonHelpers"


obtenerIdPokemonFachada()

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
};
</script>

<style>
</style>