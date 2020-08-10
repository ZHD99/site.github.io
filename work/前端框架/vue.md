## 什么是vue

vue是一套构建用户界面渐进式框架

## 适用人群

有一定的HTML/CSS/JavaScript+ES6+基础开发人员

## vue框架学习路线

html/css/js=>es6->vue基础+组件化开发=>vue核心插件vue-router和vuex  
=>搜索社区大牛的资料继续深入学习+ 底层源码

## vue 基础

angular 09年  谷歌团队  
react 2013年   用户体验好    Facebook团队  
vue 2014年  用户体验好，api齐全  

#### 前端框架与库

- jquery库→>DOM(操作DdM)+请求
- art-template库->模板引擎
- 框架=全方位功能齐全
  - 简易的DOM体验+发请求+模板引擎+路由功能+数据管理
  - KFC的世界里,库就是一个小套餐,框架就是全家桶
- 代码上的不同
  - 一般使用库的代码,是调用某个函数,我们自己把控库的代码
  - 一般使用框架,其框架在帮我们运行我们编写好的代码
    - 框架:初始化自身的一些行为
      - 执行你所编写的代码
      - 释放一些资源

## vue 起步

- 引包
- 启动new Vue(options);
- options
- 目的地el
- 数据data保存数据属性   
  核心：数据驱动视图

##  插值表达式

- {表达式}}
  - 对象(不要连续3个{{ {name:jack} }}  插入对象需要用空格隔开
  - 字符串{{'xxx'}}、数值{{123}}
  - 判断后的布尔值{ true }}
  - 三元表达式{ftrue?'是正确‘:’错误'}
- 可以用于页面中简单粗暴的调试
- 注意:必须在data这个函数中返回的对象中声明



## 什么是指令

- 在vue中提供了一些对于页面+数据的更为方便的输出,这些操作就叫做指令,以
  V-xxx表示
  - 比如html页面中的属性`<div v-xxx ></div>`
- 比如在angular中以ng-xxx开头的就叫做指令
- 在vue中以V-xxx开头的就叫做指令
- 指令中封装了一些DOM行为,结合属性作为一个暗号,暗号有对应的值,根据不同的值,框架会进行相关DOM操作的绑定


### vue 常用指令

v-if :  条件判断指令，可以配合 v-else 使用 ， 如果为false 则不在网页上渲染  
v-show:  条件判断指令， 如果为false 则在DOM设置隐藏属性并未完全删除  
v-cloak ：使用v-cloak能够解决插值表达式闪烁的问题  
v-text:  默认v-text v-html是没有闪烁问题的， v-text会覆盖元素中原本的内容,但是插值表达式 只会  替换自己的这个占位符，不会吧整个元素的内容清空 

v-html:  与 v-text 相同，但输出 HTML 格式

v-bind:  `<input type="button" value="按钮" v-bind:title="mytitle" /> `  要绑定的属性 例如上`:title`   v-bind中,可以写合法的Js表达式  
v-bind vue提供的属性绑定机制  缩写是  `: `

v-on:  vue提供的事件绑定机制 缩写是 `@ `  
methods属性 定义了当前vue示例所有可用的方法, `v-on` 定义点击事件

v-for="(item,index) in menus"   v-for 遍历元素， 有2个参数，第一个为 每一项元素，第二个为索引  
v-for 不仅能遍历数组还能遍历对象，https://cn.vuejs.org/v2/guide/list.html#维护状态 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key`   `<div v-for="item in items" v-bind:key="item.id">`

!> vue指令比插值表达式优先级高，vue 指令存在覆盖现象


##  [事件处理](https://cn.vuejs.org/v2/guide/events.html)

## [Vue中表单输入绑定应用](https://cn.vuejs.org/v2/guide/forms.html)

## 侦听器watch

```
data:{
	msg:'',
	stus:[{{name:'jack'}}]
}
watch:{
	// 这种监视普通的数据类型
	'msg':function(新值,旧值){
		if(newV === '100'){
			console.log('hello');
		}
	},
	// 深度监视， 监视object对象 和Array数组
	 'stus':{
	 	deep: 'true',
	 	handler:function(新值,旧值){
			console.log(新值[0].name);
	 	}
	 }
}
```

- 基本的数据类型可以使用watch直接监视，复杂数据类型 object Array要深度监视

## 计算属性computed

- 一个复杂的逻辑中，可以吧它放进computed中
- computed 对象默认只有getter方法
- 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter

