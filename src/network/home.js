import {request} from '../network/request'

export function getHomeMultidata(){
  return request({
    url: '/api/n3/home/multidata'
  })
}
