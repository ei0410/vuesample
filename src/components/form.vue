<template>
  <div class="example">
    <transition-group appear tag="ul"
      @before-enter="beforeEnter"
      >
      <li v-for="(item, index) in list"
        :data-index="index"
        :key="item"
        >{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    beforeEnter(el) {
      this.$nextTick(() => {
          el.style.transitionDelay = 100 * parseInt(el.dataset.index, 10) + 'ms'
      })
    },
  }
}
</script>

<style scoped>
.v-enter-active {
  transition: opacity 1s, transform 1s;
}
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
</style>