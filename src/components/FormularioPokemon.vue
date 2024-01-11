<template>
  <p>Ingresa un id</p>
  <input type="text" name="" id="" v-model="pkID" @keypress.enter="consumirAPI()"/>

  <form class="form">
    <p type="Nombre">{{nombre}}</p>
    <p type="Peso">{{peso}}</p>
    <p type="Experiencia base">{{exBase}}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pkID: "",
      peso: null,
      nombre: null,
      exBase: null,
    };
  },
  watch: {},
  methods: {
    async consumirAPI() {
      const { name, weight, base_experience } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + this.pkID
      ).then((r) => r.json());
      console.log(name);
      console.log(weight);
      console.log(base_experience);
      this.nombre = name;
      this.peso = weight;
      this.exBase = base_experience;
    },
  },
};
</script>

<style>
</style>