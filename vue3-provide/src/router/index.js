
import { createRouter,createWebHashHistory } from 'vue-router'
// 2. 定义一些路由：每个路由都需要映射到一个组件。
// const routes = [
//     { path: '/home',component: () => import("@/views/home/index.vue"), },
//     { path: '/test_business_component',component: () => import("@/views/testBusinessComponent/index.vue"), },
// ]
 
 //路由数组

const routes = [
    {
        path:'/',
        component:() => import('../views/home/index.vue')
    },
    {
        path:'/test_com',
        component:() => import('../views/businessComponent/index.vue')
    }
]

// 3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router
// 4.创建一个vue应用，将App组件和定义的路由放入到vue应用，并挂载到模板页面id为app的元素上。

