import Vue from 'vue'
import Router from 'vue-router'
import List from '@/containers/List'
import Create from '@/containers/Create'
import Edit from '@/containers/Edit'
import Detail from '@/containers/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
