<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonID="5" :showPokemon="false" />
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import getPokemonsFachada  from "../helpers/pokemonHelpers.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },

  methods: {
    async construirLoad() {
      const arrayPokemons = await getPokemonsFachada ();
      console.log("Usando el componente de arreglos -> " + arrayPokemons);
    },
  },
  mounted() {
    console.log("se monto el componente pokemon page");
    this.construirLoad();
  },
};
</script>

<style>
</style>