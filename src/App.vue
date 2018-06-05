<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <avatar :seller="seller"></avatar>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
import avatar from 'components/avatar/avatar'

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
        console.log(this.seller)
      }
    })
  },
  components: {
    'v-header': header,
    avatar
  }
}
</script>

<style>
</style>
