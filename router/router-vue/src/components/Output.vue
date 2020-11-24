<template>
<div>
  <h1>Outputs</h1>
  <h2>{{ robot }}</h2>
  <p>ロボコンの競技ロボットだったり掃除ロボットだったり大きいものから小さいものまで作りました</p>
  <h2>{{ elec }}</h2>
  <p>モータードライバだったりオーディオアンプだったり大電力から省電力まで作りました</p>
  <h2>{{ soft }}</h2>
  <p>競プロだったりCTFだったり組み込みだったりソフトだったり幅広くなんでも作りました</p>
</div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      robot: 'ロボット',
      elec: '電子工作',
      soft: 'ソフト',
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 32px;
  color: pink;
  text-align: center;
}
p {
  display: inline-block;
  text-align: center;
}
.gray {
  color: gray;
}
</style>
