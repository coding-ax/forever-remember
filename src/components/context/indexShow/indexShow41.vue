<template>
  <div class="show-box">
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="title">
          <h3>以史为鉴</h3>
        </div>
        <div class="body">
          <div class="body-item">
            <div class="date">xxx-xxxx</div>
            <div class="de-title">xxxx title</div>
            <div class="detail">
              xxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div class="body-item">
            <div class="date">xxx-xxxx</div>
            <div class="de-title">xxxx title</div>
            <div class="detail">
              xxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div class="body-item">
            <div class="date">xxx-xxxx</div>
            <div class="de-title">xxxx title</div>
            <div class="detail">
              xxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
        </div>
        <div class="read-more">
          <el-button type="primary" @click="gotoChange(4,2)" plain>查看更多</el-button>
        </div>
      </el-main>
      <el-footer>请使用chrome,firefox在1920*1080下运行</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "indexShow41",
  data() {
    return {};
  },
  components: {},
  methods: { 
    gotoChange(x, y) {
      this.$emit("changeway", x, y);
    }
  }
};
</script>

<style scoped>
.show-box {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 10%;
}
.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: 80%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.body {
  padding: 10%;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  /* height: 300px; */
}
.body-item {
  width: 29%;
  padding: 0 70px;
  margin: 10px;
  flex: 1;
  transition: all 0.5s;
}
.body-item:hover {
  position: relative;
  box-shadow: 5px 5px 5px #888888;
  bottom: 2px;
  cursor: pointer;
}
.de-title {
  /* border-bottom: #EBEEF5 1px solid; */
  border-bottom: #dcdfe6 1px solid;
}
</style>
