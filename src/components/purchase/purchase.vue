<template>
  <div class="purchase">
    <bg>
      <div class="empty-bg-bottom" v-if="isEmpty"></div>
    </bg>
    <header class="goods-detail-header">
      <router-link tag="div" class="goods-detail-header-left" to="/">
        <div class="goods-detail-header-left-pic"></div>
        <div class="goods-detail-header-left-text">海带宝日本代购</div>
      </router-link>
      <router-link tag="div" class="goods-detail-header-right" to="/purchaseDelete" v-if="!isEmpty">
        <div class="goods-detail-header-right-text">编辑</div>
      </router-link>
    </header>
    <div class="goods-list" v-if="!isEmpty">
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
    <footer class="purchase-footer" v-if="!isEmpty">
      <div class="footer-left">
        <input class="total-select" type="checkbox" name="goods" />
        <div class="total-text">全选</div>
      </div>
      <div class="footer-right">
        <div class="footer-right-left">
          <div class="footer-right-left-top">
            <div class="total-price-text">合计：</div>
            <div class="total-price">￥58.00</div>
          </div>
          <div class="footer-right-left-bottom">未含运费</div>
        </div>
        <router-link tag="div" class="submit-btn" to="/confirmationOrder">去支付</router-link>
      </div>
    </footer>
    <div class="empty-page" v-if="isEmpty">
      <div class="empty-round"></div>
      <div class="empty-icon"></div>
      <div class="text-contain">        
        <p class="empty-text1">购物车还是空的，快去选购吧~</p>
      </div>
      <div class="link-btn">去逛逛</div>
    </div>
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
        number: 1,
        isEmpty: true
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./purchase.styl"></style>