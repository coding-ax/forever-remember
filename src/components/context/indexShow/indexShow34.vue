<template>
  <div class="show-box">
    <el-container>
      <el-header>历史图集</el-header>
      <el-main>
        <div class="show-pane">
          <el-tabs tab-position="right" style="height:900px;">
            <el-tab-pane label="用户管理">
              <el-tooltip
                v-for="(url,index) in urls"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image
                  @click="storyShow(index)"
                  @mouseenter="storyShow(index)"
                  :preview-src-list="urls"
                  :src="url"
                  fit="fit"
                  style="width:45%"
                  lazy
                ></el-image>
              </el-tooltip>
            </el-tab-pane>
            <el-tab-pane label="配置管理">
                  <el-tooltip
                v-for="(url,index) in urls"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image
                  @click="storyShow(index)"
                  @mouseenter="storyShow(index)"
                  :preview-src-list="urls"
                  :src="url"
                  fit="fit"
                  style="width:45%"
                  lazy
                ></el-image>
              </el-tooltip>

            </el-tab-pane>
            <el-tab-pane label="角色管理">
                  <el-tooltip
                v-for="(url,index) in urls"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image
                  @click="storyShow(index)"
                  @mouseenter="storyShow(index)"
                  :preview-src-list="urls"
                  :src="url"
                  fit="fit"
                  style="width:45%"
                  lazy
                ></el-image>
              </el-tooltip>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿">
                  <el-tooltip
                v-for="(url,index) in urls"
                :key="url"
                class="item"
                effect="dark"
                content="点击预览大图"
                placement="top-start"
              >
                <!-- click与mouseenter为同情况,设置最高400px -->
                <el-image
                  @click="storyShow(index)"
                  @mouseenter="storyShow(index)"
                  :preview-src-list="urls"
                  :src="url"
                  fit="fit"
                  style="width:45%"
                  lazy
                ></el-image>
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
    };
  },
  components: {},
  methods: {},
  created() {
    //从载入的network中调用axios
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=4")
      .then(res => {
        let ans = res.data.data.paragraphVOList;
        console.log(ans);
        for (let item of ans) {
          if (item.img) {
            this.urls.push(item.img);
          }

          // console.log(item.description.replace(/\\r\\n/g, ","));
        }
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

.el-tabs{
    overflow-y: scroll;
}
.el-tab-pane{
    position:sticky;
}
</style>
