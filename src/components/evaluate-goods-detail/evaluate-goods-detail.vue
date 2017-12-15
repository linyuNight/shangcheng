<template>
  <div class="evaluate-goods-detail">
    <bg></bg>
    <header class="evaluate-goods-detail-header">
      <div class="evaluate-goods-detail-header-left">评论（156）</div>
      <div class="evaluate-goods-detail-header-right">好评98.8%</div>
    </header>
    <div class="evaluate-goods-list">
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
      <evaluate-goods-item></evaluate-goods-item>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  // import Swiper from 'swiper'
  import Bg from 'base/bg/bg'
  import EvaluateGoodsItem from 'base/evaluate-goods-item/evaluate-goods-item'

  export default {
    data() {
      return {
      }
    },
    created(){
    },
    components: {
      Bg,
      EvaluateGoodsItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .evaluate-goods-detail{
    position:absolute; 
    z-index:300;
    width:100%;
    background:#f5f5f5;
    .evaluate-goods-detail-header{
      position:fixed;
      left:0;
      top:0;
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      height:30px;
      z-index:100;
      background:#f2f2f2;
      padding:0 15px;
      .evaluate-goods-detail-header-left{
        font-size:13px;
        color:#666666;
      }
      .evaluate-goods-detail-header-right{
        font-size:13px;
        color:$red;
      }
    }
    .evaluate-goods-list{
      margin-top:30px;
    }
  }
</style>