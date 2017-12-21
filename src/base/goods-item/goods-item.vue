<template>
  <div class="goods-item">
    <div class="goods-item-pic"></div>
    <div class="goods-item-right">
      <div class="goods-item-text">{{goods.text}}</div>
      <div class="goods-item-bottom">
        <div class="goods-item-price">￥{{goods.price}}</div>
        <div class="goods-item-num"><img class="goods-item-num-pic" src="../../common/image/purchase/quantity.png">{{goods.qty}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import qs from "qs";
import { url, urlapi } from "api/config";

export default {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./goods-item.styl"></style>