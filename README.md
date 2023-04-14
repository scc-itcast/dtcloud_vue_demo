# [文章](https://blog.csdn.net/sinat_40101215/article/details/130156008)
# 1. 简述DTCloud中qweb
DTCloud 内置 **jquery** 与 **Bootstrap** 的 **css** 样式，开发中使用可以减少代码量
[jquery参考链接](https://www.w3school.com.cn/jquery/index.asp)
[Bootstrap 样式链接参考](https://v3.bootcss.com/css/)
# 项目的目录结构
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681454467972-4d83f73a-8a25-4729-864e-72237f62effc.png#averageHue=%233d4143&clientId=u4ebbfe33-9ba1-4&from=paste&height=701&id=u7dbfd6ea&name=image.png&originHeight=701&originWidth=304&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21288&status=done&style=none&taskId=u728a35d0-9da4-42a7-82df-4dc97123f20&title=&width=304)
# 2. 步骤
## 1. 创建自己模块 dtb_vue_demo
## 2. 在__manifest__.py 引入相关的库文件及自己创建的文件
## 3. 启动项目，安装模块
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681456164362-be418638-fb43-47cf-b442-78a856c2e58d.png#averageHue=%2317abad&clientId=u4ebbfe33-9ba1-4&from=paste&height=896&id=u2fe3c0e8&name=image.png&originHeight=896&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51155&status=done&style=none&taskId=ufb55d73b-026b-41df-bc2b-c90ab3e086c&title=&width=1920)
# 3. 使用的注意事项
## 1. 尝试使用element或者antd都报错，可以使用 Semantic UI，搭配Bootstrap 的全局 CSS 样式
## 2. vue组件挂载到全局Vue上，可选择[函数式组件](https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6) [functional](https://v2.cn.vuejs.org/v2/api/#functional)
## 3. 在入口js文件中要注意 this 使用
## 4. 由于使用的是vue2，在修改对象里面的数据的时候，想要做到响应式，需要赋值一个新对象，新增或者删除对象的属性，是不会被监听到的
## 5. DTCloud的qweb在start 方法中的$(document).ready回调函数里不能第一时间获取到我们模块页面上的dom元素，需要加个延迟
# 4. 持续更新中
[github 链接地址](https://github.com/scc-itcast/dtcloud_vue_demo)
[gitee 链接地址](https://gitee.com/sccitcast/dtcloud_vue_demo)
