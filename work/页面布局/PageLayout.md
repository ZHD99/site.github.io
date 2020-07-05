## *静态布局/<small>固定布局</small>(Static Layout)*

- 1、布局概念  
  传统web页面布局设计，网页最外层容器(wrapper) 固定大小，里面的内容以父容器为标准，超出的范围以滚动条展示，使用默认大小单位(px) 

- 2、优点  
  采用传统写法，兼容所有，布局简单

- 3、缺点  
  不适合移动端  
- 静态布局在移动端或者非pc 显示的页面布局不一致，影响用户体验

- 4、缺点解决方案  
  由于静态布局不适用于手机端，如果PC需要使用静态布局，在域名解析（m.) 指定移动端解析 为另一个域名，使用另一个非静态布局

- 5、 具体案例：

​	[静态布局demo](work/页面布局/静态布局/Static-Layout.md)

## *自适应布局(adaptive Layout)*

- 1、布局概念  
> 所谓自适应布局我们从百度上可以搜到如下的定义自适应设计指能使网页自适应显示在不同大小终端设备上新网页设计方式及技术。  
>简单的来说自适应就是让同一个页面自动适应不同大小的设备，从而解决为不同设备提供不同版本的页面问题。

- 2、优点  
  针对某一类或某几类分辨率设计响应网页大小 <b>自适应(Adaptive design)</b>的优势就在于减少载入的等待时间，提高网页的响应速度
- 3、缺点  
  需要编写多个页面  
  针对为不同类别的设备建立不同的网页，检测到设备分辨率大小后调用相应的网页。目前AWD(自适应)网页主要针对这几种分辨率（320，480，760，960，1200，1600）
- 4、 具体案例：

[自适应布局demo](work/页面布局/自适应布局/adaptive.md)

## *响应式布局(responsive Layout)*

- 1、布局概念  
> 建立一个网页，通过CSS Media Queries，Content－Based Breakpoint（基于内容的断点）等技术来改变网页的大小以适应不同分辨率的屏幕。

- 2、优点  
  单个页面适应各种分辨率
- 3、缺点  
  与自适应相反，页面分辨率设计多少决定载入速度
- 4、 具体案例：

[响应式布局demo](work/页面布局/响应式布局/responsive.md)

## *流式布局(Flow layout)*

- 1、布局概念      
  流式布局在CSS2时代就有，主要是靠百分比进行排版，可以在不同分辨率下显示相同的版式, 别称百分比布局
- 2、优点  
  流式布局是用于解决类似的设备不同分辨率之间的兼容
- 3、缺点    
  在大屏幕的手机下显示效果会变成有些页面元素宽度被拉的很长，但是高度、文字大小还是和原来一样（即，这些东西无法变得“流式”），显示非常不协调。
- 4、缺点解决方案  
  通过响应式布局和弹性布局 相结合来解决这类问题
- 5、 具体案例：  
  [流式布局demo](work/页面布局/流式布局/flow.md) flex flow 

## *弹性布局(Flex layout)*

- 1、布局概念      
  Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。 
- 2、优点  
  任意容器都可以指定成flex布局  
  使用简单、API完整丰富、响应式动态地实现各种页面布局（一些常见的布局思想）
- 3、缺点    
  设为flex布局后，子元素的float、clear、vertical-align将失效   
  对于一些特殊布局（垂直居中）和网格式布局（几行几列）不易实现
- 4、 具体案例：  
  [弹性布局demo](work/页面布局/弹性布局/flex.md) flex flow 

## *网格布局(Grid layout)*

- 1、布局概念      
   css grid(网格)布局为CSS引入了一个二维网格系统。网格可用于布局主要页面区域或小型用户界面元素。网格是一组交叉的水平和垂直线 - 一组定义列，其他行。元素可以放在网格上，以行或者列为标准。
- 2、优点    
  1：固定和灵活的轨道尺寸  
  2：可以使用行号，名称或通过定位网格区域将项目放置在网格上的精确位置。  
  网格还包含一种算法，用于控制未在网格上显示位置的项目的放置。  
  3：在需要时添加其他行和列  
  4：网格包含对齐功能，以便我们可以控制项目放置到网格区域后的对齐方式，以及整个网格的对齐方式。  
  5：可以将多个项目放入网格单元格或区域中，它们可以彼此部分重叠。然后可以用z-index属性控制该分层。
- 3、缺点    
  兼容性不太好
- 4、 具体案例：  
  [网格布局demo](work/页面布局/网格布局/grid.md)



# 内容布局

```markdown
在开始一个新的网页设计项目的时候，不知道你会不会有那么一瞬间的犹豫：“这个项目要从哪里着手呢？”伴随着这种犹豫的，是“做点前所未有的作品”的冲动。不过，很多时候，这些冲动和犹豫都在需求的磨合、设计的细化中，逐步淡化。相比大家也都发现了，网页布局在很多时候都是相似的，甚至可以说，有些布局模式是长盛不衰的。

这些布局模式，或者说框架，几乎是“约定俗成”的，它们为用户所熟知，它们本身也更贴合用户对内容的识别模式和使用习惯。今天的文章，我们一同来聊聊五种拥有持久生命力的优秀网页布局，也许你的下一个网页设计项目可以直接从这五种布局模式入手，无需过多犹豫和纠结。
————————————————
版权声明：本文为CSDN博主「lzy15907117519」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lzy15907117519/java/article/details/79437891
```

参考文章：

html 中文网：https://www.html.cn/qa/css3/15643.html  
阮老师 ：http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html    
阮老师 ：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html  
阮老师：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html  
汪氵淼：https://www.cnblogs.com/hencins/p/10123178.html   
简书-疯狂的蜗牛Dianna：https://www.jianshu.com/p/4a6e5162e4ee  
大小码编程世界：https://www.cnblogs.com/zylseo/p/12599443.html  
知乎： https://www.zhihu.com/question/21679928  
Tracey_W: https://www.cnblogs.com/Tracey-1023/p/7354435.html  
那一季的银杏叶 ： https://www.cnblogs.com/snowcan/p/7528404.html  
xiaobe：https://www.cnblogs.com/soyxiaobi/p/9594557.html  
屹峰：https://www.zhihu.com/question/20628050  
weixin_34082695： https://blog.csdn.net/weixin_34082695/article/details/94664072  
鬼鬼丫404： https://www.cnblogs.com/zhp404/articles/4283157.html  
jameskarry:  https://blog.csdn.net/jameskarry/article/details/82878423  
lyyo_cd: https://blog.csdn.net/lyyo_cd/article/details/73329068  
小飞猫_ : https://blog.csdn.net/wang839305939/article/details/76178966  
lzy15907117519: https://blog.csdn.net/lzy15907117519/article/details/79437891  
老陈家的大小姐: https://www.cnblogs.com/cui-ting/p/11196698.html



