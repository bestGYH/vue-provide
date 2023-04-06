<template>
    <div class="main common-style ">
        <h1>祖先级（组件最外层）</h1>
        <h3>
            我的年龄是： <span style="color:blue"> 【{{ age }}】</span>  
        </h3>
        <h4>
            这是调用者的数据： <span style="color:green"> 【{{ transferData }}】</span> 
        </h4>
        <slot name="customSlot"></slot>
        <slot name="customScopedSlot" slotData="这是slotData"></slot>
        <a-button type="primary" @click="onChangeAge">点我给调用者加一岁</a-button>
        <a-button type="primary" @click="onChangeMyAge">点我给自己加一岁</a-button>

        <father />

    </div>
</template>
<script>
import father from "./components/Father.vue"
export default {
    name: "BusinessComponent",
    components: {
        father
    },
    props: {
        transferData: {
            type: String,
            default: ''
        },
        isMan: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            greatGrandsonData:null,
            age:0
        }
    },
    methods: {
        onChangeAge() {
            this.$emit('addAge')
        },
        getGreatGrandsonData(data){
            this.greatGrandsonData  = data
        },
        onChangeMyAge(){
            this.age+=1
        }
    },
    mounted(){
        console.log("this.$listeners",this.$listeners);
        console.log("this.$attrs",this.$attrs);

    },
    provide() {
        return {
            componentScopedSlots: this.$scopedSlots,
            componentSlots: this.$slots,
            componentThis: this,
            componentData: this._props,
            ancestorAge:this.age,
            // 响应式注入
            // getAncestorAge: () => this.age
        };
    },
}
</script>
<style scoped>
.main {
    width: 90vw;
    background-color: aqua;
}
</style>