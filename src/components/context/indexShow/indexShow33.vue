<template>
  <div class="show-box">
    <div class="img-box">
      <el-image :src="src" fit="cover" style="width: 100%; height: 600px"></el-image>
    </div>
    <div class="body-item">
      <div class="read-box">
        <div class="read">
          <div class="read-title">
             <h1> xxxxxxxxxxxxxxxxxx</h1></div>
          <div class="read-content">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </div>

        <div class="button-box">
          <div class="prev-button">
            <el-button type="primary" plain>上一篇:</el-button>
          </div>
          <div class="next-button">
            <el-button type="primary" plain>下一篇:</el-button>
          </div>
        </div>
      </div>
      <div class="recommend-box">
        <div class="title">为你推荐：</div>
        <div class="list">
          <div v-for="item in 10" :key="item" class="button-item">
            <el-button type="primary" plain>xxxxxxxxxxxxxxxxxx</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexShow11",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.show-box {
  overflow-y: scroll;
  height: 100vh;
  background-color: #eae0e0;
}
.body-item {
  display: flex;
  flex-direction: row;
  padding: 50px 200px 50px 300px;
}
.read-box {
  background-color: #fefefe;
  margin-right: 30px;
  width: 70%;
  min-height: 1000px;
}
.recommend-box {
  width: 25%;
  height: 600px;
  background-color: #fefefe;
}
.read{
    height: 900px;
}
.button-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.prev-button{
    padding: 30px;
}
.next-button{
    padding: 30px;
}
.read-content{
    font-size: 20px;
    padding: 40px;
    text-align: left;
}
.list{
    padding-top: 20px;
}
.title{
    line-height: 50px;
    text-align: left;
    margin-left: 30px;
    margin-top: 20px;
}
.button-item{
    margin: 5px;
}
</style>
