<template>
  <div class="container">
    <div class="calculadora">
      <div id="pantalla" class="display">{{ resultado }}</div>
      <button class="col-2" @click="limpiar()">C</button>
      <button @click="borrar()">&larr;</button>
      <button @click="operacion('/')">/</button>
      <button @click="obtener('7')">7</button>
      <button @click="obtener('8')">8</button>
      <button @click="obtener('9')">9</button>
      <button @click="operacion('*')">&#215;</button>
      <button @click="obtener('4')">4</button>
      <button @click="obtener('5')">5</button>
      <button @click="obtener('6')">6</button>
      <button @click="operacion('-')">&#8722;</button>
      <button @click="obtener('1')">1</button>
      <button @click="obtener('2')">2</button>
      <button @click="obtener('3')">3</button>
      <button @click="operacion('+')">&#43;</button>
      <button class="col-2" @click="obtener('0')">0</button>
      <button>&#46;</button>
      <button @click="calcular()">&#61;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      op: "",
      resultado: "",
      numeros: [],
    };
  },
  methods: {
    limpiar() {
      this.resultado = " ";
    },
    borrar() {
      this.resultado = this.resultado.slice(0, -1);
    },
    obtener(valor) {
      this.resultado = this.resultado + valor;
    },
    operacion(simbolo) {
      this.numeros.push(parseInt(this.resultado));
      this.resultado = " ";
      this.op = simbolo;
    },
    sumar(num1, num2) {
      return num1 + num2;
    },
    restar(num1, num2) {
      return num1 - num2;
    },
    multiplicar(num1, num2) {
      return num1 * num2;
    },
    dividir(num1, num2) {
      return num1 / num2;
    },
    calcular() {
      this.numeros.push(parseInt(this.resultado));
      if (this.op === "+") {
        this.resultado =
          "Resultado: " + this.sumar(this.numeros[0], this.numeros[1]);
      } else if (this.op === "-") {
        this.resultado =
          "Resultado: " + this.restar(this.numeros[0], this.numeros[1]);
      } else if (this.op === "*") {
        this.resultado =
          "Resultado: " + this.multiplicar(this.numeros[0], this.numeros[1]);
      } else if (this.op === "/") {
        this.resultado =
          "Resultado: " + this.dividir(this.numeros[0], this.numeros[1]);
      }
      this.numeros = [];
      this.op = "";
    },
  },
  computed: {},
};
</script>

<style >
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  display: grid;
  /*grid-template-columns: 75px 75px 75px 75px ;*/
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 150px repeat(5, 75px);
  background-color: #00916e;
  padding: 15px;
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px #3a3a3a33;
}
.display {
  grid-column: span 4;
  padding: 15px;
  margin: 10px 15px 20px 15px;
  background-color: #242323;
  border-radius: 32px;
  text-align: right;
  box-shadow: 0px 0px 5px 5px #00000033;
}

button {
  cursor: pointer;
  margin: 4px;
  padding: 0px;
  border-radius: 50px;
  border: none;
  background-color: #bbe2eb;
  background-color: #28a888;

  box-shadow: 5px 5px 10px -3px #00000040;
  font-size: 23px;
}

button:hover {
  background: #d6d4d4;
}

button:active {
  background-color: #006f54;
}

.col-2 {
  grid-column: span 2;
}

body {
  background-color: #416489;
}
* {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>