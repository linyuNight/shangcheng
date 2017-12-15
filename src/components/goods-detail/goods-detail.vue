<template>
  <div class="goods-detail">
    <bg></bg>
    <header class="goods-detail-header">
      <router-link tag="div" class="goods-detail-header-left" to="/">
        <div class="goods-detail-header-left-pic"></div>
        <div class="goods-detail-header-left-text">日本线下商城</div>
      </router-link>
      <router-link tag="div" class="goods-detail-header-right" to="/find">
        <div class="goods-detail-header-right-text">更多好物推荐</div>
        <div class="goods-detail-header-right-pic"></div>
      </router-link>
    </header>
    <div class="goods-detail-main">
      <div class="goods-detail-goods-box">
        <div class="goods-pic">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="width:100%;height:300px;"></div>
              <div class="swiper-slide" style="width:100%;height:300px;"></div>
              <div class="swiper-slide" style="width:100%;height:300px;"></div>
            </div>
          </div>
          <div class="swiper-pagination" style="left:0;bottom:10px;right:0;"></div>
        </div>
        <div class="goods-bottom-contain">
          <div class="goods-text-note">懒人保湿专用</div>
          <div class="goods-text">Saborino 早安面膜60秒 清晨懒人保湿免洗 黄色牛油果 保湿滋润款 32枚Saborino 早安面膜60秒 清晨懒人保湿免洗 黄色牛油果 保湿滋润款 32枚Saborino 早安面膜60秒 清晨懒人保湿免洗 黄色牛油果 保湿滋润款 32枚</div>
          <div class="goods-bottom1">
            <div class="goods-price">￥232352</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-minus" @click="minus"></div>
              <input class="goods-item-num-input" type="number" pattern="[0-9]*" v-model="number">
              <div class="goods-item-num-plus" @click="plus"></div>
            </div>
          </div>
          <div class="goods-bottom2">
            <div class="goods-hassale">已售 326</div>
            <div class="goods-note">日本直邮20元不限重(包税)</div>
          </div>
        </div>
      </div>
      <div class="goods-detail-evaluate-box">
        <div class="evaluate-top">
          <div class="evaluate-top-left">评价</div>
          <router-link tag="div" class="evaluate-top-more" to="/evaluateGoodsDetail">
            <div class="evaluate-top-more-pic"></div>
            <div class="evaluate-top-more-text">好评98.8%</div>
          </router-link>
        </div>
        <div class="evaluate-center">
          <evaluate-goods-item></evaluate-goods-item>
          <evaluate-goods-item></evaluate-goods-item>
        </div>
      </div>
      <div class="goods-detail-goodsdetail-box">
        <img class="goodsdetail-top" src="../../common/image/goods-detail/img38.png">
        <div class="goodsdetail-main">
          <img class="goodsdetail-main-pic" src="../../common/image/goods-detail/img39.png">
          <div class="goodsdetail-main-video-contain">
            <div class="goodsdetail-main-video-contain-top">
              日本线下实体店，海带宝采购实拍
              <div class="goodsdetail-main-video-contain-top-triangle"></div>
            </div>
            <!-- <video class="goodsdetail-main-video" src="~common/image/goods-detail/fff.mp4" poster="~common/image/goods-detail/sss.png"></video> -->
            <video class="goodsdetail-main-video" controls poster="static/sss.png" webkit-playsinline>
              <source src="static/fff.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video> 
          </div>
        </div>
        <img class="goodsdetail-bottom" src="~common/image/goods-detail/img40.png">
      </div>
    </div>
    <footer class="goods-detail-footer">
      <router-link tag="div" class="goods-detail-footer-item" to="/find">
        <div class="goods-detail-footer-item-pic goods-detail-footer-item-pic1"></div>
        <div class="goods-detail-footer-item-text">发现</div>
      </router-link>
      <router-link tag="div" class="goods-detail-footer-item" to="/purchase">
        <div class="goods-detail-footer-item-pic goods-detail-footer-item-pic2"></div>
        <div class="goods-detail-footer-item-text">购物车</div>
      </router-link>
      <div class="goods-detail-footer-add">加入购物车</div>
    </footer>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Swiper from 'swiper'
  import Bg from 'base/bg/bg'
  import EvaluateGoodsItem from 'base/evaluate-goods-item/evaluate-goods-item'
  // import {isIOS} from 'huaji-platform'

  export default {
    data() {
      return {
        number: 1
        // slidesPerView:1
      }
    },
    created(){
      // this.slidesPerView = parseInt(document.body.clientWidth/108)
    },
    mounted(){
      this.$nextTick(() => {
        let mySwiper = new Swiper('.swiper-container', {
          pagination : '.swiper-pagination'
        })
      })

      // if(isIOS()){
      //   this.$refs.goodsDetailHeader.style.webkitBackdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailHeader.style.backdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailHeader.style.background = "rgba(255, 255, 255, 0.8)"
      //   this.$refs.goodsDetailFooter.style.webkitBackdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailFooter.style.backdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailFooter.style.background = "rgba(255, 255, 255, 0.8)"
      // }
    },
    methods:{
      minus(){
        if(this.number>1){
          this.number--
        }
      },
      plus(){
        this.number++
      }
    },
    components: {
      Bg,
      EvaluateGoodsItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./goods-detail.styl"></style>