```
		<div id="app">
				{{msg}}
			<input type="text" v-model="context" @input="handInpt" />
		</div>
		<script>
			new Vue({
				el: '#app',
				data: {
					msg: "hello",
				},
				methods:{
					handInpt:function(e){
						const {value} = e.target;
						console.log(e);
						this.context = value;
					}
				},
				computed:{
					context:{
						set:function(newV){
							this.msg = newV;
						},
						get:function(){
							return this.msg;
						}
					}
				}
			});
		</script>
```

## filters 过滤器

主要功能为数据添油加醋, 有2中过滤器，**局部过滤器**、**全局过滤器**  
filters**局部过滤器**

```

		<div id="app">
			<h3>{{price | myPrice('￥')}}</h3>
		</div>
		<script>
			new Vue({
				el:'#app',
				data: {
					price: 20
				},
				filters:{
					myPrice:function(pr,$) {
						return $+'$'+pr;
					}
				}
			});
		</script>
```

- 全局过滤器 
  - `Vue.filter('myReverse',(val) => {})`

```

		<div id="app">
			<h3>{{price | myPrice('￥')}}</h3>
			<h3>{{msg | myReverse}}</h3>
		</div>
		<script>
			Vue.filter('myReverse', (val) => {
				return val.split('').reverse().join('');
			});
			new Vue({
				el:'#app',
				data: {
					price: 20,
					msg: 'hello'
				},
				filters:{
					myPrice:function(pr,$) {
						return $+'$'+pr;
					}
				}
			});
		</script>
```



## 基础阶段性练习

