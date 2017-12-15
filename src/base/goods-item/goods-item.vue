<template>
  <div class="goods-item">
    <div class="goods-item-pic"></div>
    <div class="goods-item-right">
      <div class="goods-item-text">{{goods.text}}</div>
      <div class="goods-item-bottom">
        <div class="goods-item-price">￥{{goods.price}}</div>
        <div class="goods-item-num">X{{goods.qty}}</div>
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

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';

.goods-item{
  width:100%;
  height:110px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .goods-item-pic{
    width:90px;
    height:90px;
    background:#ffc;
  }
  .goods-item-right{
    width:calc(100% - 90px);
    .goods-item-text{

    }
    .goods-item-bottom{
      display:flex;
      justify-content:space-between;
      align-items:center;
      .goods-item-price{

      }
      .goods-item-num{
        
      }
    }
  }
}
</style>