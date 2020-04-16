<template>
  <div class="get-start-box">
    <div class="get-start-item">
      <!-- <transition name="el-fade-in-linear"> -->
        <div class="item-box" v-for="(text,index) in texts" :key="index">
          <get-start-item :showTime="(index+1)*1000" :text="text"></get-start-item>
        </div>
      <!-- </transition> -->
    </div>
    <div class="get-start-button" @click="gotoIndex">
      <el-button type="primary" plain>get start</el-button>
    </div>
  </div>
</template>

<script>
import GetStartItem from "./GetStartItem";
export default {
  name: "GetStart",
  data() {
    return {
      texts: ["世界那么大", "还是遇见你", "柳下闻瑶琴", "起舞和一曲"],
    };
  },
  components: {
    GetStartItem
  },
  methods: {
    gotoIndex() {
      this.$router.replace("/index");
    }
  }
};
</script>

<style scoped>
.get-start-box {
  /* width: 600px; */
  /* height: 300px; */
  background-color: #fefefe;
  box-shadow: 10px 10px 10px #888888;
  border-radius: 5px;
  position: relative;
  margin: auto;
  margin-top: 200px;
  width: 600px;
  height: 400px;
}
.get-start-item {
  height: 85%;
  overflow-y: hidden;
}
.get-start-button {
  height: 15%;
  text-align: center;
}
</style>
