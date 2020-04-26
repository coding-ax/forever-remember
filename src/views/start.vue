<template>
  <div class="start-box">
    <!-- 背景层 -->
    <feature-view image="http://xgpax.top/img/wuhanjiayou_1.jpg">
      <transition name="el-zoom-in-center">
        <get-start v-show="show"></get-start>
      </transition>
    </feature-view>
  </div>
</template>

<script>
import featureView from "../components/common/FeatureView";
import getStart from "../components/context/GetStart/GetStart";
export default {
  name: "start",
  data() {
    return {
      show:false
    };
  },
  components: {
    featureView,
    getStart
  },
  methods: {},
  mounted () {
    setTimeout(() => {
      this.show=true;
    }, 100);
  }
};
</script>

<style scoped>
</style>
