<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"  @click="clicked()">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    clicked () {
      this.$http.get('/octocat')
    },
    endsWith (x, y) {
      return x.lastIndexOf(y) === x.length - y.length
      // return x + y
    }
  }
}
</script>
