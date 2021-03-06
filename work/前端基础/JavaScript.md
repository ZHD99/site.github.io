JavaScript

- JavaScript负责页面中的的行为。
- 它是一门运行在浏览器端的脚本语言。
- ## JS的编写的位置  
	
	1.可以编写到标签的指定属性中
		<button onclick="alert('hello');">我是按钮</button>
		<a href="javascript:alert('aaa');">超链接</a>
		
	2.可以编写到script标签中   *****
	
		<script type="text/javascript">
			//编写js代码
		</script>
	
	3.可以将代码编写到外部的js文件中，然后通过标签将其引入 *****
	
		<script type="text/javascript" src="文件路径"></script>
	
- ## 输出语句
	
	- alert("要输出的内容");
		- 该语句会在浏览器窗口中弹出一个警告框
		
	- document.write("要输出的内容");
		- 该内容将会被写到body标签中，并在页面中显示
		
	- console.log("要输出的内容");
		- 该内容会被写到开发者工具的控制台中
	
- ## 基本的语法
	
	- 注释
		- 单行注释
			//注释内容
		- 多行注释
			/*
				注释内容
			*/
		
	- JS严格区分大小写	
	- JS中每条语句以分号(;)结尾
	- JS中会自动忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化。
	
- ## 字面量和变量
	
	- 字面量
		- 字面量实际上就是一些固定的值，比如 1 2 3 4 true false null NaN "hello"
			字面量都是不可以改变的。
		- 由于字面量不是很方便使用，所以在JS中很少直接使用字面量
	
	- 变量
		- 变量可以用来保存字面量，并且可以保存任意的字面量
		- 一般都是通过变量来使用字面量，而不直接使用字面量，而且也可以通过变量来对字面量进行一个描述
		- 声明变量
			- 使用var关键字来声明一个变量
			var a;
			var b;
			var c;
			
		- 为变量赋值
			a = 1;
			b = 2;
			c = 3;
			
		- 声明和赋值同时进行 *****
			var d = 456;
			var e = 789;
	
- ## 标识符
	
	- 在JS中所有的可以自主命名的内容，都可以认为是一个标识符，
		是标识符就应该遵守标识符的规范。
	- 比如：变量名、函数名、属性名
	- 规范：
		1.标识符中可以含有字母、数字、_、$
		2.标识符不能以数字开头
		3.标识符不能是JS中的关键字和保留字
		4.标识符一般采用驼峰命名法
			xxxYyyZzz
			
		









## 数据类型

- JS中一共分成六种数据类型
	- String 字符串
	- Number 数值
	- Boolean 布尔值
	- Null 空值
	- Undefined 未定义
	- Object 对象
	
- 其中基本数据类型有	
	- String 字符串
		- JS中的字符串需要使用引号引起来双引号或单引号都行
		- 在字符串中使用\作为转义字符
			\'  ==> '
			\"  ==> "
			\n  ==> 换行
			\t  ==> 制表符
			\\  ==> \	
			
		- 使用typeof运算符检查字符串时，会返回"string"	
		
	- Number 数值
		- JS中所有的整数和浮点数都是Number类型
		- 特殊的数字
			Infinity 正无穷
			-Infinity 负无穷
			NaN 非法数字（Not A Number）
		- 其他进制的数字的表示：
			0b 开头表示二进制，但是不是所有的浏览器都支持
			0 开头表示八进制
			0x 开头表示十六进制
			
		- 使用typeof检查一个Number类型的数据时，会返回"number"
			（包括NaN 和 Infinity）
	- Boolean 布尔值
		- 布尔值主要用来进行逻辑判断，布尔值只有两个
		- true 逻辑的真
		- false 逻辑的假
		- 使用typeof检查一个布尔值时，会返回"boolean"	
	
	- Null 空值
		- 空值专门用来表示为空的对象，Null类型的值只有一个
		- null
		- 使用typeof检查一个Null类型的值时会返回"object"
	- Undefined 未定义
		- 如果声明一个变量但是没有为变量赋值此时变量的值就是undefined
		- 该类型的值只有一个 undefined
		- 使用typeof检查一个Undefined类型的值时，会返回"undefined"
	
- 引用数据类型	
	
	- Object 对象
	
- 类型转换
	- 类型转换就是指将其他的数据类型，转换为String Number 或 Boolean
	- 转换为String
		- 方式一（强制类型转换）：
			- 调用被转换数据的toString()方法
			- 例子：
				var a = 123;
				a = a.toString();
			- 注意：这个方法不适用于null和undefined
				由于这两个类型的数据中没有方法，所以调用toString()时会报错
			
		- 方式二（强制类型转换）：
			- 调用String()函数
			- 例子：
				var a = 123;
				a = String(a);
			- 原理：对于Number Boolean String都会调用他们的toString()方法来将其转换为字符串，
				对于null值，直接转换为字符串"null"。对于undefined直接转换为字符串"undefined"
			
		- 方式三（隐式的类型转换）: *****
			- 为任意的数据类型 +""
			- 例子：
				var a = true;
				a = a + "";
			- 原理：和String()函数一样	
		
	- 转换为Number
		- 方式一（强制类型转换）：
			- 调用Number()函数
			- 例子：
				var s = "123";
				s = Number(s);
			- 转换的情况：
				1.字符串 --> 数字
					- 如果字符串是一个合法的数字，则直接转换为对应的数字
					- 如果字符串是一个非法的数字，则转换为NaN
					- 如果是一个空串或纯空格的字符串，则转换为0
				2.布尔值 --> 数字
					- true转换为1
					- false转换为0
				3.空值 --> 数字
					- null转换为0
				4.未定义 --> 数字
					- undefined 转换为NaN
			
		- 方式二（强制类型转换）：
			- 调用parseInt()或parseFloat()
			- 这两个函数专门用来将一个字符串转换为数字的
			- parseInt()
				- 可以将一个字符串中的有效的整数位提取出来，并转换为Number
				- 例子：
					var a = "123.456px";
					a = parseInt(a); //123
				- 如果需要可以在parseInt()中指定一个第二个参数，来指定进制	
				
			- parseFloat()
				- 可以将一个字符串中的有效的小数位提取出来，并转换为Number
				- 例子：
					var a = "123.456px";
					a = parseFloat(a); //123.456
			
		- 方式三（隐式的类型转换）：
			- 使用一元的+来进行隐式的类型转换
			- 例子：
				var a = "123";
				a = +a;
				
			- 原理：和Number()函数一样	
		
	- 转换为布尔值
		- 方式一（强制类型转换）：
			- 使用Boolean()函数
			- 例子：
				var s = "false";
				s = Boolean(s); //true
			- 转换的情况
				字符串 --> 布尔
					- 除了空串其余全是true
					
				数值 --> 布尔
					- 除了0和NaN其余的全是true
					
				null、undefined ---> 布尔
					- 都是false
					
				对象 ---> 布尔
					- 都是true
		
		- 方式二（隐式类型转换）：	
			- 为任意的数据类型做两次非运算，即可将其转换为布尔值
			- 例子：	
				var a = "hello";
				a = !!a; //true
			
	
