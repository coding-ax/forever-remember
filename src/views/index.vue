<template>
  <div class="index">
    <el-carousel height="100vh" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item1 in 4" :key="item1">
        <el-carousel height="100vh" :autoplay="false">
          <el-carousel-item v-for="item2 in 4" :key="item2">
            <div>
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
  components: {},
  methods: {}
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
  background-color: royalblue;
}
</style>
