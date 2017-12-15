<template>
  <router-link tag="div" class="artical-item" to="/articalDetail">
    <div class="artical-item-left"></div>
    <div class="artical-item-right">
      <div class="artical-item-right-top">【采购头条】刚刚门店采购，遇到一个帅哥收银，好想店采购，遇到一个帅哥收银，好想店采购，遇到一个帅哥收银，好想店采购，遇到一个帅哥收银，好想店采购，遇到一个帅哥收银，好想店采购，遇到一个帅哥收银，好想店采购，遇到一个帅哥收银，好想要电话号码...</div>
      <div class="artical-item-right-bottom">
        <div class="artical-item-time">11-23 12:36</div>
        <div class="artical-item-num">
          <div class="artical-item-num-right">
            <div class="artical-item-num-left-left"></div>
            <div class="artical-item-num-left-right">435</div>
          </div>
          <div class="artical-item-num-left">
            <div class="artical-item-num-left-left"></div>
            <div class="artical-item-num-left-right">113243</div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
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

.artical-item{
  width:100%;
  height:90px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:#fff;
  padding:10px 15px;
  margin-bottom:8px;
  &:last-child{
    margin-bottom:0;
  }
  .artical-item-left{
    width:90px;
    height:70px;
    background-image:url(../../common/image/find/img06.png);
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
  }
  .artical-item-right{
    width:calc(100% - 100px);
    height:70px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    .artical-item-right-top{
      width:100%;
      font-size:14px;
      color:#000;
      font-weight:bold;
      line-height:18px;
      text-align:left;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
    .artical-item-right-bottom{
      width:100%;
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:12px;
      color:#999999;
      .artical-item-time{

      }
      .artical-item-num{
        font-size:0;
        .artical-item-num-right{
          float:right;
          display:flex;
          justify-content:space-between;
          align-items:center;
          .artical-item-num-left-left{
            width:13px;
            height:10px;
            background-image:url(../../common/image/find/browse.png);
            background-position:center;
            background-size:contain;
            background-repeat:no-repeat;
            margin-right:5px;
          }
          .artical-item-num-left-right{
            font-size:12px;
          }
        }
        .artical-item-num-left{
          float:right;
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-right:19px;
          .artical-item-num-left-left{
            width:13px;
            height:10px;
            background-image:url(../../common/image/find/comment.png);
            background-position:center;
            background-size:contain;
            background-repeat:no-repeat;
            margin-right:5px;
          }
          .artical-item-num-left-right{
            font-size:12px;
          }
        }
      }
    }
  }
}
</style>