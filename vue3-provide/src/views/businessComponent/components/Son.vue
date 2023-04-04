<template>
    <div class="son">
      
      <h1>我是儿子</h1>
  <grandson/>
    </div>
</template>
<script>
import grandson from "./Grandson.vue"

export default {
    name: "SonPage",
    components: {
        grandson
    },
    props: {

    },
    setup() {
        // props, context
    }
}
</script>
<style scoped>
.son{
    height:70vh;
    width:70vw;
    background-color:bisque;
    border:1px solid #2c3e50

}

</style>