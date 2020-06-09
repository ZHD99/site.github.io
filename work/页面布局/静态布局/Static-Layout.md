## 静态布局 代码

```html
<style type="text/css">
	body{
		
		margin: 0px;
		padding: 0px;
		color: #8e8e8e;   
		text-align: center;
	}
	#wrapper{
		width: 1002px;
		margin: auto;
	}
 
	#header{
 
		height: 120px;
		background-color: #79d1fd;
	}
 
	#main{
		height: 600px;
		background-color: #00abff;
 
 
	}
 
	#lside{
		width: 700px;
		height: 600px;
		background-color: #43c1ff;
		float: left;
	}
 
 
	#rside{
		width: 302px;
		height: 600px;
		background-color: #00abff;
		float: right;
	}
 
 
	.four{
		width: 130px;
		height: 280px;
		margin: 10px;
		background-color: #61d4ff;
	}
 
	#footer{
		height: 120px;
		background-color: #17a0e4;
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

## 静态布局 展示

[website](http://site.dearmsdan.com/work/页面布局/静态布局/staticLayout.html ':include :type=iframe width=100% height=400px')

