<template>
  <div class="evaluate-detail">
    <bg></bg>
    <evaluate-item></evaluate-item>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  // import Swiper from 'swiper'
  import Bg from 'base/bg/bg'
  import EvaluateItem from 'base/evaluate-item/evaluate-item'

  export default {
    data() {
      return {
      }
    },
    created(){
    },
    components: {
      Bg,
      EvaluateItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  .evaluate-detail{
    position:absolute; 
    z-index:300;
    width:100%;
    background:#f5f5f5;
  }
</style>