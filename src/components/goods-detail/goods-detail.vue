<template>
  <div class="goods-detail">
    <bg></bg>
    <header class="goods-detail-header">
      <router-link tag="div" class="goods-detail-header-left" to="/">
        <div class="goods-detail-header-left-pic"></div>
        <div class="goods-detail-header-left-text">海带宝日本代购</div>
      </router-link>
      <router-link tag="div" class="goods-detail-header-right" to="/find">
        <div class="goods-detail-header-right-text">更多好物推荐</div>
        <div class="goods-detail-header-right-pic"></div>
      </router-link>
    </header>
    <div class="goods-detail-main">
      <div class="goods-detail-goods-box">
        <div class="goods-pic">
          <div class="miaosha"></div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in slider" :style="{backgroundImage:'url(' + item.src + ')'}"></div>
              <!-- <div class="swiper-slide" style="width:100%;background-image:url(static/img/2.jpg)"></div>
              <div class="swiper-slide" style="width:100%;background-image:url(static/img/3.jpg)"></div>
              <div class="swiper-slide" style="width:100%;background-image:url(static/img/4.jpg)"></div> -->
            </div>
          </div>
          <div class="swiper-pagination" style="left:0;bottom:10px;right:0;"></div>
        </div>
        <div class="goods-bottom-contain">
          <div class="goods-text-note">懒人保湿专用</div>
          <div class="goods-text">Saborino 早安面膜60秒 清晨懒人保湿免洗 黄色牛油果 保湿</div>
          <div class="goods-bottom1">
            <div class="goods-price-box">
              <div class="goods-new-price">￥223.00</div>
              <s class="goods-old-price">￥224.00</s>
            </div>
            <div class="goods-item-num-contain">
              <div class="goods-item-num-minus" @click="minus"></div>
              <input class="goods-item-num-input" pattern="[0-9]*" v-model="number" @change="checkNum" @click.13="checkNum">
              <div class="goods-item-num-plus" @click="plus"></div>
            </div>
          </div>
          <div class="goods-bottom2">
            <div class="goods-hassale">已售 326</div>
            <div class="goods-note">日本直邮包税</div>
          </div>
        </div>
      </div>
      <div class="goods-detail-evaluate-box">
        <div class="evaluate-top">
          <div class="evaluate-top-left">
            <div class="evaluate-top-left-text">评价</div><div class="evaluate-top-left-right-text">好评98.8%</div>
          </div>
          <router-link tag="div" class="evaluate-top-more" to="/evaluateGoodsDetail">
            <div class="evaluate-top-more-pic"></div>
            <div class="evaluate-top-more-text">更多评价</div>
          </router-link>
        </div>
        <div class="evaluate-center">
          <evaluate-goods-item></evaluate-goods-item>
          <evaluate-goods-item></evaluate-goods-item>
        </div>
      </div>
      <div class="goods-detail-goodsdetail-box">
        <img class="goodsdetail-top" src="../../common/image/goods-detail/img38.png">
        <div class="goodsdetail-main">
          <img class="goodsdetail-main-pic" src="../../common/image/goods-detail/img39.png">
          <div class="goodsdetail-main-video-contain">
            <div class="goodsdetail-main-video-contain-top">
              日本线下实体店，海带宝采购实拍
              <div class="goodsdetail-main-video-contain-top-triangle"></div>
            </div>
            <!-- <video class="goodsdetail-main-video" src="~common/image/goods-detail/fff.mp4" poster="~common/image/goods-detail/sss.png"></video> -->
            <video class="goodsdetail-main-video" controls poster="static/sss.png" webkit-playsinline>
              <source src="static/fff.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video> 
          </div>
        </div>
        <img class="goodsdetail-bottom" src="~common/image/goods-detail/img40.png">
      </div>
    </div>
    <footer class="goods-detail-footer">
      <router-link tag="div" class="goods-detail-footer-item" to="/goodsShow">
        <div class="goods-detail-footer-item-pic goods-detail-footer-item-pic0"></div>
        <div class="goods-detail-footer-item-text">秒杀</div>
      </router-link>
      <router-link tag="div" class="goods-detail-footer-item" to="/find">
        <div class="goods-detail-footer-item-pic goods-detail-footer-item-pic1"></div>
        <div class="goods-detail-footer-item-text">发现</div>
      </router-link>
      <router-link tag="div" class="goods-detail-footer-item" to="/purchase">
        <div class="goods-detail-footer-item-pic goods-detail-footer-item-pic2">
          <div class="purchase-num">23</div>
        </div>
        <div class="goods-detail-footer-item-text">购物车</div>
      </router-link>
      <div class="goods-detail-footer-add" v-if="isAdd">加入购物车</div>
      <div class="goods-detail-footer-add-disable" v-if="!isAdd">库存不足</div>
    </footer>
    <transition name="fade">
      <div class="share-mask" @click="hide" v-show="isShow">
        <div class="share-mask-pc1"></div>
        <div class="share-mask-pc2"></div>
        <p class="share-mask-text">好友通过你的链接购买商品后，你就会获得奖励</p>
        <div class="share-mask-pc3"></div>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import $ from 'jquery'
  import Swiper from 'swiper'
  import Bg from 'base/bg/bg'
  import EvaluateGoodsItem from 'base/evaluate-goods-item/evaluate-goods-item'
  // import {isIOS} from 'huaji-platform'

  export default {
    data() {
      return {
        number: 1,
        isShow:true,
        isAdd:false,
        slider: [
          {
            src: 'static/img/1.jpg'
          },
          {
            src: 'static/img/2.jpg'
          },
          {
            src: 'static/img/3.jpg'
          },
          {
            src: 'static/img/4.jpg'
          }
        ]
        // slidesPerView:1
      }
    },
    created(){
      // this.slidesPerView = parseInt(document.body.clientWidth/108)
    },
    mounted(){
      var that = this

      this.$nextTick(() => {
        var initPhotoSwipeFromDOM = function(gallerySelector) {

            // parse slide data (url, title, size ...) from DOM elements 
            // (children of gallerySelector)
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                        numNodes = thumbElements.length,
                        items = [],
                        figureEl,
                        linkEl,
                        size,
                        item;

                for (var i = 0; i < numNodes; i++) {

                    figureEl = thumbElements[i]; // <figure> element

                    // include only element nodes 
                    if (figureEl.nodeType !== 1) {
                        continue;
                    }

                    linkEl = figureEl.children[0]; // <a> element

                    size = linkEl.getAttribute('data-size').split('x');

                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };



                    if (figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML;
                    }

                    if (linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    }

                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }

                return items;
            };

            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            };

            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var eTarget = e.target || e.srcElement;

                // find root element of slide
                var clickedListItem = closest(eTarget, function(el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });

                if (!clickedListItem) {
                    return;
                }

                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                        childNodes = clickedListItem.parentNode.childNodes,
                        numChildNodes = childNodes.length,
                        nodeIndex = 0,
                        index;

                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }

                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }



                if (index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };

            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                        params = {};

                if (hash.length < 5) {
                    return params;
                }

                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }

                if (params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }

                return params;
            };

            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                        gallery,
                        options,
                        items;

                items = parseThumbnailElements(galleryElement);

                // define options (if needed)
                options = {
                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect();

                        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
                    }

                };

                // PhotoSwipe opened from URL
                if (fromURL) {
                    if (options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }

                // exit if index not found
                if (isNaN(options.index)) {
                    return;
                }

                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }

                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };

            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll(gallerySelector);

            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }

            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(hashData.pid, galleryElements[ hashData.gid - 1 ], true, true);
            }
        };

    // execute above function
        initPhotoSwipeFromDOM('.evaluate-center-pic-list');

        $(function(){
          // $('.goods-pic,.swiper-container,.swiper-slide').css('height',$('.goods-pic').css('width'))

          $('.goods-pic,.swiper-container,.swiper-slide').css('height','325px')

          var mySwiper = new Swiper('.swiper-container', {
            pagination : '.swiper-pagination'
          })


          // var items = [
          //   {
          //     src: 'static/img/1.jpg',
          //     w: 750,
          //     h: 750
          //   },
          //   {
          //     src: 'static/img/2.jpg',
          //     w: 750,
          //     h: 750
          //   },
          //   {
          //     src: 'static/img/3.jpg',
          //     w: 750,
          //     h: 750
          //   },
          //   {
          //     src: 'static/img/4.jpg',
          //     w: 750,
          //     h: 750
          //   },
          // ]
          var items = []
          for(var j=0;j<that.slider.length;j++){
            var url = that.slider[j].src

            items.push({
              src: url,
              w: 750,
              h: 750
            })
          }
          // for(var j=0;j<$('.goods-pic .swiper-slide').length;j++){
          //   var url = $('.goods-pic .swiper-slide')[j].style.backgroundImage.split("(\"")[1].split("\")")[0]

          //   items.push({
          //     src: url,
          //     w: 750,
          //     h: 750
          //   })
          // }

          var openPhotoSwipe = function(i){
              var pswpElement = document.querySelectorAll('.pswp')[0];

              // define options (if needed)
              var options = {
                  // optionName: 'option value'
                  // for example:
                  index: i // start at first slide
              };

              // Initializes and opens PhotoSwipe
              var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
              gallery.listen('afterChange', function() {

                mySwiper.slideTo(gallery.getCurrentIndex(),0)
              });
              gallery.init();
          }

          $('.swiper-slide').on('click',function(){
            openPhotoSwipe($(this).index())
          })
        })
      })

      // if(isIOS()){
      //   this.$refs.goodsDetailHeader.style.webkitBackdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailHeader.style.backdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailHeader.style.background = "rgba(255, 255, 255, 0.8)"
      //   this.$refs.goodsDetailFooter.style.webkitBackdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailFooter.style.backdropFilter = "blur(14px)"
      //   this.$refs.goodsDetailFooter.style.background = "rgba(255, 255, 255, 0.8)"
      // }
    },
    watch:{
      // number(){
      //   console.log(1)
      //   if(this.number<=1 || typeof(this.number)!=Number){
      //     this.number = 1 
      //   }
      // }
    },
    methods:{
      minus(){
        if(this.number>1){
          this.number--
        }
      },
      hide(){
        this.isShow = false
      },
      plus(){
        this.number++
      },
      checkNum(){
        let reg=/^[1-9]\d*$|^0$/;
        if(this.number < 1 || !reg.test(this.number)){
          this.number = 1
        }
      },
      slideClick(index){
        this.openPhotoSwipe(index)
      }
    },
    components: {
      Bg,
      EvaluateGoodsItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./goods-detail.styl"></style>