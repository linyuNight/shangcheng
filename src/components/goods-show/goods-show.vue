<template>
  <div class="goods-show">
    <bg></bg>
    <transition name="fade">
      <div class="goods-search-bg" v-if="isSearch"></div>
    </transition>
    <div class="search-bar-contain">
      <input class="search-bar" type="text" placeholder="请输入商品名称" @focus="focus" @blur="blur" ref="searchBar">
      <router-link v-if="!isSearch" tag="div" class="myorder-btn" to="/myOrder">我的订单</router-link>
      <div v-if="isSearch" class="search-btn">搜索</div>
    </div>
    <div class="show-bar-contain">
      <div class="show-contain">日本当地门店直采q</div>
      <div class="show-contain">日本直邮20元不限重</div>
      <div class="show-contain">100%保真假一赔十</div>
    </div>
    <div class="goods-show-content">
      <div class="goods-show-swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link tag="div" class="swiper-div" to="/articalDetail">
              <div class="swiper-div-pic"></div>
              <div class="swiper-div-text">时代峰峻山东if技术都我减肥的搜ifO记佛酸豆角佛山的发的搜集发酸豆角山东你放假水sdsdfsdf豆腐</div>
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link tag="div" class="swiper-div" to="/articalDetail">
              <div class="swiper-div-pic"></div>
              <div class="swiper-div-text">sdfasdffasdfasfsafsdf2</div>
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
        date: '2017/12/14 15:10:11',
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
      blur(){
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .goods-show{
    position:absolute; 
    width:100%;
    height:100%;
    z-index:0;
    background:#f2f2f2;
    .goods-search-bg{
      position:fixed;
      width:100%;
      height:100%;
      background:#f2f2f2;
      z-index:75;
    }
    .search-bar-contain{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:43px;
      background:#fff;
      display:flex;
      justify-content:space-between;
      align-items:center;
      z-index:100;
      padding:0 15px;
      .search-bar{
        width:calc(100% - 90px);
        height:27px;
        line-height:17px;
        padding:5px 0;
        background-color:#eaebed;
        border-radius:27px;
        padding-left:32px;
        font-size:13px;
        color:#999999;
        background-image:url(../../common/image/goods-show/search.png);
        background-position:12px center;
        background-size:13px;
        background-repeat:no-repeat;
      }
      .myorder-btn{
        extend-click()
        width:70px;
        height:27px;
        line-height:27px;
        text-align:right;
        font-size:13px;
        color:#000;
        background-image:url(../../common/image/goods-show/order.png);
        background-position:0 center;
        background-size:14px 17px;
        background-repeat:no-repeat;
      }
      .search-btn{
        extend-click()
        width:70px;
        height:27px;
        line-height:27px;
        text-align:center;
        font-size:13px;
        color:#fff;
        background:$red;
        border-radius:13.5px;
      }
    }
    .show-bar-contain{
      margin-top:43px;
      width:100%;
      height:90px;
      background:$yellow;
      display:flex;
      justify-content:space-between;
      align-items:center;
      z-index:50;
      .show-contain{
        width:30%;
        height:80px;
        background:#fff;
      }
    }
    .goods-show-content{
      width:100%;
      height:auto;
      .goods-show-swiper{
        width:100%;
        height:50px;
        background:#fff;
        padding-right:15px;
        margin-bottom:10px;
        .swiper-div{
          width:100%;
          height:50px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:#fff;
          .swiper-div-pic{
            width:110px;
            height:50px;
            background-image:url(../../common/image/goods-show/img01.png);
            background-position:center;
            background-size:contain;
            background-repeat:no-repeat;
          }
          .swiper-div-text{
            width:calc(100% - 125px);
            line-height:19px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
          }
        }
      }
      .today-bargain-conatin{
        width:100%;
        padding-left:15px;
        height:auto;
        background:#fff;
        margin-bottom:10px;
        .today-bargain-top{
          width:100%;
          height:43px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 15px;
          borderbottom-1px($grey)
          .today-bargain-left{
            .today-bargain-left-l{
              font-size:14px;
              color:#000;
              margin-right:6px;
            }
            .today-bargain-left-r{
              font-size:12px;
              color:#999;
            }
          }
          .today-bargain-right{
            .today-bargain-right-l{
              font-size:12px;
              color:#999;
              margin-right:6px;
            }
            .today-bargain-right-r{
              display:inline-block;
            }
              .today-bargain-right-r-box{
                display:inline-block;
                width:16px;
                height:16px;
                border-radius:2px;
                background:#424242;
                color:#fff;
                font-size:12px;
                line-height:16px;
                text-align:center;
              }
              .today-bargain-right-r-m{
                display:inline-block;
              }
          }
        }
        .today-bargain-main{
          width:100%;
          height:auto;
          .today-bargain-goods{
            width:100%;
            height:95px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .today-bargain-goods-pic{
              width:75px;
              height:75px;
              background-image:url(../../common/image/goods-show/img02.png);
              background-position:center;
              background-size:contain;
              background-repeat:no-repeat;
            }
            .today-bargain-goods-right-contain{
              height:95px;
              padding:10px 15px 10px 0;
              width:calc(100% - 105px);
              borderbottom-1px($grey)
              .today-bargain-goods-right{
                position:relative;
                width:100%;
                height:75px;
                margin-right:15px;
                .today-bargain-goods-right-top{
                  position:absolute;
                  left:0;
                  top:0;
                  width:100%;
                  font-size:13px;
                  color:#000;
                  line-height:18px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -webkit-box-orient: vertical;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                }
                .today-bargain-goods-right-bottom{
                  position:absolute;
                  left:0;
                  bottom:0;
                  width:100%;
                  display:flex;
                  justify-content:space-between;
                  align-items:center;
                  .today-bargain-goods-right-bottom-left{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                  }
                    .today-bargain-newprice{
                      color:$red;
                      font-size:16px;
                      margin-right:6px;
                      margin-top:8px;
                    }
                    .today-bargain-oldprice{
                      color:#999999;
                      font-size:12px;
                      margin-top:12px;
                    }
                  .today-bargain-goods-right-bottom-right{
                    extend-click();
                    width:63px;
                    height:24px;
                    background-color:$red;
                    color:#fff;
                    font-size:12px;
                    text-align:center;
                    line-height:24px;
                  }
                }
              }
            }
            &:last-child{
              .today-bargain-goods-right-contain{
                border-top:none;
              }
            }
          }
          
        }
      }
      .goods-platform-list{
        width:100%;
        height:auto;
        .goods-platform-item{
          margin:0 auto;
          width:calc(100% - 20px);
          height:auto;
          background:#fff;
          margin-bottom:10px;
          box-shadow:0 1px 4px rgba(150,150,150,.3)
          .goods-platform-pic{
            position:relative;
            width:100%;
            height:180px;
            background-image:url(../../common/image/goods-show/banner.png);
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
            .goods-platform-pic-triangle{
              position:absolute;
              left:0;
              right:0;
              bottom:0;
              margin:auto;
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
            }
          }
          .goods-list{
            width:100%;
            height:181px;
            overflow-y: hidden;
            .goods-list-contain{
              height: 100%;
              -webkit-box-sizing: content-box;
              box-sizing: content-box;
              overflow-x: scroll;
              overflow-y: hidden;
              -webkit-overflow-scrolling: touch;
              padding-bottom: 20px;
              .goods-list-box{
                height:181px;
                overflow-x:scroll;
                overflow-y:hidden;
                padding:10px;
                .goods-item{
                  float:left;
                  width:110px;
                  height:161px;
                  .goods-item-content{
                    width:100px;
                    height:161px;
                    .goods-item-pic{
                      width:100px;
                      height:100px;
                      background-image:url(../../common/image/goods-show/img04.png);
                      background-position:center;
                      background-size:contain;
                      background-repeat:no-repeat;
                    }
                    .goods-item-text{
                      width:100%;
                      font-size:12px;
                      color:#000;
                      margin:5px 0;
                      padding:0 8px;
                      min-height:29px;
                      line-height:14px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      -webkit-box-orient: vertical;
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                    }
                    .goods-item-price{
                      height:20px;
                      line-height:20px;
                      text-align:center;
                      color:$red;
                      font-size:14px;
                    }
                    .goods-item-content-more{
                      width:100px;
                      height:100px;
                      background:#f2f2f2;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      .goods-item-content-center{
                        font-size:13px;
                        color:#666;
                        .goods-item-content-center-top{
                          height:26px;
                          line-height:26px;
                          borderbottom-1px(#ccc)
                        }
                        .goods-item-content-center-bottom{
                          height:25px;
                          line-height:25px;
                        }
                      }
                    }
                  }
                  &:last-child{
                    width:100px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .goods-show-footer{
      width:100%;
      height:50px;
    }
  }
</style>