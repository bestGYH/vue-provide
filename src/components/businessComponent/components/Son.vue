<template>
    <div class="son common-style ">
      
      <h1>儿子</h1>
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