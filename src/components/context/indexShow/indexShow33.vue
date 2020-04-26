<template>
  <div class="show-box">
    <div class="img-box">
      <el-image :src="src[0]" fit="cover" style="width: 100%; height: 600px"></el-image>
    </div>
    <div class="body-item">
      <div class="read-box">
        <div class="read" v-if="currentObj">
          <div class="read-title">
            <h1>{{currentObj.title}}</h1>
          </div>
          <div class="read-content">{{currentObj.description}}</div>
        </div>

        <div class="button-box">
          <div class="prev-button">
            <el-button
              type="primary"
              @click="changePlace(true)"
              :disabled="current==0"
              plain
            >上一篇:{{prevTitle}}</el-button>
          </div>
          <div class="next-button">
            <el-button
              type="primary"
              @click="changePlace(false)"
              :disabled="current==artList.length"
              plain
            >下一篇:{{nextTitle}}</el-button>
          </div>
        </div>
      </div>
      <div class="recommend-box">
        <div class="title">文章列表：</div>
        <div class="list">
          <div v-for="(item,index) in artList" :key="item.title" class="button-item">
            <el-button type="primary" :disabled="current==index" @click="change(index)" plain>{{item.title}}</el-button>
          </div>
        </div>
      </div>
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
      current: 0,
      artList: []
    };
  },
  computed: {
    currentObj() {
      return this.artList[this.current];
    },
    nextTitle() {
      if (this.artList==null||this.current == this.artList.length-1) {
        return "后面没有了";
      }
      return this.artList[this.current + 1].title;
    },
    prevTitle() {
      if (this.artList==null||this.current == 0) {
        return "前面没有了";
      }
      return this.artList[this.current - 1].title;
    }
  },
  components: {},
  methods: {
    changePlace(bool) {
      if (bool) {
        this.current--;
      } else {
        this.current++;
      }
    },
    change(index){
      this.current=index;
    }
  },
  created() {
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=5")
      .then(res => {
        let req = res.data.data.paragraphVOList;
        this.artList = req;
        let instance2 = request();
        return instance2.get(
          "http://123.57.249.95:8091/fr/article?articleId=6"
        );
      })
      .then(res => {
        this.artList.push(...res.data.data.paragraphVOList);
      });
  }
};
</script>

<style scoped>
.show-box {
  overflow-y: scroll;
  height: 100vh;
  width: 99%;
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
.read {
  min-height: 900px;
}
.button-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.prev-button {
  padding: 30px;
}
.next-button {
  padding: 30px;
}
.read-content {
  font-size: 20px;
  padding: 40px;
  text-align: left;
}
.list {
  padding-top: 20px;
}
.title {
  line-height: 50px;
  text-align: left;
  margin-left: 30px;
  margin-top: 20px;
}
.button-item {
  margin: 5px;
}
.el-button {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
