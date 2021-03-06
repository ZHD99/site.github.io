·HTML页面实在是太丑了，怎么破？

# css

## CSS

CSS

- 层叠样式表 (Cascading Style Sheets)
- css可以用来为网页创建样式表，通过样式
  表可以对网页进行装饰。
- 所谓层叠，可以将整个网页想象成是一层
  一层的结构，层次高的将会覆盖层次低的。
- 而css就可以分别为网页的各个层次设置样
  式。
  
## 基本语法  

- CSS的样式表由一个一个的样式构成，一个
样式又由选择器和声明块构成。  
- 语法：  
– 选择器 {样式名:样式值；样式名:样式值 ; }  
– p {color:red ; font-size:12px;}  

## 行内样式

- 可以直接将样式写到标签内部的style属性
中，这种样式不用填写选择器，直接编写
声明即可。
`<p style="color: red;font-size: 30px"></p>`
- 这种方式编写简单，定位准确。但是由于
直接将css代码写到了html标签的内部，导
致结构与表现耦合，同时导致样式不能够
复用，所以这种方式我们不使用。

## 内部样式表
- 可以直接将样式写到\<style\>标签中。
```
<style>
p{color:red; font-size: 30px;}
</style>
```
- 这样使css独立于html代码，而且可以同时为
多个元素设置样式，这是我们使用的比较多的
一种方式。     
- 但是这种方式，样式只能在一个页面中使用，
不能在多个页面中重复使用。

## 外部样式表
- 可以将所有的样式保存到一个外部的css文
件中，然后通过\<link\>标签将样式表引入
到文件中。
```
<link rel="stylesheet" type="text/css"
href="style.css">
```
- 这种方式将样式表放入到了页面的外部，
可以在多个页面中引入，同时浏览器加载
文件时可以使用缓存，这是我们开发中使
用的最多的方式。


# 选择器


## 选择器

- 选择器（selector），会告诉浏览器：网页
  上的哪些元素需要设置什么样的样式。
- 比如：p这个选择器就表示选择页面中的所
  有的p元素，在选择器之后所设置的样式会
  应用到所有的p元素上。
## 元素选择器
- 元素选择器（标签选择器），可以根据标
签的名字来从页面中选取指定的元素。
- 语法： 
	` 标签名 { }`
- 比如p则会选中页面中的所有p标签，h1会
选中页面中的所有h1标签。
## 类选择器

- 类选择器，可以根据元素的class属性值选
取元素。
- 语法： 
	 	`.className { }`
- 比如.hello会选中页面所有class属性为
hello的元素。

## ID选择器
- ID选择器，可以根据元素的id属性值选取
元素。
- 语法：  ` #id { } `
- 比如#box会选中页面中id属性值为box的
元素，和class属性不同，id属性是不能重
复的。

## 复合选择器
- 复合选择器，可以同时使用多个选择器，
这样可以选择同时满足多个选择器的元素。
- 语法：`选择器1选择器2{}`
- 例如div.box1会选中页面中具有box1这个
class的div元素。

## 群组选择器
- 群组选择器，可以同时使用多个选择器，
多个选择器将被同时应用指定的样式。
- 语法：
    `选择器1,选择器2,选择器3 { }`
- 比如p,.hello,#box会同时选中页面中p元素，
class为hello的元素，id为box的元素。

## 通用选择器
- 通用选择器，可以同时选中页面中的所有
元素。
- 语法：
    `*{ }`
## 标签之间的关系
- 祖先元素
– 直接或间接包含后代元素的元素。
- 后代元素
– 直接或间接被祖先元素包含的元素。
- 父元素
– 直接包含子元素的元素。
- 子元素
– 直接被父元素包含的元素。
- 兄弟元素
– 拥有相同父元素的元素

## 后代选择器

- 后代选择器可以根据标签的关系，为处在
元素内部的代元素设置样式。
- 语法：
   ` 祖先元素 后代元素 后代元素 { }`
- 比如p strong 会选中页面中所有的p元素
内的strong元素。

## 伪类和伪元素

- 有时候，你需要选择本身没有标签，但是
  仍然易于识别的网页部位，比如段落首行
  或鼠标滑过的连接。CSS为他们提供一些选
  择器：伪类和伪元素。



### 给链接定义样式

- 有四个伪类可以让你根据访问者与该链接的交
  互方式，将链接设置成4种不同的状态。
- 正常链接
  – `a:link`
