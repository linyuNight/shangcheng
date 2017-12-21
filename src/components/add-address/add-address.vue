<template>
  <div class="add-address">
    <bg></bg>
    <div class="imformation-list">
      <div class="imformation-item">
        <div class="imformation-item-left">姓名</div>
        <input class="imformation-item-input" type="text" placeholder="收件人姓名">
      </div>
      <div class="imformation-item">
        <div class="imformation-item-left">电话</div>
        <input class="imformation-item-input" type="text" placeholder="收件人联系电话">
      </div>
      <div class="imformation-item">
        <div class="imformation-item-left">省市区</div>
        <div class="imformation-item-input" style="color:#000" id="pro-city-area">请选择区域</div>
        <!-- <input class="imformation-item-input" id="pro-city-area" type="text" placeholder="请选择区域" disabled="disabled"> -->
      </div>
      <div class="imformation-item">
        <div class="imformation-item-left">详细地址</div>
        <input class="imformation-item-input" type="text" placeholder="详细街道地址门牌号">
      </div>
      <div class="imformation-item">
        <div class="imformation-item-left">身份证号</div>
        <input class="imformation-item-input" type="text" placeholder="收件人真实身份证号，仅用于清关">
      </div>
    </div>
    <div class="save-btn-contain">
      <div class="save-btn" @click="save">保存</div>
    </div>

    <div class="goods-select-menu">
      <div class="visi-box">
        <div class="visi-box-contain">
          <div class="visi-box-topline"></div>
          <div class="visi-box-bottomline"></div>
          <div class="visi-box-content">
            <div class="swiper-container" id="pro_container">
              <div class="swiper-wrapper" id="pro">
              </div>
            </div>
            <div class="swiper-container" id="city_container">
              <div class="swiper-wrapper" id="city">
              </div>
            </div>
            <div class="swiper-container" id="area_container">
              <div class="swiper-wrapper" id="area">
              </div>
            </div>
          </div>
          <div class="address-pop-top">
            <button type="button" id="goods-canclebtn">取消</button>
            <button type="button" id="goods-closebtn">完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import qs from 'qs'
  import {url,urlapi} from 'api/config'
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  import Swiper from 'swiper'
  import $ from 'jquery'
  import Bg from 'base/bg/bg'
  import {china} from 'common/js/address'
  import {region_data} from 'common/js/data'

  export default {
    data() {
      return {
        content: ''
      }
    },
    created(){

    },
    mounted(){
      this.$nextTick(() => {
        $(function(){
          var addressStr = '广东/汕头市/金平区'
          // var addressStr = '安徽/安庆市/大观区'
          var myAddress =  (addressStr).split('/')
          // console.log(myAddress[0])
          // for(var i=0;i<region_data[0].length;i++){
          //   // console.log(region_data[0][i])
          //   if(region_data[0][i].split(':')[0] == myAddress[0]){
          //     console.log(i)
          //   }
          // }

          var $pro = $('#pro');  
          var $city = $('#city');
          var $area = $('#area');
          var t = 0;    
          var tr = 0;
          var trr = 0;
          var mySwiper2 = {};
          var mySwiper3 = {};
          var onece_select = '<div class="swiper-slide child-select" style="text-align:center;line-height:40px" value="';

          //初始化
          for(var i = 0;i<region_data[0].length;i++){
            $pro.append(onece_select + region_data[0][i].split(":")[1] + '">' + region_data[0][i].split(":")[0] + '</div>');
          }
          var typeSecondArray = region_data[1][t];
          for(var i = 0;i<region_data[1][tr].length;i++){
            $city.append(onece_select + region_data[1][tr][i].split(":")[1] + '">' + region_data[1][tr][i].split(":")[0]+ '</div>');
          }
          for(var i = 0;i<region_data[2][trr].length;i++){
            $area.append(onece_select + region_data[2][trr][i].split(":")[1] + '">' + region_data[2][trr][i].split(":")[0]+ '</div>');
          }
          changeColor();


          //一级菜单
          var mySwiper1 = new Swiper('#pro_container', {
            direction : 'vertical',
            observer:true,
              observeParents:true,
              // slidesPerView : 2,
            onSlideChangeStart:function(swiper){
              $city.find('.swiper-slide').remove();
              $area.find('.swiper-slide').remove();
              t = swiper.activeIndex;
              tr = 0;
              trr = 0;
              
              mySwiper2.slideTo(0);
              mySwiper3.slideTo(0);
              for(var i = 0;i<region_data[1][t].length;i++){
                $city.append(onece_select + region_data[1][t][i].split(":")[1] + '">' + region_data[1][t][i].split(":")[0]+ '</div>');
              }

              // for(var i = 0;i<region_data[1][t].length;i++){
              //   $area.append(onece_select +region_data[1][t][i].split(":")[0]+ '</div>');
              // }

              if(region_data[1][t][tr].split(":")[2]!=null){
                for(var i = 0;i<region_data[2][region_data[1][t][tr].split(":")[2]].length;i++){
                    $area.append(onece_select + region_data[2][region_data[1][t][tr].split(":")[2]][i].split(":")[1] + '">' + region_data[2][region_data[1][t][tr].split(":")[2]][i].split(":")[0]+ '</div>'); 
                }
              }
              changeColor();
            }
          })

          //二级菜单
          mySwiper2 = new Swiper('#city_container', {
            direction : 'vertical',
            observer:true,
              observeParents:true,
              // slidesPerView : 2,
            onSlideChangeStart:function(swiper){
              $area.find('.swiper-slide').remove();
              tr = swiper.activeIndex;
              trr = 0;
              mySwiper3.slideTo(0);
              // var typeSecondArray = china.split("#")[t].split("$")[1].split("|");
              if(region_data[1][t][tr].split(":")[2]!=null){
                for(var i = 0;i<region_data[2][region_data[1][t][tr].split(":")[2]].length;i++){
                    $area.append(onece_select + region_data[0][i].split(":")[1] + '">' + region_data[2][region_data[1][t][tr].split(":")[2]][i].split(":")[0]+ '</div>'); 
                }
              }
              changeColor();
            }
          })

          //三级菜单
          mySwiper3 = new Swiper('#area_container', {
            direction : 'vertical',
            observer:true,
              observeParents:true,
              // slidesPerView : 2,
              onSlideChangeStart:function(swiper){
              trr = swiper.activeIndex;
              changeColor();
            }
          })

          //改变字体颜色
          function changeColor(){
            $('.visi-box').find(".swiper-slide").css("color","#aaa")
            $('#pro').find(".swiper-slide").eq(t).css("color","#000");
            $('#city').find(".swiper-slide").eq(tr).css("color","#000");
            $('#area').find(".swiper-slide").eq(trr).css("color","#000");
          }

          var region_data1,region_data2,region_data3
          for(var i=0;i<region_data[0].length;i++){
            // console.log(region_data[0][i])
            if(region_data[0][i].split(':')[0] == myAddress[0]){
              region_data1 = i
              // console.log(i)
              mySwiper1.slideTo(i);
            }
          }
          for(var i=0;i<region_data[1][region_data1].length;i++){
            // console.log(region_data[1][region_data1][i])
            if(region_data[1][region_data1][i].split(':')[0] == myAddress[1]){
              region_data2 = region_data[1][region_data1][i].split(':')[2]
              // console.log(region_data2)
              mySwiper2.slideTo(i);
            }
          }
          for(var i=0;i<region_data[2][region_data2].length;i++){
            // console.log(region_data[2][region_data2][i])
            if(region_data[2][region_data2][i].split(':')[0] == myAddress[2]){
              mySwiper3.slideTo(i);
            }
          }

          // mySwiper1.slideTo(18);
          // mySwiper2.slideTo(2);
          // mySwiper3.slideTo(3);

          $("#pro-city-area").on("click",function(){
            $(".goods-select-menu").fadeIn(200);
          })
          $("#goods-canclebtn").on("click",function(){
            $(".goods-select-menu").fadeOut(200);
          })
          $("#goods-closebtn").on("click",function(){
            $("#pro-city-area").html($("#pro").find(".swiper-slide").eq(t).html()+"/"+$("#city").find(".swiper-slide").eq(tr).html()+"/"+$("#area").find(".swiper-slide").eq(trr).html());
            $(".goods-select-menu").fadeOut(200);

            //输出传送到服务器的value
            console.log('mainland:' + $("#pro-city-area").html() + ':' + $("#area").find(".swiper-slide").eq(trr).attr("value"))
          })

          

          //这个是wsiper的
          // $(function(){
          //   var $pro = $('#pro');  
          //   var $city = $('#city');
          //   var $area = $('#area');
          //   var t = 0;    
          //   var tr = 0;
          //   var trr = 0;
          //   var mySwiper2 = {};
          //   var mySwiper3 = {};

          //   //初始化
          //   for(var i = 0;i<china.split("#").length;i++){
          //     $pro.append('<div class="swiper-slide" style="width:100%;height:40px;line-height:40px;text-align: center;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' + china.split("#")[i].split("$")[0] + '</div>');
          //   }
          //   var typeSecondArray = china.split("#")[t].split("$")[1].split("|");
          //   for(var i = 0;i<typeSecondArray.length;i++){
          //     $city.append('<div class="swiper-slide" style="width:100%;height:40px;line-height:40px;text-align: center;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +typeSecondArray[i].split(",")[0]+ '</div>');
          //   }
          //   for(var i = 0;i<typeSecondArray[0].split(",").length-1;i++){
          //     $area.append('<div class="swiper-slide" style="width:100%;height:40px;line-height:40px;text-align: center;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +typeSecondArray[0].split(",")[i+1]+ '</div>');
          //   }
          //   changeColor();


          //   //一级菜单
          //   var mySwiper1 = new Swiper('#pro_container', {
          //     direction : 'vertical',
          //     observer:true,
          //     observeParents:true,
          //       // slidesPerView : 2,
          //     onSlideChangeStart:function(swiper){
          //       $city.find('.swiper-slide').remove();
          //       $area.find('.swiper-slide').remove();
          //       t = swiper.activeIndex;
          //       tr = 0;
          //       trr = 0;
                
          //       mySwiper2.slideTo(0);
          //       mySwiper3.slideTo(0);
          //       var typeSecondArray = china.split("#")[t].split("$")[1].split("|");
          //       for(var i = 0;i<typeSecondArray.length;i++){
          //         $city.append('<div class="swiper-slide" style="width:100%;height:40px;line-height:40px;text-align: center;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +typeSecondArray[i].split(",")[0]+ '</div>');
          //       }
          //       for(var i = 0;i<typeSecondArray[0].split(",").length-1;i++){
          //         $area.append('<div class="swiper-slide" style="width:100%;height:40px;line-height:40px;text-align: center;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +typeSecondArray[0].split(",")[i+1]+ '</div>');
          //       }

          //       changeColor();
          //     }
          //   })

          //   //二级菜单
          //   mySwiper2 = new Swiper('#city_container', {
          //     direction : 'vertical',
          //     observer:true,
          //       observeParents:true,
          //       // slidesPerView : 2,
          //     onSlideChangeStart:function(swiper){
          //       $area.find('.swiper-slide').remove();
          //       tr = swiper.activeIndex;
          //       trr = 0;
          //       mySwiper3.slideTo(0);
          //       var typeSecondArray = china.split("#")[t].split("$")[1].split("|");
          //       for(var i = 0;i<typeSecondArray[tr].split(",").length-1;i++){
          //         $area.append('<div class="swiper-slide" style="width:100%;height:40px;line-height:40px;text-align: center;box-sizing: border-box;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">' +typeSecondArray[tr].split(",")[i+1]+ '</div>');
          //       }

          //       changeColor();
          //         }
          //   })

          //   //三级菜单
          //   mySwiper3 = new Swiper('#area_container', {
          //     direction : 'vertical',
          //     observer:true,
          //       observeParents:true,
          //       // slidesPerView : 2,
          //       onSlideChangeStart:function(swiper){
          //       trr = swiper.activeIndex;
          //       changeColor();
          //     }
          //   })

          //   // mySwiper1.slideTo(18);
          //   // mySwiper2.slideTo(2);
          //   // mySwiper3.slideTo(3);

          //   //改变字体颜色
          //   function changeColor(){
          //     $('.visi-box').find(".swiper-slide").css("color","#aaa")
          //     $('#pro').find(".swiper-slide").eq(t).css("color","#000");
          //     $('#city').find(".swiper-slide").eq(tr).css("color","#000");
          //     $('#area').find(".swiper-slide").eq(trr).css("color","#000");
          //   }

          //   // $("button").on("click",function(){
          //   //  console.log($("#pro").find(".swiper-slide").eq(t).html()+","+$("#city").find(".swiper-slide").eq(tr).html()+","+$("#area").find(".swiper-slide").eq(trr).html());
          //   // })

          //   $("#pro-city-area").on("click",function(){
          //     $(".goods-select-menu").fadeIn();
          //   })
          //   $("#goods-closebtn").on("click",function(e){
          //     // var goods_select = $(".goods-select-mask").find("select");
          //     $("#pro-city-area").html($("#pro").find(".swiper-slide").eq(t).html()+"/"+$("#city").find(".swiper-slide").eq(tr).html()+"/"+$("#area").find(".swiper-slide").eq(trr).html());


          //     $('#pro-city-area').css('color','#000')
          //     $(".goods-select-menu").fadeOut();
          //   })

          //   $("#goods-canclebtn").on("click",function(e){
          //     $(".goods-select-menu").fadeOut();
          //   })


          //   // $(".submit-btn").click(function(){
          //   //  if($("#name").val() == ''){
          //   //    alert('请输入姓名');
          //   //    return false;
          //   //  }
          //   //  if($("#phone").val() == ''){
          //   //    alert('请输入电话');
          //   //    return false;
          //   //  }
          //   //  if($("#pro-city-area").html() == ''){
          //   //    alert('请选择省市区');
          //   //    return false;
          //   //  }
          //   //  if($("#address").val() == ''){
          //   //    alert('请输入详细地址');
          //   //    return false;
          //   //  }
          //   //  if($("#cardID").val() == ''){
          //   //    alert('请输入身份证号码');
          //   //    return false;
          //   //  }
          //   // })
          // })
        })
      })
    },
    methods:{
      save(){
        // this.$router.push({path: '/confirmationOrder'})
        this.content = '收货人姓名至少2个字符'
        this.showMainMask()
      },
      showMainMask(content){
        this.$store.state.maskContent = this.content
        this.$store.dispatch("setIsShowMask")
      }
    },
    components: {
      Bg
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" src="./add-address.styl"></style>