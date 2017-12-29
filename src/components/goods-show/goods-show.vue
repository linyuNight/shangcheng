<template>
  <div class="goods-show">
    <bg></bg>
    <transition name="fade">
      <div class="goods-search-bg" v-if="isSearch"></div>
    </transition>
    <div class="search-bar-contain">
      <div class="return-pic" v-show="isSearch" @click="hideSearchBar"></div>
      <input class="search-bar" type="text" placeholder="请输入商品名称" @focus="focus" ref="searchBar">
      <router-link v-show="!isSearch" tag="div" class="myorder-btn" to="/myOrder">我的订单</router-link>
      <div v-show="isSearch" class="search-btn">搜索</div>
    </div>
    <div class="show-bar-contain"></div>
    <div class="goods-show-content">
      <div class="goods-show-swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link tag="div" class="swiper-div" to="/articalDetail">
              <div class="swiper-div-pic"></div>
              <div class="swiper-div-text">时代峰峻山东if技术都我减肥的搜ifO记佛酸豆角佛山的发的搜集发酸豆角山东你放假水sdsdfsdf豆腐时代峰峻山东if技术都我减肥的搜ifO记佛酸豆角佛山的发的搜集发酸豆角山东你放假水sdsdfsdf豆腐</div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link tag="div" class="swiper-div" to="/articalDetail">
              <div class="swiper-div-pic"></div>
              <div class="swiper-div-text">时代峰峻山东if技术都我减肥的搜ifO记佛酸豆角佛山的发的搜集发酸豆角山东你放假水sdsdfsdf豆腐时代峰峻山东if技术都我减肥的搜ifO记佛酸豆角佛山的发的搜集发酸豆角山东你放假水sdsdfsdf豆腐</div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link tag="div" class="swiper-div" to="/articalDetail">
              <div class="swiper-div-pic"></div>
              <div class="swiper-div-text">sdfasdffasdfasfsafsdf2</div>
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="today-bargain-conatin">
        <div class="today-bargain-top">
          <div class="today-bargain-left">
            <span class="today-bargain-left-l">今日杀价</span><span class="today-bargain-left-r">每日更新</span>
          </div>
          <div class="today-bargain-right">
            <span class="today-bargain-right-l">距结束</span>
            <div class="today-bargain-right-r">
              <div class="today-bargain-right-r-box">{{hours}}</div>
              <span class="today-bargain-right-r-m">:</span>
              <div class="today-bargain-right-r-box">{{minutes}}</div>
              <span class="today-bargain-right-r-m">:</span>
              <div class="today-bargain-right-r-box">{{seconds}}</div>
            </div>
          </div>
        </div>
        <div class="today-bargain-main">
          <div class="today-bargain-goods">
            <div class="today-bargain-goods-pic"></div>
            <div class="today-bargain-goods-right-contain">
              <div class="today-bargain-goods-right">
                <div class="today-bargain-goods-right-top">上点击佛你上点击上点击飞速的佛司机分度搜圣诞节抖擞的惊悚大数据法搜dsfds第就分手都</div>
                <div class="today-bargain-goods-right-bottom">
                  <div class="today-bargain-goods-right-bottom-left">
                    <div class="today-bargain-newprice">￥345345</div>
                    <s class="today-bargain-oldprice">￥345345</s>
                  </div>
                  <div class="today-bargain-goods-right-bottom-right">立即抢购</div>
                </div>
              </div>
            </div>
          </div>
          <div class="today-bargain-goods">
            <div class="today-bargain-goods-pic"></div>
            <div class="today-bargain-goods-right-contain">
              <div class="today-bargain-goods-right">
                <div class="today-bargain-goods-right-top">上点击佛你上点击上点击飞速的佛司机分度搜圣诞节抖擞的惊悚大数据法搜dsfds第就分手都</div>
                <div class="today-bargain-goods-right-bottom">
                  <div class="today-bargain-goods-right-bottom-left">
                    <div class="today-bargain-newprice">￥345345</div>
                    <s class="today-bargain-oldprice">￥345345</s>
                  </div>
                  <div class="today-bargain-goods-right-bottom-right">立即抢购</div>
                </div>
              </div>
            </div>
          </div>
          <div class="today-bargain-goods">
            <div class="today-bargain-goods-pic"></div>
            <div class="today-bargain-goods-right-contain">
              <div class="today-bargain-goods-right">
                <div class="today-bargain-goods-right-top">上点击佛你上点击上点击飞速的佛司机分度搜圣诞节抖擞的惊悚大数据法搜dsfds第就分手都</div>
                <div class="today-bargain-goods-right-bottom">
                  <div class="today-bargain-goods-right-bottom-left">
                    <div class="today-bargain-newprice">￥345345</div>
                    <s class="today-bargain-oldprice">￥345345</s>
                  </div>
                  <div class="today-bargain-goods-right-bottom-right">立即抢购</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="goods-platform-list">
        <div class="goods-platform-item">
          <div class="goods-platform-pic">
            <div class="goods-platform-pic-triangle"></div>
          </div>
          <div class="goods-list clear">
            <div class="goods-list-contain">
              <div class="goods-list-box clear">
                <router-link tag="div" class="goods-item" to="/goodsDetail">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </router-link>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-content-more">
                      <div class="goods-item-content-center">
                        <p class="goods-item-content-center-top">查看全部</p>
                        <p class="goods-item-content-center-bottom">すべての</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-platform-item">
          <div class="goods-platform-pic">
            <div class="goods-platform-pic-triangle"></div>
          </div>
          <div class="goods-list clear">
            <div class="goods-list-contain">
              <div class="goods-list-box clear">
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-text">撒旦法开始都批发价我时代峻峰我上点击飞速的颇丰酸豆角分度搜父节点水豆腐的房价松动</div>
                    <div class="goods-item-price">￥8989</div>
                  </div>
                </div>
                <div class="goods-item">
                  <div class="goods-item-content">
                    <div class="goods-item-content-more">
                      <div class="goods-item-content-center">
                        <p class="goods-item-content-center-top">查看全部</p>
                        <p class="goods-item-content-center-bottom">すべての</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>


      

    </div>
    <div class="goods-show-footer"></div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Swiper from 'swiper'
  import $ from 'jquery'
  import Bg from 'base/bg/bg'

  export default {
    data() {
      return {
        isSearch: false,
        mySwiper: {},
        date: '2017/12/22 15:10:11',
        hours: '00',
        minutes: '00',
        seconds: '00'
      }
    },
    created(){
      setInterval(()=>{
        this.getTime()
      },500)
      // this.$refs.searchBar.focus()
      // this.slidesPerView = parseInt(document.body.clientWidth/108)
    },
    mounted(){
      this.$nextTick(() => {
        this.mySwiper = new Swiper('.swiper-container', {
          direction:'vertical',
          autoplay: 2500,//可选选项，自动滑动
          loop:true,
          onlyExternal: true,
          preventClicks : false
        })
      })
      
      // this.$nextTick(() => {
      //   this.$refs.searchBar.focus()
      // })
      
      // var that = this
      // var swiper = new Swiper('.swiper-container', {
      //   slidesPerView: that.slidesPerView,
      //   pagination: '.swiper-pagination',
      //   paginationClickable: true,
      //   observer:true, //修改swiper自己或子元素时，自动初始化swiper
      //   observeParents:true,//修改swiper的父元素时，自动初始化swiper
      //   freeMode : true,
      // });

      for(let i=0;i<$('.goods-list-box').length;i++){
        $('.goods-list-box').eq(i).css('width',$('.goods-list-box').eq(i).children().length*112)
      }
    },
    methods:{
      focus(){
        this.isSearch = true
      },
      hideSearchBar(){
        this.isSearch = false
      },
      getTime(){
        let EndTime = new Date(this.date);
        let NowTime = new Date();
        let t = EndTime.getTime() - NowTime.getTime();
        // let d = 0;
        let h = 0;
        let m = 0;
        let s = 0;

        h = Math.floor(t/1000/60/60);
        if(h < 10 && h > 0){
          h = '0'+ h.toString();
        }else if(h <= 0){
          h = '00'
        }
        
        m = Math.floor(t/1000/60%60);
        if(m < 10 && m > 0){
          m = '0' + m.toString();
        }else if(m <= 0){
          m = '00'
        }

        s = Math.floor(t/1000%60);
        if(s < 10 && s > 0){
          s ='0'+ s.toString();
        }else if(s <= 0){
          s = '00'
        }
     
        this.hours = h
        this.minutes = m
        this.seconds = s
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./goods-show.styl"></style>