- 访问过的链接
  – `a:visited`（只能定义字体颜色）
- 鼠标滑过的链接
  – `a:hover`
- 正在点击的链接
  –` a:active`

### 其他

- 获取焦点
– `:focus`
- 指定元素前
– `:before`
- 指定元素后
– `:after`
- 选中的元素
– `::selection`

### 其他选择器

给段落定义样式  
- 首字母
– :first-letter
- 首行
– :first-line

## 属性选择器
- 属性选择器可以挑选带有特殊属性的标签。
- 语法:
```
[属性名]
[属性名="属性值"]
[属性名~="属性值"]
[属性名|="属性值"]
[属性名^="属性值"]
[属性名$="属性值"]
[属性名*="属性值"]
```
## 子元素选择器
- 子元素选择器可以给另一个元素的子元素
设置样式。
- 语法：
`父元素 > 子元素{}`
- 比如body > h1将选择body子标签中的所
有h1标签。

## 其他子元素选择器
- :first-child
– 选择第一个子标签
- :last-child
– 选择最后一个子标签
- :nth-child
– 选择指定位置的子元素
- :first-of-type
- :last-of-type
-  :nth-of-type  
	– 选择指定类型的子元素

## 兄弟选择器
- 除了根据祖先父子关系，还可以根据兄弟
关系查找元素。
- 语法:  
– 查找后边一个兄弟元素  
 - `兄弟元素 + 兄弟元素{}`      
– 查找后边所有的兄弟元素
 - `兄弟元素 ~ 兄弟元素{}`

## 否定伪类
- 否定伪类可以帮助我们选择不是其他东西
的某件东西。
- 语法: 
   `:not(选择器){};`
- 比如p:not(.hello)表示选择所有的p元素但
是class为hello的除外。

### 继承
- 就像父亲的财产会遗传给儿子一样，在CSS中祖先元素的样式
同样也会被子元素继承。
-  继承是指应用在一个标签上的那些CSS样式会同时被应用到其
内嵌标签上。
- 比如为父元素设置了字体颜色，子元素也会应用上相同的颜色。
- 当然并不是所有的样式都会被继承，这一点我们讲到具体样式
时，再去讨论。

## 选择器的权重

- 在页面中使用CSS选择器选中元素时，经常都是一个元素同时被多个
选择器选中。
- 比如：  
– body h1  
– h1  
- 上边的两个选择器都会选择h1元素，如果两个选择器设置的样式不一
致那还好不会产生冲突，但是如果两个选择器设置的是同一个样式，
这样h1到底要应用那个样式呢？CSS中会默认使用权重较大的样式，
权重又是如何计算的呢？

### 权重的计算

- 不同的选择器有不同的权重值：    
– 内联样式：权重是 1000   
– id选择器：权重是 100  
– 类、属性、伪类选择器：权重是 10  
– 元素选择器：权重是 1  
– 通配符：权重是 0  
- 计算权重需要将一个样式的全部选择器相加，比如上边的body
h1的权重是20，h1的权重是10，所以第一个选择器设置的样
式会优先显示。

最后的几点说明：  
!important 表示强制应用该样式，例如：button{ width: 150px !important;}，与以上的选择器相遇时，强制使用此样式；  
如果比较后权重相同，那么后者覆盖前者，后渲染的胜出；  
内联样式  > id选择器样式 > 类选择器样式 > 元素选择器样式；  
CSS选择器的使用，应该尽量避免使用 !important 和 内联样式；id通常也是与class区分开使用，前者多用于JS中的结点定位，后者多用于CSS选择器。  
重中之重，1000/100/10/1这种权值系数的比较方式只是便于理解，真实情况下 10个class并不能逆转1个id。



# 盒子模型

### 盒子

- CSS处理网页时，它认为每个元素都包含在一
个不可见的盒子里。
- 为什么要想象成盒子呢？因为如果把所有的元素都想象成盒子，那么我们对网页的布局就相当于是摆放盒子。
- 我们只需要将相应的盒子摆放到网页中相应的
位置即可完成网页的布局。

### 盒子模型
- 一个盒子我们会分成几个部分：  
– 内容区(content)  
– 内边距(padding)  
– 边框(border)  
– 外边距(margin)  

### 内容区
- 内容区指的是盒子中放置内容的区域，也就是元素
中的文本内容，子元素都是存在于内容区中的。
- 如果没有为元素设置内边距和边框，则内容区大小
默认和盒子大小是一致的。
- 通过width和height两个属性可以设置内容区的大
小。
- width和height属性只适用于块元素。