[音乐播放器](http://site.dearmsdan.com/work/前端框架/vue/music计算属性.html)







# Vue组件化开发

## 什么是组件

简单的认为，一个组件等于一个小功能 封装了各种html、css、js

## 局部组件

- 使⽤局部组件的打油诗: 建⼦ 挂⼦ ⽤⼦
- 在组件中的data 必须是个函数，返回一个对象，以免数据冲突

```javascript
<div id="app">
 <!-- 3.使⽤⼦组件 -->
 <App></App>
</div>

<script>
//1.创建⼦组件
const App = {
 //必须是⼀个函数
     data() {
 return {
 msg: '我是App组件'
 }
 },
 components: {
 Vcontent
 },
 template: `
 <div>
 <Vheader></Vheader>
 <div>
 <Vaside />
 <Vcontent />
 </div>
 </div>
 `
}
new Vue({
 el: '#app',
 data: {
 },
 components: {
 // 2.挂载⼦组件
 App
 }
})
</script>
```



## 全局组件

- 通过 Vue.component(组件名,{}) 创建全局组件,此时该全局组件可以在
  任意模板(template)中使⽤
- 创建全局组件第一个是组件名第二个是配置

```
Vue.component('Child',{
 template:`
 <div>
 <h3>我是⼀个⼦组件</h3>
 </div>
`
})
```



## 组件通信

### 父往子传值

- 通过prop来进行通信

1. 在子组件中声明props接收在父组件挂载的属性
2. 可以在子组件的template中任意使用
3. 在父组件绑定自定义的属性

例如：

```javascript
 // 子组件
Vue.component('Child',{
            template:`
                <div>
                    <h3>我是一个子组件</h3>   
                    <h4>{{childData}}</h4> // 2
                </div> 
            `,
            props:['childData']    // 1
        })
 // 父组件
        const App = {
            data() {
                return {
                    msg: '我是父组件传进来的值'
                }
            },
            template: `
                <div> 
                    <Child :childData = 'msg'></Child>    // 3
                </div>
            `,
            computed: {

            }
        }
```

### 子往父传值 

1. 在父组件中 子组件上绑定自定义事件  
2. 在子组件中 触发原生的事件 在事件函数通过this.$emit触发自定义的事件

```javascript
 Vue.component('Child', {
            template: `
                <div>
                    <h3>我是一个子组件</h3>   
                    <h4>{{childData}}</h4>
                    <input type="text" @input = 'handleInput'/>
                </div>
            `,
            props: ['childData'],
            methods:{
                handleInput(e){
                    const val = e.target.value;

                    this.$emit('inputHandler',val);  // 2
                }
            },
        })

        const App = {
            data() {
                return {
                    msg: '我是父组件传进来的值',
                    newVal:''
                }
            },
            methods:{
                input(newVal){   // 1
                    // console.log(newVal);
                    this.newVal = newVal;
                }
            },
            template: `
                <div>
                    <div class='father'>
                        数据:{{newVal}}
                    </div>
                    <Child :childData = 'msg' @inputHandler = 'input'></Child>  
                </div>
            `,
            computed: {

            }
        }
```

### 平行组件通信




## vue如何获取并操作DOM元素

Vue.js虽然说是数据驱动页面的，不建议我们操作dom,但是有时候我们也要获取dom对象进行一些操作。vue的不同版本获取dom对象的方法不一样  

- Vue.js  1.0版本中，通过v-el绑定，然后通过this.els.XXX来获取
- Vue.js  2.0版本中。我们通过给元素绑定ref=“XXX”，然后通过this.$refs.XXX或者this.refs['XXX']来获取



## 快速原型开发

使用 `vue serve` 和 `vue build` 命令对单个 `*.vue` 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：

```
cnpm install -g @vue/cli-service-global
```

`vue serve` 的缺点就是它需要安装全局依赖，这使得它在不同机器上的一致性不能得到保证。因此这只适用于快速原型开发。

需要的仅仅是一个 `App.vue` 文件：

```vue
<template>
    <div>
        <h2>hello world 单页面组件</h2>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
```

然后在这个 `App.vue` 文件所在的目录下运行：

```
vue serve
```


## vue-cli3开发单文件组件

```js
Vue.component('组件名',{

})
new Vue({})
```
#### 缺点
- 全局定义组件的名字时不能重复
- 字符串模板 es6提供了模板字符串 \
- 不支持css
- 没有构建步骤  Pug  Babel  .vue

在vue中把.vue的文件称为 单文件组件，webpack等构建工具

## Vue CLI3 脚手架

#### 基本配置

- [安装Nodejs](https://nodejs.org/en/download/)
  - 保证Node.js8.9或更高版本
  - 终端中输入`node -v`,保证已安装成功
- 安装[淘宝镜像源](http://npm.taobao.org/)
  - `npm install -g cnpm --registry=https://registry.npm.taobao.org`
  - 以后的npm可以用cnpm代替
- 安装Vue Cli3脚手架
  - `cnpm install -g @vue/cli`
- 检查其版本是否正确
  - `vue --version`





### Node (后端)中的MVC与前端中的MVVM之间的区别

+ MVC 是后端的分层开发概念;
+ MVVM是前端视图层的概念,主要关注于视图层分离,也就是说: MVVM把前端的视图层,分为了三部分
    Model, View, VMs Viewodel  
    MVVM 是前端视图层的分层开发思想，主要把每个页面，分成了 M 、V 和VM   
    VM 是MVVM 思想的核心；因为VM是M和V 之间的调度者
+ M 保存每个页面单独的数据 ，VM 它是一个调度者，V需要数据由VM 中间处理，V 就是HTML 结构
+ 为什么有了MVC还要有MVMM   
    前端页面中使用MVVM 的思想，主要让我们开发方便，因为MVVM 提供了数据的双向绑定【数据的双向绑定是由VM提供的】

 

```tex
app.js :   
项目的入口模块一 切的请求,都要先进入这里进行处理注意: app.js并没有路由分发的功能,需要调用router.js模块进行路由的分发处理

router.js :
这里路由分发处理模块；【为了保证路由模块的职能单一router.js只负责分发路由,不负责具体业务逻辑的处理】
如果涉及到了业务逻辑处理操作,router.js就无能为力了,只能调用controller模块进行业务逻辑处理

controller :
这里是 业务逻辑 处理层，在这个模板中，封装了一些具体业务逻辑代码，但是也是为了保证职能单一，此模块只负责处理业务，不负责处理数据的crud，如果涉及数据的crud，需要调用model层

Model 层 :
职能单一,只负麦操作数据库,执行对应的sql语句,进行数好的CRUD
c: create
R: Read
U: update
D: Delete

View 视图层 :
每当用户操作了界面，如果需要进行业务的处理，都会通过网络请求，去请求后端的服务器，此时，我们的这个请求，就会被 后端 的APP.js 监听到请求
```



### MVVM


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="./lib/vue.js"></script>
</head>

<body>

    <div id="app">
        <p>{{msg}}</p>
    </div>
    
    <script>
        // 创建一个vue 的示例
        
        var vm = new Vue({
            el:  '#app', 
            data: {
                msg: '欢迎学习vue'
            }
        });
    </script>

</body>
</html>

```

以上 实例 可以看出  
 VM : 

```
        // 创建一个vue 的示例
        
        var vm = new Vue({
            el:  '#app', 
            data: {
                msg: '欢迎学习vue'
            }
        });
```

V：

```
    <div id="app">
        <p>{{msg}}</p>
    </div>
```

M：

```
 data: {
  	 msg: '欢迎学习vue'
       }
```



