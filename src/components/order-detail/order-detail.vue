<template>
  <div class="order-detail">
    <bg></bg>
    <div class="order-detail-top">
      <div class="order-detail-top-left">
        <div class="order-detail-top-left-pic"></div>
        <div class="order-detail-top-left-text">日本线下商城</div>
      </div>
      <div class="order-detail-continue">继续购物</div>
    </div>
    <div class="order-detail-state-contain">
      <div class="order-detail-state"><span>当前订单状态：</span><span>{{order.state | setState}}</span></div>
      <div class="order-detail-time">下单时间：2017-11-17 13:00</div>
      <div class="order-detail-overseas" v-if="order.state == 3 || order.state == 4">海外快件单号：2013564130315JP</div>
    </div>
    <div class="order-top">
      <div class="order-top-left"></div>
      <div class="order-top-center">
        <div class="order-top-center-top clear">
          <div class="order-user-name">黄小明</div>
          <div class="order-user-phone">12345678921</div>
        </div>
        <div class="order-top-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
      </div>
    </div>
    <div class="goods-imformation">
      <div class="goods-imformation-top">商品信息</div>
      <goods-item v-for="goods in order.goodsList" key="goods.text" :goods="goods"></goods-item>
    </div>
    <div class="order-price-contain">
      <div class="order-price-left">商品总价</div>
      <div class="order-price">￥91.00</div>
    </div>
    <div class="order-freight-contain">
      <div class="order-freight-left">国际运费</div>
      <div class="order-freight">￥20.00</div>
    </div>
    <div class="order-totalprice-contain">合计：￥111.00</div>
    <div class="order-num-contain">
      <div class="order-num-contain-left">订单号： {{order.orderNum}}</div>
      <div class="order-num-contain-copy" @click="copy" :data-clipboard-text="order.orderNum">复制</div>
    </div>
    <div class="pay-order-num" v-if="order.state == 2 || order.state == 3 || order.state == 4 || order.state == 6">支付订单号： 86321315555531313</div>
    <div class="pay-order-time" v-if="order.state == 2 || order.state == 3 || order.state == 4 || order.state == 6">支付时间： 2017-11-17 13:09</div>
    <div class="pay-order-refund-contain" v-if="order.state == 6">
      <span class="pay-order-refund-time">2017-11-17 13:50</span><span class="pay-order-refund-money">全单退款 ￥111.00</span>
    </div>
    <div class="goods-imformation-btn-bar" v-if="order.state == 1 || order.state == 3 || order.state == 4">
      <btn-bar :state="order.state"></btn-bar>
    </div>
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
    activated(){
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .order-detail{
    position:absolute; 
    z-index:200;
    width:100%;
    height:100%;
    background:#f5f5f5;
    .order-detail-top{
      position:fixed;
      width:100%;
      height:40px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      background:$yellow;
      z-index:210;
      .order-detail-top-left{

        .order-detail-top-left-pic{
          display:inline-block;
          width:20px;
          height:20px;
          background:#ccc;
          vertical-align:middle;
        }
        .order-detail-top-left-text{
          display:inline-block;
          vertical-align:middle;
        }
      }
      .order-detail-continue{

      }
    }
    .order-detail-state-contain{
      background:#fff;
      margin-top:40px;
      margin-bottom:10px;
      .order-detail-state{

      }
      .order-detail-time{

      }
      .order-detail-overseas{

      }
    }
    .order-top{
      width:100%;
      height:80px;
      background:#fff;
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:10px;
      .order-top-left{
        width:20px;
        height:20px;
        background:#ccc;
      }
      .order-top-center{
        .order-top-center-top{
          .order-user-name{
            float:left;
          }
          .order-user-phone{
            float:left;
          }
        }
        .order-top-center-bottom{

        }
      }
    }
    .goods-imformation{
      background:#fff;
      margin-bottom:10px;
      .goods-imformation-top{

      }
    }
    .order-price-contain{
      display:flex;
      justify-content:space-between;
      align-items:center;
      .order-price-left{

      }
      .order-price{

      }
    }
    .order-freight-contain{
      display:flex;
      justify-content:space-between;
      align-items:center;
      .order-freight-left{

      }
      .order-freight{

      }
    }
    .order-totalprice-contain{
      text-align:right;
    }
    .order-num-contain{
      display:flex;
      justify-content:space-between;
      align-items:center;
      .order-num-contain-left{

      }
      .order-num-contain-copy{

      }
    }
    .pay-order-refund-contain{
      .pay-order-refund-time{

      }
      .pay-order-refund-money{

      }
    }
    .goods-imformation-btn-bar{
      position:fixed;
      left:0;
      bottom:0;
      z-index:210;
      width:100%;
      height:40px;
      background:#fff;
    }
  }
</style>