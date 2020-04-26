<template>
  <transition name="el-zoom-in-center">
    <div class="start-item" v-show="show">{{text}}</div>
  </transition>
</template>

<script>
export default {
  name: "GetStartItem",
  props: ["text","showTime"],
  data() {
    return {
      show: false
    };
  },
  components: {},
  methods: {},
  created() {
    setTimeout(() => {
      this.show = !this.show;
    }, this.showTime);
  }
};
</script>

<style scoped>
.start-item {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
    color: #ed5a65;
    font-size: 20px;
    line-height: 40px;
    padding: 10px;
}
</style>
