<template>
  <div class="example">
    <p>
      <button @click="show=!show">toggle</button>
    </p>
    <transition-group appear v-if="show" tag="ul" class="list"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter-cancelled="afterEnter">
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
      show: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    doAdd() {
      this.addEnter = true
      const newNumber = Math.max.apply(null, this.list) + 1
      const index = Math.floor(Math.random() * (this.list.length + 1))
      this.list.splice(index, 0, newNumber)
    },
    beforeEnter(el) {
      this.$nextTick(() => {
        el.style.transitionDelay = 100 * parseInt(el.dataset.index, 10) + 'ms'
      })
    },
    afterEnter(el) {
      el.style.transitionDelay = ''
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active, .v-move {
  transition: opacity 1s, transform 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>