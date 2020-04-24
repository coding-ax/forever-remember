<template>
  <div class="show-box">
    <div class="title">
      <span>留言墙</span>
      <div class="small-title">
        <span>让我们一起，为世界加油！</span>
      </div>
    </div>
    <div class="input-box">
      <textarea
        name="comment-content"
        id="comment"
        cols="130"
        rows="10"
        placeholder="请输入你想说的话..."
        v-model="message"
      ></textarea>
      <div class="button-box">
        <el-button type="primary" @click="sendMessage" plain>提交</el-button>
      </div>
    </div>

    <el-collapse-transition>
      <div class="show-comment" v-show="show">
        <div :class="['show-item','item'+(index%4)]" v-for="(item,index) in data" :key="index">
          <div class="date">
            <span>{{item.date}}</span>
          </div>
          <div class="content">{{item.massage}}</div>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import { request } from "./../../../network/index";
export default {
  name: "indexShow44",
  data() {
    return {
      message: "",
      data: null,
      show: true
    };
  },
  components: {},
  methods: {
    getData() {
      let instance = request();
      instance.get("http://123.57.249.95:8091/fr/message").then(res => {
        console.log(res);
        this.data = res.data.data;
        this.message = "";
      });
    },
    sendMessage() {
      let instance = request();
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 500);
      // http://123.57.249.95:8091/fr/message?message=武汉加油&date=2020年4月24日16:25:33
      let date = new Date().toLocaleString();
      instance
        .post(
          "http://123.57.249.95:8091/fr/message?message=" +
            this.message +
            "&date=" +
            date
        )
        .then(res => {
          console.log(res);
          this.getData();
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.show-box {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* height: 1080px; */
  height: 100%;
  overflow-y: scroll;
  width: 99%;

}
.title {
  padding: 20px;
  /* line-height: 50px; */
  background-color: #409eff;
  color: #fefefe;
  font-family: "Microsoft Yahei", "宋体";
  font-weight: bolder;
  width: 100%;
}
.title span {
  font-size: 25px;
}
.small-title span {
  font-size: 15px;
}
.input-box {
  /* width: 100%; */
  /* margin-top: 10px; */
  width: 70%;
  border: 1px solid #bcbcc5;
}
textarea {
  font-size: 15px;
  border: 1px solid #bcbcc5;
  padding: 5px;
  width: 95%;
}
.button-box {
  text-align: left;
  position: relative;
  left: 1%;
  margin: 15px;
}
.show-comment {
  /* padding: 50px 500px 50px 500px; */
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px;
  height: 50%;
  /* border: 1px solid #bcbcc5; */
}
.show-item {
  min-width: 230px;
  max-width: 600px;
  margin: 10px;
  min-height: 100px;
  max-height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transition: all 0.3s;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
.show-item:hover {
  position: relative;
  bottom: 2px;
  box-shadow: 5px 5px 5px #888888;
}
.item0 {
  background-color: #cfc;
}
.item1 {
  background-color: rgba(204, 204, 255, 0.5);
}
.item2 {
  background-color: #fd79a8;
}
.item3 {
  background-color: #ffeaa7;
}
.content {
  padding: 10px;
}
</style>
