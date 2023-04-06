<template>
    <div class="home common-style ">
        <h1>调用者</h1>
        <h2>
            我的年龄是： <span style="color:tomato">【{{ age }}】</span>  ,性别是： <span style="color:fuchsia">【 {{ isMan ? '男' : '女' }}】</span>   
        </h2> 
        <h3>
            曾孙子的年龄是： <span style="color:sienna">【{{ greatGrandsonAge }}】</span> 
        </h3>
        <a-button type="primary" @click="onChangeSex">改变性别</a-button>

        <businessComponent ref='businessComponent' :transferData="transferData" :isMan='isMan' testAtters='testAtters' @addAge="addAge"
            @switchSex="onChangeSex" @getGreatGrandsonData="getGreatGrandsonData">
            <template slot="customSlot" >
                <h2 style="color:red">这是自定义slot</h2>
            </template>
            <template slot="customScopedSlot"  slot-scope="data">
                <h2 style="color:blue">这是自定义ScopedSlot,【{{ data.slotData }}】</h2>
            </template>
        </businessComponent>
    </div>
</template>        

<script>
import businessComponent from "@/components/businessComponent/index"
export default {
    name: "HomePage",
    components: {
        businessComponent,
    },
    props: {

    },
    data() {
        return {
            transferData: 'hello,我是调用者。我给你传递了一个字符串',
            age: 0,
            isMan: true,
            customSlotData: '我是slot的数据',
            greatGrandsonAge: 0,
        }
    },
    mounted() {
    },
    methods: {
        addAge() {
            this.age += 1
        },
        onChangeSex() {
            this.isMan = !this.isMan
        },
        getGreatGrandsonData(age) {
            this.greatGrandsonAge = age
            console.log("***this.$refs.businessComponent.greatGrandsonData****", this.$refs.businessComponent.greatGrandsonData);
        }
    },
}
</script>
<style scoped>
.home {
    width: 100vw;
    background-color: aquamarine;
}
</style>