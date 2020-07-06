# css3
- 新特性
- `样式` 、`选择器`、`渐变`、`2D`、`3D`、`过渡`、`动画`、`布局`

## 样式-background

- 背景原特性
```
body{
	width: 100%;
	height: 100%;
	background-image: url(images/hello.png);
	background-repeat: no-repeat;
	background-position: center top;
}
```
- 背景新特性
```
body{
	width: 100%;
	height: 100%;
	/* 可以设置多个背景图用逗号隔开，第一个设置的永远在上面 */
	background-image: url(images/hello.png),url(images/hello2.png);
	background-repeat: no-repeat,repeat;
	background-position: center top,center center;
}
```

### background-size

- 常用属性 ：  
  – cover 实现响应式的图片，占满整个屏幕   
  – contain 根据css设置的宽度高度显示   
- **cover**  将背景图片按照原来的缩放比，将整个容器铺满  
- **contain**  将背景图片按照原来的缩放比，完整的显示到容器中  

### background-origin 
- 常用属性 ： **border-box** I **content-box** | **padding-box**  
  – **border-box**  设置背景图片显示位置为 从边框 到内边距在到内容的位置  
  – **content-box**  设置背景图片显示位置为 除去边框、内边距的位置  
  – **padding-box**  默认设置背景图片显示位置 为 除去边框 占用内边距的位置  

### background-clip 
- 常用属性 ： **border-box** I **content-box** | **padding-box**  
  – **border-box**  设置背景图片显示位置为 从边框 到内边距在到内容的位置  
  – **content-box**  设置背景图片显示位置为 除去边框、内边距的位置  
  – **padding-box**  默认设置背景图片显示位置 为 除去边框 占用内边距的位置  
    
 ### background-origin background-clip  区别
  – **background-origin** 设置背景图区域  
  –  **background-clip** 设置绘图区域  

















