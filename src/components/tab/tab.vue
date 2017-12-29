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
    <router-link tag="div" class="tab-item" to="/makeMoney">
      <div class="tab-item-pic tab-item-pic4"></div>
      <div class="tab-item-text">赚钱</div>
    </router-link>
    <router-link tag="div" class="tab-item" to="/purchase">
      <div class="tab-item-pic tab-item-pic5">
        <div class="purchase-num">42</div>
      </div>
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./tab.styl"></style>