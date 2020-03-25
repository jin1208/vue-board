import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Create from '@/components/Create'
import Read from '@/components/Read'
import Update from '@/components/Update'
import Delete from '@/components/Delete'

Vue.use(Router)

export default new Router({
  mode: 'history', // # 태그를 쓰지 않기 위해 history 모드 적용
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Read',
      name: 'Read',
      component: Read
    },
    {
      path: '/Update',
      name: 'Update',
      component: Update
    },
    {
      path: '/Delete',
      name: 'Delete',
      component: Delete
    },
  ]
})
