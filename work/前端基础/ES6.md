## ES6介绍

ECMAScript 6.0 (以下简称ES6) 是JavaScript语言的下一代标准,已经在
2015年6月正式发布了。它的目标,是使得JavaScript语言可以用来编写复杂的
大型应用程序,成为企业级开发语言

ES6既是一个历史名词,也是一个泛指,含义是5.1版以后的JavaScript的下-
代标准,涵盖了ES2015,ES2016,ES2017等等,而ES2015则是正式名称,特
指该年发布的正式版本的语言标准



### ES6新特性

- let和const命令
- es6的模板字符串
- 增强的函数
- 扩展的字符串、对象、数组功能
- 解构赋值
- Symbol
- Map和Set
- 迭代器和生成器
- Promise对象
- Proxy对象
- async的用法
- 类class
- 模块化实现

### 浏览器的支持性

https://kangax.github.io/compat-table/es6/ 

### JS编译工具babel 

被称为下一代的JavaScript编译器。可以将es6的代码转换成es5的代码,从而让浏览器获得支持



## let和const命令

- let、const 与 var 的语法一致，都是声明变量

  - var : 声明变量有**变量提升**

    ```javascript
    var a;
    console.log(a);
    a = 2;
    // 此时输出的结果为 undefined 没有报错
    ```
    
  - var 可以重复声明，**具有覆盖性**
    
    ```javascript
    var a = 1;
    var a = 2;
    console.log(a);   // 输出结果为2
    ```
    
  - let: 声明变量**没有变量提升**
    
    ```javascript
    let a;
    console.log(a);
    a = 2;
    // 输出结果为Uncaught ReferenceError: a is not defined
    // 没有找到a变量
    ```
    
  - let 是个**块作用域**
  
    ```javascript
    console.log(a);
    if(true){
    	let a = 10;
    }
    // 输出结果为Uncaught ReferenceError: a is not defined
    // 没有找到a变量
    ```
  
  - let **不能重复声明**
  
    ```javascript
    let a = 2;
    let a = 3;
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    // a已声明
    ```
  
  - const:  声明常量 一旦被声明 无法修改
  
    - const 与let 一样，**没有变量提升、不能重复声明、块作用域、不会污染全局变量**
  
- **在默认情况下使用const，在变量值需要被改变的时候使用let ，弃用var**



## 模板字符串



- 通过 模板字符串 ` ``  `  定义字符串内容
- 插入变量的方法： ` ${name(变量名)} `

```html
<div class="box"></div>

<script>
    const oBox = document.querySelector('.box');
    let id = 'x',
        name = 'Max';
    
	//js传统写法--- "<ul><li><p>id:" + id + "</p><p>name:" + name + "</p></li></ul>"
    
    let htmlStr = ` 
        <ul>
            <li>
                <p id='${id}'>${name}</p>
            </li>
        </ul>
        `;    //es6模板字符串写法

    oBox.innerHTML = htmlStr;
</script>
```



## 函数之默认值、剩余参数



- 带参数默认值的函数

  - ES5

    ```js
    // ES5 的写法
    function add(a,b){
    	a = a || 10;
    	b = b || 20;
    	return a+b;
    }
    console.log(add());   // 30
    console.log(add(5));  // 25
    console.log(add(5,5));// 10
    ```

  - ES6

    ```js
    
    // ES6 写法
    function add(a=10,b=20){
    	return a+b;
    }
    console.log(add());   // 30
    console.log(add(5));  // 25
    console.log(add(5,5));// 10
    ```

    

- 默认的表达式也可以是一个函数

  ```javascript
  function add(a=10,b=getVal(5)){
  	return a+b;
  }
  function getVal(val){
  	return var+5;
  }
  console.log(add());   // 20
  console.log(add(5));  // 15
  console.log(add(5,10));// 15
  ```

