import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'

// 日志的详细与否，生产环境、开发环境
Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 入口文件
// 职责：做全局范围内的依赖和配置
// 职责：创建一个VUE实例
