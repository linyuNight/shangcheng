<template>
  <div class="tab" ref="tab">
    <!-- <div class="bakcground"></div> -->
    <router-link tag="div" class="tab-item" to="/goodsShow">
      <div class="tab-item-pic tab-item-pic1"></div>
      <div class="tab-item-text">首页</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/classification">
      <div class="tab-item-pic tab-item-pic2"></div>
      <div class="tab-item-text">分类</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/find">
      <div class="tab-item-pic tab-item-pic3"></div>
      <div class="tab-item-text">发现</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/find">
      <div class="tab-item-pic tab-item-pic4"></div>
      <div class="tab-item-text">赚钱</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/purchase">
      <div class="tab-item-pic tab-item-pic5"></div>
      <div class="tab-item-text">购物车</div>
    </router-link>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import {isIOS} from 'huaji-platform'

  export default {
    data() {
      return {
        
      }
    },
    mounted(){
      // var browser = {
      //   versions: function () {
      //     var u = navigator.userAgent, app = navigator.appVersion;
      //     return { //移动终端浏览器版本信息 
      //       ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
      //       android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
      //       iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
      //       iPad: u.indexOf('iPad') > -1, //是否iPad 
      //     };
      //   }(),
      // };
      // if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
      //   this.$refs.tab.style.webkitBackdropFilter = "blur(14px)"
      //   this.$refs.tab.style.backdropFilter = "blur(14px)"
      //   this.$refs.tab.style.background = "rgba(255, 255, 255, 0.8)"
      // }
      // if(isIOS()){
      //   this.$refs.tab.style.webkitBackdropFilter = "blur(14px)"
      //   this.$refs.tab.style.backdropFilter = "blur(14px)"
      //   this.$refs.tab.style.background = "rgba(255, 255, 255, 0.8)"
      // }
      if(isIOS()){
        this.$refs.tab.style.webkitBackdropFilter = "blur(14px)"
        this.$refs.tab.style.backdropFilter = "blur(14px)"
        this.$refs.tab.style.background = "rgba(255, 255, 255, 0.8)"
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .tab{
    bordertop-1px($grey)
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:100;
    background:#fff;
    // -webkit-backdrop-filter: blur(10px); /* Safari for macOS & iOS*/
    // backdrop-filter: blur(10px); /* Google Chrome */
    // background: rgba(255, 255, 255, 0.8);
    // background:#fff;
    // .background{
    //   position: absolute
    //   left: 0
    //   top: 0
    //   width: 100%
    //   height: 45px
    //   z-index: 200
    //   opacity: 0.6
    //   filter: blur(20px)
    // }
    .tab-item{
      flex:1;
      height:50px;
      
      .tab-item-pic{
        margin:7px auto 5px;
        width:20px;
        height:20px;
        background-position:center;
        background-size:contain;
        background-repeat:no-repeat;
      }
      .tab-item-pic1{
        background-image:url(../../common/image/tab/home.png);
      }
      .tab-item-pic2{
        background-image:url(../../common/image/tab/category.png);
      }
      .tab-item-pic3{
        background-image:url(../../common/image/tab/find.png);
      }
      .tab-item-pic4{
        background-image:url(../../common/image/tab/money.png);
      }
      .tab-item-pic5{
        background-image:url(../../common/image/tab/cart.png);
      }
      .tab-item-text{
        text-align:center;
        font-size:12px;
        color:#424242;
      }
    }
    .router-link-exact-active{
      .tab-item-pic1{
        background-image:url(../../common/image/tab/home2.png);
      }
      .tab-item-pic2{
        background-image:url(../../common/image/tab/category2.png);
      }
      .tab-item-pic3{
        background-image:url(../../common/image/tab/find2.png);
      }
      .tab-item-pic4{
        background-image:url(../../common/image/tab/money2.png);
      }
      .tab-item-pic5{
        background-image:url(../../common/image/tab/cart2.png);
      }
      .tab-item-text{
        color:$red;
      }
    }
  }
</style>