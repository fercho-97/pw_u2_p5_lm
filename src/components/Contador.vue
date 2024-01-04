<template>
  <h2>{{titulo}}</h2>
  <p>{{ counter }} <sup>2</sup>= {{ obtenerCuadradoComputado }}</p>
  <p>{{ counter }} <sup>2</sup>= {{ obtenerCuadradoComputado }}</p>
  <p>{{ counter }} <sup>2</sup>= {{ obtenerCuadradoComputado }}</p>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("se calcula el cuadrado");
      return this.counter * this.counter;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("se calcula el cuadradoComputado");
      return this.counter * this.counter;
    },
  },
};
</script>

<style>
</style>