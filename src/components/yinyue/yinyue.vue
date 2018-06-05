<template>
  <div class="yinyue">
    <div class="yy-yi">歌名</div>
    <div class="yy-er">歌手</div>
    <div class="yy-san">专辑</div>
    <div class="yy-si">时长</div>
    <div class="yy" v-el:yy>
      <ul class="yy-box">
        <li class="yinyueliebiao" :class="{'huibeijing': i == $index}" :data-id="'item-'+ index" v-for="(index, ratings) in ratings" v-on:dblclick="shuangjibofang(index)" v-el:gequ>
          <div class="geming"><span class="pd">{{ratings.name}}</span></div>
          <div class="geshou"><span class="pd">{{ratings.singer}}</span></div>
          <div class="zhuanji"><span class="pd">{{ratings.zhuanji}}</span></div>
          <div class="shichang"><span class="pd">03:38</span></div>
        </li>
      </ul>
    </div>  
    <div class="kongzhi">
      <div class="sxbz">
        <div class="shangyishou">
          <img @click="shangyishou(i)" src="./上一首.jpg">
        </div>
        <img class="bofang" :src="playFlag?zhantingimg:bofangimg" @click="bofang(index)">
        <div class="xiayishou">
          <img @click="xiayishou(i)" src="./下一首.jpg">
        </div>
      </div>
      <div class="jindu">shuangjibofang
        <div class="jindutiao">
          <div class="jdt">
            <div class="jd">
              <div class="zongjindu" v-el:zongjindu @mousemove="yidongjindu">
                <div class="fenjindu" v-el:fenjindu></div>
                <div class="jindudian" v-el:jindudian @mousedown="panduanyidong" @mouseup="gaibianjindu"></div>
              </div>
            </div>
          </div>
          <div class="kaishi" v-text="currentTime"></div>
          <div class="jiesu" v-el:jiesu v-text="dTime"></div>
        </div>
      </div>
    </div>
    <audio v-on:canplay="canplay" v-on:ended="ended(i)" :src="audiomp4" id="player" v-el:player ref='player'></audio>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

const ERR_OK = 0

