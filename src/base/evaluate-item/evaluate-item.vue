<template>
  <div class="evaluate-item">
    <div class="evaluate-content">
      <div class="evaluate-center-top">
        <div class="evaluate-center-name">用***名</div>
        <div class="evaluate-center-time">2017-11-24</div>
      </div>
      <div class="evaluate-center-text">挺不错的，发货速度也快，好评。挺不错的，发货速度也挺不错的，发货速度也挺不错的，发货速度也挺不错的，发货速度也挺不错的，发货速度也。</div>
      <!-- <div class="evaluate-center-pic-list clear">
        <div class="evaluate-center-pic-item"></div>
        <div class="evaluate-center-pic-item"></div>
      </div> -->
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
import qs from "qs";
import { url, urlapi } from "api/config";

export default {
  // props: {
  //   goods: {
  //     type: Object,
  //     default: {}
  //   }
  // }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';

.evaluate-item{
  margin:0 auto;
  width:100%;
  background:#fff;
  padding:0 15px;
  &:last-child{
    .evaluate-content:after{
      border-top:none;
    }
  }
  .evaluate-content{
    width:100%;
    padding:15px 0;
    borderbottom-1px($grey)
    // &:first-child{
    //   padding-top:0;
    // }
    .evaluate-center-top{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:8px;
      .evaluate-center-name{
        font-size:12px;
        color:#666666;
      }
      .evaluate-center-time{
        font-size:12px;
        color:#666666;
      }
    }
    .evaluate-center-text{
      line-height:18px;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // -webkit-box-orient: vertical;
      // display: -webkit-box;
      // -webkit-line-clamp: 2;
      font-size:13px;
      color:#000;
    }
    // .evaluate-center-pic-list{
    //   .evaluate-center-pic-item{
    //     float:left;
    //     width:100px;
    //     height:100px;
    //     background:#fcf;
    //   }
    // }
  }
}
</style>