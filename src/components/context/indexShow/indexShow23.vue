<template>
  <div class="show-box">
    <div class="show-title">
       <h1>我本微末凡尘，然心有光明</h1> </div>
    <div class="show-body">
      <el-carousel :interval="2000" type="card" height="95%">
        <el-carousel-item v-for="item in res" :key="item.title">
          <div class="title">
            <h2>{{item.title}}</h2>
          </div>
          <el-image :src="item.img"></el-image>
          <div class="description">{{item.description}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { request } from "../../../network/index";
export default {
  name: "indexShow11",
  data() {
    return {
      res: null
    };
  },
  components: {},
  methods: {},
  created() {
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=2")
      .then(res => {
        this.res = res.data.data.paragraphVOList;
      });
  }
};
</script>

<style scoped>
.show-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px 10%;
  background-color: #25CCF7;
}
.show-title{
    position: relative;
    left: -150px;
}
.el-image {
    max-height: 70%;
    border-radius: 10px;
    transform: all .3s;
}
.el-image:hover{
    box-shadow: 2px 2px 2px #888888;
    position: relative;
    bottom: 2px;
}
.show-body {
  width: 80%;
  height: 100%;
}
.show-tail {
  background-color: black;
}
.el-carousel {
  width: 100%;
  height: 100%;
}
.description {
  width: 350px;
  position: relative;
  left: 190px;
  color: #fefefe;
}
.el-carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
