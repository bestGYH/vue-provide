<template>
    <div class="home">
        <h1>调用者</h1>
        <h3>
        我的年龄是：{{ age }},性别是：{{ isMan?'男':'女' }}
        </h3>
      <a-button type="primary" @click="onChangeSex">改变性别</a-button>
        <h4>
            这是组件-孙子的数据：
        </h4>
        <businessComponent :transferData="transferData" :isMan='isMan' @addAge="addAge" @switchSex="onChangeSex">
            <template v-slot:customSlot="{slotData}"><h2 style="color:red">这是自定义slot，{{ slotData }}</h2></template>
        </businessComponent>
    </div>
</template>        

<script>
import { ref} from 'vue'
import businessComponent from "@/views/businessComponent/index"
export default {
    name: "HomePage",
    components: {
        businessComponent,
    },
    props: {

    },
    setup() {
        const transferData = ref('hello,我是调用者。我给你传递了一个字符串')
        const  age = ref(0)
        const isMan = ref(true)
        function addAge (){
            console.log("addAge");
            age.value+=1
        }
        function onChangeSex (){
            console.log("addAge");
            isMan.value = !isMan.value
        }
        return { transferData,age,isMan,addAge ,onChangeSex}
    },
}
</script>
<style scoped>
.home {
    height: 100vh;
    width: 100vw;
    background-color: aquamarine;
}
</style>