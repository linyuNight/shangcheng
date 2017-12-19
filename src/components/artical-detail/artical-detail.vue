<template>
  <div class="artical-detail">
    <bg></bg>
    <div class="artical-detail-contain-top">
      <div class="artical-detail-contain-top-title">【好物推荐】日本佑天兰滋润保湿面膜，这个冬天你真的很需要它们！！快来砸单吧！！</div>
      <div class="artical-detail-contain-top-center">
        <div class="artical-detail-contain-top-time">11-23 12:36</div>
        <div class="artical-detail-contain-top-num">
          <div class="artical-detail-contain-top-num-left"></div>
          <div class="artical-detail-contain-top-num-right">69187</div>
        </div>
      </div>
      <div class="artical-detail-contain-top-text">adfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱f</div>
    </div>
    <div class="artical-detail-contain-center">
      <div class="artical-detail-contain-center-top">
        <div class="artical-detail-contain-center-top-center">
          <div class="artical-detail-contain-center-top-left"></div>
          <div class="artical-detail-contain-center-top-right"></div>
          <div class="artical-detail-contain-center-top-text">相关商品</div>
        </div>
      </div>
      <div class="goods-list">
        <div class="goods-item">
          <div class="goods-pic"></div>
          <div class="goods-item-right">
            <div class="goods-text">商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商</div>
            <div class="goods-item-bottom">
              <div class="goods-price">￥59.00</div>
              <div class="goods-buy">立即购买</div>
            </div>
          </div>
        </div>
        <div class="goods-item">
          <div class="goods-pic"></div>
          <div class="goods-item-right">
            <div class="goods-text">商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商</div>
            <div class="goods-item-bottom">
              <div class="goods-price">￥59.00</div>
              <div class="goods-buy">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-detail-evaluate-box">
      <div class="artical-detail-contain-center-top">
        <div class="artical-detail-contain-center-top-center">
          <div class="artical-detail-contain-center-top-left"></div>
          <div class="artical-detail-contain-center-top-right"></div>
          <div class="artical-detail-contain-center-top-text">相关评论</div>
        </div>
      </div>
      <div class="evaluate-center">
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
      </div>
      <router-link tag="div" class="evaluate-bottom" to="/articalEvaluateDetail">查看全部评价</router-link>
    </div>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <footer class="artical-detail-footer" ref="footer">
      <div class="tab-item-contain">
        <div class="tab-item" @click="good">
          <div class="tab-item-content">
            <div class="tab-item-pic tab-item-pic1" v-show="!isGood"></div>
            <div class="tab-item-pic tab-item-pic4" v-show="isGood"></div>
            <div class="tab-item-text">165</div>
          </div>
        </div>
      </div>
      <router-link tag="div" class="tab-item-contain" to="/articalEvaluateDetail">
        <div class="tab-item">
          <div class="tab-item-content">
            <div class="tab-item-pic tab-item-pic2"></div>
            <div class="tab-item-text">146</div>
          </div>
        </div>
      </router-link>
      <router-link tag="div" class="tab-item-contain" to="/goodsShow">
        <div class="tab-item">
          <div class="tab-item-content">
            <div class="tab-item-pic tab-item-pic3"></div>
            <div class="tab-item-text">去秒杀</div>
          </div>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  // import Swiper from 'swiper'
  import Bg from 'base/bg/bg'
  import EvaluateItem from 'base/evaluate-item/evaluate-item'
  import ArticalItem from 'base/artical-item/artical-item'
  import {isIOS,isAndroid} from 'huaji-platform'

  export default {
    data() {
      return {
        isGood: false
      }
    },
    created(){
      // this.slidesPerView = parseInt(document.body.clientWidth/108)
    },
    mounted(){
      if(isIOS()){
        this.$refs.footer.style.webkitBackdropFilter = "blur(14px)"
        this.$refs.footer.style.backdropFilter = "blur(14px)"
        this.$refs.footer.style.background = "rgba(255, 255, 255, 0.8)"
      }
    },
    methods: {
      good(){
        this.isGood = !this.isGood
      }
    },
    components: {
      Bg,
      EvaluateItem,
      ArticalItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./artical-detail.styl"></style>