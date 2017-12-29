<template>
  <!-- <div class="btn-bar">
    
  </div> -->
  <div class="btn-bar clear" v-if="state == 1 || state == 3 || state == 4">
    <router-link tag="div" class="submit-btn" to="/transactionDetail" v-if="state == 1">立即支付</router-link>
    <div class="cancel-btn" v-if="state == 1">取消订单</div>
    <router-link tag="div" class="see-btn" to="/logisticsDetails" v-if="state == 3 || state == 4">查看物流</router-link>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import qs from "qs";
import { url, urlapi } from "api/config";

export default {
  props: {
    state: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./btn-bar.styl"></style>