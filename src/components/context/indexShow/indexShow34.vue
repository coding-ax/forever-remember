<template>
  <div class="show-box">
    <el-container>
      <el-header>历史图集</el-header>
      <el-main>
        <div class="show-pane">
          <el-tabs tab-position="right" style="height:900px;">
            <el-tab-pane label="黑死病">
              <el-tooltip
                v-for="url in blackDeath"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image :preview-src-list="blackDeath" :src="url" fit="fit" style="width:45%"></el-image>
              </el-tooltip>
            </el-tab-pane>
            <el-tab-pane label="天花">
              <el-tooltip
                v-for="url in tianhua"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image :preview-src-list="tianhua" :src="url" fit="fit" style="width:45%" lazy></el-image>
              </el-tooltip>
            </el-tab-pane>
            <el-tab-pane label="流感">
              <el-tooltip
                v-for="url in liugan"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image :preview-src-list="liugan" :src="url" fit="fit" style="width:45%" lazy></el-image>
              </el-tooltip>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
      <el-footer>请使用chrome,firefox在1920*1080下运行</el-footer>
    </el-container>
  </div>
</template>

<script>
import { request } from "../../../network/index";
export default {
  name: "indexShow11",
  data() {
    return {
      //存放图片地址
      urls: [],
      /**
      {
        background:[
          "http://xgpax.top/img/coronavirus-background.jpg",
          "http://xgpax.top/img/changjiangdaqiao.png",
        "http://xgpax.top/img/wuhanjiayou_1.jpg",
          "http://xgpax.top/img/tianhua-background.jpg",
          "http://xgpax.top/img/liugan-background.jpg",
          "http://xgpax.top/img/blackDeath-background.jpg",
        ],
    blcakDeath[
       "http://xgpax.top/img/blackDeath1.jpg",
        "http://xgpax.top/img/blackDeath2.jpg",
        "http://xgpax.top/img/blackDeath3.jpg",
        "http://xgpax.top/img/blackDeath4.jpg",
        "http://xgpax.top/img/blackDeath5.jpg",
        "http://xgpax.top/img/blackDeath6.jpg"
    ],
     tianhua: [
        "http://xgpax.top/img/tianhua1.jpg",
        "http://xgpax.top/img/tianhua2.jpg",
        "http://xgpax.top/img/tianhua3.jpg",
        "http://xgpax.top/img/tianhua4.jpg",
        "http://xgpax.top/img/tianhua5.jpg"
      ],
       liugan: [
        "http://xgpax.top/img/liugan1.jpg",
        "http://xgpax.top/img/liugan2.jpg",
        "http://xgpax.top/img/liugan3.jpg",
        "http://xgpax.top/img/liugan4.jpg",
        "http://xgpax.top/img/liugan5.jpg"
      ]
      }
  
      
       */
      blackDeath: [],
      tianhua: [],
      liugan: []
    };
  },
  components: {},
  methods: {},
  created() {
    //从载入的network中调用axios
    let instance = request();
    instance.get("http://123.57.249.95:8091/fr/img").then(res => {
      let ans = res.data.data;
      this.blackDeath = ans.blcakDeath;
      this.tianhua = ans.tianhua;
      this.liugan = ans.liugan;
    });
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

.el-tabs {
  overflow-y: scroll;
}
.el-tab-pane {
  position: sticky;
}
</style>
