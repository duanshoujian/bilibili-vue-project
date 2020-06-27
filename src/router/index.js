import Vue from 'vue'
import VueRouter from 'vue-router'


const Home=()=> import('../views/home/Home')
const Category=()=> import('../views/category/Category')
const Cart=()=> import('../views/cart/Cart')
const Profile=()=> import('../views/profile/Profile')


//1.安装插件
Vue.use(VueRouter)
//2创建router
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  },

]
const router =new VueRouter({
  routes,
  mode:'history'         //路径的写法
})

//3将VueRouter实例作为模块的默认导出
export default router
