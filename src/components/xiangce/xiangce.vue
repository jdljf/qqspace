<template>
  <div class="wddongtai">
    <div class="wd-right">
      <ul>
        <li class="ss">
          <div class="riqi">
            <span class="ri">24</span>
            <span class="yue">5月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">做了一下好人，收刮了一笔</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">1</span>
            <span class="yue">5月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">每次去新滩我都希望学到东西如各种电路的测试方法而不是去现场看别人生产找茬。</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">21</span>
            <span class="yue">4月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">加油</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">21</span>
            <span class="yue">4月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">4月30到现在贵了这么多油费叫我怎么回学校啊！快没油了</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">15</span>
            <span class="yue">3月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">吹着八级的空调</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">4</span>
            <span class="yue">2月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">晚上想逛商城</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">30</span>
            <span class="yue">1月</span>
          </div>
          <!-- <div class="zhaopian">
            <img src="./avatar.jpg">
          </div> -->
          <div class="shuoshuo puman">
            <span class="">上帝很有意思，猫喜欢吃鱼，猫却不能下水，鱼喜欢吃蚯蚓，鱼却不能上岸。人生，就是一边拥有，一边失去；一边选择，一边放弃。 人生，哪有事事如意，生活，哪有样样顺心。所以，不和别人较真，因为不值得；不和自己较真，因为伤不起；不和往事较真，因为没价值；不和现实较真，因为要继续。</span>
          </div>
        </li>
        <li class="ss">
          <div class="riqi">
            <span class="ri">10</span>
            <span class="yue">1月</span>
          </div>
          <div class="zhaopian">
            <img src="./avatar.jpg">
          </div>
          <div class="shuoshuo">
            <span class="">当你选择的那一刻，不要怀疑，不要犹豫，决定只不过是你必须要走的一条路，人生就像旅途，难免会遇到荆棘和坎坷，但是当你走到最后才会发现原来中途的“坎坷”只不过是你旅途中的一道风景而已。</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="wd-left">
      <div class="sanlan">
        <span class="lan">
          <div class="shuliang">78</div>
          <div class="shuoming">照片</div>
        </span>
        <span class="lan">
          <div class="shuliang">116</div>
          <div class="shuoming">说说</div>
        </span>
        <span class="lan">
          <div class="shuliang">59</div>
          <div class="shuoming">日志</div>
        </span>  
    </div>
    <div class="gerendang">
        <div class="grd-biaoti">个人档</div>
        <div class="xingzuo">21岁 射手座 男</div>
        <div class="xuexing">血型 O</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
*{
  padding: 0
  margin: 0
}
.wddongtai
  display: flex
  flex-flow: row
  margin: 36px 100px 0
  .wd-left
    flex: 0 0 290px
    height: 200px
    .sanlan
      width: 280px
      height: 90px
      border: 1px solid #04c3e0
      margin-bottom: 10px
      border-radius: 3px
      .lan
        display: inline-block
        width:30%
        border-right: 1px solid #04c3e0
        text-align: center
        margin-top: 22px
        .shuliang
          font-size: 28px
          margin-bottom: 10px
        .shuoming
          font-size: 12px 
        &:last-child
          border: none   
    .gerendang
      width: 280px
      border: 1px solid #04c3e0
      border-radius: 3px
      .grd-biaoti
        padding: 0 15px
        height: 35px
        line-height: 35px
        font-size: 15px
        font-weight: 800
        border-bottom: 1px solid #04c3e0
      .xingzuo, .xuexing
        margin: 0 15px
        height: 44px
        line-height: 44px
        font-size: 12px
        border-bottom: 1px solid #04c3e0
      .xuexing 
        border: none      
  .wd-right
    order: 1   
    position: relative
    width: 100%
    min-width: 777px
    overflow：hidden
    .ss
      width: 777px
      height: 90px
      list-style: none
      position: relative
      margin-bottom: 25px
      .riqi
        width: 60px
        display: inline-block
        vertical-align: top
        .ri
          width: 33px
          display: inline-block
          font-size: 30px
          text-align: center
        .yue
          width: 22px
          display: inline-block
          font-size: 14px  
          text-align: center
      .zhaopian
        display: inline-block
        vertical-align: top 
        width: 90px
        height: 90px 
        margin-left: 14px
        img  
          width: 90px
          height: 90px
      .shuoshuo
        margin-left: 14px
        width: 590px
        height: 90px
        display: inline-block   
        overflow: hidden  /*超出宽度部分隐藏*/
        text-overflow: ellipsis
        font-size: 15px
        span
          line-height: 18px
          font-size: 15px 
      .puman
        width: 697px    
</style> 