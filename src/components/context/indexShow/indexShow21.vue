<template>
  <div class>
    <el-container>
      <el-header>那些逆行者们</el-header>
      <el-main>
        <el-image
          @click="storyShow(index)"
          :preview-src-list="urls"
          v-for="(url,index) in urls"
          :key="url"
          :src="url"
        ></el-image>
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
            <div style="textAlign:center">{{heroName[currentIndex]}}</div>
            <div>{{text[currentIndex]}}</div>
          </div>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "indexShow11",
  data() {
    return {
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ],
      text: [
        `德国感染率下降至0.7，罗伯特·科赫研究所数据
感染率（the reproduction rate）是传染病流行病学中的一个重要概念，是用于判断病毒可传播性强弱的一个指标，主要指一个有传染性的确诊病例能产生新感染病例的平均数量。
如果感染率大于1，代表新感染数量可能会增加；如果小于1，病毒传播可能会消失。
举例说明，感染率为2，意味着平均1个确诊病人能再感染2人。德国感染率为0.7，则意味着并不是每一个新冠病毒确诊病例都会把病毒传染给另一个人。
研究所所长威勒称，即使德国仍处于疫情初期阶段，但本周新增病例每天都在减少。但他提醒道，仍必须保护高危易感人群。`,
        `德国感染率下降至0.7，罗伯特·科赫研究所数据
感染率（the reproduction rate）是传染病流行病学中的一个重要概念，是用于判断病毒可传播性强弱的一个指标，主要指一个有传染性的确诊病例能产生新感染病例的平均数量。
如果感染率大于1，代表新感染数量可能会增加；如果小于1，病毒传播可能会消失。
举例说明，感染率为2，意味着平均1个确诊病人能再感染2人。德国感染率为0.7，则意味着并不是每一个新冠病毒确诊病例都会把病毒传染给另一个人。
研究所所长威勒称，即使德国仍处于疫情初期阶段，但本周新增病例每天都在减少。但他提醒道，仍必须保护高危易感人群`
      ],
      showText: true,
      currentIndex: 0,
      heroName: ["dsad", "sdad", "tegt"]
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
  height: 46vh;
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
  transition: all 0.3s ;
}
.el-image:hover {
  position: relative;
  box-shadow: 5px 5px 5px #888888;
  bottom: 2px;
}
</style>
