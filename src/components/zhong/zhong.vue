<template>
  <div class="zhong">
     <textarea class="wenbenkuang" cols="30" rows="5"></textarea><span class="zhaopian">照片</span>
     <div class="biaoti">
      <div class="quanbu">全部动态</div>
     </div>
     <ul>
      <li class="dongtai" v-for="goods in goods">
        <img class="touxiang" :src="touxiang(goods)">
        <span class="xinxi">
          <div class="mingzi" @mouseenter="showmingpian($event)">{{friendsname(goods)}}</div>
          <div class="shijian">{{goods.shijian}}</div>
        </span>
        <div class="neirong">{{goods.neirong}}</div>
        <div v-show="goods.peitu" class="peitu-s">
          <img :src="goods.peitu" v-show="goods.peitu" class="peitu">
        </div>
        <div class="gongnenglie">
          <span class="liulan">浏览{{goods.liulan}}次</span>
          <span class="shoucang">收藏</span>
          <span class="pinglun" @click="xianshiplk($index)">评论</span>
          <span class="dianzan">点赞</span>
        </div>
        <div class="pinglunqu">
          <div class="dianzanlie" v-show="goods.dianzan.length!==0">
            <p class="dianzantu"></p>
            <p class="dianzanshu">
              <span class="dianzanren" v-for="dianzanren in goods.dianzan">{{dianzanren}},</span>
              <span>共{{goods.dianzan.length}}人觉得很赞</span>
            </p>
          </div>
          <div class="pl-da"  v-for="(pinglunqu, index) in goods.pinglunqu">
            <div class="pinglun"  v-for="pinglunquss in index" :class="{'huifu': $index === 0}">
            <div class="pl-touxiang">
              <img :src="huifuimg(pinglunquss)">
            </div>
            <div class="pl-xinxi">
              <div class="pl">
                <div class="pl-mingzi">
                  <span>
                    <span class="huifuren" @mouseenter="showmingpian($event)">{{huifuren(pinglunquss)}} </span>
                    <span v-show="$index !== 0">回复</span>
                    <span class="jieshouren" @mouseenter="showmingpian($event)" v-show="$index !== 0">{{jieshouren(pinglunquss)}} </span> 
                    <span class="maohao">:</span>
                  </span>
                </div>
                <span class="pl-neirong">{{pinglunquss.nr}}</span>
              </div>
              <div class="pl-shijian">{{pinglunquss.shijian}}</div>
            </div>
          </div>
          </div>
          <div class="tianjia-pl" >
           <textarea class="pinglunkuang" @blur="guanbiplk($index)" @focus="xianshiplk($index)" transition="fade" placeholder="评论" :class="{'plkbianda': i == $index}"></textarea><p class="tianjia-zhaopian">照片</p>
         </div>
       </div>
     </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    goods: [],
    seller: {}
  },
  data () {
    return {
      pingluns: false,
      show: false,
      plkbianda: false,
      i: null,
      j: null
    }
  },
  computed: {
  },
  methods: {
    friendsname: function (goods) {
      // console.log(goods.mingzi)
      var l = parseInt(goods.mingzi)
      if (typeof goods.mingzi === 'number') {
        return this.seller.friendsItem[l].friendsname
      } else {
        return
      }
    },
    touxiang: function (goods) {
      this.$nextTick(() => {
      // console.log(pinglunquss.huifuren)
        var l = parseInt(goods.mingzi)
        // console.log(goods.mingzi)
        if (typeof goods.mingzi === 'number') {
          return this.seller.friendsItem[l].friendsimg
        } else {
          return
        }
      })
    },
    huifuimg: function (pinglunquss) {
      this.$nextTick(() => {
        var l = parseInt(pinglunquss.huifuren)
        if (typeof pinglunquss.huifuren === 'number') {
          return this.seller.friendsItem[l].friendsimg
        } else {
          return
        }
      })
    },
    huifuren: function (pinglunquss) {
      this.$nextTick(() => {
        // console.log(pinglunquss)
        var l = parseInt(pinglunquss.huifuren)
        if (typeof pinglunquss.huifuren === 'number') {
          return this.seller.friendsItem[l].friendsname
        } else {
          return
        }
      })
    },
    jieshouren: function (pinglunquss) {
      this.$nextTick(() => {
        // console.log(pinglunquss.huifuren)
        var l = parseInt(pinglunquss.jieshouren)
        if (typeof pinglunquss.jieshouren === 'number') {
          return this.seller.friendsItem[l].friendsname
        } else {
          return
        }
      })
    },
    xianshiplk: function (index) {
      // this.plkbianda = !this.plkbianda
      this.i = index
    },
    guanbiplk: function (index) {
      this.j = index
      console.log(this.j)
    },
    showmingpian: function (event) {
      console.log(event.target.innerHTML)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wenbenkuang
  resize:none
  border: 1px solid #0433cc
  width: 90%
  height: 68px
  font-size: 20px
  margin-left: -2px
.zhaopian
  display: inline-block
  width: 10%
  line-height: 70px
  height: 70px  
  background: #157c8c
  text-align: center
  vertical-align: top
  color: white
.biaoti
  border-bottom: 1px solid rgba(0,0,0,0.2)
  margin-bottom: 16px
  .quanbu
    margin: 28px 0 0 17px
    height: 30px
    font-size: 14px
    font-weight: 700
.dongtai
  list-style: none
  position: relative
  padding: 0 17px
  .touxiang
    width: 50px
    height: 50px 
    border-radius: 50%
  .xinxi
    display: inline-block  
    vertical-align: top
    margin: 5px
    .mingzi
      font-size: 16px
      font-weight: 600
      margin-bottom: 10px
      cursor: pointer
    .shijian
      font-size: 10px
      color: #666 
  .neirong
    margin-top: 14px  
    margin-bottom: 10px
    line-height: 24px
    font-size: 16px
  .peitu-s
    margin-bottom: 10px  
  .peitu
    width: 293px
    height: 420px   
  .gongnenglie
    height: 30px  
    border-bottom: 1px solid #ccc
    .liulan, .dianzan, .pinglun, .shoucang 
      cursor: pointer
      display: inline-block
      height: 16px
      line-height: 16px
    .liulan
      float: left 
      font-size: 14px
      color: #555
    .dianzan, .pinglun, .shoucang
      float: right   
      margin-left: 60px
  .pinglunqu    
    margin-bottom: 48px
    margin-top: 10px
    .dianzanlie
      margin: 10px 0
      .dianzantu
        display:inline-block
        width: 20px
        height: 20px
        border-radius: 50%  
        background: #04b1cc
      .dianzanshu
        display: inline-block 
        height: 20px
        line-height: 20px 
        vertical-align: top
        font-size: 14px
        color: #04b1aa
        .dianzanren
          margin-right: 5px
    .pl-da
      margin-bottom: 10px
      .pinglun
        margin: 5px 0px 0 40px
        .pl-touxiang
          display: inline-block
          margin-right: 6px
          img
            width: 30px
            height: 30px
            border-radius: 50%   
        .pl-xinxi
          display: inline-block
          vertical-align: top
          .pl     
            margin-bottom: 3px
            .pl-mingzi
              display: inline-block
              color: #4f8893
              font-size: 13px  
              .huifuren:hover, .jieshouren:hover
                text-decoration: underline
                cursor: pointer
              .maohao
                color: #000
            .pl-neirong
              font-size: 13px
          .pl-shijian
            font-size: 12px
            color: #999  
      .huifu
        margin: 0          
  .tianjia-pl
    position: relative
    width: 100%
    display: inline-block
    .pinglunkuang
      height: 35px
      width: 100%
      resize: none        
      border: 1px solid #bbb
      margin-left: -1px
      font-size: 20px
    .plkbianda
      height: 60px  
    .tianjia-zhaopian
      position: absolute
      right: 0
      bottom: 0
      width: 35px
      height: 37px
      margin-bottom: 3px
      line-height: 35px
      margin-right: 10px
      vertical-align: bottom
  .fade-transition
    transition: 0.5s all ease 
</style>