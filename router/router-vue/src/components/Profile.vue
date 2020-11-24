<template>
<div>
  <h1>Profile</h1>
  <h2>{{ base }}</h2>
  <table>
    <tr>
      <td>名前:</td>
      <td class="gray">森瑛司</td>
    </tr>
    <tr>
      <td>年齢:</td>
      <td class="gray">24</td>
    </tr>
    <tr>
      <td>身長:</td>
      <td class="gray">168cm</td>
    </tr>
    <tr>
      <td>体重:</td>
      <td class="gray">62kg</td>
    </tr>
    <tr>
      <td>血液型:</td>
      <td class="gray">B</td>
    </tr>
    <tr>
      <td>国籍:</td>
      <td class="gray">日本</td>
    </tr>
    <tr>
      <td>出身地:</td>
      <td class="gray">千葉</td>
    </tr>
  </table>

  <h2>{{ study }}</h2>
  <table>
    <tr>
      <td>中学校:</td>
      <td class="gray">公立中学</td>
    </tr>
    <tr>
      <td>高校:</td>
      <td class="gray">県立高校</td>
    </tr>
    <tr>
      <td>大学:</td>
      <td class="gray">国立大学</td>
    </tr>
    <tr>
      <td>大学院:</td>
      <td class="gray">国立大学院</td>
    </tr>
  </table>

  <h2>{{ interest }}</h2>
  <table>
    <tr>
      <td>筋トレ:</td>
      <td class="gray">毎日</td>
    </tr>
    <tr>
      <td>技術:</td>
      <td class="gray">なんでも</td>
    </tr>
    <tr>
      <td>手品:</td>
      <td class="gray">カード・コイン</td>
    </tr>
    <tr>
      <td>ボードゲーム:</td>
      <td class="gray">将棋・囲碁・麻雀</td>
    </tr>
    <tr>
      <td>料理:</td>
      <td class="gray">家庭料理・お菓子作り</td>
    </tr>
  </table>

  <h2>{{ feature }}</h2>
  <table>
    <tr>
      <td>性格:</td>
      <td class="gray">マイペース・素直</td>
    </tr>
    <tr>
      <td>タイプ:</td>
      <td class="gray">インドア</td>
    </tr>
    <tr>
      <td>長所:</td>
      <td class="gray">人畜無害</td>
    </tr>
    <tr>
      <td>短所:</td>
      <td class="gray">飽きっぽい</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      base: '基本情報',
      study: '学歴',
      interest: '趣味',
      feature: '特徴',
      life: '生活',
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 32px;
  color: pink;
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

.gray {
  color: gray;
}
</style>
