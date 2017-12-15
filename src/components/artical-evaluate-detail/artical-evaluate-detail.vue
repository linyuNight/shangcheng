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
        // window.setTimeout('this.scrollBottom()', 500);
      },
      blur(){
        this.isShow = true
        this._evaluate = this.evaluate
        this.evaluate = ''
        this.height = $('.artical-evaluate-detail-input').height()
        $('.artical-evaluate-detail-input').css('height','30px')
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  $yellow=#fdd953;
  $red=#e84e40;

  // .evaluate-item:last-child{
  //   margin-bottom:50px;
  // }

  .artical-evaluate-detail{
    position:absolute; 
    z-index:300;
    width:100%;
    height:100%;
    background:#f5f5f5;
    // padding-bottom:50px;
    display:flex;
    flex-direction: column;
    .evaluate-header{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      height:30px;
      background:#f2f2f2;
      line-height:30px;
      font-size:13px;
      color:#666666;
      padding:0 15px;
      z-index:100;
    }
    .evaluate-list{
      flex:1;
      width:100%;
      // height:calc(100% - 50px);
      padding-top:30px;
      // margin-top:30px;
      // margin:30px 0 50px;
      background:#f2f2f2;
      overflow-y:scroll;
      -webkit-overflow-scrolling : touch; 
    }
    .artical-evaluate-detail-footer{
      bordertop-1px($grey)
      // position:fixed;
      // left:0;
      // bottom:0;
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      min-height:50px;
      z-index:100;
      background:#fff;
      padding:10px 15px;
      .artical-evaluate-detail-pic{
        width:22px;
        height:22px;
        background-image:url(../../common/image/evaluate/evaluate.png);
        background-position:center;
        background-size:100%;
        background-repeat:no-repeat;
      }
      .artical-evaluate-detail-input{
        // width:calc(100% - 35px);
        // height:30px;
        // line-height:30px;
          


        background:#eaebed;
        border-radius:15px;
        padding:0 15px;
        font-size:13px;
        border:none;

        // resize : none;
        // display:block;
        // overflow:hidden;
        // font-size:14px;
        // height:30px;
        // line-height:30px;
        // margin:10px 0;
        // -webkit-overflow-scrolling : touch; 
        

        width:calc(100% - 35px);
        height:30px;
        max-height: 120px;
        line-height: 30px;
        border:none;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch;
        resize: none;
        -webkit-appearance:none;
        outline:none
      }
      .textareafocus{
        width:100%;
        background:#fff;
        border:1px solid #d7d7d7;
        border-radius:2px;
      }
      // .artical-evaluate-detail-btn{
      //   width:100px;
      // }
    }
    .textareafocus{
      background:#f2f2f2;
    }
  }
</style>