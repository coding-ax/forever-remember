<template>
    <div class="feature-vue" :style="[{backgroundImage:'url('+image+')',filter:'blur('+filterNum+'px'+')'}]">
       <slot></slot>
    </div>
</template>

<script>
/**
 * featureView 用于存放背景图片
 * 可以传入背景链接image:
 * 可以传入filterNum用于设置模糊度
 * 提供slot插槽，使用绝对定位，如以后需要设置背景，则直接改变传入的image
 */
export default {
    name: "FeatureView",
    props: {
        image:{
            type:String,
            default:"https://imgslim.geekpark.net/uploads/image/file/1e/bc/1ebc705af79ea1af0e2ac2cd72a05a73.jpg"
        },
        filterNum:{
             type:Number,
            default:0
        }
    },
    data() {
        return {

        }
    },
    components: {

    },
    methods: {},
    created () {
        
    }
}
</script>

<style scoped>
.feature-vue{
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    /* background-size: 100% 100%; */
    /* filter:  blur(2px); */
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    margin: 0;
    padding: 0;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
}
</style>
