<template>
  <div class="you">
    <div class="active you-liebiao">我的爱好</div>	
    <div class="you-liebiao">乒乓球</div>
    <div class="you-liebiao">吉他</div>
    <div class="you-liebiao">骑行</div>
    <div class="you-liebiao">唱歌</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.you
  width: 100%
  text-align: center
  overflow: hidden
  border: 1px solid #c7e5eb
  .you-liebiao
    font-size: 18px
    line-height: 40px
    height:40px
  .you-liebiao:not(:first-child):hover
    background: #ccc  
    cursor: pointer
	&.active
	  background: #157c8c
</style>