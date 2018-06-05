<template>
  <div class="hg-cuxibiaoti">
  	<div class="dibian">
  	  <div :class="cuxibian"><span class="btming">{{biaoti}}</span></div>
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    biaoti: {
    },
    cuxi: {
      type: Number
    }
  },
  computed: {
    cuxibian () {
      return 'size-' + this.cuxi
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hg-cuxibiaoti
  width: 100%
  margin-bottom: 20px
  .dibian
    height: 36px
    margin-right: 5px
    border-bottom: 2px solid #0099cc
    .size-2
      width: 100px
      height: 34px
      line-height: 36px
    .size-6
      width: 100px
      height: 34px
      line-height: 36px
      border-bottom: 6px solid #0099cc  
    .btming
      height: 34px
      line-height: 34px
      margin-left: 28px
      font-size: 18px 
      font-weightL 700
      color: #000
</style> 