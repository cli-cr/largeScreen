<template>
  <div class="wrapper">
    <div class="container scale-box" :style="style" @click="show = false">
      <div class="top">
        <div class="title">
          智慧交通运维管理
          <span class="arrow" :class="{ 'is-show': show }" @click.stop="toggleShow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/settings'
export default {
  name: '',
  data(){
    return {
      show: false,
    }
  },
  computed: {
    scale() {
      return this.$store.state.app.scale
    },
    style() {
      return {
        transform: `scale(${this.scale}) translate(-50%, -50%)`,
        WebkitTransform: `scale(${this.scale}) translate(-50%, -50%)`,
        width: `${screenSize.width}px`,
        height: `${screenSize.height}px`
      }
    },
  },
  methods: {
    toggleShow() {
      this.show = !this.show
    },
  },
}
</script>

<style scoped lang='scss'>
.scale-box {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  background: url(~@/assets/AIImage/bg.png) center;
  background-size: cover;
  overflow: hidden;
}
.container {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .top {
    position: relative;
    z-index: 1;
    width: 1824px;
    height: 82px;
    margin: 0 auto 32px;
    background: url(~@/assets/AIImage/bg7.png) no-repeat top center;
    background-size: 100%;
    color: #ffffff;
    .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 20px;
      font-size: 40px;
      color: #ffffff;
      font-weight: 500;
    }
  }
}

</style>