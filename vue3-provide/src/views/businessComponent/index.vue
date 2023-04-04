<template>
    <div class="main">
        <h1>祖先级（组件最外层）</h1>
      <h4>
        这是调用者的数据：【{{ transferData }}】
      </h4> 
      <a-button type="primary" @click="onChangeAge">点我给调用者加一岁</a-button>
      <slot name="customSlot" slotData="这是slotData"></slot>    
      <father/>
    </div>
</template>
<script>
import father from "./components/Father.vue"

import { provide} from 'vue'

export default {
    name: "BusinessComponent",
    emits: ['addAge'],
    inheritAttrs:false,
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
         default:false
     }
    },
    setup(props,context) {
        provide('componentData',props)
        provide('componentSlots',context.slots)
        provide('componentAttrs',context.attrs)

        console.log("***context.attrs****",context.attrs);
        return {}
    },
    methods:{
        onChangeAge(){
            this.$emit('addAge')
        }
    }
}
</script>
<style scoped>
.main{
    height:90vh;
    width:90vw;
    background-color:aqua;
    border:1px solid #2c3e50

}

</style>