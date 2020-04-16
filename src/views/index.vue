<template>
  <div class="index">
      <!-- 纵向轮播 -->
    <el-carousel height="100vh" indicator-position="none" direction="vertical" :autoplay="false" ref="vert" >
      <el-carousel-item v-for="item1 in 4" :key="item1">
          <!-- 横向轮播 -->
        <el-carousel height="100vh" :autoplay="false">
          <el-carousel-item v-for="item2 in 4" :key="item2">
              
            <div>
                <!-- 用单页级别(views级)组件取代这个东西 -->
              <h1>{{item1}}&{{item2}}</h1>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  mounted () {
      /**webkit */
    window.addEventListener('mousewheel',(event)=>{
        // console.log(event.wheelDelta);
        if(event.wheelDelta>0){
            this.prevV();
        }
        else{
            this.nextV();
        }
    })  
    /**firefox */
     window.addEventListener('DOMMouseScroll',(event)=>{
        // console.log(event);
        if(event.detail<0){
             this.prevV();
        }
        else{
            this.nextV();
        }
        
    })  
  },
  components: {},
  methods: {
      prevV(){
        //   console.log(this.$refs.vert)
        //      console.log(this.$refs.vert.prev)
          this.$refs.vert.prev();
      },
      nextV(){
          this.$refs.vert.next();
      }
  }
};
</script>

<style scoped>
.index {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background-color: royalblue; */
  background-color: #fefefe;

}
</style>
