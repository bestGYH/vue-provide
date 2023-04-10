<template >
    <div class="common-style  greatGrandson">
        <h1>曾孙子</h1>
        <h2>我的年龄是： <span style="color:sienna">【{{ grandSonAge }}】</span> </h2>

        <h3>调用者性别是： <span style="color:fuchsia">【 {{ componentData.isMan ? '男' : '女' }}】</span> </h3>
        <h3>这是祖先的年龄：<span style="color:blue"> 【{{ ancestorAge }}】</span> </h3>

        <p>
            <RenderDom :vNode="getCustomSlot()"></RenderDom>
            <RenderDom2 :vNode='componentThis.$scopedSlots.customScopedSlot' ></RenderDom2>
        </p>
        <a-button type="primary" @click="onChangeAge">改变自己年龄</a-button>
        <a-button type="primary" @click="onChangeSex">改变调用者性别</a-button>
        <h3>这是调用者数据： <span style="color:green">【{{ componentData.transferData }}】</span> </h3>

    </div>
</template>
<script>
import { Button } from 'ant-design-vue';
import ChildSlot from "./childSlot.vue"
export default {
    name: "GreatGrandsonPage",
    inject: {
        componentScopedSlots: {
            // 祖先所有slot
            from: "componentScopedSlots",
            default: undefined
        },
        componentSlots: {
            // 祖先所有slot
            from: "componentSlots",
            default: undefined
        },
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
        // ancestorAge: {
        //     // 祖先age
        //     from: "ancestorAge",
        //     default: false
        // },
        getAncestorAge: {
            // 祖先age
            from: "getAncestorAge",
        },
    },
    computed: {
        ancestorAge() {
            return this.getAncestorAge(); // provide 响应式
        },
    },
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
                // return h("slot",{name:'customSlot',slotData:this.slotData},h(this.vNode))// 不能像slot那样正常交互
                return this.vNode
            }
        },
        RenderDom2: {
            // render自定义组件加载祖先传的slot的vnode
            props: {
                vNode: [Function],
                slotData: [String]
            },
            render(createElement) {
                const ChildSlots = {}
                ChildSlots["customScopedSlot"] = this.vNode
                return createElement(ChildSlot, {
                    // 透传 scopedSlots
                    ref: "ChildSlot",
                    scopedSlots: ChildSlots
                })
            }
        },
    },
    methods: {
        onChangeSex() {
            // this.componentThis.$listeners.switchSex()
            this.listenersEvents.switchSex();
        },
        // 获取自定义事件
        getCustomEvents() {
            const listeners = this.componentThis.$listeners;
            this.listenersEvents = {};
            this.listenersEvents = { ...listeners };
        },
        onChangeAge() {
            this.grandSonAge += 1
            this.componentThis.getGreatGrandsonData(this.grandSonAge)
            this.listenersEvents.getGreatGrandsonData(this.grandSonAge)

        },
        // 获取自定义表格slotvNode
        getCustomSlot() {
            const vNode = this.componentSlots.customSlot[0]
            return vNode;

        },
    },
    created() {
        this.getCustomEvents(); // 事件定义
        console.log("****this.componentThis****", this.componentThis);
        console.log("****this.componentSlots****", this.componentSlots);
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