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
      <el-image :src="src[current]" fit="cover" style="width: 100%; height: 600px"></el-image>
    </div>

    <div class="body-box">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="width:80%">
        <el-tab-pane label="黑死病/鼠疫" name="first">
          <div  class="pane">
            <div class="pane-item" v-for="item in blackDeath" :key="item.title">
              <el-image :class="{dis:!item.img}" :src="item.img" fit="cover" style="width:270px;height:150px"></el-image>
              <div class="align-box">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.description}}</div>
                <div class="button-box">
                  <el-button type="primary" @click="gotoChange(3,3)" plain>READ MORE</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="天花" name="second">
          <div class="pane">
            <div class="pane-item" v-for="item in tianhua" :key="item.title">
              <el-image :class="{dis:!item.img}"  :src="item.img" fit="cover" style="width:270px;height:150px"></el-image>
              <div class="align-box">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.description}}</div>
                <div class="button-box">
                  <el-button type="primary" @click="gotoChange(3,3)" plain>READ MORE</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="流感" name="third">
          <div class="pane">
            <div class="pane-item" v-for="item in liugan" :key="item.title">
              <el-image :class="{dis:!item.img}" :src="item.img" fit="cover" style="width:270px;height:150px"></el-image>
              <div class="align-box">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.description}}</div>
                <div class="button-box">
                  <el-button type="primary" @click="gotoChange(3,3)" plain>READ MORE</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

      <div class="inline-box">
        <el-button type="primary" @click="gotoChange(3,1)" plain>返回概览</el-button>
      </div>
    </div>

    <div class="footer">
      <footer>请使用火狐/谷歌浏览器在1920x1080下运行</footer>
    </div>
  </div>
</template>

<script>
import { request } from "../../../network/index";
export default {
  name: "indexShow11",
  data() {
    return {
      src: [
        "http://xgpax.top/img/blackDeath-background.jpg",
        "http://xgpax.top/img/tianhua-background.jpg",
        "http://xgpax.top/img/liugan-background.jpg"
      ],

      /**
       * http://xgpax.top/img/tianhua-background.jpg
       * http://xgpax.top/img/liugan-background.jpg
       * http://xgpax.top/img/blackDeath-background.jpg
       */
      activeName: "first",
      current: 0,
      blackDeath: [],
      tianhua: [],
      liugan: []
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      //console.log(tab, event);
      switch (tab.name) {
        case "first":
          this.current = 0;
          break;
        case "second":
          this.current = 1;
          break;
        case "third":
          this.current = 2;
          break;
      }
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
        // for(let i=0;i<req.length;i++)
        this.blackDeath.push(req[0]);
        this.tianhua.push(req[1]);
        this.liugan.push(req[2]);
        let instance2=request();
        return instance2.get("http://123.57.249.95:8091/fr/article?articleId=6");
      }).then(res=>{
        this.tianhua.push(...res.data.data.paragraphVOList);
      })
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
  margin: 2px 5px 10px 5px;
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
.content {
  width: 100%;
  display: -webkit-box; /* 弹性盒模型*/
  -webkit-box-orient: vertical; /* 文字垂直排列 */
  -webkit-line-clamp: 3; /*文字显示的行数*/
  overflow: hidden; /*超出部分溢出隐藏*/
}
.dis{
  opacity: 0;
}
</style>
