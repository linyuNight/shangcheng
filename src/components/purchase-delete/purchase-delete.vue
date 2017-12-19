<template>
  <div class="purchase">
    <bg></bg>
    <header class="goods-detail-header">
      <router-link tag="div" class="goods-detail-header-left" to="/">
        <div class="goods-detail-header-left-pic"></div>
        <div class="goods-detail-header-left-text">海带宝日本代购</div>
      </router-link>
      <div class="goods-detail-header-right" onclick="window.history.go(-1)">
        <div class="goods-detail-header-right-text">完成</div>
      </div>
    </header>
    <div class="goods-list">
      <delete>
        <div class="goods-item">
          <input class="goods-item-input" type="checkbox" name="goods" />
          <!-- <div class="goods-item-input"></div> -->
          <div class="goods-item-pic"></div>
          <div class="goods-item-right">
            <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
            <div class="goods-item-bottom">
              <div class="goods-item-price">￥38.00</div>
              <div class="goods-item-num-contain">
                <div class="goods-item-num-minus" @click="minus"></div>
                <input class="goods-item-num-input" pattern="[0-9]*" v-model="number" @change="checkNum" @click.13="checkNum">
                <div class="goods-item-num-plus" @click="plus"></div>
              </div>
            </div>
          </div>
        </div>
      </delete>
      <delete>
        <div class="goods-item">
          <input class="goods-item-input" type="checkbox" name="goods" />
          <!-- <div class="goods-item-input"></div> -->
          <div class="goods-item-pic"></div>
          <div class="goods-item-right">
            <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
            <div class="goods-item-bottom">
              <div class="goods-item-price">￥38.00</div>
              <div class="goods-item-num-contain">
                <div class="goods-item-num-minus" @click="minus"></div>
                <input class="goods-item-num-input" pattern="[0-9]*" v-model="number" @change="checkNum" @click.13="checkNum">
                <div class="goods-item-num-plus" @click="plus"></div>
              </div>
            </div>
          </div>
        </div>
      </delete>
      
    </div>
    <footer class="purchase-footer">
      <div class="footer-left">
        <input class="total-select" type="checkbox" name="goods" />
        <div class="total-text">全选</div>
      </div>
      <div class="footer-right">
        <div class="submit-btn" onclick="window.history.go(-1)">删除</div>
      </div>
    </footer>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Bg from 'base/bg/bg'
  import Delete from 'base/delete/delete'
  import $ from 'jquery'

  export default {
    data() {
      return {
        number: 1
      }
    },
    created(){

    },
    mounted(){
      this.$nextTick(() => {
        $('.total-select').on("click",function(){
          $('.goods-item-input').prop("checked",$(this)[0].checked)
        })
        $('.goods-item-input').on("click",function(){
          $('.total-select').prop("checked",$('.goods-item-input').length==$('.goods-item-input:checked').length?true:false)
        })
      })
    },
    methods:{
      minus(){
        if(this.number>1){
          this.number--
        }
      },
      plus(){
        this.number++
      },
      checkNum(){
        let reg=/^[1-9]\d*$|^0$/;
        if(this.number < 1 || !reg.test(this.number)){
          this.number = 1
        }
      }
    },
    components: {
      Bg,
      Delete
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./purchase-delete.styl"></style>