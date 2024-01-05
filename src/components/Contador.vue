<template>
  <h2>{{ titulo }}</h2>
  <p>{{ counter }} <sup>2</sup>= {{ obtenerCuadradoComputado }}</p>
  <button @click="operacionSuma()">+1</button>
  <button @click="operacionResta()">-1</button>
</template>

<script>
export default {
  //props: ["titulo", "valor"],

  props: {
    titulo: String,
    valor: {
      type: Number,
      required: false,
      default: 112,
      validator(value) {
        if (value > 50) {
          console.log("Error....!!!");
        }

        return value > 50;
      },
    },
  },

  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("se calcula el cuadrado");
      return this.counter * this.counter;
    },
    operacionSuma() {
      this.counter++;
    },
    operacionResta() {
      this.counter--;
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

<style scoped>
button {
  background-color: #64B687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;

}

button:hover{
  background-color: #5aa67b;
}

h2{
  color: #64B;
}

</style>