<template>
  <div class="show-box">
    <div class="watch-box">
      <!-- 使用vue-video-player -->
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
    <div class="list-box">
      <el-button
        type="primary"
        @click="changePlayer(index)"
        plain
        v-for="(item,index) in text"
        :key="item"
      >{{item}}</el-button>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  name: "indexShow24",
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:10", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src:
              "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/60_32ff93a80ece68e52fcde3476bfbf1e0.mp4", // 路径
            type: "video/mp4" // 类型
          }
          //   {
          //     src: "//path/to/video.webm",
          //     type: "video/webm"
          //   }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true //全屏按钮
        }
      },

      playing: 0,
      text: [
        "我也不记得",
        "女学。～圣女斯克威尔学院～：第03集",
        "精灵宝可梦：第22集",
        "博人转"
      ],

      urls: [
        "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/60_32ff93a80ece68e52fcde3476bfbf1e0.mp4",
        "https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_c405703ba6e7bab48cfd642d45b90e70.mp4",
        "http://113.96.221.165/vmtt.tc.qq.com/1098_9b6df530e7d37eb877936c693a4f4922.f0.mp4?vkey=4E0C603C0990E2999DCC807D60D0F5387B7779BDF3679B836E872EF42C0570F2CA73F9B29D1AF2664EEFCCE62CC240360C983A4DF6A4B600FA180560F80AE3E5B3717EFD466A06B13E76377737A57BEEC40EC5646F0B343E",
        "http://59.36.120.252/vmtt.tc.qq.com/1098_3b66737ab7fc72957f0f54963483bc54.f0.mp4?vkey=6AAEEB481404A079335721EB857510AF83F9ECB4444AE60CEAC33E55204007C5BEBB3174065D869AD0ECEBDD33A64BD0BB41D260E7CF56C216A9C90C4F7F43A76593D05508F436BCA46FF21A3B5230F7000B365717888DD0"
      ]
    };
  },
  components: {
    videoPlayer
  },
  methods: {
    changePlayer(index) {
      let src = this.urls[index];
      this.playerOptions.sources[0].src = src;
    }
  }
};
</script>

<style scoped>
.show-box {
  display: flex;
  flex-direction: row;
}
.watch-box {
  width: 80%;
  height: 100%;
}
.list-box {
  width: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.el-button {
  width: 90%;
  margin: 2px;
  height: 5vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
