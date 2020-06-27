import axios from 'axios'

export function request(config) {
  //创建axios的实例
  const instance=axios.create({
    baseURL: "http://152.136.185.210:8000",
    timeout: 5000
  })
  //2.axios的拦截器
  //1.config里面的信息不符合服务器的要求
  //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
  //3.某些网络请求（比如登陆token，）必须携带一些特殊的信息
  instance.interceptors.request.use(aaa =>{
    console.log(aaa)
    return aaa;  //拦截下来了一定要返回去
  },err=>{
    console.log(err);
  })
  // //响应拦截
  // instance.interceptors.response.use(res=>{
  //   console.log(res);
  // },err=>{
  //   console.log(err);
  // })
  //发送真正的网络请求
  return instance(config);
}


//
// export function request(config) {
//   return new Promise((resolve,reject)=>{
//       //创建axios的实例
//   const instance=axios.create({
//     baseURL: "http://152.136.185.210:8000",
//     timeout: 5000
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res=>{
//         resolve(res);
//     })
//     .catch(err=>{
//         reject(err);
//     })
//   })
//
// }
