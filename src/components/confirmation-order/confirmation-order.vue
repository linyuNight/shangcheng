<template>
  <div class="confirmation-order">
    <bg></bg>
    <div class="order-top" @click="showAddressList">
      <div class="order-top-left"></div>
      <div class="order-top-center">
        <div class="order-top-center-top clear">
          <div class="order-user-name">黄小明</div>
          <div class="order-user-phone">12345678921</div>
        </div>
        <div class="order-top-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
      </div>
      <div class="order-top-right"></div>
    </div>
    <div class="goods-list-top">日本海外购</div>
    <div class="goods-list">
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num">X1</div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num">X1</div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num">X1</div>
          </div>
        </div>
      </div>

    </div>
    <footer class="order-footer clear">
      <div class="pay">确认支付</div>
      <div class="order-footer-price">￥96.00</div>
      <div class="order-footer-text">合计：</div>
    </footer>
    <transition name="fade">
      <div class="user-select-mask-bg" v-show="isShowAddressList" @click="hideAddressList"></div>
    </transition>
    <div class="user-select-mask-contain">
      <transition name="fold">
        <div class="user-select-mask" v-show="isShowAddressList">
          <div class="user-select-mask-top">
            <div class="close-btn" @click="hideAddressList">x</div>
            <div class="user-select-mask-title">选择收件地址</div>
            <div class="add-dress-btn" @click="toAddAddress">添加地址</div>
          </div>
          <div class="user-select-list">
            <edit-delete>
              <div class="user-select-item">
                <div class="user-select-item-pic"></div>
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">13756668899</div>
                  </div>
                  <div class="user-select-item-address">广东省深圳市南山区前海振业国际商务中心..</div>
                </div>
                <!-- <di class="edit-address-btn">编辑</di> -->
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item">
                <div class="user-select-item-pic"></div>
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">13756668899</div>
                  </div>
                  <div class="user-select-item-address">广东省深圳市南山区前海振业国际商务中心..</div>
                </div>
                <!-- <di class="edit-address-btn">编辑</di> -->
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item">
                <div class="user-select-item-pic"></div>
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">13756668899</div>
                  </div>
                  <div class="user-select-item-address">广东省深圳市南山区前海振业国际商务中心..</div>
                </div>
                <!-- <di class="edit-address-btn">编辑</di> -->
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item">
                <div class="user-select-item-pic"></div>
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">13756668899</div>
                  </div>
                  <div class="user-select-item-address">广东省深圳市南山区前海振业国际商务中心..</div>
                </div>
                <!-- <di class="edit-address-btn">编辑</di> -->
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item">
                <div class="user-select-item-pic"></div>
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">13756668899</div>
                  </div>
                  <div class="user-select-item-address">广东省深圳市南山区前海振业国际商务中心..</div>
                </div>
                <!-- <di class="edit-address-btn">编辑</di> -->
              </div>
            </edit-delete>

          </div>
        </div>
      </transition>
    </div>  
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  import Bg from 'base/bg/bg'
  import EditDelete from 'base/edit-delete/edit-delete'

  export default {
    data() {
      return {
        // isShowAddressList: false
      }
    },
    created(){

    },
    methods:{
      showAddressList(){
        // this.$store.state.isShowAddressList = true
        // this.setIsShowAddressList(true)
        this.showAddressList()
      },
      hideAddressList(){
        // this.$store.state.isShowAddressList = false
        // this.setIsShowAddressList(false)
        this.hideAddressList()
      },
      toAddAddress(){
        // this.$store.state.isShowAddressList = false
        // this.setIsShowAddressList(false)
        this.hideAddressList()
        this.$router.push({path: '/addAddress'})
      },
      ...mapMutations({
        setIsShowAddressList: 'SET_ISSHOWADDRESSLIST'
      }),
      ...mapActions([
        'showAddressList',
        'hideAddressList'
      ])
    },
    computed: {
      ...mapGetters([
        'isShowAddressList'
      ])
    },
    components: {
      Bg,
      EditDelete
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .confirmation-order{
    position:absolute; 
    z-index:200;
    width:100%;
    height:100%;
    background:#f5f5f5;
    .order-top{
      width:100%;
      height:80px;
      background:#fff;
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:10px;
      .order-top-left{
        width:20px;
        height:20px;
        background:#ccc;
      }
      .order-top-center{
        .order-top-center-top{
          .order-user-name{
            float:left;
          }
          .order-user-phone{
            float:left;
          }
        }
        .order-top-center-bottom{

        }
      }
      .order-top-right{
        width:20px;
        height:20px;
        background:#ccc;
      }
    }
    .goods-list-top{
      background:#fff;
    }
    .goods-list{
      margin-bottom:40px;
      background:#fff;
      .goods-item{
        width:100%;
        height:110px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }
      .goods-item-pic{
        width:90px;
        height:90px;
        background:#ffc;
      }
      .goods-item-right{
        width:calc(100% - 90px);
        .goods-item-text{

        }
        .goods-item-bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
          .goods-item-price{

          }
          .goods-item-num{
            
          }
        }
      }
    }
    .order-footer{
      position:fixed;
      left:0;
      bottom:0;
      width:100%;
      height:40px;
      background:$yellow;
      .pay{
        float:right;
        line-height:40px;
      }
      .order-footer-price{
        float:right;
        line-height:40px;
      }
      .order-footer-text{
        float:right;
        line-height:40px;
      }
    }
    .user-select-mask-bg{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.7);
      z-index:99;
    }
    .user-select-mask-contain{
      position:fixed;
      left:0;
      bottom:0;
      width:100%;
      height:0;
      z-index:100;
      .user-select-mask{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        background:#fcf;
        z-index:100;
        transform: translate3d(0, -100%, 0)
        .user-select-mask-top{
          display:flex;
          justify-content:space-between;
          align-items:center;
          .close-btn{

          }
          .user-select-mask-title{

          }
          .add-dress-btn{

          }
        }
        .user-select-list{
          width:100%;
          max-height:400px;
          overflow-y:auto;
          -webkit-overflow-scrolling:touch;
          .user-select-item{
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:84px;
            .user-select-item-pic{
              width:20px;
              height:20px;
              background:#ccc;
            }
            .user-select-item-center{
              width:calc(100% - 40px);
              .user-select-item-center-top{
                display:flex;
                justify-content:space-between;
                align-items:center;
                .user-select-item-name{

                }
                .user-select-item-phone{

                }
              }
              .user-select-item-address{

              }
            }
            // .edit-address-btn{
                
            // }
          }
        }
      }
    }
  }
</style>