- ## 运算符
	
	- 运算符也称为操作符
	- 通过运算符可以对一个或多个值进行运算或操作
	- typeof运算符
		- 用来检查一个变量的数据类型
		- 语法：typeof 变量
		- 它会返回一个用于描述类型的字符串作为结果
		
	- 算数运算符
		+	对两个值进行加法运算并返回结果
		-  	对两个值进行减法运算并返回结果
		*	对两个值进行乘法运算并返回结果
			/	对两个值进行除法运算并返回结果
			%	对两个值进行取余运算并返回结果
		
		- 除了加法以外，对非Number类型的值进行运算时，都会先转换为Number然后在做运算。
		- 而做加法运算时，如果是两个字符串进行相加，则会做拼串操作，将两个字符连接为一个字符串。
		- 任何值和字符串做加法，都会先转换为字符串，然后再拼串
	- 一元运算符
		- 一元运算符只需要一个操作数
		- 一元的+
			- 就是正号，不会对值产生任何影响，但是可以将一个非数字转换为数字
			- 例子：
				var a = true;
				a = +a;
			
		- 一元的-
			- 就是负号，可以对一个数字进行符号位取反
			- 例子：
				var a = 10;
				a = -a;
			
		- 自增
			- 自增可以使变量在原值的基础上自增1
			- 自增使用 ++
			- 自增可以使用 前++（++a）后++(a++)
			- 无论是++a 还是 a++都会立即使原变量自增1
				不同的是++a和a++的值是不同的，
					++a的值是变量的新值（自增后的值）
					a++的值是变量的原值（自增前的值）
		- 自减	
			- 自减可以使变量在原值的基础上自减1
			- 自减使用 --
			- 自减可以使用 前--（--a）后--(a--)
			- 无论是--a 还是 a--都会立即使原变量自减1
				不同的是--a和a--的值是不同的，
					--a的值是变量的新值（自减后的值）
					a--的值是变量的原值（自减前的值）
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


​	逻辑运算符
​		!

- 非运算可以对一个布尔值进行取反，true变false false边true
- 当对非布尔值使用!时，会先将其转换为布尔值然后再取反
- 我们可以利用!来将其他的数据类型转换为布尔值
		
		&&
- &&可以对符号两侧的值进行与运算
- 只有两端的值都为true时，才会返回true。只要有一个false就会返回false。
- 与是一个短路的与，如果第一个值是false，则不再检查第二个值
- 对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值
- 规则：
		1.如果第一个值为false，则返回第一个值
		2.如果第一个值为true，则返回第二个值
		
	
		||
- ||可以对符号两侧的值进行或运算
- 只有两端都是false时，才会返回false。只要有一个true，就会返回true。
- 或是一个短路的或，如果第一个值是true，则不再检查第二个值
- 对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值
- 规则：	
					1.如果第一个值为true，则返回第一个值
					2.如果第一个值为false，则返回第二个值
				
	赋值运算符
		= 
- 可以将符号右侧的值赋值给左侧变量
			
		+=
- a += 5 相当于 a = a+5
- var str = "hello";  str += "world";
			
		-=
- a -= 5  相当于 a = a-5
			
		*=
- a *= 5 相当于 a = a*5
			
		/=
- a /= 5 相当于 a = a/5	
	
		%=
- a %= 5 相当于 a = a%5	
			
			

关系运算符
- 关系运算符用来比较两个值之间的大小关系的
	>
	>=
	<
	<=
	
- 关系运算符的规则和数学中一致，用来比较两个值之间的关系，
	如果关系成立则返回true，关系不成立则返回false。
	
- 如果比较的两个值是非数值，会将其转换为Number然后再比较。

- 如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number。

  

  相等运算符

- 相等，判断左右两个值是否相等，如果相等返回true，如果不等返回false

- 相等会自动对两个值进行类型转换，如果对不同的类型进行比较，会将其转换为相同的类型然后再比较，
	转换后相等它也会返回true
!=
	
- 不等，判断左右两个值是否不等，如果不等则返回true，如果相等则返回false

- 不等也会做自动的类型转换。

===
- 全等，判断左右两个值是否全等，它和相等类似，只不过它不会进行自动的类型转换，
	如果两个值的类型不同，则直接返回false
	

!==
- 不全等，和不等类似，但是它不会进行自动的类型转换，如果两个值的类型不同，它会直接返回true
	

特殊的值：
- null和undefined
	- 由于undefined衍生自null，所以null == undefined 会返回true。
		是 null === undefined 会返回false。
		
	- NaN
		- NaN不与任何值相等，报告它自身 NaN == NaN //false
		
	- 判断一个值是否是NaN
		- 使用isNaN()函数
				
	
	三元运算符：
		?:
			- 语法：条件表达式?语句1:语句2;
			- 执行流程：
				先对条件表达式求值判断，
					如果判断结果为true，则执行语句1，并返回执行结果
					如果判断结果为false，则执行语句2，并返回执行结果
					

优先级：
- 和数学中一样，JS中的运算符也是具有优先级的，
	比如 先乘除 后加减 先与 后或
- 具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，
	优先级越高的越优先计算，优先级相同的，从左往右计算。
- 优先级不需要记忆，如果越到拿不准的，使用()来改变优先级。

流程控制语句
- 程序都是自上向下的顺序执行的，
	通过流程控制语句可以改变程序执行的顺序，或者反复的执行某一段的程序。
- 分类：
	1.条件判断语句
	2.条件分支语句
	3.循环语句
		

## 条件判断语句

- 条件判断语句也称为if语句
- 语法一：
	if(条件表达式){
		语句...
	}
	
	- 执行流程：
		if语句执行时，会先对条件表达式进行求值判断，
			如果值为true，则执行if后的语句
			如果值为false，则不执行

- 语法二：
	if(条件表达式){
		语句...
	}else{
		语句...
	}
	
	- 执行流程：
		if...else语句执行时，会对条件表达式进行求值判断，
			如果值为true，则执行if后的语句
			如果值为false，则执行else后的语句
	
