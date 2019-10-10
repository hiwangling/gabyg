/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const taskRouter = {
  path: '/task',
  component: Layout,
  alwaysShow: true,
  name: 'Vuetask',
  meta: { title: '任务中心', icon: 'star' },
  children: [
    {
      path: '/cartask',
      name: 'Vuecartask',
      component: () => import('@/views/task/cartask'),
      meta: {
        title: '接运管理',
        noCache: true,
        perms: ['POST /api/v1/carsend/task']
      }
    },
    {
      path: '/flower',
      name: 'Vueflower',
      component: () => import('@/views/task/flower'),
      meta: {
        title: '鲜花管理',
        noCache: true,
        perms: ['POST /api/v1/flower/list']
      }
    }

  ]
}
export default taskRouter
