<template>
<div>
  <h1> Skills </h1>
  <h2>{{ lang }}</h2>
  <ul>
    <li v-for="(item, index) in languages" :key="index"><a v-bind:href="item.url" target="_blank"><img v-bind:src="item.src" v-bind:alt="item.url"></a></li>
  </ul>

  <h2>{{ procon }}</h2>
  <table>
    <tr>
      <td>AtCoder:</td>
      <td class="gray">{{ acmaxrating }}</td>
    </tr>
    <tr>
      <td>Codeforces:</td>
      <td class="gray">{{ cfmaxrating }}</td>
    </tr>
  </table>

  <h2>{{ event }}</h2>
  <table>
    <tr>
      <td>2015:</td>
      <td class="gray">
        <p>九州夏ロボコン</p>
        <p>ROBOCON</p>
      </td>
    </tr>
    <tr>
      <td>2016:</td>
      <td class="gray">
        <p>九州夏ロボコン</p>
        <p>ROBOCON</p>
      </td>
    </tr>
    <tr>
      <td>2017:</td>
      <td class="gray">
        <p>九州夏ロボコン</p>
        <p>ROBOCON</p>
      </td>
    </tr>
    <tr>
      <td>2018:</td>
      <td class="gray">
        <p>SECCAMP全国</p>
        <p>JPHACKS福岡</p>
      </td>
    </tr>
    <tr>
      <td>2019:</td>
      <td class="gray">
        <p>SECCAMP全国</p>
        <p>SECCAMP福岡</p>
        <p>SECCAMP長崎</p>
        <p>CODEBLUE</p>
      </td>
    </tr>
    <tr>
      <td>2020:</td>
      <td class="gray">
        <p>Flatt Security インターン</p>
        <p>さくらじまハウス2020</p>
        <p>Kibo Robot Programming Challenge</p>
        <p>SECCAMP福岡</p>
        <p>SECCAMP全国</p>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      lang: '使用言語',
      languages: [
        {src: require("@/assets/img/Creo.png"),       url: "https://www.ptc.com/ja/products/cad/creo"},
        {src: require("@/assets/img/LTspice.png"),    url: "https://www.ltspice.jp"},
        {src: require("@/assets/img/Kicad.png"),      url: "https://www.kicad-pcb.org"},
        {src: require("@/assets/img/Blender.png"),    url: "https://www.blender.org"},
        {src: require("@/assets/img/ROS.png"),        url: "http://wiki.ros.org"},
        {src: require("@/assets/img/Arduino.png"),    url: "https://www.arduino.cc"},
        {src: require("@/assets/img/Processing.png"), url: "https://processing.org"},
        {src: require("@/assets/img/Verilog.png"),    url: "https://ja.wikipedia.org/wiki/Verilog"},
        {src: require("@/assets/img/C++.png"),        url: "https://ja.wikipedia.org/wiki/C%2B%2B"},
        {src: require("@/assets/img/Python.png"),     url: "https://www.python.jp"},
        {src: require("@/assets/img/Rails.png"),      url: "https://rubyonrails.org"},
        {src: require("@/assets/img/Vue.png"),        url: "https://jp.vuejs.org/index.html"},
      ],
      procon: '競プロ',
      cfmaxrating: 0,
      acmaxrating: 883,
      event: 'イベント',
    }
  },
  created () {
    fetch('https://codeforces.com/api/user.info?handles=ei0124')
    .then( response => {
      return response.json()
    })
    .then( json => {
      this.cfmaxrating = json.result[0].maxRating
    })
    .catch( (err) => {
      this.cfmaxrating = err
    });
    /*
    fetch('https://atcoder.jp/users/ei0124/history/json', {mode: 'no-cors'})
    .then( response => {
      return response.json()
    })
    .then( json => {
      this.acmaxrating = json[0].NewRating
    })
    .catch( (err) => {
      this.acmaxrating = err
    });
    */
  },
}
</script>

<style scoped>
h2 {
  font-size: 32px;
  color: pink;
}
p {
  margin: 4px 0px;
}
table {
  display: inline-block;
  text-align: center;
  font-size: 18px;
}
td {
  padding: 4px 24px;
  text-align: left;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  display: inline-block;
}
img {
  width: 100px;
  height: 100px;
}

.gray {
  color: gray;
}
</style>
