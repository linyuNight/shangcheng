<template>
  <div class="confirmation-order">
    <bg></bg>
    <div v-if="!empty" class="order-top" @click="showList">
      <div class="order-top-center">
        <div class="order-top-center-top clear">
          <div class="order-user-name">黄小明</div>
          <div class="order-user-phone">12345678921</div>
        </div>
        <div class="order-top-address-box">
          <div class="order-top-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
        </div>
      </div>
      <div class="order-top-right"></div>
    </div>
    <div v-if="empty" class="order-top-empty" @click="toAddAddress">
      <img class="empty-pic" src="../../common/image/purchase/new.png"><span class="empty-text">新增收货地址</span>
    </div>
    <div class="goods-list-top">日本海外购</div>
    <div class="goods-list">
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="goods-item-pic"></div>
        <div class="goods-item-right">
          <div class="goods-item-text">日本DHC橄榄护唇膏天然植物无色滋润淡化唇纹防干裂 1.5g 2支</div>
          <div class="goods-item-bottom">
            <div class="goods-item-price">￥38.00</div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-contain-pic"></div>
              <div class="goods-item-num-contain-text">11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-price-box">
      <div class="goods-price-contain">
        <div class="goods-price-total"><span class="goods-price-total-left">商品总额：</span><span class="goods-price-total-text">￥8017</span></div>
        <div class="goods-freight"><span class="goods-price-total-left">国际运费：</span><span class="goods-price-total-text">￥20</span></div>
      </div>
    </div>
    <footer class="order-footer clear">
      <router-link tag="div" class="pay" to="/transactionDetail">确认支付</router-link>
      <div class="order-footer-price">￥96.00</div>
      <div class="order-footer-text">合计：</div>
    </footer>
    <transition name="fade">
      <div class="user-select-mask-bg" v-show="isShowAddressList" @click="hideList"></div>
    </transition>
    <div class="user-select-mask-contain">
      <transition name="fold">
        <div class="user-select-mask" v-show="isShowAddressList">
          <div class="user-select-mask-top">
            <div class="close-btn" @click="hideList"></div>
            <div class="user-select-mask-title">选择收件地址</div>
            <div class="add-dress-btn" @click="toAddAddress">添加地址</div>
          </div>
          <div class="user-select-list">
            <!-- <edit-delete>
              <div class="user-select-item" @click="showAddressList">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="showAddressList">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="showAddressList">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="showAddressList">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete> -->
            <edit-delete>
              <div class="user-select-item" @click="selectItem">
                <input class="user-select-item-left" type="radio" name="user">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="selectItem">
                <input class="user-select-item-left" type="radio" name="user">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="selectItem">
                <input class="user-select-item-left" type="radio" name="user">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="selectItem">
                <input class="user-select-item-left" type="radio" name="user">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
              </div>
            </edit-delete>
            <edit-delete>
              <div class="user-select-item" @click="selectItem">
                <input class="user-select-item-left" type="radio" name="user">
                <div class="user-select-item-center">
                  <div class="user-select-item-center-top clear">
                    <div class="user-select-item-name">黄小明</div>
                    <div class="user-select-item-phone">12345678921</div>
                  </div>
                  <div class="user-select-item-address-box">
                    <div class="user-select-item-center-bottom">广东省深圳市南山区振业国际商务中心7楼海带宝前台桌子上</div>
                  </div>
                </div>
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
  import $ from 'jquery'
  import {url,urlapi} from 'api/config'
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  import Bg from 'base/bg/bg'
  import EditDelete from 'base/edit-delete/edit-delete'

  export default {
    data() {
      return {
        empty: false
        // isShowAddressList: false
      }
    },
    created(){

    },
    methods:{
      showList(){
        // this.$store.state.isShowAddressList = true
        // this.setIsShowAddressList(true)
        this.showAddressList()
      },
      hideList(){
        // this.$store.state.isShowAddressList = false
        // this.setIsShowAddressList(false)
        this.hideAddressList()
      },
      selectItem(e){
        $('.user-select-item-left').attr('checked',false);
        $(e.target).closest('.edit-delete').find('.user-select-item-left').attr('checked',true);
        console.log()
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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./confirmation-order.styl"></style>