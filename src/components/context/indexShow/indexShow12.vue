<template>
  <div class="echarts">
    <div :style="{height:'100vh',width:'200vh'}" ref="myEchart"></div>
  </div>
</template>


<script>
import { request } from "../../../network/index";
import echarts from "echarts";
import "../../../../node_modules/echarts/map/js/china"; // 引入中国地图数据
export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      chart: null,
      ans: []
    };
  },
  mounted() {
    // this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  created() {
    let instance = request();
    instance.get("http://123.57.249.95:8091/fr/data2").then(res => {
      this.originDataOfChina = JSON.parse(res.data.data.data);
      let data = this.originDataOfChina.areaTree[0].children;
      // //console.log(data);
      data.forEach(item => {
        let dataItem = {};
        dataItem["name"] = item.name;
        dataItem["value"] = item.total.nowConfirm;
        this.ans.push(dataItem);
      });
      this.chinaConfigure();
    });
  },
  methods: {
    chinaConfigure() {
      // //console.log(this.userJson)
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        baseOption: {
          backgroundColor: "#02AFDB",
          tooltip: {}, // 鼠标移到图里面的浮动提示框

          geo: {
            // 这个是重点配置区
            map: "china", // 表示中国地图
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: "rgba(0,0,0,0.4)"
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)"
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          visualMap: {
            //用来实现左下角
            type: "piecewise",
            pieces: [
              {
                min: 1000,
                max: 1000000,
                label: "大于等于1000人",
                color: "#372a28"
              },
              { min: 500, max: 999, label: "确诊500-999人", color: "#4e160f" },
              { min: 100, max: 499, label: "确诊100-499人", color: "#974236" },
              { min: 10, max: 99, label: "确诊10-99人", color: "#ee7263" },
              { min: 1, max: 9, label: "确诊1-9人", color: "#f5bba7" },
              { min:0,max:0,label:"无确诊",color:"#fefefe"}
            ],
            color: ["#E0022B", "#E09107", "#A3E00B"]
          },
          series: [
            {
              type: "scatter",
              coordinateSystem: "geo" // 对应上方配置
            },
            {
              name: "患病人数", // 浮动框的标题
              type: "map",
              geoIndex: 0,
              data: this.ans
            }
          ]
        }
      });
    }
  }
};
</script>

 