- 语法三：
	if(条件表达式){
		语句...
	}else if(条件表达式){
		语句...
	}else if(条件表达式){
		语句...
	}else if(条件表达式){
		语句...
	}else{
		语句...
	}
	
	- 执行流程
		- if...else if...else语句执行时，会自上至下依次对条件表达式进行求值判断，  
			如果判断结果为true，则执行当前if后的语句，执行完成后语句结束。  
			如果判断结果为false，则继续向下判断，直到找到为true的为止。  
			如果所有的条件表达式都是false，则执行else后的语句  































## 条件分支语句

- switch语句
- 语法:
	switch(条件表达式){
		case 表达式:
			语句...
			break;
		case 表达式:
			语句...
			break;
		case 表达式:
			语句...
			break;
		default:
			语句...
			break;
	}
	
- 执行流程：
	- switch...case...语句在执行时，会依次将case后的表达式的值和switch后的表达式的值进行全等比较，
		如果比较结果为false，则继续向下比较。如果比较结果为true，则从当前case处开始向下执行代码。
		如果所有的case判断结果都为false，则从default处开始执行代码。
		

## 循环语句

- 通过循环语句可以反复执行某些语句多次
- while循环
	- 语法：
		while(条件表达式){
			语句...
		}
		
	- 执行流程：
		while语句在执行时，会先对条件表达式进行求值判断，
			如果判断结果为false，则终止循环
			如果判断结果为true，则执行循环体
			循环体执行完毕，继续对条件表达式进行求值判断，依此类推
	
- do...while循环
	- 语法:
		do{
			语句...
		}while(条件表达式)
		
	- 执行流程
		do...while在执行时，会先执行do后的循环体，然后在对条件表达式进行判断，
			如果判断判断结果为false，则终止循环。
			如果判断结果为true，则继续执行循环体，依此类推
		
	- 和while的区别：
		while：先判断后执行
		do...while: 先执行后判断
		- do...while可以确保循环体至少执行一次。
		
	
- for循环
	- 语法：
		for(①初始化表达式 ; ②条件表达式 ; ④更新表达式){
			③语句...
		}
	- 执行流程：
		首先执行①初始化表达式，初始化一个变量，
		然后对②条件表达式进行求值判断，如果为false则终止循环
		如果判断结果为true，则执行③循环体
		循环体执行完毕，执行④更新表达式，对变量进行更新。
		更新表达式执行完毕重复②
	
- 死循环
	while(true){
	
	}
	
	for(;;){
	
	}





## 包装类		

- 在JS中为我们提供了三个包装类：
  String() Boolean() Number()
  - 通过这三个包装类可以创建基本数据类型的对象
    例子：
    var num = new Number(2);
    var str = new String("hello");
    var bool = new Boolean(true);
  - 但是在实际应用中千万不要这么干。
- 当我们去操作一个基本数据类型的属性和方法时，
  解析器会临时将其转换为对应的包装类，然后再去操作属性和方法，
  操作完成以后再将这个临时对象进行销毁。

## 字符串的相关的方法

- length
  - 获取字符串的长度
- charAt()
  - 根据索引获取指定的字符
- charCodeAt()
  - 根据索引获取指定的字符编码
- String.fromCharCode()
  - 根据字符编码获取字符
- indexOf()
  - lastIndexOf()
  - 从一个字符串中检索指定内容
  - 需要一个字符串作为参数，这个字符串就是要检索的内容，
    如果找到该内容，则会返回其第一次出现的索引，如果没有找到则返回-1。
  - 可以指定一个第二个参数，来表示开始查找的位置
  - indexOf()是从前向后找
  - lastIndexOf()是从后向前找
- slice()
  - 可以从一个字符串中截取指定的内容，并将截取到内容返回，不会影响原变量
  - 参数：
    第一个：截取开始的位置（包括开始）
    第二个：截取结束的位置（不包括结束）
    	- 可以省略第二个参数，如果省略则一直截取到最后
    - 可以传负数，如果是负数则从后往前数
- substr()	
  - 和slice()基本一致，不同的是它第二个参数不是索引，而是截取的数量
- substring()
  - 和slice()基本一致，不同的是它不能接受负值作为参数，如果设置一个负值，则会自动修正为0，
    substring()中如果第二个参数小于第一个，自动调整位置
- toLowerCase() 
  - 将字符串转换为小写并返回
- toUpperCase() 
  - 将字符串转换为大写并返回
- split()
  - 可以根据指定内容将一个字符串拆分为一个数组
  - 参数：
    - 需要一个字符串作为参数，将会根据字符串去拆分数组
      可以接收一个正则表达式，此时会根据正则表达式去拆分数组
- match() 
  - 可以将字符串中和正则表达式匹配的内容提取出来
  - 参数：
    - 正则表达式，可以根据该正则表达式将字符串中符合要求的内容提取出来
      并且封装到一个数组中返回
- replace()  
  - 可以将字符串中指定内容替换为新的内容
  - 参数：
    - 第一个：被替换的内容，可以是一个正则表达式
    - 第二个：替换的新内容
- search() 
  - 可以根据正则表达式去字符串中查找指定的内容
  - 参数：
    正则表达式，将会根据该表达式查询内容，
    		并且将第一个匹配到的内容的索引返回，如果没有匹配到任何内容，则返回-1。

## 正则表达式

##### 元字符

##### . 匹配任意的字符

##### ^ $ 位置字符

^ 匹配字符串开始的位置
$ 匹配字符串结束的位置

##### 匹配数字和字母(\w和\W)

\w 匹配数字和字母和下划线
\W 匹配非数字和字母

##### 匹配数字和非数字 (\d和\D)

\d 匹配数字 
\D 匹配非数字

##### 匹配空白字符(\s和\S)

\s 匹配空白字符
\S 匹配非空白字符

##### [] 匹配里面的任意字符

##### [^a-z] 匹配除a到z之外的所有字符

##### + 匹配重复一次或者多次

##### * 匹配重复0次或者多次字符

##### ? 匹配重复1次或者是0次

##### () 分组匹配

##### | 或者

##### ?: 分组匹配不捕获

捕获方法： RegExp.$1

##### ?=元 正向肯定预查  表示肯定是元，但不匹配

##### ?!=元 正向否定预查  表示肯定不是元，不匹配

##### ?<=￥ 反向肯定预查  表示肯定是￥，但不匹配

##### ?!=元 反向否定预查  表示肯定不是￥，不匹配

##### {4,8}最少4位 最多8位匹配

##### 正则实例对象的方法

#### test()

```
返回一个布尔值，表示当前模式是否能匹配参数字符串
```

#### exec()

```
用来返回匹配的结果。如果发现匹配，就返回一个数组，数组中的成员都是匹配的子字符串，否则返回null
```

### 字符串方法 

#### match()

```
对字符串进行正则匹配，返回匹配的结果
```

#### search()

```
返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1
```

#### replace()