export default {
  props: {
  },
  data () {
    return {
      ratings: [],
      bofangimg: '/static/播放.jpg',
      zhantingimg: '/static/暂停.jpg',
      audiomp4: '',
      huibeijing: false,
      iszanting: false,
      playFlag: false,
      dTime: '00:00',
      currentTime: '00:00',
      i: null,
      dianjuli: null,
      zuidajuli: 0,
      yunxuyidong: false,
      timer: null
    }
  },
  created () {
    this.$http.get('/api/ratings').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.ratings = response.data
        // console.log(this.ratings)
        this.$nextTick(() => {
          console.log('nextTick')
          clearInterval(setInterval(this.bofangzhong, 1000))
          this._initScroll()
          this.timer = setInterval(this.bofangzhong, 1000)
          // this.canplay()
        })
      }
    })
  },
  computed: {
    // miao () {
    //   return this.$refs.music.duration
    // }
  },
  methods: {
    _initScroll () {
      this.shopBoxScroll = new BScroll(this.$els.yy, {
        click: true
      })
    },
    canplay () {
      this.$nextTick(() => {
        var player = this.$els.player
        // console.log(this.$els.music.duration)
        var miao = player.duration
        player.play()
        // clearInterval(this.timer)
        setInterval(this.bofangzhong(), 1000)
        this.dTime = this.shijiangeshi(miao)
      })
    },
    bofang () {
      var player = this.$els.player
      // console.log(player)
      this.iszanting = !this.iszanting
      if (player !== null) {
        if (this.playFlag) {
          player.pause()
          this.playFlag = false
          // console.log(this.playFlag)
        } else {
          this.canplay()
          player.play()
          this.playFlag = true
          setInterval(this.bofangzhong(), 1000)
          // console.log(this.playFlag)
        }
      }
    },
    bofangzhong () {
      if (this && !this._isDestroyed) {
        if (this.playFlag) {
          this.$nextTick(() => {
            var shijianbaifenbi = this.$els.player.currentTime / this.$els.player.duration * 100 + '%'
            this.currentTime = this.shijiangeshi(this.$els.player.currentTime)
            this.$els.jindudian.style.left = shijianbaifenbi
            this.$els.fenjindu.style.width = shijianbaifenbi
          })
        } else {
          return
        }
      }
    },
    shuangjibofang (index) {
      // var player = this.$els.player
      if (this.player !== null) {
        this.playFlag = true
        this.audiomp4 = this.ratings[index].url
        this.i = index
        this.canplay()
      }
    },
    xiayishou (index) {
      index++
      if (index > this.ratings.length - 1) {
        index = 0
      }
      // console.log(index)
      this.shuangjibofang(index)
    },
    shangyishou (index) {
      index--
      if (index < 0) {
        index = this.ratings.length - 1
      }
      // console.log(index)
      this.shuangjibofang(index)
    },
    ended (index) {
      this.xiayishou(index)
    },
    updateTime (e) {
      return e.target.duration
    },
    // 补零操作
    buling (num) {
      if (num < 10) {
        return '0' + num
      } else {
        return '' + num
      }
    },
    // 格式日期
    shijiangeshi (num) {
      num = parseInt(num)
      var iM = Math.floor(num % 3600 / 60)
      var iS = Math.floor(num % 60)
      return this.buling(iM) + ':' + this.buling(iS)
    },
    panduanyidong (event) {
      this.yunxuyidong = true
      console.log(this.$els.zongjindu.clientWidth)
      this.yidongjindu()
      this.gaibianjindu()
    },
    yidongjindu (event) {
      this.$nextTick(() => {
        if (this.yunxuyidong) {
          this.zuidajuli = this.$els.zongjindu.clientWidth
          this.dianjuli = event.pageX - this.$els.zongjindu.getBoundingClientRect().left
          if (this.dianjuli > this.zuidajuli) {
            this.dianjuli = this.zuidajuli
          } else if (this.dianjuli < 0) {
            this.dianjuli = 0
          }
          this.$els.jindudian.style.left = this.dianjuli + 'px'
          this.$els.fenjindu.style.width = this.dianjuli + 'px'
          console.log(this.dianjuli)
          console.log(this.dTime)
          console.log(this.dianjuli)
        }
      })
    },
    gaibianjindu () {
      this.yunxuyidong = false
      this.$els.player.currentTime = this.dianjuli * this.$els.player.duration / this.zuidajuli
      this.currentTime = this.shijiangeshi(this.$els.player.currentTime)
      // this.bofangzhong()
      // clearInterval(setInterval(this.bofangzhong, 1000))
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.yinyue
  overflow: hidden
  margin: 20px 100px 0
  border: 1px solid #04c3e0
  font-size: 0
  -webkit-text-size-adjust:none /*Chrome, 其默认有最小字体大小限制*/
  .yy-si, .yy-yi, .yy-er, .yy-san
    display: inline-block
    line-height: 28px
    height: 28px
    padding-left: 20px
    box-sizing: border-box
    border-right: 1px solid #ccc
    border-bottom: 1px solid #ccc
  .yy-yi, .geming
    width: 30%
    font-size: 14px
  .yy-er, .geshou
    width: 20%  
    font-size: 14px
  .yy-san, .zhuanji
    width: 30%
    font-size: 14px  
  .yy-si, .shichang
    width: 20%     
    font-size: 14px
    border-right: none 
  .yy
    height: 240px
    overflow: hidden  
    .yy-box  
      width: 100%
      .huibeijing
        background: #ccc
      .yinyueliebiao  
        .geming, .geshou, .zhuanji, .shichang
          display: inline-block
          height: 30px
          line-height: 30px
          .pd
            padding-left: 20px
      .yinyueliebiao:hover
        background: #ccc      
  .kongzhi
    position: relative
    width: 100%
    height: 50px   
    font-size: 0   
    border-top: 1px solid #ccc
    .sxbz
      position: absolute
      left: 0
      top: 0
      bottom: 0
      margin: auto 0 auto 20px
      height: 30px
      .shangyishou, .bofang, .xiayishou
        display: inline-block
        img
          display: inline-block
          width: 30px
          height: 30px
      .bofang
        margin: 0 16px    
        width: 30px
        height: 30px
    .jindu
      position: absolute
      top: 0
      bottom: 0
      right: 0
      margin: auto 20px auto 0
      height: 30px
      width: 75%
      .jindutiao
        height: 30px
        padding: 0 50px 0 50px
        .kaishi, .jdt, .jiesu
          position: relative
          height: 30px
          float: left
        .kaishi
          width: 50px
          margin-left: -100%
          left: -50px
          font-size: 16px
          line-height: 30px
          text-align: center
        .jiesu     
          width: 50px
          margin-left: -50px
          right: -50px
          font-size: 16px
          line-height: 30px 
          text-align: center
        .jdt
          position: relative
          width: 100%  
          box-sizing: content-box
          .jd
            position: absolute
            top: 50%
            width: 100%
            height: 6px
            margin-top: -3px
            .zongjindu
              position: relative
              margin: 0 10px
              height: 6px
              background: #ccc
              .fenjindu
                width: 0%
                height: 100%
                background: #04b1cc
              .jindudian
                position: absolute
                top: 0
                left: 0%
                margin-top: -4px
                margin-left: -7px
                width: 14px
                height: 14px  
                background: #04b1cc;
                border-radius: 50%
</style>