- 剩余参数

  > ES 5 获取形式参数使用 **Argument()** 获取 ,其值为数组的形式展示(伪数组)    
  > ES 6 获取形式参数方式用**剩余参数**  其值为数组的形式展示(Array实例)  
  > 剩余参数：由3个点...和一个紧跟着具名参数指定  ...keys

  - ES 5 argument() 实例

    ```javascript
    
    	// es5写法
    	function pick(obj) {
    	     let result = Object.create(null);
    	     for(let i = 1;i < arguments.length;i++){
    	         result[arguments[i]] = obj[arguments[i]]
    	     }
    	     return result;
    	 }
    	 let book = {
    	     title:'argument',
    	     author:'es5',
    	     year:2020
    	 }
    	 let bookData = pick(book,'title','year','author');
    	 console.log(bookData);
    ```

  - ES6 剩余参数 实例

    ```javascript
            function pick(obj, ...keys) {
                // ...keys 解决了arguments 的问题
                let result = Object.create(null);
                for (let i = 0; i < keys.length; i++) {
                    result[keys[i]] = obj[keys[i]];
                }
                return result;
            }
    
            let book = {
                title: '剩余参数',
                author: 'es6',
                year: 2020
            }
            let bookData = pick(book, 'year', 'author');
            console.log(bookData);
    ```

    >通过以上的例子可总结出，keys 收集该函数的第2个参数（因为第一个形式参数是个对象被映射到book）和所有后续参数  和 arguments对象之间的区别主要有三个：
    >
    >- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了所有形式参数。
    >- arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
    >- arguments对象还有一些附加的属性 （如callee属性）

    

## 函数之扩展运算符、箭头函数

- 拓展运算符: ...

- 剩余运算符: 把多个独立的合并到一个数组中 ,通常放在函数的形参上

- 拓展运算符: 将一个数组分割，并将各个项作为分离的参数传给函数

  ```javascript
  	// ES5 使用apply 
          const maxNum = Math.max(20,30);
          console.log(maxNum);
  
          处理数组中的最大值，使用apply
          const arr = [10, 20, 50, 30, 90, 100, 40];
          console.log(Math.max.apply(null,arr));
  
      // es6 扩展运算法更方便
          console.log(Math.max(...arr));
  ```

  

### ES6 箭头函数

- es6 的箭头函数  使用 `=>` 来定义  function(){} 等于 （)=>{}

  ```javascript
   // 普通函数写法
  	let add = function (a,b){
          return a+b;
      }
   // 箭头函数写法
      let add = (a,b)=>{
          return a+b;
      }
   	// 箭头函数省略写法    	
      	// 一个参数
              let add = val =>{
                  return val+5;
              }
              // 一个参数省略大括号
              let add = val => val;
  			// 操作
              let add = val => (val+5);
      	// 两个参数及以上
              let add = (val1,val2) =>{
                  return val1+val2;
              }
              // 两个参数省略大括号
              let add = (val1,val2) => (val1+val2);
  
  console.log(add(10));
  ```

  

### 箭头函数this指向和注意事项

- es5 this 指向： 取决于调用该函数的上下文对象

- es6 箭头函数没有this指向，箭头函数内部this只能通过查找作用域链来确定,一旦使用箭头函数，当前就不存在作用域链

- 使用箭头函数的注意事项

  1. 使用箭头函数 函数内部没有arguments

     ```javascript
      let getVal = (a, b) => {
          console.log(arguments);
          return a + b;
      }
      console.log(getVal(1, 3));
     ```
	   输出结果为: arguments is not defined
	
	   
	
	2. 箭头函数不能使用new关键字来实例化对象
	
	   ```javascript
	   let Person = ()=>{
	               
	   };
	           
	           console.log(Person);
	           
	           let p = new Person();
	   ```
	   输出结果为: Uncaught TypeError: Person is not a constructor
	
	> function函数 也是一个对象，但是箭头函数不是一个对象，它其实就是一个语法糖



# 解构赋值

解构赋值含义：      

- 解构赋值是对赋值运算符的一种扩展
- 它针对数组和对象来进行操作
- 优点：代码书写上简洁易读

es5 解构赋值

```
       let node = {
            type:'iden',
            name:'foo'
        }
       let type = node.type;
       let name = node.name;
        console.log(type,name);
```

es6 解构赋值

1. 完全解构

   ```
         let node = {
               type:'iden',
               name:'foo'
           }
           let {type,name} = node;
           console.log(type,name);
   ```

   把对象或者数组全部解构赋值出来

2. 不完全解构

   ```
   	 let obj = {
               a:{
                   name:"张三"
               },
               b:[],
               c:'hello,world'
           }
     let {a} = obj;
     console.log(a);
   ```

    可忽略

3. 剩余运算符 解构

   ```
   	 let obj = {
               a:{
                   name:"张三"
               },
               b:[],
               c:'hello,world'
           }
   let {a,...res} = obj;
   console.log(res);
   ```

4. 默认值   解构

   ```
   // 默认值
   let {a,b = 30} = {a:20};
   ```

5. 数组 解构

   ```
   let arr = [1,2,3];
   let [a,b,c] = arr;
   console.log(a,b,c);   // 123
   ```

   可嵌套

   ```
   let [a,[b],c] = [1,[2],3];
   console.log(a,b,c);   // 123
   ```

   




















































