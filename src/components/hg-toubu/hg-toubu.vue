<template>
  <div class="hg-toubu">
  	<div class="tubiao">
  	  <img src="./hg-toubu.png">
  	</div>
  	<div class="tb-liebiao">
  	  <ul>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=news" target="blank">
		  	<p class="zhongwen">新闻</p>	
  			<p class="yingwen">News</p>
		  </a>
		</li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=page_template&catid=2" target="blank">
		  	<p class="zhongwen">简介</p>	
  			<p class="yingwen">Information</p>
		  </a>
		</li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=notice" target="blank">
		  	<p class="zhongwen">通知</p>	
  			<p class="yingwen">Notices</p>
		  </a>
		</li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=platform" target="blank">
		  	<p class="zhongwen">平台</p>	
  			<p class="yingwen">Platforms</p>
		  </a>
		</li>
		<li class="tubiaoweizhi"></li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=student" target="blank">
		  	<p class="zhongwen">学生</p>	
  			<p class="yingwen">Undergraduate</p>
		  </a>
		</li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=teacher" target="blank">
		  	<p class="zhongwen">教师</p>	
  			<p class="yingwen">Facultices</p>
		  </a>
		</li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=parent" target="blank">
		  	<p class="zhongwen">家长</p>	
  			<p class="yingwen">Parents</p>
		  </a>
		</li>
		<li class="tb-lianjie">
		  <a href="http://www.gcu.edu.cn/index.php?m=content&c=index&a=schoolmate" target="blank">
		  	<p class="zhongwen">校友</p>	
  			<p class="yingwen">Alumnia</p>
		  </a>
		</li>
  	  </ul>
  	</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hg-toubu
  min-width: 1069px
  position: relative
  height: 80px
  background: #293c60
  .tubiao
    position: absolute
    top: 0
    left: 0
    right: 0
    width: 223px
    height: 90px
    margin: 0 auto
    z-index: 1
    img
      display:block;
      width: 136px
      margin: 0 auto
  .tb-liebiao
    width: 938px
    position: absolute
    font-size: 0
    bottom: 0
    left: 0
    right: 0
    margin: auto
    .tb-lianjie
      width: 9.5%
      height: 37px
      display: inline-block
      text-align: center
      overflow: hidden
      .zhongwen
        font-size: 20px
        color: #ddd
        overflow: hidden
        white-space: nowrap
      .yingwen
        font-size: 12px  
        color: #ddd
        letter-spacing: normal
        overflow: hidden
        white-space: nowrap
    .tb-lianjie:hover
       .zhongwen
        color: #fff
      .yingwen 
        color: #fff   
    .tubiaoweizhi
      display: inline-block
      width: 24%
      height: 37px
</style> 