<template>
  <img v-if="img" v-bind:src="img" alt="No se puede visualizar" />
  <div class="dark"></div>

  <div class="container">
    <input type="text" name="" id="" v-model="pregunta" />
    <p>Recuerda que debes terminar con el signo de interrogación(?)</p>

    <div v-if="preguntavalida === true">
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "Voy hacer millonario",
      respuesta: null,
      img: null,
      preguntavalida: false,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      this.preguntavalida = false;
      console.log(value);
      console.log(oldValue);

      if (!value.includes("?")) return;
      // Consumo del API
      this.consumirAPI();
      this.preguntavalida = true;
    },
  },
  methods: {
    async consumirAPI() {
      this.respuesta = "Pensando.";
      this.respuesta = "Pensando..";

      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      console.log(answer);
      console.log(image);

      this.respuesta = "Pensando...";
      this.respuesta = "Pensando....";

      this.respuesta = answer ==='yes'? 'SI!': 'NO!';
      this.img = image;
    },

  },
};
</script>

<style scooped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.dark {
  background-color: rgba(0, 0, 0, 0.3);
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 15px;
  border: none;
}
.container {
  position: relative;
}
p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}
h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
input:focus {
  outline: none;
}
</style>