### 内边距
- 顾名思义，内边距指的就是元素内容区与边框以内
的空间。
- 默认情况下**width**和**height**不包含padding的大小。
- 使用**padding**属性来设置元素的内边距。
- 例如：  
– padding:10px 20px 30px 40px  
– 这样会设置元素的上、右、下、左四个方向的内边距。 
- padding:10px 20px 30px;  
– 分别指定上、左右、下四个方向的内边距  
- padding:10px 20px;    
– 分别指定上下、左右四个方向的内边距  
- padding:10px;  
– 同时指定上左右下四个方向的内边距  
- 同时在css中还提供了padding-top、padding-right、paddingright、padding-bottom分别用来指定四个方向的内边距。

### 边框
 - 可以在元素周围创建边框，边框是元素可见框的最外部。
- 可以使用border属性来设置盒子的边框：  
– border:1px red solid;  
– 上边的样式分别指定了边框的宽度、颜色和样式。
- 也可以使用border-top/left/right/bottom分别指定上右下左
四个方向的边框。
- 和padding一样，默认width和height并包括边框的宽度。

### 边框的样式
- 边框可以设置多种样式：
– none（没有边框）  
– dotted（点线）  
– dashed（虚线）  
– solid（实线）  
– double（双线）   
– groove（槽线）  
– ridge（脊线）   
– inset（凹边）  
– outset（凸边）  

### 外边距
- 外边距是元素边框与周围元素相距的空间。
- 使用margin属性可以设置外边距。
- 用法和padding类似，同样也提供了四个方向的
margin-top/right/bottom/left。
- 当将左右外边距设置为auto时，浏览器会将左右外
边距设置为相等，所以这行代码margin:0 auto可
以使元素居中。

## display
- 我们不能为行内元素设置width、height、
margin-top和margin-bottom。
- 我们可以通过修改display来修改元素的性
质。
- 可选值：  
– block：设置元素为块元素  
– inline：设置元素为行内元素  
– inline-block：设置元素为行内块元素  
– none：隐藏元素（元素将在页面中完全消失）  

### visibility
– visibility属性主要用于元素是否可见。
– 和display不同，使用visibility隐藏一个元
素，隐藏后其在文档中所占的位置会依然
保持，不会被其他元素覆盖。
– 可选值：  
– **visible**：可见的  
– **hidden**：隐藏的  

### overflow
– 当相关标签里面的内容超出了样式的宽度
和高度是，就会发生一些奇怪的事情，浏
览器会让内容溢出盒子。
– 可以通过overflow来控制内容溢出的情况。
– 可选值：  
– visible：默认值   
– scroll：添加滚动条  
– auto：根据需要添加滚动条  
– hidden：隐藏超出盒子的内容  

### 文档流
– 文档流指的是文档中可现实的对象在排列时所占用的位置。
– 将窗体自上而下分成一行行，并在每行中按从左至右的顺序排
放元素，即为文档流。  
– 也就是说在文档流中元素默认会紧贴到上一个元素的右边，如
果右边不足以放下元素，元素则会另起一行，在新的一行中继
续从左至右摆放。  
– 这样一来每一个块元素都会另起一行，那么我们如果想在文档
流中进行布局就会变得比较麻烦。  

## 浮动
– 所谓浮动指的是使元素脱离原来的文本流，在父元素中浮动起来。 
– 浮动使用float属性。  
– 可选值：  
– none：不浮动  
– left：向左浮动  
– right：向右浮动  
- 块级元素和行内元素都可以浮动，当一个行内元素浮动以后将会自动变为一
个块级元素。  
- 当一个块级元素浮动以后，宽度会默认被内容撑开，所以当漂浮一个块级元
素时我们都会为其指定一个宽度  
- 当一个元素浮动以后，其下方的元素会上移。元素中的内容将会围绕
在元素的周围。   
- 浮动会使元素完全脱离文本流，也就是不再在文档中在占用位置。  
- 元素设置浮动以后，会一直向上漂浮直到遇到父元素的边界或者其他
浮动元素。  
- 元素浮动以后即完全脱离文档流，这时不会再影响父元素的高度。也
就是浮动元素不会撑开父元素。  
- 浮动元素默认会变为块元素，即使设置display:inline以后其依然是个
块元素。 

