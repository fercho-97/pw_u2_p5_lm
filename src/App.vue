<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Contador1" :valor="10" />
  <Contador titulo="Contador2" :valor="operacion()"/>
  <Contador titulo="Contador3"/>
  <h2>Titulo en padre</h2>
   <Pregunta />
   -->
 
    <div class="container" v-if="mostrarJuego">
      <h1>Casino Pokemon</h1>
      <h2>Puntaje:{{ puntaje }}</h2>
      <h2>Intentos:{{ intento }}</h2>

      <div class="consola">
        <Imagen :texto="texto1" :urlImg="url1" />
        <Imagen :texto="texto2" :urlImg="url2" />
        <Imagen :texto="texto3" :urlImg="url3" />
      </div>

      <button @click="jugar">JUGAR</button>
    </div>

    <div class="mensajewin" v-if="mostrarGanador">
      <h1>Puntaje: {{ puntaje }}</h1>
      <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
      <button @click="reiniciar">Nuevo Juego</button>
    </div>

    <div class="mensajelose" v-if="mostrarPerdedor">
      <h1>Has utilizado tus 5 intentos</h1>
      <h1>El juego ha termindo, intentalo nuevamente</h1>

      <button @click="reiniciar">Nuevo Juego</button>
    </div>

</template>

<script>
// import PokemonPage from "./pages/PokemonPage.vue";
import Imagen from "./components/Imagen.vue";

export default {
  name: "App",
  components: {
    // PokemonPage,
    Imagen,
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXXXXXXXX",
      texto2: "XXXXXXXXXX",
      texto3: "XXXXXXXXXX",
      mostrarGanador: false,
      mostrarPerdedor: false,
      mostrarJuego: true,
    };
  },
  methods: {
    async jugar() {
      //instancia1
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;

      //instancia2
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;

      //instancia3
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },
    evaluarResultado() {
      this.intento++;

      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje += 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      }

      if (this.puntaje >= 5) {
        this.mostrarGanador = true;
        this.mostrarJuego = false;
      }

      if (this.intento === 5) {
        this.mostrarPerdedor = true;
        this.mostrarJuego = false;
      }
    },

    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXXXXXXXX";
      this.texto2 = "XXXXXXXXXX";
      this.texto3 = "XXXXXXXXXX";
      this.mostrarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarJuego = true;
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.container {
  display: grid;
  grid-template-columns: repeat(4, 200);
  justify-content: center;
  align-content: center;
  text-align: center;
}

.consola{
display: flex;
justify-content: center;
  align-content: center;
 grid-column: span 4;

}

h1 {
  grid-column: span 4;
}
h2 {
  grid-column: span 2;
  width: 400px;
}

button {
  grid-column: span 4;
  margin: 25px 250px;
}

.mensajelose{
  color: red;
}

.mensajewin{
  color: blue;
}

</style>