```
可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容
```

​		

## Date

- 日期的对象，在JS中通过Date对象来表示一个时间

- 创建对象

  - 创建一个当前的时间对象
    var d = new Date();
  - 创建一个指定的时间对象
    var d = new Date("月/日/年 时:分:秒");

- 方法：
  getDate()
  	- 当前日期对象是几日（1-31）
  	
  getDay() 
  	- 返回当前日期对象时周几（0-6）
  		- 0 周日
  		- 1 周一 。。。
  		
  getMonth()
  	- 返回当前日期对象的月份（0-11）
  	- 0 一月 1 二月 。。。
  getFullYear() 从 Date 对象以四位数字返回年份。 

  getHours() 返回 Date 对象的小时 (0 ~ 23)。 
  getMinutes() 返回 Date 对象的分钟 (0 ~ 59)。 
  getSeconds() 返回 Date 对象的秒数 (0 ~ 59)。 
  getMilliseconds() 返回 Date 对象的毫秒(0 ~ 999)。 

  getTime()
  	- 返回当前日期对象的时间戳
  	- 时间戳，指的是从1970年月1日 0时0分0秒，到现在时间的毫秒数
  		计算机底层保存时间都是以时间戳的形式保存的。
  		
  Date.now()
  	- 可以获取当前代码执行时的时间戳

## Math			

- Math属于一个工具类，它不需要我们创建对象，它里边封装了属性运算相关的常量和方法
  我们可以直接使用它来进行数学运算相关的操作
- 方法：
  Math.PI  
  	- 常量，圆周率  
  Math.abs()  
  	- 绝对值运算  
  Math.ceil()  
  	- 向上取整  
  Math.floor()  
  	- 向下取整  
  Math.round()  
  	- 四舍五入取整  
  Math.random()	  
  	- 生成一个0-1之间的随机数  
  	- 生成一个x-y之间的随机数 
  		Math.round(Math.random()*(y-x)+x);   
  Math.pow(x,y)   
  	- 求x的y次幂  
  Math.sqrt()   
  	- 对一个数进行开方   
  Math.max()  
  	- 求多个数中最大值   
  Math.min()  
  	- 求多个数中的最小值  
  		

​	

















## 数组（Array）
- 数组也是一个对象，是一个用来存储数据的对象
	和Object类似，但是它的存储效率比普通对象要高
- 数组中保存的内容我们称为元素	
- 数组使用索引（index）来操作元素
- 索引指由0开始的整数
- 数组的操作：
	- 创建数组
		- var arr = new Array();
		- var arr = [];
		
	- 向数组中添加元素
		- 语法；
			数组对象[索引] = 值;
			arr[0] = 123;
			arr[1] = "hello";
		
	- 创建数组时直接添加元素
		- 语法：
			var arr = [元素1,元素2....元素N];
			- 例子：
				var arr = [123,"hello",true,null];
		
	- 获取和修改数组的长度
		- 使用length属性来操作数组的长度
		- 获取长度：
			数组.length
			- length获取到的是数组的最大索引+1
			- 对于连续的数组，length获取到的就是数组中元素的个数
		- 修改数组的长度
			数组.length = 新长度
				- 如果修改后的length大于原长度，则多出的部分会空出来
				- 如果修改后的length小于原长度，则原数组中多出的元素会被删除
		- 向数组的最后添加元素
			数组[数组.length] = 值;
	
- 数组的方法
	- push()
		- 用来向数组的末尾添加一个或多个元素，并返回数组新的长度
		- 语法：数组.push(元素1,元素2,元素N)
	- pop()
		- 用来删除数组的最后一个元素，并返回被删除的元素
	- unshift()
		- 向数组的前边添加一个或多个元素，并返回数组的新的长度
	- shift()
		- 删除数组的前边的一个元素，并返回被删除的元素
	- slice()
		- 可以从一个数组中截取指定的元素
		- 该方法不会影响原数组，而是将截取到的内容封装为一个新的数组并返回
		- 参数：
			1.截取开始位置的索引（包括开始位置）
			2.截取结束位置的索引（不包括结束位置）
				- 第二个参数可以省略不写，如果不写则一直截取到最后
			- 参数可以传递一个负值，如果是负值，则从后往前数
	- splice()
		- 可以用来删除数组中指定元素，并使用新的元素替换
			该方法会将删除的元素封装到新数组中返回
		- 参数：
			1.删除开始位置的索引
			2.删除的个数
			3.三个以后，都是替换的元素，这些元素将会插入到开始位置索引的前边
	
- 遍历数组
    - 遍历数组就是将数组中元素都获取到
    - 一般情况我们都是使用for循环来遍历数组：
    	for(var i=0 ; i<数组.length ; i++){
    		//数组[i]
    	}

    - 使用forEach()方法来遍历数组（不兼容IE8）
    	数组.forEach(function(value , index , obj){
      
    	});

    	forEach()方法需要一个回调函数作为参数，
    		数组中有几个元素，回调函数就会被调用几次，
    		每次调用时，都会将遍历到的信息以实参的形式传递进来，
    		我们可以定义形参来获取这些信息。
    		value:正在遍历的元素
    		index:正在遍历元素的索引
    		obj:被遍历对象

	












​			
​			
​			
## 数组方法
- reverse()
  	
  	- 可以用来反转一个数组，它会对原数组产生影响
- concat()
 	- 可以连接两个或多个数组，它不会影响原数组，而是新数组作为返回值返回
- join()
  	
  	- 可以将一个数组转换为一个字符串
  	- 参数：

    		需要一个字符串作为参数，这个字符串将会作为连接符来连接数组中的元素
    		如果不指定连接符则默认使用,
- sort()
	- 可以对一个数组中的内容进行排序，默认是按照Unicode编码进行排序
		调用以后，会直接修改原数组。
	- 可以自己指定排序的规则，需要一个回调函数作为参数：
		function(a,b){
			
			//升序排列
			//return a-b;
			
			//降序排列
			return b-a;
		}
			





## BOM
- 什么是BOM
- ECMAScript无疑是JavaScript的核心，但是要想在浏
览器中使用JavaScript，那么BOM（浏览器对象模型）
才是真正的核心。
- BOM 提供了很多对象，用于访问浏览器的功能，这些
功能与任何网页内容无关。
- BOM将浏览器中的各个部分转换成了一个一个的对象，
我们通过修改这些对象的属性，调用他们的方法，从而
控制浏览器的各种行为。
	
### window对象
- window对象是BOM的核心，它表示一个浏览器的实例。
- 在浏览器中我们可以通过window对象来访问操作浏览
器，同时window也是作为全局对象存在的。
- 全局作用域：  
– window对象是浏览器中的全局对象，因此所有在全局作用
域中声明的变量、对象、函数都会变成window对象的属性
和方法。  

