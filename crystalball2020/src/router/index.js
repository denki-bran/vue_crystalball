import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import bitsLayout from '@/layout/8bits'


export const CrystalRouter = [
	{
	    path: '/clock',
	    component: bitsLayout,
		children: [
			{
			  path: '',
			  name: '',
			  component: () => import('@/views/clock/index')
			}
		]
	  },

	  {
	    path: '/404',
	    component: () => import('@/views/404'),
	  },

	  {
	    path: '/',
	    redirect: '/clock'
	  },
	// 404 page must be placed at the end !!!
  	{ path: '*', redirect: '/404'}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: CrystalRouter
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router