<template>
    <div class="get-start-box">
        <div class="get-start-item">
            
        </div>
        <div class="get-start-button" @click="gotoIndex">
              <el-button type="primary"  plain>get start</el-button>
        </div>
    </div>
</template>

<script>
import GetStartItem from "./GetStartItem"
export default {
    name: "GetStart",
    data() {
        return {}
    },
    components: {
        GetStartItem
    },
    methods: {
        gotoIndex(){
            this.$router.replace('/index')
        }
    }
}
</script>

<style scoped>
.get-start-box{
   /* width: 600px; */
   /* height: 300px; */
   background-color: #fefefe;
   box-shadow:10px 10px 10px #888888;
   border-radius: 5px;
   position: relative;
   margin: auto;
   margin-top: 200px;
   width: 600px;
   height: 400px;
}
.get-start-button{
    
}
</style>
