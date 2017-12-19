<template>
  <div class="my-order">
    <bg></bg>
    <div class="my-order-top">
      <div class="my-order-tab">全部</div>
      <div class="my-order-tab">待付款</div>
      <div class="my-order-tab">采购中</div>
      <div class="my-order-tab">已发货</div>
      <div class="my-order-tab">已签收</div>
    </div>
    <div class="my-order-list">
      <div class="my-order-item" v-for="order in orderList" key="order.state" @click="loadDetail(order)">
        <div class="my-order-item-top">
          <div class="my-order-number">订单号&nbsp;&nbsp;{{order.orderNum}}</div>
          <div class="my-order-state">{{order.state | setState}}</div>
        </div>
        <div class="goods-list">

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
          <goods-item v-for="goods in order.goodsList" key="goods.text" :goods="goods"></goods-item>

        </div>
        <div class="goods-price-contain">共{{order.goodsList | calculateNum}}件商品&nbsp;合计：￥111.00（含运费￥20.00）</div>
        <!-- <div class="my-order-item-bottom clear">
          <div class="submit-btn" v-if="order.state == 1">立即支付</div>
          <div class="cancel-btn" v-if="order.state == 1">取消订单</div>
          <div class="see-btn" v-if="order.state == 4 || order.state == 5">查看物流</div>
        </div> -->
        <btn-bar :state="order.state"></btn-bar>
      </div>
    </div>
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
        orderState: 0,
        orderList: [
          {
            state: 1,
            orderNum:'rfg4619491',
            goodsList:[
              {
                text:'shfiosdhiudsh1',
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