## 清除浮动
- clear属性可以用于清除元素周围的浮动对元素的影响。
- 也就是元素不会因为上方出现了浮动元素而改变位置。
- 可选值：  
– left：忽略左侧浮动  
– right：忽略右侧浮动  
– both：忽略全部浮动  
– none：不忽略浮动，默认值  

## 定位
- **position**属性可以控制Web浏览器如何以
及在何处显示特定的元素。
- 可以使用**position**属性把一个元素放置到网
页中的任何位置。
- 可选值：  
– static  
– relative  
– absolute  
– fixed  

## 相对定位
- 每个元素在页面的文档流中都有一个自然位置。相
对于这个位置对元素进行移动就称为相对定位。周
围的元素完全不受此影响。
- 当将position属性设置为relative时，则开启了元素
的相对定位。
- 当开启了相对定位以后，可以使用top、right、
bottom、left四个属性对元素进行定位。

### 相对定位的特点
- 如果不设置元素的偏移量，元素位置不会发生改变。
- 相对定位不会使元素脱离文本流。元素在文本流中
的位置不会改变。
- 相对定位不会改变元素原来的特性。
- 相对定位会使元素的层级提升，使元素可以覆盖文
本流中的元素。

## 绝对定位
- 绝对定位指使元素相对于html元素或离他最近
的祖先定位元素进行定位。
- 当将position属性设置为absolute时，则开启
了元素的绝对定位。
- 当开启了绝对定位以后，可以使用top、right、
bottom、left四个属性对元素进行定位

### 绝对定位的特点
- 绝对定位会使元素完全脱离文本流。
- 绝对定位的块元素的宽度会被其内容撑开。
- 绝对定位会使行内元素变成块元素。
- 一般使用绝对定位时会同时为其父元素指定一
个相对定位，以确保元素可以相对于父元素进
行定位。

## 固定定位
- 固定定位的元素会被锁定在屏幕的某个位置上，当
访问者滚动网页时，固定元素会在屏幕上保持不动。
- 当将position属性设置为fixed时，则开启了元素的
固定定位。
- 当开启了固定定位以后，可以使用top、right、
bottom、left四个属性对元素进行定位。
- 固定定位的其他特性和绝对定位类似

## z\-index
- 当元素开启定位以后就可以设置z-index这
个属性。
- 这个属性可以提升定位元素所在的层级。
- z-index可以指定一个整数作为参数，值越
大元素显示的优先级越高，也就是z-index
值较大的元素会显示在网页的最上层。



# 设置元素的背景

### background-color

- background-color属性用来为元素设置背
  景颜色。
- 需要指定一个颜色值，当指定了一个颜色
  以后，整个元素的可见区域都会使用这个
  颜色作为背景色。
- 如果不设置背景颜色，元素默认背景颜色
  为透明，实际上会显示父元素的背景颜色。

### background-image
- background-image可以为元素指定背景
图片。
- 和background-color类似，这不过这里使
用的是一个图片作为背景。
- 需要一个url地址作为参数，url地址需要指
向一个外部图片的路径
- 例如：`background-image: url(1.jpg)`

### background-repeat
- **background-repeat**用于控制背景图片的
重复方式。
- 如果只设置背景图片默认背景图片将会使
用平铺的方式，可以通过该属性进行修改。
- 可选值：  
– repeat：默认值，图片左右上下平铺  
– no-repeat：只显示图片一次，不会平铺  
– repeat-x：沿x轴水平平铺一张图片  
– repeat-y：沿y轴水平平铺一张图片  

### background-position
- background-position用来精确控制背景
图片在元素中的位置。
- 可以通过三种方式来确定图片在水平方向
和垂直方向的起点。  
– 关键字：top right bottom left center  
– 百分比  
– 数值  

### background-attachment
- background-attachment用来设置背景图
片是否随页面滚动。
- 可选值：    
– scroll：随页面滚动  
– fixed：不随页面滚动  

### background 
- background是背景的简写属性，通过这个
属性可以一次性设置多个样式，而且样式
的顺序没有要求。
- 例如：
`background: green url(1.jpg) no-repeat center center fixed;`

### CSS Sprite
- CSS Sprites 是一种网页图片应用处理方式。
- 通过这种方式我们可以将网页中的零星图
片集中放到一张大图上。
- 这样一来，一次请求便可以同时加载多张
图片，大大提高了图片的加载效率











