<template>
    <div class="common-style  father">
      <h1>父亲</h1>
      
      <son/>
    </div>
</template>
<script>
import son from "./Son.vue"

export default {
    name: "FatherPage",
    components: {
        son
    },
    props: {

    },
}
</script>
<style scoped>
.father{
    height:80vh;
    width:80vw;
    background-color:wheat;
    border:1px solid #2c3e50
}

</style>