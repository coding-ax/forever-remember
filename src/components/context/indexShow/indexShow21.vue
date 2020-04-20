<template>
  <div class>
    <el-container>
      <el-header>那些逆行者们</el-header>
      <el-main>
        <el-tooltip
          v-for="(url,index) in urls"
          :key="url"
          class="item"
          effect="dark"
          content="点击预览大图"
          placement="top-start"
        >
          <el-image
            @click="storyShow(index)"
            @mouseenter="storyShow(index)"
            :preview-src-list="urls"
            :src="url"
            fit="fit"
            style="max-height:400px"
          ></el-image>
        </el-tooltip>
        <!-- <el-image
          @click="storyShow(index)"
          :preview-src-list="urls"
          v-for="(url,index) in urls"
          :key="url"
          :src="url"
          lazy
        ></el-image>
         <el-image
          @click="storyShow(index)"
          :preview-src-list="urls"
          v-for="(url,index) in urls"
          :key="url"
          :src="url"
        ></el-image>-->
      </el-main>
      <el-main>
        <transition name="el-zoom-in-center">
          <div v-show="showText" class="transition-box" id="show-text">
            <div style="textAlign:center">
              <h3>{{heroName[currentIndex]}}</h3>
            </div>
            <div class="text-box">
              <!-- <pre> {{text[currentIndex]}}</pre> -->
              {{text[currentIndex]}}
            </div>
          </div>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { request } from "../../../network/index";
export default {
  name: "indexShow11",
  data() {
    return {
      urls: [],
      text: [],
      showText: true,
      currentIndex: 0,
      heroName: []
    };
  },
  components: {},
  methods: {
    storyShow(index) {
      this.showText = false;
      setTimeout(() => {
        this.showText = true;
      }, 500);
      this.currentIndex = index;
    }
  },
  created() {
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=4")
      .then(res => {
        let ans = res.data.data.paragraphVOList;
        console.log(ans);
        for (let item of ans) {
          if (item.img) {
            this.urls.push(item.img);
            this.text.push(item.description);
            this.heroName.push(item.title);
          }

          // console.log(item.description.replace(/\\r\\n/g, ","));
        }
      });
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  color: #888888;
  font-size: 30px;
  overflow-y: scroll;
  height: 50vh;
  border: 1px #fefefe solid;
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
#show-text {
  text-align: left;
}
/**图片 */
.el-image {
  width: 20%;
  margin: 10px;
  border-radius: 5px;
  transition: all 0.3s;
}
.el-image:hover {
  position: relative;
  box-shadow: 5px 5px 5px #888888;
  bottom: 2px;
}
.text-box {
  padding: 20px 0 100px;
  width: 100%;
}
</style>
