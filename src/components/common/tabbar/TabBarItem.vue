<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div> <!--不要写死，用插槽动态更新数据-->
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div><!--插槽插入两张图片，动态决定显示哪张图片-->
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "TabBarItem",
    //用的时候动态传进来，props属性代表路径path
    props: {
			link: {
				type: String,
        required: true
      }
    },
    computed: {
			isActive() {
			  //哪一个路由活跃就是对象，/home->item1(/home) =true 包括就是-1
				return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle() {
				return this.isActive ? {'color': 'red'} : {}
      }
    },
    methods: {
			itemClick() {
				this.$router.replace(this.link) //对应一个路由跳转
      }
    }
	}
</script>

<style scoped>
  #tab-bar-item {
    flex: 1;
  }
  /*vertical-align 去掉图片自带的下面三个像素*/
  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>
