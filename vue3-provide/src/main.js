import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';
 createApp(App).use(router).use(Antd).mount('#app')



