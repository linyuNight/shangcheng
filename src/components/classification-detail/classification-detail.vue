<template>
  <div class="classification-detail">
    <bg></bg>
    <div class="goods-search">
      <div class="goods-search-content-box">
        <div class="goods-search-content">
          <div class="goods-search-input-contain">
            <input class="goods-search-input" v-model="searchMessage" type="text" placeholder="面膜" />
            <div class="clear-btn" v-show="searchMessage" @click="clear"></div>
            <!-- <button class="search-btn">搜索</button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="list-sort-contain">
      <div class="list-sort-left" :class="{active: left}"  @click="selectLeft">
        <div class="list-sort-left-content">销量</div>
      </div>
      <div class="list-sort-right" :class="{active: !left}" @click="selectRight">
        <div class="list-sort-right-content">最新</div>
      </div>
    </div>
    <div class="goods-list clear" v-if="left">
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DH</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>

    </div>
    <div class="goods-list clear" v-if="!left">
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...222</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-text">日本DHC橄榄护唇膏 天然植物无色润唇滋润淡化唇纹防干...</div>
        <div class="goods-item-bottom">
          <div class="goods-item-price">￥38.00</div>
          <div class="goods-item-hassale">已售1235</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import $ from 'jquery'
  import Bg from 'base/bg/bg'

  export default {
    data() {
      return {
        isSearch: false,
        left: true,
        searchMessage: ''
      }
    },
    created(){

    },
    mounted(){
      // $("body").scroll(function(){
      //   console.log('ppp')
      //   var $this =$(this),  
      //   viewH =$(this).height(),//可见高度  
      //   contentH =$(this).get(0).scrollHeight,//内容高度  
      //   scrollTop =$(this).scrollTop();//滚动高度  
      //   //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容  
      //   if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容  
      //   // 这里加载数据.. 
      //     console.log('fffff') 
      //   }  
      // });  

      
      // var container = document.getElementById("app");
      // console.log(container);
      // container.scrollTop = container.scrollHeight;
    },
    methods:{
      selectLeft(){
        this.left = true
      },
      selectRight(){
        this.left = false
      },
      clear(){
        this.searchMessage = ''
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .classification-detail{
    position:absolute; 
    z-index:200;
    width:100%;
    background:#f5f5f5;
    .goods-search{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:50px;
      background:#fff;
      z-index:100;
      .goods-search-content-box{
        .goods-search-content{
          margin:0 auto;
          width:calc(100% - 30px);
          height:50px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          overflow:hidden;
          .goods-search-input-contain{
            position:relative;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            // transition: width .3s linear;
            .goods-search-input{
              width:100%;
              height:30px;
              border-radius:15px;
              background:#eaebed;
              padding:5px 0 5px 30px;
              font-size:13px;
              color:#999999;
              line-height:20px;
              background-image:url(../../common/image/goods-show/search.png);
              background-position:12px center;
              background-size:13px;
              background-repeat:no-repeat;
            }
            .clear-btn{
              position:absolute;
              right:10px;
              top:6px;
              width:18px;
              height:18px;
              background-image:url(../../common/image/classification/close.png);
              background-position:center;
              background-size:18px;
              background-repeat:no-repeat;
            }
            // .search-btn{
            //   position:absolute;
            //   right:-80px;
            //   top:0;
            //   width:60px;
            //   height:30px;
            // }
          }
        }
      }
    }
    .list-sort-contain{
      position:fixed;
      left:0;
      top:50px;
      width:100%;
      height:30px;
      padding-bottom:4px;
      display:flex;
      align-items:center;
      background:#fff;
      z-index:100;
      .list-sort-left,.list-sort-right{
        flex:1;
        text-align:center;
        line-height:26px;
        .list-sort-left-content{
          display:inline-block;
          vertical-align:center;
          height:20px;
          line-height:20px;
          font-size:13px;
          margin-left:30px;
        }
        .list-sort-right-content{
          display:inline-block;
          vertical-align:center;
          height:20px;
          line-height:20px;
          font-size:13px;
          margin-right:30px;
        }
      }
      .active{
        .list-sort-left-content{
          display:inline-block;
          vertical-align:center;
          height:20px;
          line-height:20px;
          color:$red;
          border-bottom:1px solid $red;
        }
        .list-sort-right-content{
          display:inline-block;
          vertical-align:center;
          height:20px;
          line-height:20px;
          color:$red;
          border-bottom:1px solid $red;
        }
      }
    }
    .goods-list{
      margin-top:85px;
      padding:0 5px;
      .goods-item{
        float:left;
        width:49.2%;
        background:#fff;
        margin-bottom:5px;
        &:nth-child(2n){
          float:right;
        }
        .goods-item-pic{
          width:100%;
          height:180px;
          background:#fff;
          borderbottom-1px($grey);
          background-image:url(../../common/image/classification/img19.png);
          background-position:center;
          background-size:contain;
          background-repeat:no-repeat;
        }
        .goods-item-text{
          width:100%;
          height:44px;
          padding:5px 10px;
          line-height:18px;
          font-size:13px;
          color:#000;
          text-align:left;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
        }
        .goods-item-bottom{
          width:100%;
          height:21px;
          padding:2px 10px 10px 10px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          .goods-item-price{
            font-size:14px;
            color:$red;
          }
          .goods-item-hassale{
            font-size:12px;
            transform:scale(.83)
            color:#999;
          }
        }
      }
    }
  }
</style>