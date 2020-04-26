<template>
  <div class="show-box">
    <div class="img-box">
      <el-image :src="src" fit="cover" style="width: 100%; height: 600px"></el-image>
    </div>
    <div class="body-item">
      <div class="read-box" v-if="currentObj">
        <div class="read" >
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
              :disabled="current==aList.length-1"
              plain
            >下一篇:{{nextTitle}}</el-button>
          </div>
        </div>
      </div>
      <div class="recommend-box">
        <div class="title">为你推荐：</div>
        <div class="list">
          <div v-for="(item,index) in aList" :key="index" class="button-item">
            <el-button type="primary"  :disabled="current==index" @click="change(index)" plain>{{item.title}}</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../../network/index";
export default {
  name: "indexShow43",
  data() {
    return {
      src: "http://xgpax.top/img/coronavirus-background.jpg",
      aList: [],
      current: 0
    };
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
  computed: {
    currentObj() {
      return this.aList[this.current];
    },
    nextTitle() {
      if (this.current == this.aList.length-1) {
        return "后面没有了";
      }
      return this.aList[this.current + 1].title;
    },
    prevTitle() {
      if (this.current == 0) {
        return "前面没有了";
      }
      return this.aList[this.current - 1].title;
    }
  },
  created() {
    //从载入的network中调用axios
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=7")
      .then(res => {
        let req = res.data.data.paragraphVOList;
        this.aList = req;
        let instance2 = request();
        return instance2.get(
          "http://123.57.249.95:8091/fr/article?articleId=8"
        );
      })
      .then(res => {
        this.aList.push(...res.data.data.paragraphVOList);
        let instance3 = request();
        return instance3.get(
          "http://123.57.249.95:8091/fr/article?articleId=10"
        );
      })
      .then(res => {
        this.aList.push(...res.data.data.paragraphVOList);
        let instance4 = request();
        return instance4.get(
          "http://123.57.249.95:8091/fr/article?articleId=9"
        );
      })
      .then(res => {
        this.aList.push(...res.data.data.paragraphVOList);
      });
  }
};
</script>

<style scoped>
.show-box {
  overflow-y: scroll;
  height: 100vh;
    background-color: #f8a5c2;
  width: 99%;
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
.el-button{
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
