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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./evaluate-goods-detail.styl"></style>