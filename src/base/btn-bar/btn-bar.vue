<template>
  <!-- <div class="btn-bar">
    
  </div> -->
  <div class="btn-bar clear" v-if="state == 1 || state == 4 || state == 5">
    <div class="submit-btn" v-if="state == 1">立即支付</div>
    <div class="cancel-btn" v-if="state == 1">取消订单</div>
    <div class="see-btn" v-if="state == 4 || state == 5">查看物流</div>
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