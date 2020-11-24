<template>
<div>
  <p>{{message}}</p>
</div>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      message: 'welcome to eifolio!'
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  font-size: 36px;
  color: white;
  height: 48px;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
</style>
