import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import hydongtai from './components/hydongtai/hydongtai'
import wddongtai from './components/wddongtai/wddongtai'
import wdjiaxiang from './components/wdjiaxiang/wdjiaxiang'
import xiangce from './components/xiangce/xiangce'
import yinyue from './components/yinyue/yinyue'
import wdxuexiao from './components/wdxuexiao/wdxuexiao'

Vue.use(VueRouter)
Vue.use(VueResource)

import './common/stylus/index.styl'

let app = Vue.extend(App)

let router = new VueRouter()

router.map({
  '/hydongtai': {
    component: hydongtai
  },
  '/wddongtai': {
    component: wddongtai
  },
  '/wdjiaxiang': {
    component: wdjiaxiang
  },
  '/xiangce': {
    component: xiangce
  },
  '/yinyue': {
    component: yinyue
  },
  '/wdxuexiao': {
    component: wdxuexiao
  }
})

router.start(app, 'app')

router.go('/xiangce')
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
