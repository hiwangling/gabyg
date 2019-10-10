import request from '@/utils/request'
// 业务办理
export function getobituary(query) {
  return request({
    url: '/obituary/common',
    method: 'get',
    params: query
  })
}
export function listobituary(data) {
  return request({
    url: '/obituary/list',
    method: 'post',
    data
  })
}
export function getserver(query) {
  return request({
    url: '/servicescombo/services',
    method: 'get',
    params: query
  })
}
export function mahjonglogadd(data) {
  return request({
    url: '/mahjonglog/add',
    method: 'post',
    data
  })
}
export function mahjongloglist(data) {
  return request({
    url: '/mahjonglog/list',
    method: 'post',
    data
  })
}
export function mahjonglogdel(query) {
  return request({
    url: '/mahjonglog/del',
    method: 'get',
    params: query
  })
}
