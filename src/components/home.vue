<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
        <router-link to="/page1">Go to page1</router-link>
    </p>
    <p>
        <router-link to="/page2">Go to page2</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Vue.js App'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 36px;
}
</style>
