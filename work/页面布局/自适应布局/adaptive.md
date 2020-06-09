## 自适应布局 代码

```html
<style type="text/css">
	// 自适应高度
	body{
		
		margin: 0px;
		padding: 0px;
		color: #8e8e8e;   
		text-align: center;
	}
	#wrapper{
	}
 
	#header{
		width: 100%;
		height: 120px;
		position: absolute;
		background-color: greenyellow;
	}
 
	#main{
		position: absolute;
		width: 100%;
		top: 120px;
		bottom: 120px;
		background-color: pink;
		height: auto;
	}
 
	#lside{
		width: 700px;
		height: 600px;
		background-color: #43c1ff;
	}
 
 
	#rside{
		width: 302px;
		height: 600px;
		background-color: #00abff;
	}
 
 
	.four{
		width: 130px;
		height: 280px;
		margin: 10px;
		background-color: #61d4ff;
	}
 
	#footer{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 120px;
	background-color:greenyellow;
	}
 
</style>
 
<body>
<div id="wrapper">
 
	<div id="header"> 头部</div>
	<div id="main">
		<div id="lside">
			
			<div class="four">左侧小部件</div>
		</div>
 
		<div id="rside">
 
			<div class="four">右侧小部件</div>
		</div>
	</div>
 
	<div id="footer">底部</div>
</div>
```

##  展示

[website](http://site.dearmsdan.com/work/页面布局/自适应布局/adaptive.html ':include :type=iframe width=100% height=400px')

