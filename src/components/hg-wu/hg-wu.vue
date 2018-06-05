<template>
<div class="hg-wu">
  <div class="lunbotu">
    <span><img src="./轮播1.jpg"></span>	
  </div>
  <div class="logo2"><img src="./logo2.png"></div>
  <div class="wu">
  	<div class="hezi" onclick="window.open('http://zs.gcu.edu.cn/')">
  		<div class="hz-zhognwen">
  			<p class="zhongwen">招生网</p>
  		</div>
  		<div class="yingwen">GCU Admission</div>
  	</div>
  	<div class="hezi" onclick="window.open('http://jyw.gcu.edu.cn/')">
  		<div class="hz-zhognwen">
  			<p class="zhongwen">就业网</p>
  		</div>
  		<div class="yingwen">Job Online</div>
  	</div>
  	<div class="hezi" onclick="window.open('http://3d.gcu.edu.cn/')">
  		<div class="hz-zhognwen">
  			<p class="zhongwen">全景校园</p>
  		</div>
  		<div class="yingwen">Panoramic Campus</div>
  	</div>
  	<div class="hezi" onclick="window.open('http://lab.gcu.edu.cn/')">
  		<div class="hz-zhognwen">
  			<p class="zhongwen">全景实验室</p>
  		</div>
  		<div class="yingwen">Panoramic Laboratory</div>
  	</div>
  	<div class="hezi">
  		<div class="hz-zhognwen">
  			<p class="zhongwen">微信微博</p>
  		</div>
  		<div class="yingwen">Webchat and Weibo</div>
  	</div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hg-wu
  position: relative
  .lunbotu
    min-width: 1100px
    width: 100%
    height: 383px
    img	
      height: 100%
      width: 100%
  .logo2
    position: absolute
    top: 0
    left: 0
    right: 0
    margin: 36px auto
    width: 466px
    height: 75px 
    img
      width: 100%
      height: 100%
  .wu
    width: 947px
    position: absolute
    left: 0
    right: 0
    bottom: 73px
    margin: 0 auto 
    font-size: 0   
    .hezi
      display: inline-block
      width: 152px
      height: 70px
      background: rgba(42, 38, 30, 0.5)
      border: 1px solid #aaa
      margin-right: 44px
      cursor : pointer
      &:last-child
        margin-right: 0
      .hz-zhognwen
        width: 115px	
        border-bottom: 2px solid #aaa
        height: 55%
        text-align: center
        margin: 0 auto
        .zhongwen
          line-height: 38.5px
          height: 100%
          font-size: 18px
          color: #aaa
      .yingwen
        height: 35%
        line-height:31.5px
        font-size: 12px
        text-align: center
        color: #aaa    
    .hezi:hover
      border-color: #fff
      .hz-zhognwen
        border-color: #fff
      .zhongwen
        color: #fff
      .yingwen
        color: #fff  
</style> 