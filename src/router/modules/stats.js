/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const statsRouter = {
  path: '/check',
  component: Layout,
  alwaysShow: true,
  name: 'VueStats',
  meta: { title: '统计分析', icon: 'chart' },
  children: [
    // {
    //   path: '/stats/check',
    //   name: 'Vuecheck',
    //   component: () => import('@/views/stats/check'),
    //   meta: {
    //     title: '骨灰统计',
    //     noCache: true,
    //     perms: ['POST /api/v1/statistics/check']
    //   }
    // },
    {
      path: '/stats/server',
      name: 'Vuecheck',
      component: () => import('@/views/stats/server'),
      meta: {
        title: '服务统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/services']
      }
    },
    {
      path: '/stats/sends',
      name: 'Vuecarsends',
      component: () => import('@/views/stats/carsend'),
      meta: {
        title: '接运统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/carsend']
      }
    },
    {
      path: '/stats/carmonth',
      name: 'Vuecarmonth',
      component: () => import('@/views/stats/carmonth'),
      meta: {
        title: '车队月统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/carmonth']
      }
    },
    {
      path: '/statistics/unknown',
      name: 'Vueounknown',
      component: () => import('@/views/stats/unknown'),
      meta: {
        title: '无名尸统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/unknown']
      }
    },
    {
      path: '/statistics/derate',
      name: 'Vuederate',
      component: () => import('@/views/stats/derate'),
      meta: {
        title: '火化费救助',
        noCache: true,
        perms: ['POST /api/v1/statistics/derate']
      }
    },
    {
      path: '/stats/obituary',
      name: 'Vueobituary',
      component: () => import('@/views/stats/obituary'),
      meta: {
        title: '完结业务统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/obituary']
      }
    },
    {
      path: '/stats/supplies',
      name: 'Vuesupplies',
      component: () => import('@/views/stats/supplies'),
      meta: {
        title: '丧葬用品统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/supplies']
      }
    },
    {
      path: '/stats/wreath',
      name: 'Vueswreath',
      component: () => import('@/views/stats/wreath'),
      meta: {
        title: '花圈挽联统计',
        noCache: true,
        perms: ['POST /api/v1/statistics/wreath']
      }
    }
  ]
}
export default statsRouter
