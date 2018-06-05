<template>
<div class="header">
  <div class="item-left">
    <div class="qqspace">QQ空间</div>
    <ul>
      <li class="active item">
        <p class="left">个人中心</p>
      </li>
      <li class="item" @mouseenter="enter" @mouseleave="leave">
        <p class="left change" :class="{baise: isbaise}">好友</p>
        <!-- 好友列表 -->
        <div class="list2" v-show="showList" @mouseenter="enter2" @mouseleave="leave2">
          <div class="content">
            <div class="lianluo">最近联络的好友</div>
            <ul class="friend">
              <li v-for="item in seller.friendsItem" class="friends-item">
                <img class="friends-img" :src="item.friendsimg">
                <p class="friends-name">{{item.friendsname}}</p>
              </li>
            </ul>
            <p class="tianjia">最近添加的好友</p>
          </div>
        </div>
      </li>
      <li class="item">
        <p class="left">一键换肤</p>
      </li>
    </ul>
  </div>
  <div class="item-right">

  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      showList: false,
      isbaise: false
    }
  },
  methods: {
    enter: function () {
      this.showList = true
      this.isbaise = true
    },
    leave: function () {
      this.isbaise = false
      this.showList = false
    },
    enter2: function () {
      this.isbaise = true
    },
    leave2: function () {
      this.showList = false
      this.isbaise = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
*{
  padding: 0
  margin: 0
}
.header
  position: relative
  background: #04b1cc
  height: 40px
  border-bottom: 1px solid #ccc
  z-index: 10
  .item-left
    margin-left: 100px
    .qqspace
      float: left
      font-size: 20px
      width: 110px
      line-height: 40px
      height: 40px
      text-align: center
      color: #fff 
    .item
      position: relative
      display: inline-block 
      float: left
      width: 95px
      line-height: 40px
      height: 40px
      box-sizing: border-box
      cursor: pointer
      color: #fff
      &.active
        background: #04c3e0
      .left
        font-size: 14px
        text-align: center
      .baise
        position: relative
        height: 38px
        z-index: 10
        color: #000
        background: #fff
        border: 1px solid #000  
        border-bottom: none  
      .list2
        background: #fff
        top: 40px
        border: 1px solid #000
        width: 419px
        margin-top: -1px
        overflow: hidden
        .content
          margin: 17px 0 0 30px
          .lianluo, .tianjia
            font-size: 10px
            font-weight: 500
            color: #000
          .tianjia 
            margin: 8px 0
          .lianluo
            height: 40px

          .friend 
            padding-left: 0
            line-height: 0
            .friends-item:last-child
              display: none
            .friends-item  
              width: 69px
              height: 95px
              list-style: none
              display: inline-block
              margin-right: 26px
              .friends-img
                display: block
                width: 69px
                height: 69px  
                border: 1px solid #ccc
                border-radius: 2px
              .friends-name
                clear: both
                display: block
                width: 70px
                height: 12px
                line-height: 12px
                margin-top: 5px
                text-align: center
                overflow: hidden;
                text-overflow: ellipsis
                white-space: nowrap
                font-size: 12px
                font-weight: 600
                color: #000       
</style>
