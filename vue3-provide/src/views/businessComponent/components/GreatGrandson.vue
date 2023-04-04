<template >
    <div class="greatGrandson">
        <h1>我是曾孙子</h1>
        <a-button type="primary" @click="onChangeAge">点我给调用者加一岁</a-button>
        <h3>这是调用者数据：【{{componentData.transferData}}】，调用者性别是：{{ componentData.isMan?'男':'女' }}</h3>
        <p>这是个slot
            <RenderDom :vNode="customslot" ></RenderDom>
        </p>

    </div>
</template>
<script>
import { Button } from 'ant-design-vue';
import { inject,ref,h} from 'vue'

export default {
    name: "GreatGrandsonPage",
    components: {
        AButton: Button,
        RenderDom: {
            // render自定义组件加载祖先传的slot的vnode
            props: {
                vNode: [Function],
            },
            render() {
                // return h("slot",{name:'customSlot',abc:'456'},h(this.vNode))// 不能像slot那样正常交互
                return h(this.vNode)
            }
        },
    },
    setup(props,{emit}) {
        console.log("****emit***",emit);
        const componentSlots = inject('componentSlots')
        const customslot = ref(componentSlots.customSlot)
        const componentData =  ref(inject('componentData'))
        const componentAttrs = inject('componentAttrs')
        console.log("***componentAttrs****",componentAttrs['onSwitchSex']);
// const onChangeAge =  inject('onChangeAge')
        // props, context
        function onChangeAge(){
            console.log("****onChangeAge***");
            componentAttrs['switchSex']
        }
        return { customslot ,componentData,componentAttrs,onChangeAge,}
    },
    methods:{
        // onChangeAge(){
        //     this.componentAttrs['onSwitchSex']
        // }
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