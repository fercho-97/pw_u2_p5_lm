<template>
  <div class="container">
    <img :src="urlImg" alt="no se puede" />
    <label for=""> {{ texto }}</label>
    <div class="txt"></div>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
    },
    urlImg: {
      type: String,
    },
  },
};
</script>

<style>

.container{

  display: flex;
  justify-content: center;
  align-content: center;
}

img {
  width: 200px;
  height: 300px;
  margin: 0px 20px;
}
</style>