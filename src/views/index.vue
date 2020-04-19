<template>
  <div class="index">
    <div class="navbar">
      <el-menu class="el-menu-demo nav-bar-box" mode="horizontal">
        <el-submenu class="nav-bar-item" index="1">
          <template slot="title">当前疫情</template>
          <el-menu-item index="1-1" @click="changeWay(1,1)">选项1</el-menu-item>
          <el-menu-item index="1-2" @click="changeWay(1,2)">选项2</el-menu-item>
          <el-menu-item index="1-3" @click="changeWay(1,3)">选项3</el-menu-item>
          <el-menu-item index="1-4" @click="changeWay(1,4)">选项3</el-menu-item>
        </el-submenu>
        <el-submenu class="nav-bar-item" index="2">
          <template slot="title">英雄故事</template>
          <el-menu-item index="2-1" @click="changeWay(2,1)">选项1</el-menu-item>
          <el-menu-item index="2-2" @click="changeWay(2,2)">选项2</el-menu-item>
          <el-menu-item index="2-3" @click="changeWay(2,3)">选项3</el-menu-item>
          <el-menu-item index="2-4" @click="changeWay(2,4)">选项3</el-menu-item>
        </el-submenu>
        <el-submenu class="nav-bar-item" index="3">
          <template slot="title">回首往昔</template>
          <el-menu-item index="3-1" @click="changeWay(3,1)">选项1</el-menu-item>
          <el-menu-item index="3-2" @click="changeWay(3,2)">选项2</el-menu-item>
          <el-menu-item index="3-3" @click="changeWay(3,3)">选项3</el-menu-item>
          <el-menu-item index="3-4" @click="changeWay(3,4)">选项3</el-menu-item>
        </el-submenu>
        <el-submenu class="nav-bar-item" index="4">
          <template slot="title">警世之钟</template>
          <el-menu-item index="4-1" @click="changeWay(4,1)">选项1</el-menu-item>
          <el-menu-item index="4-2" @click="changeWay(4,2)">选项2</el-menu-item>
          <el-menu-item index="4-3" @click="changeWay(4,3)">选项3</el-menu-item>
          <el-menu-item index="4-4" @click="changeWay(4,4)">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <!-- 竖向轮播 -->
    <!-- 纵向轮播 -->
    <el-carousel
      height="100vh"
      indicator-position="none"
      direction="vertical"
      :autoplay="false"
      ref="vert"
    >
      <el-carousel-item v-for="item1 in 4" :key="item1" :name="''+(item1+1)">
        <!-- 横向轮播 -->
        <el-carousel height="100vh" :autoplay="false" indicator-position="none" ref="wid">
          <el-carousel-item v-for="item2 in 4" :key="item2" :name="''+(item2+1)">
            <div class="place">
              <!-- 用单页级别(views级)组件取代这个东西 -->
              <!-- <h1>{{item1}}&{{item2}}</h1> -->
              <component :is="'indexShow'+item1+item2"></component>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { request } from "../network/index";

import indexShow11 from "../components/context/indexShow/indexShow11";
import indexShow12 from "../components/context/indexShow/indexShow12";
import indexShow13 from "../components/context/indexShow/indexShow13";
import indexShow14 from "../components/context/indexShow/indexShow14";
import indexShow21 from "../components/context/indexShow/indexShow21";
import indexShow22 from "../components/context/indexShow/indexShow22";
import indexShow23 from "../components/context/indexShow/indexShow23";
import indexShow24 from "../components/context/indexShow/indexShow24";
import indexShow31 from "../components/context/indexShow/indexShow31";
import indexShow32 from "../components/context/indexShow/indexShow32";
import indexShow33 from "../components/context/indexShow/indexShow33";
import indexShow34 from "../components/context/indexShow/indexShow34";
import indexShow41 from "../components/context/indexShow/indexShow41";
import indexShow42 from "../components/context/indexShow/indexShow42";
import indexShow43 from "../components/context/indexShow/indexShow43";
import indexShow44 from "../components/context/indexShow/indexShow44";

export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    indexShow11,
    indexShow12,
    indexShow13,
    indexShow14,
    indexShow21,
    indexShow22,
    indexShow23,
    indexShow24,
    indexShow31,
    indexShow32,
    indexShow33,
    indexShow34,
    indexShow41,
    indexShow42,
    indexShow43,
    indexShow44
  },
  created() {
    // http://123.57.249.95:8091/fr/data
    request()
      .get("http://123.57.249.95:8091/fr/data", {})
      .then(res => {
        console.log(res);
      });
  },
  mounted() {
    /**webkit */
    //开关
    // var flag = true;
    // window.addEventListener("mousewheel", event => {
    //   // console.log(event.wheelDelta);
    //   console.log("flag:", flag);
    //   if (flag) {
    //     if (event.wheelDelta > 0) {
    //       this.prevV();
    //     } else {
    //       this.nextV();
    //     }
    //     flag = false;
    //     setTimeout(() => {
    //       flag = true;
    //     }, 500);
    //   }
    // });
    // /**firefox */
    // window.addEventListener("DOMMouseScroll", event => {
    //   // console.log(event);
    //   console.log(flag);
    //   if (flag) {
    //     if (event.detail < 0) {
    //       this.prevV();
    //     } else {
    //       this.nextV();
    //     }
    //   }
    //   flag = false;
    //   setTimeout(() => {
    //     flag = true;
    //   }, 500);
    // });
  },
  methods: {
    prevV() {
      //   console.log(this.$refs.vert)
      //      console.log(this.$refs.vert.prev)
      this.$refs.vert.prev();
    },
    nextV() {
      this.$refs.vert.next();
    },
    handleSelect() {
      console.log("select");
    },
    activeIndex() {
      console.log("activeIndex");
    },

    changeWay(x, y) {
      console.log("hh");
      // console.log(this.$refs.vert);
      // console.log(this.$refs.wid);
      x = String(x);
      y = String(y);
      console.log(x, y);
      this.$refs.vert.setActiveItem(x - 1);
      setTimeout(() => {
        x = Number(x);
        this.$refs.wid[x - 1].setActiveItem(y - 1);
      }, 500);
    }

    // banMouse() {
    //  window.flag = false;
    //   console.log("index ： banMouse", window.flag);
    // },
    // recover() {
    //   window.flag = true;
    //   console.log("index ： recover", window.flag);
    // }
  }
};
</script>

<style scoped>
.el-menu-item {
  width: 25vw;
  text-align: center;
}

.index {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* background-color: royalblue; */
  background-color: #fefefe;
}

.nav-bar-box {
  display: flex;
  flex-direction: row;
}
.nav-bar-item {
  flex: 1;
}
.test {
  width: 100%;
  display: none;
}
.place {
  height: 100vh;
  width: 100vw;
}
</style>
