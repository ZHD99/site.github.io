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





### vue 常用指令

v-cloak ：使用v-cloak能够解决插值表达式闪烁的问题

v-text:  默认v-text v-html是没有闪烁问题的， v-text会覆盖元素中原本的内容,但是插值表达式 只会替换自己的这个占位符，不会吧整个元素的内容清空 

v-html:  与 v-text 相同，但输出 HTML 格式

v-bind:  `<input type="button" value="按钮" v-bind:title="mytitle" /> ` 要绑定的属性 例如上`:title`   v-bind中,可以写合法的Js表达式  
v-bind vue提供的属性绑定机制  缩写是  `: `

v-on:  vue提供的事件绑定机制 缩写是 `@ `  
methods属性 定义了当前vue示例所有可用的方法, `v-on` 定义点击事件

 