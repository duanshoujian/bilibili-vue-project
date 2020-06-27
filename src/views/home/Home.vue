<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物车</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in banners"  :key="item.index" >  <!--动态绑定，需要寻找的数据需要加上v-bind动态绑定-->
          <a v-bind:href="item.link">
            <img v-bind:src="item.image">
          </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<!--export和export default用来导出模块-->
<script>

  import NavBar from "../../components/common/navibar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import {Swiper, SwiperItem} from "../../components/common/swiper/"

  export default {
    name:"Home",
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    data(){
      return{
        banners:[],  //变量直接保存res的数据
        recommends:[]
      }
    },
    created() {
      //1.请求多个数据,加（）才是调用函数
      getHomeMultidata().then(res=>{  //箭头函数  数据存在res里面
        console.log(res);    //函数调用只有不会保存，直接被内存回收，所以把res保存下来
        this.banners=res.data.data.banner.list;
        this.recommends=res.data.data.recommend.list;
      })
    }
  }

</script>

<style scoped>
  .home-nav{
    background-color: pink;
    color: #f6f6f6;
  }
</style>
