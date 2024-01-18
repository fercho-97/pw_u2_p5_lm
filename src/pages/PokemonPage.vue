<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonID="mandarfoto" :showPokemon="false" />
  <PokemonOpciones :listado="pk" />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerIdPokemonFachada from "../helpers/pokemonHelpers.js";

const pokemons = await obtenerIdPokemonFachada();

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },

  data() {
    return {
      pk: pokemons,
    };
  },
  methods: {
    obtenerNumerosAleatorios() {
      return Math.floor(Math.random() * 4);
    },
    
  },
  computed: {
      mandarfoto() {
        return  pokemons[this.obtenerNumerosAleatorios()].valor;
      
      },
    },
};
</script>

<style>
</style>