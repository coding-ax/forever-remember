<template>
  <div class="show-box">
    <!-- 返回按钮 -->
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</div>
    </el-backtop>-->

    <div class="img-box">
      <el-image :src="src" fit="cover" style="width: 100%; height: 600px"></el-image>
    </div>

    <div class="body-box">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="width:80%">
        <el-tab-pane label="黑死病/鼠疫" name="first">
          <div class="pane">
            <div class="pane-item" v-for="item in 3" :key="item">
              <el-image :src="src" fit="cover" style="width:270px;height:150px"></el-image>
              <div class="align-box">
                <div class="title">xxxxxxxxxxxxxxxxxxxx</div>
                <div
                  class="content"
                >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                <div class="button-box">
                  <el-button type="primary" @click="gotoChange(3,3)" plain>READ MORE</el-button>
                </div>
              </div>
              <div class="show-date">title</div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="天花" name="second">
          <div class="pane">
            <div class="pane-item" v-for="item in 3" :key="item">
              <el-image :src="src" fit="cover" style="width:270px;height:150px"></el-image>
              <div class="align-box">
                <div class="title">xxxxxxxxxxxxxxxxxxxx</div>
                <div
                  class="content"
                >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                <div class="button-box">
                  <el-button type="primary" @click="gotoChange(3,3)" plain>READ MORE</el-button>
                </div>
              </div>
              <div class="show-date">title</div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="流感" name="third">
          <div class="pane">
            <div class="pane-item" v-for="item in 3" :key="item">
              <el-image :src="src" fit="cover" style="width:270px;height:150px"></el-image>
              <div class="align-box">
                <div class="title">xxxxxxxxxxxxxxxxxxxx</div>
                <div
                  class="content"
                >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                <div class="button-box">
                  <el-button type="primary" @click="gotoChange(3,3)" plain>READ MORE</el-button>
                </div>
              </div>
              <div class="show-date">title</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

      <div class="inline-box">
        <el-button type="primary" @click="gotoChange(3,1)" plain>返回概览</el-button>
      </div>
    </div>

    <div class="footer">
      <footer>copyright@AX</footer>
    </div>
  </div>
</template>

<script>
import { request } from "../../../network/index";
export default {
  name: "indexShow11",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeName: "first",

      ans: []
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    gotoChange(x, y) {
      this.$emit("changeway", x, y);
    }
  },
  created() {
    //从载入的network中调用axios
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=5")
      .then(res => {
        let req = res.data.data.paragraphVOList;
        let count = 0;
        for (let item of req) {
          count++;
          if (count > 3) break;
          let title = item.title.slice(0, item.title.indexOf("---"));
          let deTitle = item.title.slice(
            item.title.indexOf("---") + 3,
            item.title.length
          );
          // console.log(title);
          //  console.log(description);
          this.ans.push({
            title,
            deTitle,
            description: item.description
          });
        }
        console.log(3.1, res);
      });
  }
};
</script>

<style scoped>
.show-box {
  overflow-y: scroll;
  height: 100vh;
  width: 99%;
}
.body-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
}
.el-tabs {
  margin: 0 0 0 100px;
}
.pane {
  display: flex;
  flex-direction: column;
  /* overflow: scroll; */
  align-items: center;
  justify-content: center;
}
.pane-item:hover {
  background-color: rgba(77, 77, 77, 0.3);
  margin: 70px 50px 70px 190px;
}
.pane-item {
  display: flex;
  border-bottom: 1px solid #888888;
  transition: 0.5s all;
}
.pane-item .el-image {
  margin: 80px 60px 80px 200px;
  /* width: 30%; */
}
.align-box {
  display: flex;
  flex-direction: column;
  width: 60%;
  line-height: 40px;
  align-items: center;
  justify-content: center;
}
</style>