### 窗口大小
- 浏览器中提供了四个属性用来确定窗口的大小：  
– 网页窗口的大小  
- innerWidth
- innerHeight  
– 浏览器本身的尺寸  
- outerWidth
- outerHeight
		
### 打开窗口
- 使用 window.open() 方法既可以导航到一个特定的 URL，也可以打开一个新的浏览器窗口。
- 这个方法需要四个参数：    
– 需要加载的url地址  
– 窗口的目标  
– 一个特性的字符串  
– 是否创建新的历史记录  


### 定时器
- 超时调用：  
– setTimeout()  
– 超过一定时间以后执行指定函数  
– 需要连个参数：  
- 要执行的内容 
- 超过的时间
- 取消超时调用  
– clearTimeout()  
- 超时调用都是在全局作用域中执行的。  

### 周期性定时器  
- 间歇调用：  
– setInterval()  
– 每隔一段时间执行指定代码  
– 需要两个参数：  
- 要执行的代码  
- 间隔的时间  
- 取消间隔调用：  
– clearInterval()

### 系统对话框 
浏览器通过 alert() 、 confirm() 和 prompt()    
方法可以调用系统对话框向用户显示消息。
- 它们的外观由操作系统及（或）浏览器设置决定，而不是由 CSS 决定。  
- 显示系统对话框时会导致程序终止，当关闭对话框程序会恢复执行。

### alert
- alert()接收一个字符串并显示给用户。调用 alert()方法会向用户显示一个包含一个确认
按钮的对话框。
- 例如：    
– `alert("Hello World");` 

### confirm
- confirm和alert类似，只不过confirm弹出的对话框有一个确认和取消按钮。用户可以通过按钮来确认是否执行操作。  
- 例如：   
– confirm('你确定吗？');  
- 这个函数的执行会返回一个布尔值，如果选择确定则返回true，如果点击取消则返回false

### prompt
- prompt会弹出一个带输入框的提示框，并可以将用户输入的内容返回。  
- 它需要两个值作为参数：  
– 显示的提示文字  
– 文本框中的默认值  
- 例子：  
– prompt('你的年龄是？','18');  

### location对象  
- location对象提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。   
- href属性：    
– href属性可以获取或修改当前页面的完整的URL地址，使浏览器跳转到指定页面。
- assign() 方法  
– 所用和href一样，使浏览器跳转页面，新地址错误参数传递到assign ()方法中
- replace()方法  
– 功能一样，只不过使用replace方法跳转地址不会体现到历史记录中。  
- reload() 方法  
– 用于强制刷新当前页面 

### navigator对象
- navigator 对象包含了浏览器的版本、浏览器所支持的插件、浏览器所使用的语言等各种与浏览器相关的信息。  
- 我们有时会使用navigator的userAgent属性来检查用户浏览器的版本。  

### screen对象
- screen 对象基本上只用来表明客户端的能力，其中包括浏览器窗口外部的显示器的信息，如像素宽度和高度等。  
- 该对象作用不大，我们一般不太使用。

### history对象
- history 对象保存着用户上网的历史记录，
从窗口被打开的那一刻算起。
- go()  
– 使用 go() 方法可以在用户的历史记录中任意跳  
转，可以向后也可以向前。
- back()  
– 向后跳转  
- forward()  
– 向前跳转  

### document
- document对象也是window的一个属性，这个对象代表的是整个网页的文档对象。
- 我们对网页的大部分操作都需要以document对象作为起点。
- 关于document对象的内容，我们后边还要具体讲解。



## DOM
- Document Object Model
- 文档对象模型，通过DOM可以来任意来修改网页中各个内容
- 文档
	
	- 文档指的是网页，一个网页就是一个文档
- 对象
	- 对象指将网页中的每一个节点都转换为对象
		转换完对象以后，就可以以一种纯面向对象的形式来操作网页了
- 模型
	
	- 模型用来表示节点和节点之间的关系，方便操作页面
- 节点（Node）
	- 节点是构成网页的最基本的单元，网页中的每一个部分都可以称为是一个节点
	- 虽然都是节点，但是节点的类型却是不同的
	- 常用的节点
		- 文档节点 （Document），代表整个网页
		- 元素节点（Element），代表网页中的标签
		- 属性节点（Attribute），代表标签中的属性
		- 文本节点（Text），代表网页中的文本内容
	
- DOM操作
	- DOM查询
	- 在网页中浏览器已经为我们提供了document对象，
		它代表的是整个网页，它是window对象的属性，可以在页面中直接使用。
	- document查询方法：
		- 根据元素的id属性查询一个元素节点对象：
			- document.getElementById("id属性值");
		- 根据元素的name属性值查询一组元素节点对象:
			- document.getElementsByName("name属性值");
		- 根据标签名来查询一组元素节点对象：
			- document.getElementsByTagName("标签名");
		
	- 元素的属性：
		- 读取元素的属性：
			语法：元素.属性名
			例子：ele.name  
				  ele.id  
				  ele.value 
				  ele.className
			
		- 修改元素的属性：
			语法：元素.属性名 = 属性值
			
		- innerHTML
			- 使用该属性可以获取或设置元素内部的HTML代码
			
	
- 事件（Event）
	- 事件指的是用户和浏览器之间的交互行为。比如：点击按钮、关闭窗口、鼠标移动。。。
	- 我们可以为事件来绑定回调函数来响应事件。
	- 绑定事件的方式：
		1.可以在标签的事件属性中设置相应的JS代码
			例子：
				<button onclick="js代码。。。">按钮</button>
		2.可以通过为对象的指定事件属性设置回调函数的形式来处理事件
			例子：
				<button id="btn">按钮</button>
				<script>
					var btn = document.getElementById("btn");
					btn.onclick = function(){
					
					};
				</script>
	
- 文档的加载
	- 浏览器在加载一个页面时，是按照自上向下的顺序加载的，加载一行执行一行。
	- 如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，
		此时将会无法正常获取到DOM对象，导致DOM操作失败。
	- 解决方式一：
		- 可以将js代码编写到body的下边
		
```
		<body>
			<button id="btn">按钮</button>
			<script>
				var btn = document.getElementById("btn");
				btn.onclick = function(){
				
				};
			</script>
		</body>
```

- 解决方式二：
	- 将js代码编写到window.onload = function(){}中
	- window.onload 对应的回调函数会在整个页面加载完毕以后才执行，所以可以确保代码执行时，DOM对象已经加载完毕了

```
		<script>
			window.onload = function(){
				var btn = document.getElementById("btn");
				btn.onclick = function(){
				
				};
			};
		
		</script>	
```


