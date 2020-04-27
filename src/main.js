import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**饿了么UI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts  //引入echarts
import 'echarts/extension/bmap/bmap';


import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'      //引入vxe-table
 

Vue.use(VXETable)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
