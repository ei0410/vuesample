<template>
<div>
  <ul>
    <li v-for="(item, index) in linklist" :key="index"><a v-bind:href="item.url" target="_blank"><img v-bind:src="item.src" v-bind:alt="item.url"></a></li>
  </ul>
  <p>{{message}}</p>
</div>
</template>

<script>
export default {
  name: 'MyFooter',
  data () {
    return {
      message: 'Last Update: 2020/11/24 ©︎ei0124',
      linklist: [
        {src: require("@/assets/img/Twitter.png"),   url: "https://twitter.com/ei01241"},
        {src: require("@/assets/img/Instagram.png"), url: "https://instagram.com/ei01241"},
        {src: require("@/assets/img/Facebook.png"),  url: "https://www.facebook.com/profile.php?id=100040398917098"},
        {src: require("@/assets/img/GitHub.png"),    url: "https://github.com/ei0410"},
        {src: require("@/assets/img/FC2.png"),       url: "https://ei0124.blog.fc2.com"},
      ]
    }
  }
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  padding: 10px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  display: inline-block;
}
p {
  font-size: 16px;
}
</style>
