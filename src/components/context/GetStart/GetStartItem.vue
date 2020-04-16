<template>
  <transition name="el-fade-in-linear">
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
    text-align: center;
    color: #888888;
    font-size: 20px;
    line-height: 40px;
}
</style>
