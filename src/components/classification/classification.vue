<template>
  <div class="classification">
    <bg></bg>
    <transition name="fade">
      <div class="goods-search-bg" v-show="isSearch"></div>
    </transition>
    <div class="goods-search">
      <div class="goods-search-content-box">
        <div class="goods-search-content">
          <div class="goods-search-input-contain">
            <input class="goods-search-input" v-model="searchMessage" @focus="focus" @blur="blur" type="text" placeholder="请输入商品或品牌名称" />
            <div class="clear-btn" v-show="searchMessage" @click="clear"></div>
            <!-- <button class="search-btn">搜索</button> -->
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="goods-list clear" v-show="!isSearch">
          <div class="goods-list-contain">
            <div class="goods-list-box clear">
              <div class="goods-item">
                <div class="goods-item-content" @click="show(1)" :class="{'goods-item-content-active': select==1}">基础护肤</div>
              </div>
              <div class="goods-item">
                <div class="goods-item-content" @click="show(2)" :class="{'goods-item-content-active': select==2}">个性彩妆</div>
              </div>
              <div class="goods-item">
                <div class="goods-item-content" @click="show(3)" :class="{'goods-item-content-active': select==3}">身体护理</div>
              </div>
              <div class="goods-item">
                <div class="goods-item-content" @click="show(4)" :class="{'goods-item-content-active': select==4}">健康养护</div>
              </div>

            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- <div v-for="item in items" class="classification-item">
      <div class="goods-list clear">
        <router-link v-for="type in item" tag="div" class="goods-item" to="/classificationDetail">
          <div class="goods-pic goods-pic1" :style="{backgroundImage:'url('+type.url+')'}"></div>
          <div class="goods-text">口红</div>
        </router-link>
        
      </div>
    </div> -->
    <div class="classification-item-bg">
      <div class="classification-item" v-show="select == 1">
        <div class="goods-list clear">
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic1"></div>
            <div class="goods-text">唇部护理</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic2"></div>
            <div class="goods-text">防晒</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic3"></div>
            <div class="goods-text">化妆水</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic4"></div>
            <div class="goods-text">面膜</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic5"></div>
            <div class="goods-text">乳液</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic6"></div>
            <div class="goods-text">洁面</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic7"></div>
            <div class="goods-text">眼霜&nbsp;眼膜</div>
          </router-link>
        </div>
      </div>
      <div class="classification-item" v-show="select == 2">
        <div class="goods-list clear">
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic8"></div>
            <div class="goods-text">口红</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic9"></div>
            <div class="goods-text">BB霜</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic10"></div>
            <div class="goods-text">粉饼</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic11"></div>
            <div class="goods-text">隔离</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic12"></div>
            <div class="goods-text">腮红</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic13"></div>
            <div class="goods-text">睫毛膏</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic14"></div>
            <div class="goods-text">粉底液</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic15"></div>
            <div class="goods-text">眼线</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic16"></div>
            <div class="goods-text">眼影</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic17"></div>
            <div class="goods-text">卸妆</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic18"></div>
            <div class="goods-text">彩妆工具</div>
          </router-link>
        </div>
      </div>
      <div class="classification-item" v-show="select == 3">
        <div class="goods-list clear">
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic19"></div>
            <div class="goods-text">护手霜</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic20"></div>
            <div class="goods-text">身体乳</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic21"></div>
            <div class="goods-text">口腔护理</div>
          </router-link>
        </div>
      </div>
      <div class="classification-item" v-show="select == 4">
        <div class="goods-list clear">
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic22"></div>
            <div class="goods-text">驱寒止痛</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic23"></div>
            <div class="goods-text">清肺止咳</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic24"></div>
            <div class="goods-text">眼部护理</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic25"></div>
            <div class="goods-text">肠胃养护</div>
          </router-link>
          <router-link tag="div" class="goods-item" to="/classificationDetail">
            <div class="goods-pic goods-pic26"></div>
            <div class="goods-text">宝宝专区</div>
          </router-link>
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
        items:[],
        select:1,
        searchMessage:''
      }
    },
    created(){
      // let item = []
      // let num = [7,11,3,5]
      // for(let j=0;j<4;j++){
      //   item = []
      //   for(let i=0;i<num[j];i++){
      //     let temp = 8 + i
      //     if(temp < 10){
      //       temp = '0' + temp.toString()
      //     }
      //     let itemjson = {
      //       url: '../../common/image/classification/img' + temp + '.png'
      //     }
      //     item.push(itemjson)
      //   }
      //   this.items.push(item)
      // }
      // console.log(this.items)
    },
    mounted(){
      for(let i=0;i<$('.goods-list-box').length;i++){
        $('.goods-list-box').eq(i).css('width',$('.goods-list-box').eq(i).children().length*96)
      }
    },
    methods:{
      focus(){
        this.isSearch = true
      },
      blur(){
        this.isSearch = false
      },
      show(e){
        this.select = e
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

  .classification{
    // width:100%;
    // height:100%;
    // overflow:scroll;
    // -webkit-overflow-scrolling : touch;
    // background:#f5f5f5;
    width:100%;
    height:100%;
    z-index:0;
    // padding-top:98px;
    // padding-bottom:50px;
    background:#f2f2f2;
    .goods-search-bg{
      position:fixed;
      width:100%;
      height:100%;
      background:#fff;
      z-index:75;
    }
    .goods-search{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:93px;
      background:#fff;
      z-index:100;
      .goods-search-content-box{
        borderbottom-1px($grey)
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
      .goods-list{
        width:100%;
        height:42px;
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
            height:42px;
            overflow-x:scroll;
            overflow-y:hidden;
            padding:9px 15px;
            .goods-item{
              float:left;
              width:96px;
              height:24px;
              .goods-item-content{
                display:inline-block;
                // width:60px;
                height:24px;
                text-align:center;
                line-height:20px;
                font-size:12px;
                color:#666666;
              }
              &:last-child{
                width:60px;
              }
              .goods-item-content-active{
                color:#000;
                font-weight:bold;
                border-bottom:2px solid #e51c23;
              }
            }
          }
        }
      }
    }
    .classification-item-bg{
      padding-top:98px;
      padding-bottom:50px;
      background:#f2f2f2;
      .classification-item{
        padding-top:23px;
        background:#fff;
        .goods-list{
          font-size:0;
          .goods-item{
            display:inline-block;
            width:25%;
            // &:nth-child(4n){
            //   margin-right:0;
            // }
            .goods-pic{
              margin:0 auto;
              width:75px;
              height:75px;
              background:#f5f5f5;
              border-radius:50%;
              background-position:center;
              background-size:75px;
              background-repeat:no-repeat;
            }
            .goods-text{
              text-align:center;
              height:30px;
              line-height:30px;
              margin-bottom:15px;
              font-size:12px;
            }
            .goods-pic1{
              background-image:url(../../common/image/classification/img19.png);
            }
            .goods-pic2{
              background-image:url(../../common/image/classification/img20.png);
            }
            .goods-pic3{
              background-image:url(../../common/image/classification/img21.png);
            }
            .goods-pic4{
              background-image:url(../../common/image/classification/img22.png);
            }
            .goods-pic5{
              background-image:url(../../common/image/classification/img23.png);
            }
            .goods-pic6{
              background-image:url(../../common/image/classification/img24.png);
            }
            .goods-pic7{
              background-image:url(../../common/image/classification/img25.png);
            }
            .goods-pic8{
              background-image:url(../../common/image/classification/img08.png);
            }
            .goods-pic9{
              background-image:url(../../common/image/classification/img09.png);
            }
            .goods-pic10{
              background-image:url(../../common/image/classification/img10.png);
            }
            .goods-pic11{
              background-image:url(../../common/image/classification/img11.png);
            }
            .goods-pic12{
              background-image:url(../../common/image/classification/img12.png);
            }
            .goods-pic13{
              background-image:url(../../common/image/classification/img13.png);
            }
            .goods-pic14{
              background-image:url(../../common/image/classification/img14.png);
            }
            .goods-pic15{
              background-image:url(../../common/image/classification/img15.png);
            }
            .goods-pic16{
              background-image:url(../../common/image/classification/img16.png);
            }
            .goods-pic17{
              background-image:url(../../common/image/classification/img17.png);
            }
            .goods-pic18{
              background-image:url(../../common/image/classification/img18.png);
            }
            .goods-pic19{
              background-image:url(../../common/image/classification/img31.png);
            }
            .goods-pic20{
              background-image:url(../../common/image/classification/img32.png);
            }
            .goods-pic21{
              background-image:url(../../common/image/classification/img33.png);
            }
            .goods-pic22{
              background-image:url(../../common/image/classification/img26.png);
            }
            .goods-pic23{
              background-image:url(../../common/image/classification/img27.png);
            }
            .goods-pic24{
              background-image:url(../../common/image/classification/img28.png);
            }
            .goods-pic25{
              background-image:url(../../common/image/classification/img29.png);
            }
            .goods-pic26{
              background-image:url(../../common/image/classification/img30.png);
            }
          }
        }
      }
    }
  }
</style>