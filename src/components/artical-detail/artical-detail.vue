<template>
  <div class="artical-detail">
    <bg></bg>
    <div class="artical-detail-contain-top">
      <div class="artical-detail-contain-top-title">【好物推荐】日本佑天兰滋润保湿面膜，这个冬天你真的很需要它们！！快来砸单吧！！</div>
      <div class="artical-detail-contain-top-center">
        <div class="artical-detail-contain-top-time">11-23 12:36</div>
        <div class="artical-detail-contain-top-num">
          <div class="artical-detail-contain-top-num-left"></div>
          <div class="artical-detail-contain-top-num-right">69187</div>
        </div>
      </div>
      <div class="artical-detail-contain-top-text">adfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱fadfa时代峰峻爱搜附近搜啊法加速破爱f</div>
    </div>
    <div class="artical-detail-contain-center">
      <div class="artical-detail-contain-center-top">
        <div class="artical-detail-contain-center-top-center">
          <div class="artical-detail-contain-center-top-left"></div>
          <div class="artical-detail-contain-center-top-right"></div>
          <div class="artical-detail-contain-center-top-text">相关商品</div>
        </div>
      </div>
      <div class="goods-list">
        <div class="goods-item">
          <div class="goods-pic"></div>
          <div class="goods-item-right">
            <div class="goods-text">商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商</div>
            <div class="goods-item-bottom">
              <div class="goods-price">￥59.00</div>
              <div class="goods-buy">立即购买</div>
            </div>
          </div>
        </div>
        <div class="goods-item">
          <div class="goods-pic"></div>
          <div class="goods-item-right">
            <div class="goods-text">商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商商品名称商品名称商品名称商品名称商品商</div>
            <div class="goods-item-bottom">
              <div class="goods-price">￥59.00</div>
              <div class="goods-buy">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-detail-evaluate-box">
      <div class="artical-detail-contain-center-top">
        <div class="artical-detail-contain-center-top-center">
          <div class="artical-detail-contain-center-top-left"></div>
          <div class="artical-detail-contain-center-top-right"></div>
          <div class="artical-detail-contain-center-top-text">相关评论</div>
        </div>
      </div>
      <div class="evaluate-center">
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
      </div>
      <router-link tag="div" class="evaluate-bottom" to="/articalEvaluateDetail">查看全部评价</router-link>
    </div>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <footer class="artical-detail-footer" ref="footer">
      <div class="tab-item-contain">
        <div class="tab-item" @click="good">
          <div class="tab-item-content">
            <div class="tab-item-pic tab-item-pic1" v-show="!isGood"></div>
            <div class="tab-item-pic tab-item-pic4" v-show="isGood"></div>
            <div class="tab-item-text">165</div>
          </div>
        </div>
      </div>
      <router-link tag="div" class="tab-item-contain" to="/articalEvaluateDetail">
        <div class="tab-item">
          <div class="tab-item-content">
            <div class="tab-item-pic tab-item-pic2"></div>
            <div class="tab-item-text">146</div>
          </div>
        </div>
      </router-link>
      <router-link tag="div" class="tab-item-contain" to="/goodsShow">
        <div class="tab-item">
          <div class="tab-item-content">
            <div class="tab-item-pic tab-item-pic3"></div>
            <div class="tab-item-text">去秒杀</div>
          </div>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  // import Swiper from 'swiper'
  import Bg from 'base/bg/bg'
  import EvaluateItem from 'base/evaluate-item/evaluate-item'
  import ArticalItem from 'base/artical-item/artical-item'
  import {isIOS,isAndroid} from 'huaji-platform'

  export default {
    data() {
      return {
        isGood: false
      }
    },
    created(){
      // this.slidesPerView = parseInt(document.body.clientWidth/108)
    },
    mounted(){
      if(isIOS()){
        this.$refs.footer.style.webkitBackdropFilter = "blur(14px)"
        this.$refs.footer.style.backdropFilter = "blur(14px)"
        this.$refs.footer.style.background = "rgba(255, 255, 255, 0.8)"
      }
    },
    methods: {
      good(){
        this.isGood = !this.isGood
      }
    },
    components: {
      Bg,
      EvaluateItem,
      ArticalItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .artical-detail{
    position:absolute; 
    z-index:200;
    width:100%;
    padding-bottom:50px;
    background:#f5f5f5;
    .artical-detail-contain-top{
      background:#f5f5f5;
      
      .artical-detail-contain-top-title{
        width:100%;
        padding:22px 15px 0;
        font-size:18px;
        color:#000;
        line-height:24px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        background:#fff;
      }
      .artical-detail-contain-top-center{
        width:100%;
        padding:0 15px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-bottom:5px;
        background:#fff;
        .artical-detail-contain-top-time{
          height:33px;
          line-height:33px;
          font-size:12px;
          color:#999999;
        }
        .artical-detail-contain-top-num{
          display:flex;
          justify-content:space-between;
          align-items:center;
          .artical-detail-contain-top-num-left{
            width:13px;
            height:10px;
            background-image:url(../../common/image/find/browse.png);
            background-position:center;
            background-size:contain;
            background-repeat:no-repeat;
            margin-right:5px;
          }
          .artical-detail-contain-top-num-right{
            font-size:12px;
            color:#999999;
          }
        }
      }
      // .artical-detail-contain-top-pic{
      //   width:100%;
      //   height:140px;
      //   background-image:url(../../common/image/artical-detail/img07.png);
      //   background-position:center;
      //   background-size:cover;
      //   background-repeat:no-repeat;
      // }
      .artical-detail-contain-top-text{
        width:100%;
        height:auto;
        padding-bottom:13px;
        margin-bottom:8px;
        background:#fff;
      }
    }
    .artical-detail-contain-center{
      background:#fff;
      padding-bottom:5px;
      margin-bottom:8px;
      .artical-detail-contain-center-top{
        text-align:center;
        .artical-detail-contain-center-top-center{
          position:relative;
          margin:0 auto;
          width:108px;
          height:43px;
          .artical-detail-contain-center-top-left{
            position:absolute;
            left:0;
            top:20px;
            width:15px;
            height:2px;
            background:$red;
          }
          .artical-detail-contain-center-top-right{
            position:absolute;
            right:0;
            top:20px;
            width:15px;
            height:2px;
            background:$red;
          }
          .artical-detail-contain-center-top-text{
            font-size:14px;
            color:#000;
            height:43;
            line-height:43px;
            font-weight:bold;
          }
        }
      }
      .goods-list{
        .goods-item{
          margin:0 auto;
          width:(100% - 15px);
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:10px 0;
          borderbottom-1px($grey)
          &:last-child{
            &:after{
              border-top:none;
            }
          }
          .goods-pic{
            width:75px;
            height:75px;
            background-image:url(../../common/image/goods-show/img02.png);
            background-position:center;
            background-size:contain;
            background-repeat:no-repeat;
          }
          .goods-item-right{
            width:calc(100% - 90px);
            height:75px;
            display:flex;
            flex-direction: column;
            justify-content:space-between;
            align-items:center;
            .goods-text{
              font-size:13px;
              color:#000;
              line-height:16px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 2;
            }
            .goods-item-bottom{
              width:100%;
              display:flex;
              justify-content:space-between;
              align-items:center;
              .goods-price{
                font-size:16px;
                color:$red;
              }
              .goods-buy{
                width:63px;
                height:24px;
                background:$red;
                color:#fff;
                text-align:center;
                line-height:24px;
                font-size:12px;
                border-radius:2px;
              }
            }
          }
        }
      }
    }
    .goods-detail-evaluate-box{
      width:100%;
      background:#fff;
      margin-bottom:10px;
      .artical-detail-contain-center-top-center{
        position:relative;
        margin:0 auto;
        width:108px;
        height:43px;
        text-align:center;
        margin-bottom:-5px;
        .artical-detail-contain-center-top-left{
          position:absolute;
          left:0;
          top:20px;
          width:15px;
          height:2px;
          background:$red;
        }
        .artical-detail-contain-center-top-right{
          position:absolute;
          right:0;
          top:20px;
          width:15px;
          height:2px;
          background:$red;
        }
        .artical-detail-contain-center-top-text{
          font-size:14px;
          color:#000;
          height:43;
          line-height:43px;
          font-weight:bold;
        }
      }
      .evaluate-center{
        // .evaluate-item{
        //   .evaluate-center-top{
        //     display:flex;
        //     justify-content:space-between;
        //     align-items:center;
        //     .evaluate-center-name{

        //     }
        //     .evaluate-center-time{

        //     }
        //   }
        //   .evaluate-center-text{

        //   }
        //   .evaluate-center-pic-list{
        //     .evaluate-center-pic-item{
        //       float:left;
        //       width:100px;
        //       height:100px;
        //       background:#fcf;
        //     }
        //   }
        // }
      }
      .evaluate-bottom{
        width:100%;
        height:40px;
        line-height:40px;
        text-align:center;
        font-size:12px;
        color:#666666;
      }
    }
    .artical-detail-footer{
      bordertop-1px($grey);
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      height:50px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      background:#fff;
      z-index:210;
      .tab-item-contain{
        flex:1;
        height:50px;
      }
      .tab-item{
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        .tab-item-content{
          display:flex;
          justify-content:space-between;
          align-items:center;
          .tab-item-pic{
            display:inline-block;
            width:15px;
            height:15px;
            background-position:center;
            background-size:15px;
            background-repeat:no-repeat;
            margin-right:5px;
          }
          .tab-item-text{
            display:inline-block;
            font-size:12px;
            color:#424242;
          }
          .tab-item-pic1{
            background-image:url(../../common/image/artical-detail/good.png);
          }
          .tab-item-pic2{
            background-image:url(../../common/image/artical-detail/comment2.png);
          }
          .tab-item-pic3{
            background-image:url(../../common/image/artical-detail/seckill.png);
          }
          .tab-item-pic4{
            background-image:url(../../common/image/artical-detail/good2.png);
          }
        }
      }
    }
  }
</style>