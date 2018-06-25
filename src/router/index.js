import Vue from 'vue'
import Router from 'vue-router'

const Recommend = () => import('components/recommend/recommend')
const Singer = () => import('components/singer/singer')
const Rank = () => import('components/rank/rank')
// const Search = () => import('components/search/search')
// const SingerDetail = () => import('components/singer-detail/singer-detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
