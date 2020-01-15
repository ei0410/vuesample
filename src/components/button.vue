<template>
  <div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
        count: 0
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .4s;
}

button:hover {
  background: #67c5ff;
  color: white;
}
</style>
