import Vue from 'vue'
import App from './App'
import router from './router'
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
