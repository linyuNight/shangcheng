<template>
  <div class="artical-evaluate-detail" ref="articalEvaluateDetail">
    <bg></bg>
    <header class="evaluate-header">评论（156）</header>
    <div class="evaluate-list" ref="evaluateWrapper">
      <div class="evaluate-list-content">
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
        <evaluate-item></evaluate-item>
      </div>
    </div>
    <footer :class="{textareafocus:!isShow}" class="artical-evaluate-detail-footer" ref="evaluateFooter">
      <div class="artical-evaluate-detail-pic" v-show="isShow"></div>
      <textarea :class="{textareafocus:!isShow}" class="artical-evaluate-detail-input" v-model="evaluate" type="text" placeholder="写评论" ref="evaluateTextarea" @keypress.13="send($event)" @focus="focus" @blur="blur"></textarea>
      <!-- <button class="artical-evaluate-detail-btn">发送</button> -->
    </footer>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import Bg from 'base/bg/bg'
  import EvaluateItem from 'base/evaluate-item/evaluate-item'
  // import BScroll from 'better-scroll'
  import $ from 'jquery'
  import autoHeight from 'common/js/autoTextarea'

  export default {
    data() {
      return {
        interval: {},
        evaluate: '',
        _evaluate: '',
        height: 30,
        isShow: true,
      }
    },
    created(){
      // console.log(document.getElementById("textarea"))
      // console.log(this.$refs.evaluateTextarea)
      // textarea(this.$refs.evaluateTextarea)
      // var jroll = new BScroll(this.$refs.evaluateWrapper, {
      //   click:true
      // });
    },
    mounted(){
      $('.artical-evaluate-detail-input').autoHeight();
      // setInterval(()=>{
      //   //   $('.evaluate-list').css('height',`calc(100% - ${$('.artical-evaluate-detail-footer').height() + 20}px)`)
      //   // },50)
      //   let len = $('.evaluate-item').length
      //   $('.evaluate-item').eq(len).css('marginBottom',$('.artical-evaluate-detail-footer').height() + 'px')
      // },50)
    },
    methods: {
      send(e){ 
        e.preventDefault();    
        this.evaluate = ''
        this._evaluate = ''
        $('.artical-evaluate-detail-input').css('height','30px')
      },
      focus(){
        this.isShow = false
        this.evaluate = this._evaluate
        $('.artical-evaluate-detail-input').css('height',`${this.height}px`)
        $('.artical-evaluate-detail-footer').css('padding','10px 15px 40px')
        // window.setTimeout('this.scrollBottom()', 500);
      },
      blur(){
        this.isShow = true
        this._evaluate = this.evaluate
        this.evaluate = ''
        this.height = $('.artical-evaluate-detail-input').height()
        $('.artical-evaluate-detail-input').css('height','30px')
        $('.artical-evaluate-detail-footer').css('padding','10px 15px')
      },
      // scrollBottom() {
      //   window.scrollTo(0, $('body').height());
      // }
      // scrollToEnd(){
      //   document.body.scrollTop = document.body.scrollHeight;
      // }
    },
    components: {
      Bg,
      EvaluateItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./artical-evaluate-detail.styl"></style>