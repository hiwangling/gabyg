import request from '@/utils/request'
// 接运任务
export function listCartask(data) {
  return request({
    url: '/carsend/task',
    method: 'post',
    data
  })
}

export function editCarstatus(data) {
  return request({
    url: '/carsend/state',
    method: 'post',
    data
  })
}

export function editsend(data) {
  return request({
    url: '/carsend/edit',
    method: 'post',
    data
  })
}

export function createcarcommon(query) {
  return request({
    url: '/carsend/common',
    method: 'get',
    params: query
  })
}

export function editinfoService(query) {
  return request({
    url: '/carsend/editinfo',
    method: 'get',
    params: query
  })
}
// 鲜花管理
export function flowerList(data) {
  return request({
    url: '/flower/list',
    method: 'post',
    data
  })
}

export function flowerinfo(query) {
  return request({
    url: '/flower/info',
    method: 'get',
    params: query
  })
}
