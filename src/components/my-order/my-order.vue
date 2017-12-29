<template>
  <div class="my-order">
    <bg></bg>
    <div class="my-order-top">
      <div class="my-order-tab" :class="{'my-order-tab-active': selectTopTab == 0}" @click="setTopTap(0)">
        <div class="my-order-tab-text">全部</div>
      </div>
      <div class="my-order-tab" :class="{'my-order-tab-active': selectTopTab == 1}" @click="setTopTap(1)">
        <div class="my-order-tab-text">待付款</div>
      </div>
      <div class="my-order-tab" :class="{'my-order-tab-active': selectTopTab == 2}" @click="setTopTap(2)">
        <div class="my-order-tab-text">采购中</div>
      </div>
      <div class="my-order-tab" :class="{'my-order-tab-active': selectTopTab == 3}" @click="setTopTap(3)">
        <div class="my-order-tab-text">已发货</div>
      </div>
      <div class="my-order-tab" :class="{'my-order-tab-active': selectTopTab == 4}" @click="setTopTap(4)">
        <div class="my-order-tab-text">已签收</div>
      </div>
    </div>
    <div class="my-order-list">
      <div class="my-order-item" v-for="order in orderList" :key="order.state" v-show="order.state == selectTopTab || selectTopTab == 0">
        <div class="my-order-item-top" @click="loadDetail(order)">
          <div class="my-order-number">订单号&nbsp;&nbsp;{{order.orderNum}}</div>
          <div class="my-order-state">{{order.state | setState}}</div>
        </div>
        <div class="goods-list" @click="loadDetail(order)">

          <!-- <div class="goods-item" v-for="goods in order.goodsList">
            <div class="goods-item-pic"></div>
            <div class="goods-item-right">
              <div class="goods-item-text">{goods.text}</div>
              <div class="goods-item-bottom">
                <div class="goods-item-price">￥{goods.price}</div>
                <div class="goods-item-num">X{goods.qty}</div>
              </div>
            </div>
          </div> -->
          <goods-item v-for="goods in order.goodsList" :key="goods.text" :goods="goods"></goods-item>

        </div>
        <div class="goods-price-contain" @click="loadDetail(order)"><span class="goods-price-contain-text-left">共{{order.goodsList | calculateNum}}件商品</span><span class="goods-price-contain-text-center">合计：</span><span class="goods-price-contain-text-right">￥827</span><span class="goods-price-contain-text-note">（含运费￥20.00）</span></div>
        <!-- <div class="my-order-item-bottom clear">
          <div class="submit-btn" v-if="order.state == 1">立即支付</div>
          <div class="cancel-btn" v-if="order.state == 1">取消订单</div>
          <div class="see-btn" v-if="order.state == 4 || order.state == 5">查看物流</div>
        </div> -->
        <btn-bar :state="order.state"></btn-bar>
      </div>
    </div>
    <router-link tag="div" class="return-goods-show" to="/goodsShow"></router-link>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import GoodsItem from 'base/goods-item/goods-item'
  import BtnBar from 'base/btn-bar/btn-bar'
  import Bg from 'base/bg/bg'

  export default {
    data() {
      return {
        selectTopTab: 0,
        orderState: 0,
        orderList: [
          {
            state: 1,
            orderNum:'rfg4619491',
            goodsList:[
              {
                text:'shfiosdhi时代峰峻噢时代峰峻啥都搜地方水豆腐是否 的还是覅偶三点后啥都啥都还是丢是USDhiudsh1',
                price:'2334',
                qty:12
              },
              {
                text:'shfiosdhiudsh2',
                price:'2334',
                qty:12
              }
            ]
          },
          {
            state: 2,
            orderNum:'rfg4619492',
            goodsList:[
              {
                text:'shfiosdhiudsh3',
                price:'2334',
                qty:12
              },
              {
                text:'shfiosdhiudsh4',
                price:'2334',
                qty:12
              }
            ]
          },
          {
            state: 3,
            orderNum:'rfg4619493',
            goodsList:[
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              },
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              }
            ]
          },
          {
            state: 4,
            orderNum:'rfg4619494',
            goodsList:[
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              },
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              }
            ]
          },
          {
            state: 5,
            orderNum:'rfg461949',
            goodsList:[
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              },
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              }
            ]
          },
          {
            state: 6,
            orderNum:'rfg461949',
            goodsList:[
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              },
              {
                text:'shfiosdhiudsh',
                price:'2334',
                qty:12
              }
            ]
          }
        ]
      }
    },
    created(){
      // let a = setInterval(()=>{
      //   let obj = {
      //     state: 6,
      //     order:'rfg461949',
      //     goodsList:[
      //       {
      //         text:'shfiosdhiudsh',
      //         price:'2334',
      //         qty:12
      //       },
      //       {
      //         text:'shfiosdhiudsh',
      //         price:'2334',
      //         qty:12
      //       }
      //     ]
      //   }
      //   this.orderList.push(obj)
      // },1000)
    },
    methods:{
      loadDetail(order){
        this.$store.state.order = order
        this.$router.push('/orderDetail')
      },
      setTopTap(selectTopTab){
        this.selectTopTab = selectTopTab
      }
    },
    filters: {
      setState(state){
        if(state == 1){
          return '待付款'
        }else if(state == 2){
          return '采购中'
        }else if(state == 3){
          return '已发货'
        }else if(state == 4){
          return '已签收'
        }else if(state == 5){
          return '采购失败'
        }else if(state == 6){
          return '交易关闭'
        }
      },
      calculateNum(goodsList){
        let sum = 0
        for(let i=0;i<goodsList.length;i++){
          sum += goodsList[i].qty
        }
        return sum
      }
    },
    components: {
      GoodsItem,
      BtnBar,
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./my-order.styl"></style>