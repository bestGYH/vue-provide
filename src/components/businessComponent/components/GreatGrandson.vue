<template >
    <div class="greatGrandson">
        <h1>我是曾孙子</h1>
        <h2>我的年龄是：{{ grandSonAge }}</h2>
      
        <h3>调用者性别是：{{ componentData.isMan ? '男' : '女' }}</h3>
        <p>
            <RenderDom :vNode="getCustomSlot()"></RenderDom>
        </p>
        <a-button type="primary" @click="onChangeAge">改变自己年龄</a-button>
        <a-button type="primary" @click="onChangeSex">改变调用者性别</a-button>
        <h3>这是调用者数据：【{{ componentData.transferData }}】</h3>

    </div>
</template>
<script>
import { Button } from 'ant-design-vue';
import { inject, ref, h } from 'vue'

export default {
    name: "GreatGrandsonPage",
    inject: {
        componentSlots: {
            // 祖先所有slot
            from: "componentSlots",
            default: undefined
        },
        // getAllSlots: {
        //     // 祖先所有slot
        //     from: "getAllSlots",
        // },
        componentData: {
            // 祖先实例this
            from: "componentData",
            default: undefined
        },
        componentThis: {
            // 祖先实例this
            from: "componentThis",
            default: false
        },
    },
    // computed: {
    //     allSlots() {
    //         return this.getAllSlots(); // provide 响应式
    //     },
    // },
    data() {
        return {
            grandSonAge: 0
        }
    },
    components: {
        AButton: Button,
        RenderDom: {
            // render自定义组件加载祖先传的slot的vnode
            props: {
                vNode: [Object],
            },
            render() {
                // return h("slot",{name:'customSlot',abc:'456'},h(this.vNode))// 不能像slot那样正常交互
                return this.vNode
            }
        },
    },
    methods: {
        onChangeSex() {
            this.listenersEvents.switchSex();
        },
        // 获取自定义事件
        getCustomEvents() {
            const listeners = this.componentThis.$listeners;
            this.listenersEvents = {};
            console.log("****listeners***", listeners);
            this.listenersEvents = { ...listeners };
        },
        onChangeAge() {
            this.grandSonAge += 1
            console.log("***this.listenersEvents**",this.listenersEvents);
            this.componentThis.getGreatGrandsonData(this.grandSonAge)
            this.listenersEvents.getGreatGrandsonData(this.grandSonAge)

        },
           // 获取自定义表格slotvNode
    getCustomSlot() {
       const  vNode= this.componentSlots.customSlot[0]
       console.log(this.componentSlots.customSlot[0]);
        return vNode;
      
    },
    },
    created() {
        this.getCustomEvents(); // 事件定义
        console.log("****this.componentSlots****",this.componentSlots);
    }
}
</script>
<style scoped>
.greatGrandson {
    height: 50vh;
    width: 50vw;
    background-color: rgb(233, 226, 226);
    border: 1px solid #2c3e50
}
</style>