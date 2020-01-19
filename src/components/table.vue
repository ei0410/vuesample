<template>
  <div>
  <table>
      <tr>
          <th><i class="fas fa-dumbbell fa-fw cmuscle"></i></th>
          <th></th>
      </tr>
      <tr>
          <th><i class="fas fa-laptop fa-fw ctech"></i>技術</th>
          <th>ハードからソフトまで幅広く興味があります．</th>
      </tr>
      <tr>
          <th><i class="fas fa-magic fa-fw cmagic"></i>手品</th>
          <th>カードとコインです．</th>
      </tr>
      <tr>
          <th><i class="fas fa-chess-knight fa-fw cgame"></i>将棋，囲碁，麻雀, チェス</th>
          <th>物心付いた頃からやってます．<br>最近はチェスをしてます．</th>
      </tr>
      <tr>
          <th><i class="fas fa-cookie fa-fw ccook"></i>料理</th>
          <th>お菓子が一番得意ですが，<br>最近は家庭料理に移行してます．</th>
      </tr>
      <tr>
          <th><i class="fas fa-motorcycle fa-fw cbike"></i>バイク旅</th>
          <th>原付でどこへでも出掛けます．</th>
      </tr>
      <tr>
          <th><i class="fas fa-tv fa-fw canime"></i>アニメ</th>
          <th>宝島，攻殻機動隊，ジョジョが大好きです．</th>
      </tr>
  </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        { id: 1, title: "筋トレ", details: "毎日やってます．<br>鍛えることが好きです．"},
        { id: 2, title: "筋", details: "日やってます．<br>鍛えることが好きです．"},
      ]
    }
  }, 
}
</script>

<style scoped>
table{
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}
  
table tr{
    border-bottom: 1px solid #eee;
}
  
table tr:hover{
    background-color: #d4f0fd;
}

table th,table td{
    font-size: 20px;
    text-align: center;
    width: 25%;
    padding: 15px 0;
}
</style>