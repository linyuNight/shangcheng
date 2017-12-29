<template>
  <div class="logistics-details">
    <bg></bg>
    <header class="goods-detail-header">
      <router-link tag="div" class="goods-detail-header-left" to="/">
        <div class="goods-detail-header-left-pic"></div>
        <div class="goods-detail-header-left-text">海带宝日本代购</div>
      </router-link>
      <router-link tag="div" class="goods-detail-header-right" to="/">
        <div class="goods-detail-header-right-text">继续购物</div>
        <div class="goods-detail-header-right-pic"></div>
      </router-link>
    </header>
    <div class="logistics-details-order-num">海外快件单号：201712120707007</div>
    <div class="box-list clear">
      <div class="box-list-contain">
        <div class="box-list-box clear">
          <div class="box-item">
            <div class="box-item-content" @click="show(1)" :class="{'box-item-content-active': select==1}">XJ201711097267851</div>
          </div>
          <div class="box-item">
            <div class="box-item-content" @click="show(2)" :class="{'box-item-content-active': select==2}">XJ201711097267851</div>
          </div>
          <div class="box-item">
            <div class="box-item-content" @click="show(3)" :class="{'box-item-content-active': select==3}">XJ201711097267851</div>
          </div>
          <div class="box-item">
            <div class="box-item-content" @click="show(4)" :class="{'box-item-content-active': select==4}">XJ201711097267851</div>
          </div>
        </div>
      </div>
    </div>
    <div class="logistics-list" v-show="select == 1">
      <div class="logistics-item clear logistics-item-active">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架1</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
    </div>
    <div class="logistics-list" v-show="select == 2">
      <div class="logistics-item clear logistics-item-active">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架2</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
    </div>
    <div class="logistics-list" v-show="select == 3">
      <div class="logistics-item clear logistics-item-active">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架3</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
    </div>
    <div class="logistics-list" v-show="select == 4">
      <div class="logistics-item clear logistics-item-active">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架4</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
        </div>
      </div>
      <div class="logistics-item clear">
        <div class="logistics-item-left">
          <div class="logistics-item-left-text">12-09&nbsp;&nbsp;14:23</div>
          <div class="logistics-item-left-point"></div>
        </div>
        <div class="logistics-item-right">
          <div class="logistics-item-right-text">日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架日本大阪仓库中心上架</div>
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
        select:1,
      }
    },
    mounted(){
      for(let i=0;i<$('.box-list-box').length;i++){
        $('.box-list-box').eq(i).css('width',$('.box-list-box').eq(i).children().length*161)
      }
    },
    methods:{
      show(e){
        this.select = e
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./logistics-details.styl"></style>