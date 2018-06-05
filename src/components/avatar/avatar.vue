<template>
  <div class="avatar">
    <div class="space">{{seller.space}}的空间</div>
    <div class="avatar-img">
      <img width="120" height="120" :src="seller.avatar">
    </div>
    
    <div class="name">{{seller.name}}</div>
    <div class="fangwen">
      <div class="fangke">今日访客 {{seller.fangke}}</div>
      <div class="fangkezl">访客总量 {{seller.fangkezl}}</div>
    </div>
     
    <div class="list" id="list">
      <ul>
        <li class="list-li"><a v-link="{path: '/hydongtai'}">好友动态</a></li>
        <li class="list-li"><a v-link="{path: '/xiangce'}">我的动态</a></li>
        <li class="list-li"><a v-link="{path: '/wdjiaxiang'}">华工</a></li>
        <li class="list-li"><a v-link="{path: '/wdxuexiao'}">我的学校</a></li>
        <li class="list-li"><a v-link="{path: '/yinyue'}">音乐</a></li>
      </ul>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.avatar
  position: relative
  margin: 0 100px
  overflow: hidden 
  min-width: 900px
  .space
    margin-top: 25px
    height: 38px
    line-height: 38px
    font-size: 28px
    margin-right: 10px
    color: #157c8c
    font-weight: 500
  .avatar-img
    display: inline-block
    margin-top: 35px
    margin-right: 0
    margin-bottom: 6px
    border: 1px solid #999
    vertical-align: middle
    width: 126px
    height: 126px
    border-radius: 4px
    img
      width: 120px
      height: 120px
      padding: 3px
  .name
    display: inline-block
    vertical-align: bottom
    margin-bottom: 46px
    margin-left: 12px
    color: #157c8c
    font-size: 20px
    font-weight: 500
    max-width: 145px
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .2) 
  .fangwen
    position: absolute
    bottom: 0
    right: 0
    vertical-align: bottom
    margin-bottom: 46px
    .fangke, .fangkezl
      overflow: hidden
      font-size: 14px
      margin-bottom: 6px
      color: #157c8c
      font-weight: 500
      max-width: 145px
      text-shadow: 1px 1px 1px rgba(0, 0, 0, .2) 
  .list
    position: absolute
    bottom: 0
    left: 0
    margin-left: 163px
    .list-li
      display: inline-block
      vertical-align: bottom
      margin-right: 30px
</style>
