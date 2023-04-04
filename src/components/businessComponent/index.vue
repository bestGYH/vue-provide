<template>
    <div class="main">
        <h1>祖先级（组件最外层）</h1>
        <h4>
            这是调用者的数据：【{{ transferData }}】
        </h4>
        <slot name="customSlot" slotData="这是slotData"></slot>
        <a-button type="primary" @click="onChangeAge">点我给调用者加一岁</a-button>

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
            greatGrandsonData:null
        }
    },
    methods: {
        onChangeAge() {
            this.$emit('addAge')
        },
        getGreatGrandsonData(data){
            this.greatGrandsonData  = data
        }
    },
    mounted(){
        console.log(this);
    },
    provide() {
        return {
            componentSlots: this.$slots,
            componentThis: this,
            componentData: this._props,
            // 响应式注入
            // getAllSlots: () => this.$slots
        };
    },
}
</script>
<style scoped>
.main {
    height: 90vh;
    width: 90vw;
    background-color: aqua;
    border: 1px solid #2c3e50
}
</style>