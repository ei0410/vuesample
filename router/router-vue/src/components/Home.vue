<template>
<div>
  <h1>Top</h1>
  <img v-bind:src="imgname">
</div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      imgname: require("@/assets/img/jigglypuffs.png")
    }
  }
}
</script>

<style scoped>
img {
  text-align: center;
  width: 50%;
  height: 50%;
}
</style>