​	
​		
​		
​		
​		
​		
​		
​		
​		
​		
​		
​		
## DOM查询
- 通过具体的元素节点来查询   
	- 元素.getElementsByTagName()   
		- 通过标签名查询当前元素的指定后代元素   
		
	- 元素.childNodes   
		- 获取当前元素的所有子节点   
		- 会获取到空白的文本子节点   
	
	- 元素.children   
		- 获取当前元素的所有子元素   
	
	- 元素.firstChild   
		- 获取当前元素的第一个子节点   
	
	- 元素.lastChild   
		- 获取当前元素的最后一个子节点   
	
	- 元素.parentNode   
		- 获取当前元素的父元素   
	
	- 元素.previousSibling   
		- 获取当前元素的前一个兄弟节点   
	
	- 元素.nextSibling   
		- 获取当前元素的后一个兄弟节点   
		

innerHTML和innerText   
	- 这两个属性并没有在DOM标准定义，但是大部分浏览器都支持这两个属性   
	- 两个属性作用类似，都可以获取到标签内部的内容，   
		不同是innerHTML会获取到html标签，而innerText会自动去除标签   
	- 如果使用这两个属性来设置标签内部的内容时，没有任何区别的	   
	
读取标签内部的文本内容   
	<h1>h1中的文本内容</h1>   
	元素.firstChild.nodeValue   
	
- document对象的其他的属性和方法   
	document.all   
		- 获取页面中的所有元素，相当于document.getElementsByTagName("*");   
		
	document.documentElement   
		- 获取页面中html根元素   
		
	document.body   
		- 获取页面中的body元素   
		
	document.getElementsByClassName()   
		- 根据元素的class属性值查询一组元素节点对象   
		- 这个方法不支持IE8及以下的浏览器   
		
	document.querySelector()   
		- 根据CSS选择器去页面中查询一个元素   
		- 如果匹配到的元素有多个，则它会返回查询到的第一个元素	   
		
	document.querySelectorAll()	   
		- 根据CSS选择器去页面中查询一组元素   
		- 会将匹配到所有元素封装到一个数组中返回，即使只匹配到一个   
		
## DOM修改
document.createElement()   
	- 可以根据标签名创建一个元素节点对象   
	
document.createTextNode()   
	- 可以根据文本内容创建一个文本节点对象   
	
父节点.appendChild(子节点)     
	- 向父节点中添加指定的子节点   
	      
父节点.insertBefore(新节点,旧节点)     
	- 将一个新的节点插入到旧节点的前边   
	
父节点.replaceChild(新节点,旧节点)   
	- 使用一个新的节点去替换旧节点   
	
父节点.removeChild(子节点)   
	- 删除指定的子节点     
	- 推荐方式：子节点.parentNode.removeChild(子节点)   
		


​			
​		
​		
​		
​		
​		
## DOM对CSS的操作
- 读取和修改内联样式
	- 使用style属性来操作元素的内联样式
	- 读取内联样式：
		语法：元素.style.样式名
		- 例子：
			元素.style.width
			元素.style.height
			- 注意：如果样式名中带有-，则需要将样式名修改为驼峰命名法
				将-去掉，然后-后的字母改大写
			- 比如：background-color --> backgroundColor
					border-width ---> borderWidth
		
	- 修改内联样式：
		语法：元素.style.样式名 = 样式值
		- 通过style修改的样式都是内联样式，由于内联样式的优先级比较高，
			所以我们通过JS来修改的样式，往往会立即生效，
			但是如果样式中设置了!important，则内联样式将不会生效。
	
- 读取元素的当前样式
	- 正常浏览器
		- 使用getComputedStyle()
		- 这个方法是window对象的方法，可以返回一个对象，这个对象中保存着当前元素生效样式
		- 参数：
			1.要获取样式的元素
			2.可以传递一个伪元素，一般传null
		- 例子：
			获取元素的宽度
				getComputedStyle(box , null)["width"];
		- 通过该方法读取到样式都是只读的不能修改
	- IE8
		- 使用currentStyle
		- 语法：
			元素.currentStyle.样式名
		- 例子：
			box.currentStyle["width"]
		- 通过这个属性读取到的样式是只读的不能修改
- 其他的样式相关的属性
	注意：以下样式都是只读的

	clientHeight
		- 元素的可见高度，指元素的内容区和内边距的高度
	clientWidth
		- 元素的可见宽度，指元素的内容区和内边距的宽度
	offsetHeight
		- 整个元素的高度，包括内容区、内边距、边框
	offfsetWidth
		- 整个元素的宽度，包括内容区、内边距、边框
	offsetParent
		- 当前元素的定位父元素
		- 离他最近的开启了定位的祖先元素，如果所有的元素都没有开启定位，则返回body
	offsetLeft
	offsetTop
		- 当前元素和定位父元素之间的偏移量
		- offsetLeft水平偏移量  offsetTop垂直偏移量
	
	scrollHeight
	scrollWidth
	
		- 获取元素滚动区域的高度和宽度
	
	scrollTop
	scrollLeft
		- 获取元素垂直和水平滚动条滚动的距离
		
	
	判断滚动条是否滚动到底
		- 垂直滚动条
			scrollHeight - scrollTop = clientHeight
			
	
		- 水平滚动	
			scrollWidth - scrollLeft = clientWidth
	
## 事件（Event）
- 事件流   
  		
    - 描述的是从页面接收事件的顺序  
    - IE事件流是事件冒泡流，Netscape的事件流是事件捕获流   
    
- 事件流阶段
  - （1）事件捕获阶段 
  - （2）处于目标阶段    
  - （3）事件冒泡阶段   
  - **事件捕获阶段**：从最不具体的节点（window/document）接收事件 往具体的节点进行传播事件
  - **冒泡阶段**：从具体的节点开始接收事件，逐级往上传递到最不具体的节点。
  
- 事件对象
  - e.eventPhase 描述事件发生的阶段  
    		
      - 事件捕获阶段  1 
      - 处于目标阶段  2  
    - 事件冒泡阶段  3      
    
	- 事件目标
	  - e.currentTarget === this
	  - e.target
	  - e.srcElement 
		
	- //兼容性代码
	
	- var target = e.target || e.srcElement;
	
	- 事件代理 也叫事件委托
	
	- 取消默认行为
	
	     - e.preventDefault();
	     - e.returnValue = false;
	     - return false;
	     
	- 事件冒泡
		- e.bubbles
		- blur  focus scroll三个事件返回值为false
		- e.stopPropagation(); //常用
		- e.stopImmediatePropagation();
	- e.cancelBubble = true; 
  
    ```
            var handler = function(e){
                e = e || window.event;
                if(e.stopPropagation){
                    e.stopPropagation();
                }else{
                    e.cancelBubble = true; 
                }
            }
    ```
  
