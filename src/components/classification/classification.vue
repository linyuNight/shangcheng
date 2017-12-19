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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./classification.styl"></style>