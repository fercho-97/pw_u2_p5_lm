<template>
  <div class="opciones-container">
    <ul>
      <li v-for="nombre in listado" :key="nombre">
        <p>
          {{nombre.apellido}}
        </p>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listado: {
      type: Array,
      requiered: true,
    },
  },
  data() {
    return {
      lista: this.listado,
    };
  },
  methods:{

    ejecutar(){
      console.log();
      console.log("los nombres son:");
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background-color: azure;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.opciones-container {
  display: flex;
  justify-content: center;
}
</style>