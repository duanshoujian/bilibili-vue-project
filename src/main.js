import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// axios({
//   url:'http://152.136.185.210:8000/api/n3/home/multidata'
// }).then(res=>{
//   console.log(res);
// })



//3.使用全局的axios和配置在进行网络请求
// axios.defaults.baseURL= "http://152.136.185.210:8000"
// //2.axios发送并发请求
// axios.all([axios({
//   url: '/api/n3/home/multidata'
// }),axios({
//   url: '/api/n3/home/data',
//   params:{
//     type:"sell",
//     page:5
//   }
// })])
//   .then( results => {
//     console.log(results)
// })


//4.创建对应的axios的实例
//
// const instance1=axios.create({
//   baseURL: "http://152.136.185.210:8000",
//   timeout: 5000
// })
//
// instance1({
//   url: "/api/n3/home/multidata",
// }).then(results=>{
//   console.log(results)
// })
//
// instance1({
//   url: "/api/n3/home/data",
//   params:{
//     type: "sell",
//     page: 5
//   }
// }).then (res =>{
//   console.log(res);
// })

//5。封装一个request模块，主要看export 是不是default 如果不是 就要加上{}
// import {request} from "../src/network/request"

//request就返回一个promise
// request({
//   url: '/api/n3/home/multidata'
// }).then(res =>{
//  //console.log(res);
// }).catch(err=>{
//   //console.log(err);
// })
