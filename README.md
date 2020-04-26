# forever-remember 
### 基于vue+elementUI与spring boot+mybatis的抗疫启示录SPA
START界面：  
1.首先含有一个启动页： views/start组件，  
2.start组件包括两个子组件  
2.1.featureView(背景图，中间有slot插槽)，用于方式背景图片，指定了image/filterNum属性   
    可以传入背景链接image（string):
    可以传入filterNum用于设置模糊度  
2.2.getStart组件就是开篇看到的那个白色弹框，指定了elementUI的动画效果   
3.getStart组件包括了getStartItem组件，即文案存放容器，设置了90%的高度，还使用了elementUI的button，点击跳转路由到/index,预设了一个10%的高度   
4.getStartItem组件使用了text,showTime两个插槽，且同样用了饿了么UI的动画效果，其中text指定文案，showTime用于指定开屏时间，预设了间隔0.2s   

INDEX界面：   
1.设置了两个大型的elementUI走马灯（轮播图组件）  
用于上下轮播和左右轮播（关闭自动轮播）  
2.完善了鼠标滚轮效果，用鼠标滚轮进行上下滚动，而左右滚动则依赖于原生的标识符按钮，做了开关检测，500ms防止滚动过量
3.接下来需要做的是完善index  

ps:   
network封装了一个axios实例（具体接口不明确，所以先。。。之后明确接口再封装）//已经完成

当前github开源项目链接： 

<a href="https://github.com/elemefe">element-ui</a>   

<a href="https://github.com/vuejs/vue">vue</a>   

<a href="https://github.com/spring-projects/spring-boot">spring boot</a>   

<a href="https://github.com/mybatis/mybatis-3/tree/master/src/site">mybatis</a>   

<a href="https://github.com/axios/axios">axios</a>  

<a href="https://github.com/surmon-china/vue-video-player">vue-video-player</a>  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```