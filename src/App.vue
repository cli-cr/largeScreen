<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { screenSize } from '@/settings'
import {debounce} from '@/utils'
export default {
  name: 'App',
  mounted() {
    this.setScale()
    window.addEventListener('resize', debounce(this.setScale, 100))
  },
  destory() {
    window.removeEventListener('resize', debounce(this.setScale, 100))
  },
  methods: {
    getScale() {
      const { width = 1920, height = 1080 } = screenSize
      const ww = window.innerWidth / width
      const wh = window.innerHeight / height
      return ww < wh ? ww : wh
    },
    setScale() {
      const scale = this.getScale()
      console.log(scale);
      this.$store.commit('app/setScale', scale)
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
