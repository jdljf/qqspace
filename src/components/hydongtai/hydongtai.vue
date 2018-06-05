<template>
  <div class="hydongtai">
  	<div class="zuobian">
  	  <zuo></zuo>	
  	</div>
  	<div class="zhongjian">
  	  <zhong :goods="goods" :seller="seller"></zhong>	
  	</div>
  	<div class="youbian">
  	  <you></you>	
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
import you from 'components/you/you'
import zuo from 'components/zuo/zuo'
import zhong from 'components/zhong/zhong'

export default {
  props: {},
  data () {
    return {
      goods: [],
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.goods = response.data
        // console.log(this.goods)
      }
    })
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
        // console.log(this.seller)
      }
    })
  },
  components: {
    zuo,
    you,
    zhong
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hydongtai
  display: flex
  flex: 1
  flex-flow:row
  margin: 36px 100px 0
  .youbian, .zuobian
    flex:0 0 180px
  .zhongjian 	
    margin: 0 20px
    flex:1;
  .zuobian
    order: -1
</style>