<template >
    <div  class="grandson">
      
      <h1>我是孙子</h1>

      <GreatGrandson/>
    </div>
</template>
<script>
import GreatGrandson from "./GreatGrandson.vue"

export default {
    name: "GrandsonPage",
    components: {
        GreatGrandson
    },
    props: {

    },
    setup() {
        // props, context
    }
}
</script>
<style scoped>
.grandson{
    height:60vh;
    width:60vw;
    background-color:darkgrey;
    border:1px solid #2c3e50

}

</style>