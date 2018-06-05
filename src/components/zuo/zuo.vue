<template>
  <div class="zuo">
    <div class="active zuo-liebiao">特别关心</div>	
    <div class="zuo-liebiao">与我相关</div>
    <div class="zuo-liebiao">消息</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.zuo
  width: 100%
  text-align: center
  overflow: hidden
  border: 1px solid #c7e5eb
  .zuo-liebiao
    font-size: 18px
    line-height: 40px
    height:40px
  .zuo-liebiao:not(:first-child):hover
    background: #ccc  
    cursor: pointer
	&.active
	  background: #157c8c 
</style>