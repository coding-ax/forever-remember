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
        :disabled="current==index"
      >{{item}}</el-button>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import { request } from "../../../network/index";
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
            src: "http://xgpax.top/video/girlfriend.mp4", // 路径
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
      ],

      urls: [
      ],

      current:0
      /**
      改为：
      videoList:[
        {
          text:"抗击疫情错过结婚后 武警小哥与女朋友在夜幕下隔门合影实现心愿",
          url:"http://xgpax.top/video/girlfriend.mp4"
        }
      ]
      这样的形式
       */
    };
  },
  components: {
    videoPlayer
  },
  methods: {
    changePlayer(index) {
      let src = this.urls[index];
      this.playerOptions.sources[0].src = src;
      this.current=index;
    }
  },
  created() {
    // http://123.57.249.95:8091/fr/video
    let instance = request();
    instance
      .get("http://123.57.249.95:8091/fr/video")
      .then(res => {
       console.log(res);
       let response=res.data.data;
       for(let item of response){
         this.text.push(item.title);
         this.urls.push(item.url);
       }
       console.log('url',this.urls);
      });
  }
};
</script>

<style scoped>
.show-box {
  display: flex;
  flex-direction: row;
  background-color:#25CCF7 ;
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
