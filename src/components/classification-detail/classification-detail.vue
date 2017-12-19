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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./classification-detail.styl"></style>