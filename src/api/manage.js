import request from '@/utils/request'
// 接运管理
export function listcarsend(data) {
  return request({
    url: '/carsend/list',
    method: 'post',
    data
  })
}

export function createcarsend(data) {
  return request({
    url: '/carsend/add',
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

export function addobituary(data) {
  return request({
    url: '/obituary/add',
    method: 'post',
    data
  })
}

export function infoobituary(query) {
  return request({
    url: '/obituary/info',
    method: 'get',
    params: query
  })
}
export function editobituary(data) {
  return request({
    url: '/obituary/edit',
    method: 'post',
    data
  })
}

export function delobituary(query) {
  return request({
    url: '/obituary/del',
    method: 'get',
    params: query
  })
}

export function signobituary(data) {
  return request({
    url: '/obituary/sign',
    method: 'post',
    data
  })
}

// 火化办理

export function listfire(data) {
  return request({
    url: '/cremation/list',
    method: 'post',
    data
  })
}

export function addfire(data) {
  return request({
    url: '/cremation/add',
    method: 'post',
    data
  })
}

export function editfire(data) {
  return request({
    url: '/cremation/edit',
    method: 'post',
    data
  })
}
export function commonCremation(query) {
  return request({
    url: '/cremation/common',
    method: 'get',
    params: query
  })
}
export function exporthall(query) {
  return request({
    url: '/monitor/exporthall',
    method: 'get',
    params: query
  })
}
export function infoCremation(query) {
  return request({
    url: '/cremation/info',
    method: 'get',
    params: query
  })
}
export function signfire(data) {
  return request({
    url: '/cremation/sign',
    method: 'post',
    data
  })
}
export function statefire(data) {
  return request({
    url: '/cremation/state',
    method: 'post',
    data
  })
}
export function checkfire(data) {
  return request({
    url: '/cremation/check',
    method: 'post',
    data
  })
}
export function sendfire(data) {
  return request({
    url: '/cremation/send',
    method: 'post',
    data
  })
}

// 寄存管理
export function checklist(data) {
  return request({
    url: '/check/list',
    method: 'post',
    data
  })
}
export function checkadd(data) {
  return request({
    url: '/check/add',
    method: 'post',
    data
  })
}
export function checkedit(data) {
  return request({
    url: '/check/edit',
    method: 'post',
    data
  })
}
export function checkrenew(data) {
  return request({
    url: '/check/renew',
    method: 'post',
    data
  })
}
export function checktake(data) {
  return request({
    url: '/check/take',
    method: 'post',
    data
  })
}
export function checkinfo(query) {
  return request({
    url: '/check/details',
    method: 'get',
    params: query
  })
}
export function checkSign(data) {
  return request({
    url: '/check/sign',
    method: 'post',
    data
  })
}

// 业务结算
export function financeList(data) {
  return request({
    url: '/finance/list',
    method: 'post',
    data
  })
}
export function financeInfo(query) {
  return request({
    url: '/finance/info',
    method: 'get',
    params: query
  })
}
export function financePay(data) {
  return request({
    url: '/finance/pay',
    method: 'post',
    data
  })
}
export function financecheck(data) {
  return request({
    url: '/finance/check',
    method: 'post',
    data
  })
}
export function checkCommon(data) {
  return request({
    url: '/finance/checkCommon',
    method: 'post',
    data
  })
}
export function servicesCommon(data) {
  return request({
    url: '/finance/services',
    method: 'post',
    data
  })
}
export function servicesAdd(data) {
  return request({
    url: '/finance/servicesAdd',
    method: 'post',
    data
  })
}
export function derateAdd(data) {
  return request({
    url: '/finance/derateAdd',
    method: 'post',
    data
  })
}
export function derateCommon(data) {
  return request({
    url: '/finance/derateCommon',
    method: 'post',
    data
  })
}
export function carsendEdit(data) {
  return request({
    url: '/finance/carsendEdit',
    method: 'post',
    data
  })
}
export function carsendSerEdit(data) {
  return request({
    url: '/finance/carsendSerEdit',
    method: 'post',
    data
  })
}
// WX
export function driver(data) {
  return request({
    url: '/carsend/driver',
    method: 'post',
    data
  })
}
// 客房
export function guesroomlist(data) {
  return request({
    url: '/guesroom/list',
    method: 'post',
    data
  })
}
export function guesroomcommon(query) {
  return request({
    url: '/guesroom/common',
    method: 'get',
    params: query
  })
}
export function guesroominfo(query) {
  return request({
    url: '/guesroom/info',
    method: 'get',
    params: query
  })
}
export function guesroomedit(data) {
  return request({
    url: '/guesroom/edit',
    method: 'post',
    data
  })
}

// 餐厅
export function restaurantlist(data) {
  return request({
    url: '/restaurant/list',
    method: 'post',
    data
  })
}
export function restaurantcommon(query) {
  return request({
    url: '/restaurant/common',
    method: 'get',
    params: query
  })
}
export function restaurantinfo(query) {
  return request({
    url: '/restaurant/info',
    method: 'get',
    params: query
  })
}
export function restaurantedit(data) {
  return request({
    url: '/restaurant/edit',
    method: 'post',
    data
  })
}
// 集中签名
export function obituarysign(data) {
  return request({
    url: '/obituary/sign',
    method: 'post',
    data
  })
}
export function guesroomsign(data) {
  return request({
    url: '/guesroom/sign',
    method: 'post',
    data
  })
}
export function cremationsign(data) {
  return request({
    url: '/cremation/sign',
    method: 'post',
    data
  })
}
export function restaurantsign(data) {
  return request({
    url: '/restaurant/sig',
    method: 'post',
    data
  })
}
export function halllist(query) {
  return request({
    url: '/monitor/halllist',
    method: 'get',
    params: query
  })
}
export function cremationdel(query) {
  return request({
    url: '/cremation/del',
    method: 'get',
    params: query
  })
}

