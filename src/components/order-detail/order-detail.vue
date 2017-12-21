<template>
  <div class="order-detail">
    <bg></bg>
    <header class="goods-detail-header">
      <router-link tag="div" class="goods-detail-header-left" to="/">
        <div class="goods-detail-header-left-pic"></div>
        <div class="goods-detail-header-left-text">海带宝日本代购</div>
      </router-link>
      <router-link tag="div" class="goods-detail-header-right" to="/">
        <div class="goods-detail-header-right-text">继续购物</div>
        <div class="goods-detail-header-right-pic"></div>
      </router-link>
    </header>
    <div class="order-detail-state-contain">
      <div class="order-detail-state"><span class="order-detail-state-left">当前订单状态：</span><span class="order-detail-state-right">{{order.state | setState}}</span></div>
      <div class="order-detail-time">下单时间：2017-11-17 13:00</div>
      <div class="order-detail-overseas" v-if="order.state == 3 || order.state == 4">海外快件单号：2013564130315JP</div>
    </div>
    <div class="order-top">
      <div class="order-top-center">
        <div class="order-top-center-top clear">
          <div class="order-user-name">黄小明</div>
          <div class="order-user-phone">12345678921</div>
        </div>
        <div class="order-top-address-box">
          <div class="order-top-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
        </div>
      </div>
      <div class="order-top-right"></div>
    </div>
    <div class="goods-imformation">
      <div class="goods-imformation-top">商品信息</div>
      <goods-item v-for="goods in order.goodsList" :key="goods.text" :goods="goods"></goods-item>
    </div>
    <div class="order-price-box">
      <div class="order-price-contain">
        <div class="order-price-left">商品总价</div>
        <div class="order-price">￥91.00</div>
      </div>
      <div class="order-freight-contain">
        <div class="order-freight-left">国际运费</div>
        <div class="order-freight">￥20.00</div>
      </div>
    </div>
    <div class="order-totalprice-contain"><span class="order-totalprice-contain-left">合计：</span><span class="order-totalprice-contain-right">￥111.00</span></div>
    <div class="pay-order-box">
      <div class="order-num-contain">
        <div class="order-num-contain-left">订单号： {{order.orderNum}}</div>
        <div class="order-num-contain-copy" @click="copy" :data-clipboard-text="order.orderNum">复制</div>
      </div>
      <div class="pay-order-num" v-if="order.state == 2 || order.state == 3 || order.state == 4 || order.state == 6">支付订单号： 86321315555531313</div>
      <div class="pay-order-time" v-if="order.state == 2 || order.state == 3 || order.state == 4 || order.state == 6">支付时间： 2017-11-17 13:09</div>
    </div>
    <div class="pay-order-refund-box" v-if="order.state == 5 || order.state == 6">
      <div class="pay-order-refund-title">退款情况</div>
      <div class="pay-order-refund-contain">
        <span class="pay-order-refund-time">2017-11-17 13:50</span><span class="pay-order-refund-money">全单退款 ￥111.00</span>
      </div>
    </div>
    
    <div class="goods-imformation-btn-bar" v-if="order.state == 1 || order.state == 4 || order.state == 5">
      <btn-bar :state="order.state"></btn-bar>
    </div>
    <footer class="footer-space" v-if="order.state == 1 || order.state == 4 || order.state == 5"></footer>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Clipboard from 'clipboard'
  import GoodsItem from 'base/goods-item/goods-item'
  import BtnBar from 'base/btn-bar/btn-bar'
  import Bg from 'base/bg/bg'

  export default {
    data() {
      return {
        order:{}
      }
    },
    created(){
      this.order = this.$store.state.order
    },
    methods:{
      copy(){
        let clipboard = new Clipboard('.order-num-contain-copy');
        alert('复制成功')
      }
    },
    filters: {
      setState(state){
        if(state == 1){
          return '待付款'
        }else if(state == 2){
          return '采购中'
        }else if(state == 3){
          return '已发货'
        }else if(state == 4){
          return '已签收'
        }else if(state == 5){
          return '采购失败'
        }else if(state == 6){
          return '交易关闭'
        }
      }
    },
    components: {
      GoodsItem,
      BtnBar,
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./order-detail.styl"></style>