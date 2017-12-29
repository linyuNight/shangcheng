<template>
  <div class="transaction-detail">
    <bg></bg>
    <div class="transaction-detail-contain">
      <img class="transaction-detail-pic" src="../../common/image/transaction-detail/success.png" v-if="isSuccess">
      <div class="transaction-detail-text" v-if="isSuccess">支付成功</div>
      <img class="transaction-detail-pic" src="../../common/image/transaction-detail/fail.png" v-if="!isSuccess">
      <div class="transaction-detail-text" v-if="!isSuccess">支付失败</div>
      <div class="btn-contain">
        <router-link tag="div" class="btn-left" to="/orderDetail">查看订单详情</router-link>
        <router-link tag="div" class="btn-right" to="/">返回商场首页</router-link>
      </div>
    </div>
    <div class="erweima-popup-contain">
      <div class="erweima-popup-box">
        <div class="erweima-popup-content">
          <div class="close-btn"></div>
          <div class="erweima-popup-content-top">您还未关注商城公众号哦！</div>
          <img class="erweima-popup-content-erweima" src="../../common/image/make-money/qrcode.png">
          <div class="erweima-popup-content-bottom">长按并识别图中二维码</div>
          <div class="erweima-popup-content-note">关注公众号随时查看订单采购情况</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Bg from 'base/bg/bg'
  import Delete from 'base/delete/delete'
  import $ from 'jquery'

  export default {
    data() {
      return {
        isSuccess: true
      }
    },
    created(){

    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./transaction-detail.styl"></style>