- 事件处理程序

    - HTML事件处理程序
    - DOM0级事件处理程序
    
    ```
    btn.onclick = function(e){
        			e = e || window.event;
        		} `
        		//有事件覆盖现象
        		btn.onclick = function(e){
        			e = e || window.event;
        		}
    ```
    
    - DOM2级事件处理程序
    
    ```
           btn.addEventListener('click',function (){
    		},false);
    		btn.addEventListener('click',function (){
    			
    		},false);
    		var handler = function(){
    			....
    		}
    		btn.addEventListener('click',handler,false);
    		btn.removeEventListener('click',handler)
    ```
    
    - IE事件处理程序
    
    ```
    		btn.attachEvent('onclick',function(){
    			//在ie中小心this 这个this指向了window
    		})
    		btn.detachEvent('onclick',function(){
    			
    		})
    
    ```
	处理this的指向问题，函数中的call(target);

 - 事件对象中的属性 坐标位置
    	5.1 clientX/Y x/y
        		相对于当前的浏览器（有效的浏览器区域）的x轴和y轴的距离，与滚动条无关
        	5.2 screenX/Y
        		相对于显示器屏幕的x轴和y轴的距离
        	5.3 pageX/Y
        		相对于页面的x轴和y轴的距离，如果有滚动条，包含整个页面
        	5.4 offsetX/Y
        		相对于事件源x轴和y轴的距离



## 深入理解函数

- 函数概述
  - [函数的声明](https://book.apeland.cn/details/365/#函数的声明)
  - [函数返回值](https://book.apeland.cn/details/365/#函数返回值)
  - 函数调用
    - [【1】函数调用模式](https://book.apeland.cn/details/365/#【1】函数调用模式)
    - [【2】方法调用模式](https://book.apeland.cn/details/365/#【2】方法调用模式)
    - [【3】构造函数调用模式](https://book.apeland.cn/details/365/#【3】构造函数调用模式)
    - [【4】间接调用模式](https://book.apeland.cn/details/365/#【4】间接调用模式)
- 函数参数
  - arguments
    - [同名形参](https://book.apeland.cn/details/365/#同名形参)
    - [参数个数](https://book.apeland.cn/details/365/#参数个数)
  - [函数重载](https://book.apeland.cn/details/365/#函数重载)
  - [参数传递](https://book.apeland.cn/details/365/#参数传递)
- 函数属性和方法
  - 属性
    - [length属性](https://book.apeland.cn/details/365/#length属性)
    - [name属性](https://book.apeland.cn/details/365/#name属性)
    - [prototype属性](https://book.apeland.cn/details/365/#prototype属性)
  - 方法
    - [apply()和call()](https://book.apeland.cn/details/365/#apply()和call())
    - [应用](https://book.apeland.cn/details/365/#应用)
    - [bind()](https://book.apeland.cn/details/365/#bind())



## 函数间接方法和其他属性

- call()
- apply()
  - 这两个方法都是函数对象的方法需要通过函数对象来调用
  - 通过两个方法可以直接调用函数，并且可以通过第一个实参来指定函数中this
  - 不同的是call是直接传递函数的实参而apply需要将实参封装到一个数组中传递
- arguments
  - arguments和this类似，都是函数中的隐含的参数
  - arguments是一个类数组元素，它用来封装函数执行过程中的实参
    所以即使不定义形参，也可以通过arguments来使用实参
  - arguments中有一个属性callee表示当前执行的函数对象
- this
  - this是函数的上下文对象，根据函数的调用方式不同会执向不同的对象
    1.以函数的形式调用时，this是window    
    2.以方法的形式调用时，this是调用方法的对象    
    3.以构造函数的形式调用时，this是新建的那个对象   
    4.使用call和apply调用时，this是指定的那个对象   
    5.在全局作用域中this代表window   



## 深入理解作用域

- 内部原理
  - [编译(了解)](https://book.apeland.cn/details/402/#编译(了解))
  - [执行(重要)](https://book.apeland.cn/details/402/#执行(重要))
  - [查询](https://book.apeland.cn/details/402/#查询)
  - [嵌套(重要)](https://book.apeland.cn/details/402/#嵌套(重要))
  - [异常](https://book.apeland.cn/details/402/#异常)
  - [原理](https://book.apeland.cn/details/402/#原理)
- 词法作用域和动态作用域
  - [词法作用域](https://book.apeland.cn/details/402/#词法作用域)
  - [动态作用域](https://book.apeland.cn/details/402/#动态作用域)
- 声明提升(重要)
  - [变量声明提升](https://book.apeland.cn/details/402/#变量声明提升)
  - [函数声明提升(重要)](https://book.apeland.cn/details/402/#函数声明提升(重要))
  - [函数覆盖](https://book.apeland.cn/details/402/#函数覆盖)
- 理解什么是作用域和执行上下文环境
  - 概念
    - [作用域](https://book.apeland.cn/details/402/#作用域)
    - [作用域链和自由变量](https://book.apeland.cn/details/402/#作用域链和自由变量)
    - [执行环境](https://book.apeland.cn/details/402/#执行环境)
    - [执行流](https://book.apeland.cn/details/402/#执行流)
    - [执行环境栈](https://book.apeland.cn/details/402/#执行环境栈)
    - [整个执行流程](https://book.apeland.cn/details/402/#整个执行流程)





## 深入理解闭包

- 闭包
  - [如何站好队](https://book.apeland.cn/details/439/#如何站好队)
  - [闭包的用途](https://book.apeland.cn/details/439/#闭包的用途)
  - [使用闭包的注意点](https://book.apeland.cn/details/439/#使用闭包的注意点)
  - [总结](https://book.apeland.cn/details/439/#总结)
- 立即执行函数
  - 实现
    - [常用的两种写法](https://book.apeland.cn/details/439/#常用的两种写法)
    - [注意](https://book.apeland.cn/details/439/#注意)
    - [其它写法](https://book.apeland.cn/details/439/#其它写法)
  - [用途](https://book.apeland.cn/details/439/#用途)
  - [注意事项](https://book.apeland.cn/details/439/#注意事项)
- 对循环和闭包的错误理解
  - [容易犯错的一件事](https://book.apeland.cn/details/439/#容易犯错的一件事)
  - IIFE解决容易犯错的问题
    - [块作用域](https://book.apeland.cn/details/439/#块作用域)
- [名言](https://book.apeland.cn/details/439/#名言)
- 闭包的的10种形式
  - [返回值](https://book.apeland.cn/details/439/#返回值)
  - [函数赋值](https://book.apeland.cn/details/439/#函数赋值)
  - [函数参数](https://book.apeland.cn/details/439/#函数参数)
  - [IIFE](https://book.apeland.cn/details/439/#IIFE)
  - [循环赋值](https://book.apeland.cn/details/439/#循环赋值)
  - [getter和setter](https://book.apeland.cn/details/439/#getter和setter)
  - [迭代器](https://book.apeland.cn/details/439/#迭代器)
  - [区分首次](https://book.apeland.cn/details/439/#区分首次)
  - [缓存机制](https://book.apeland.cn/details/439/#缓存机制)
  - [img对象](https://book.apeland.cn/details/439/#img对象)



## this指向深入

[this绑定规则](https://book.apeland.cn/details/440/#this绑定规则)

- [默认绑定](https://book.apeland.cn/details/440/#默认绑定)
- [隐式绑定](https://book.apeland.cn/details/440/#隐式绑定)
- [隐式丢失](https://book.apeland.cn/details/440/#隐式丢失)
- [显示绑定](https://book.apeland.cn/details/440/#显示绑定)
- [new绑定](https://book.apeland.cn/details/440/#new绑定)
- [严格模式](https://book.apeland.cn/details/440/#严格模式)



## 面向对象编程

- [对象是什么](https://book.apeland.cn/details/441/#对象是什么)
- [构造函数](https://book.apeland.cn/details/441/#构造函数)
- [new命令](https://book.apeland.cn/details/441/#new命令)
- [constructor](https://book.apeland.cn/details/441/#constructor)
- 原型对象
  - [prototype属性的作用](https://book.apeland.cn/details/441/#prototype属性的作用)
  - [原型链](https://book.apeland.cn/details/441/#原型链)
  - [constructor](https://book.apeland.cn/details/441/#constructor)
  - [总结](https://book.apeland.cn/details/441/#总结)
- 创建对象的5种模式
  - [对象字面量](https://book.apeland.cn/details/441/#对象字面量)
  - [工厂模式](https://book.apeland.cn/details/441/#工厂模式)
  - 构造函数模式
    - [构造函数拓展模式](https://book.apeland.cn/details/441/#构造函数拓展模式)
    - [寄生构造函数模式](https://book.apeland.cn/details/441/#寄生构造函数模式)
    - [稳妥构造函数模式](https://book.apeland.cn/details/441/#稳妥构造函数模式)
  - 原型模式
    - [更简单的原型模式](https://book.apeland.cn/details/441/#更简单的原型模式)
  - 组合模式
    - [动态原型模式](https://book.apeland.cn/details/441/#动态原型模式)
  - [总结](https://book.apeland.cn/details/441/#总结)
- 基于面向对象的选项卡案例
  - [面向过程选项卡实现](https://book.apeland.cn/details/441/#面向过程选项卡实现)
- 实现继承的5种方式
  - [原型链继承](https://book.apeland.cn/details/441/#原型链继承)
  - [借用构造函数继承](https://book.apeland.cn/details/441/#借用构造函数继承)
  - [组合继承（重要）](https://book.apeland.cn/details/441/#组合继承（重要）)
  - [寄生组合式继承](https://book.apeland.cn/details/441/#寄生组合式继承)
  - [多重继承](https://book.apeland.cn/details/441/#多重继承)
- Object对象中的相关方法
  - Object的静态方法
    - [Object.keys()](https://book.apeland.cn/details/441/#Object.keys())
    - [Object.getOwnPropertyNames()](https://book.apeland.cn/details/441/#Object.getOwnPropertyNames())
    - [Object.getPrototypeOf()](https://book.apeland.cn/details/441/#Object.getPrototypeOf())
    - [Object.setPrototypeOf()](https://book.apeland.cn/details/441/#Object.setPrototypeOf())
    - [Object.create()](https://book.apeland.cn/details/441/#Object.create())
  - [其它方法](https://book.apeland.cn/details/441/#其它方法)
  - Object的实例方法
    - [Object.prototype.valueOf()](https://book.apeland.cn/details/441/#Object.prototype.valueOf())
    - [Object.prototype.toString()](https://book.apeland.cn/details/441/#Object.prototype.toString())
    - [Object.prototype.isPrototypeOf()](https://book.apeland.cn/details/441/#Object.prototype.isPrototypeOf())
    - [Object.prototype.\_\_proto\_\_](https://book.apeland.cn/details/441/#Object.prototype.__proto__)
    - [Object.prototype.hasOwnProperty](https://book.apeland.cn/details/441/#Object.prototype.hasOwnProperty)
  - 属性描述对象
    - [Object.getOwnPropertyDescriptor()](https://book.apeland.cn/details/441/#Object.getOwnPropertyDescriptor())
    - [Object.defineProperty()](https://book.apeland.cn/details/441/#Object.defineProperty())
    - [Object.defineProperties()](https://book.apeland.cn/details/441/#Object.defineProperties())
    - [Object.prototype.propertyIsEnumerable()](https://book.apeland.cn/details/441/#Object.prototype.propertyIsEnumerable())
  - 元属性
    - [value](https://book.apeland.cn/details/441/#value)
    - [writable](https://book.apeland.cn/details/441/#writable)
    - [enumerable](https://book.apeland.cn/details/441/#enumerable)
    - [configurable](https://book.apeland.cn/details/441/#configurable)
  - [存取器](https://book.apeland.cn/details/441/#存取器)
  - 深浅拷贝
    - [基本类型的拷贝](https://book.apeland.cn/details/441/#基本类型的拷贝)
    - 引用类型的拷贝
      - [浅拷贝](https://book.apeland.cn/details/441/#浅拷贝)
      - [深拷贝](https://book.apeland.cn/details/441/#深拷贝)
- 模块化
  - [1.基本的实现方法](https://book.apeland.cn/details/441/#1.基本的实现方法)
  - [2.封装私有变量:构造函数的写法](https://book.apeland.cn/details/441/#2.封装私有变量:构造函数的写法)
  - [3.封装私有变量：立即执行函数的写法](https://book.apeland.cn/details/441/#3.封装私有变量：立即执行函数的写法)
  - [4.模块放大模式](https://book.apeland.cn/details/441/#4.模块放大模式)
  - [5.输入全局变量](https://book.apeland.cn/details/441/#5.输入全局变量)



## 模块化进程

面向过程 =>   
js基础到网页上的一些行为，都是面向过程，根据逻辑进行实现的  
面向对象编程 =>    
是对 面向过程的二次改造，实现可拓展性  
面向模块开发 =>  

- CommonJs  

- ES6  
- AMD  
- CMD 规范   

面向组件开发 =>  

vue react 框架



## 函数防抖和节流

