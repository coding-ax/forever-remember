<template>
  <div class="box">
    <el-container>
      <!-- 标题栏 -->
      <el-header>那些逆行者们</el-header>
      <!-- 此处为element-ui布局法，使用了两个el-main区分为图片框和文字框 -->
      <el-main>
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
            style="max-height:400px"
            lazy
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
      <!-- //处理文字： -->
      <el-main>
        <transition name="el-zoom-in-center">
          <div v-show="showText" class="transition-box" id="show-text">
            <div style="textAlign:center">
              <!-- 标题 -->
              <h3>{{heroName[currentIndex]}}</h3>
            </div>
            <!-- 正文 -->
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
  name: "indexShow21",
  data() {
    return {
      //存放图片地址
      urls: [],
      //存放文字内容
      text: [],
      //用于标记动画效果
      showText: true,
      //用于绑定相关内容
      currentIndex: 0,
      //保存标题
      heroName: []
    };
  },
  components: {},
  methods: {
    //点击图片和移动，用于加载动画
    storyShow(index) {
      this.showText = false;
      setTimeout(() => {
        this.showText = true;
      }, 300);
      this.currentIndex = index;
    }
  },
  //请求数据
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
.box{
  background-image: url(http://xgpax.top/img/wuhanjiayou_1.jpg);
  background-position: center;
  background-size: contain;
}
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  color: #ff7675;
  font-size: 20px;
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
  font-size: 15px;
}
</style>
