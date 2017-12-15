<template>
  <div class="find">
    <bg></bg>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
    <artical-item></artical-item>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Bg from 'base/bg/bg'
  import ArticalItem from 'base/artical-item/artical-item'

  export default {
    data() {
      return {
        
      }
    },
    created(){

    },
    components: {
      Bg,
      ArticalItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .find{
    position:absolute; 
    // overflow:scroll; 
    // -webkit-overflow-scrolling: touch; 
    // top:0; 
    // left:0; 
    // bottom:0; 
    // right:0;
    // background:#f5f5f5;
    // z-index:0;
    width:100%;
    // height:100%;
    z-index:0;
    padding-bottom:50px;
    background:#f5f5f5;
    // .artical-item{
    //   width:100%;
    //   display:flex;
    //   justify-content:space-between;
    //   align-items:center;
    //   background:#fff;
    //   margin-bottom:10px;
    //   .artical-item-left{
    //     width:calc(100% - 130px);
    //     .artical-item-left-top{
    //       height:80px;
    //     }
    //     .artical-item-left-bottom{
    //       display:flex;
    //       justify-content:space-between;
    //       align-items:center;
    //       .artical-item-time{

    //       }
    //       .artical-item-num{

    //       }
    //     }
    //   }
    //   .artical-item-right{
    //     width:130px;
    //     height:100px;
    //     background:#fcf;
    //   }
    // }
  }
</style>