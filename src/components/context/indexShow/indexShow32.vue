<template>
  <div class="show-box">
    <featureView>
      <div class="img-box"></div>
    </featureView >
  </div>
</template>

<script>
import featureView from "../../common/FeatureView";
export default {
  name: "indexShow11",
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  components: {
    featureView
  },
  methods: {}
};
</script>

<style scoped>
.img-box {
  max-height: 60%;
}
.img-box .el-image {
  max-height: 600px;
}
</style>
