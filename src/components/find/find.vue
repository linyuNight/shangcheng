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

<style scoped lang="stylus" rel="stylesheet/stylus" src="./find.styl"></style>