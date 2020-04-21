<template>
  <div class="box">
    <!-- 弹出每个人的内容 -->
    <el-dialog
      title="简介"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <span>{{contents[current].title}}</span>
      <div>{{contents[current].description}}</div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <div class="show-title">
      <!-- 标题 -->
      <span>无情病魔，有道义士</span>
    </div>

    <div class="show-box" @mouseenter="banMove" @mouseleave="recover">
      <div class="box-item" v-for="(content,index) in contents" :key="index">
        <el-popover
          placement="top-start"
          :title="content.title"
          width="200"
          trigger="hover"
          :content="content.description"
        >
          <el-button class="radius" @click="buttonClick(index)" slot="reference">{{content.title}}</el-button>
        </el-popover>
      </div>
    </div>
    <div class="show-button">
      <el-button id="start">点击滑块查看生平</el-button>
    </div>
  </div>
</template>

<script>
import featureView from "../../common/FeatureView";
import { request } from "../../../network/index";
export default {
  name: "indexShow22",
  data() {
    return {
      //存储文字
      contents: [""],
      //开关
      dialogVisible: false,
      current: 0
    };
  },
  components: {
    featureView
  },
  created() {
    //对网络进行请求
    let instance = request({});
    instance
      .get("http://123.57.249.95:8091/fr/article?articleId=1")
      .then(res => {
        console.log(res.data.data.paragraphVOList);
        this.contents = res.data.data.paragraphVOList;
      });
  },
  methods: {
    //用于关闭弹出框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //给定提示框关闭
    buttonClick(index) {
      this.dialogVisible = true;
      this.current = index;
    },
    /**测试是否检测的到 */
    banMove() {
      console.log("Move in");
     this.$emit('banMouse');
    },
    recover() {
      console.log("move out");
     this.$emit('recoverMouse');
    }
  }
};
</script>

<style scoped>
.place {
  text-align: center;
}
.el-steps {
  width: 50%;
}
.show-box {
  display: flex;
  flex-wrap: wrap;
  height: 62vh;
  padding: 15px 300px;
  overflow-y: scroll;
}
.box-item {
  flex: 1;
}
.radius {
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px #888888;
  background-color: #3498db;
  color: #fefefe;
}
/* .el-button {
  margin: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px #888888;
  background-color: #3498db;
  color: #fefefe;
} */
.show-title {
  font-size: 30px;
  height: 10vh;
  line-height: 10vh;
  color: #888888;
  
}
.show-button {
  padding: 50px;
}
#start {
  height: 50px;
  width: 200px;
  border-radius: 0;
}
</style>
