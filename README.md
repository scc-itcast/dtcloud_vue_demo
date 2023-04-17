# [文章](https://blog.csdn.net/sinat_40101215/article/details/130156008)
# 1. 简述DTCloud中qweb
DTCloud 内置 **jquery** 与 **Bootstrap** 的 **css** 样式，开发中使用可以减少代码量
[jquery参考链接](https://www.w3school.com.cn/jquery/index.asp)
[Bootstrap 样式链接参考](https://v3.bootcss.com/css/)
[Bootstrap 新版样式链接参考](https://getbootstrap.com/docs/5.1/utilities/background/)
# 项目的目录结构
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681695766781-d57afb56-fc13-4784-ab15-5109ac6cf90f.png#averageHue=%233d4144&clientId=u20279a48-025c-4&from=paste&height=701&id=uad98bd27&name=image.png&originHeight=701&originWidth=260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21100&status=done&style=none&taskId=uf4aa37ce-0b5f-4616-b7ec-b0a3582a0ec&title=&width=260)
项目中有用到less文件，如何使用less：
[参考链接](https://blog.csdn.net/sinat_40101215/article/details/130166278)
不想使用less的，可以使用scss，dtcloud自带解析scss功能
文末有仓库地址
# 2. 步骤
## 1. 创建自己模块 dtb_vue_demo
### 1. dtb_vue_demo\static\src\lib  js库文件
### 2. dtb_vue_demo\static\src\components  全局注册的组件
### 3. dtb_vue_demo\static\src\js\my_vueDemo.js 入口js文件
### 4. dtb_vue_demo\static\src\js\xml 入口js文件读取的xml
入口js文件定义的template需要和xml中 <t t-name="my_vueDemo"></t> 这个标签的 t-name相同
#### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681528121360-a2bf9218-a027-47fe-b1ab-ef5e72283ed9.png#averageHue=%23332e2c&clientId=u5bfb51d5-1e9e-4&from=paste&height=346&id=ub816e5fd&name=image.png&originHeight=346&originWidth=1422&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96090&status=done&style=none&taskId=ufd3d7aea-00bd-4cfe-9a53-b998cdc4a73&title=&width=1422)
## 2. 在__manifest__.py 引入相关的库文件及自己创建的文件
## 3. 启动项目，安装模块
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681456164362-be418638-fb43-47cf-b442-78a856c2e58d.png#averageHue=%2317abad&clientId=u4ebbfe33-9ba1-4&from=paste&height=896&id=u2fe3c0e8&name=image.png&originHeight=896&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51155&status=done&style=none&taskId=ufb55d73b-026b-41df-bc2b-c90ab3e086c&title=&width=1920)
# 3. 使用的注意事项
## 1. 尝试使用element或者antd都报错，可以使用 Semantic UI，搭配Bootstrap 的全局 CSS 样式
## 2. vue组件挂载到全局Vue上，可选择[函数式组件](https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6) [functional](https://v2.cn.vuejs.org/v2/api/#functional)
父子组件正常传递参数
### 1. 正常的子组件都是有状态的，可以直接使用vue的所有生命周期钩子，直接使用this调用
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681529407335-a8a1af5d-bd9f-4b89-afcb-b3d37c06e86c.png#averageHue=%232d2d2c&clientId=u5bfb51d5-1e9e-4&from=paste&height=463&id=u335ccea1&name=image.png&originHeight=463&originWidth=713&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43224&status=done&style=none&taskId=ub8c7c9a6-dade-4240-86bd-5eb74314f4b&title=&width=713)
### 2. 函数式组件，即functional: true，不能使用this
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681529426674-c8034d81-aa41-4198-afa0-5660dcfb2c1e.png#averageHue=%232c2c2b&clientId=u5bfb51d5-1e9e-4&from=paste&height=623&id=u2e188f83&name=image.png&originHeight=623&originWidth=802&originalType=binary&ratio=1&rotation=0&showTitle=false&size=53211&status=done&style=none&taskId=uaba7a00c-54a5-4ca4-a799-161208669d5&title=&width=802)
## 3. 在入口js文件中要注意 this 使用
## 4. 由于使用的是vue2，在修改对象里面的数据的时候，想要做到响应式，需要赋值一个新对象，新增或者删除对象的属性，是不会被监听到的
## 5. DTCloud的qweb在start 方法中的$(document).ready回调函数里不能第一时间获取到我们模块页面上的dom元素，需要加个延迟
## 6. 模块一旦安装成功，那么模块的js文件和css文件都会影响整个DTCloud
### 1. 在window中挂载js变量的时候，要做到整个DTCloud的唯一性，比如以模块命名
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681528720625-b6aa44f2-93bc-415c-889d-7aac0cfa616c.png#averageHue=%232c2c2c&clientId=u5bfb51d5-1e9e-4&from=paste&height=451&id=uab936749&name=image.png&originHeight=451&originWidth=1025&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50014&status=done&style=none&taskId=u20d48737-6b0a-42b1-b7f8-ad1be7232de&title=&width=1025)
### 2. css样式我们利用 less 的便捷性
![image.png](https://cdn.nlark.com/yuque/0/2023/png/26139765/1681528894824-d7194222-802a-4b74-9996-2c9c46823ddd.png#averageHue=%232e2d2c&clientId=u5bfb51d5-1e9e-4&from=paste&height=259&id=u8a53869c&name=image.png&originHeight=259&originWidth=923&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16022&status=done&style=none&taskId=u6223bb7c-dc2f-41c7-aca3-250e7e28291&title=&width=923)
# 4. 持续更新中
[github 链接地址](https://github.com/scc-itcast/dtcloud_vue_demo)
[gitee 链接地址](https://gitee.com/sccitcast/dtcloud_vue_demo)
