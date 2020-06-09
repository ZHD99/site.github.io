# 基本布局

## dearmsdan 目录

```text
.
└── dearmsdan
    ├── layout        => 布局
    ├── source        => 静态资源
    └── md            => 附加内容
```

整体布局一共分为三个部分： 顶部、侧边栏 、主体

![](/_media/layout.png)



## 顶部

顶部有网站logo 和 网站名字设置 、导航栏  
模板文件位置 ejs : ../layout/_partial/_header.ejs

需要配置在主题 config.yml 中  

```
dearmsdan:
  logo:  #logo图标设置（设置其中之一就好了
    ico: DearMsDanIconFont icon-zh    #这里将logo设置 图标库ICO
    png: 						      #这里将logo设置图片
    size: 50px # 设置logo大小
  title: 
    size: 20px # 设置网站名字大小

```
!> logo 图标中 ico 和 png设置 其中之一，另一个为空即可

###### 导航栏 

需要配置在主题 config.yml 中  

```
menu:
  首页:
    - /
  关于:
    - about.html
  留言板:
    - /valine.html
  友情链接:
    - /link.html
```

可按照此结构添加或者删除导航


## 侧边栏

侧边栏有 自定义头像、自定义社交按钮、搜索功能、文章类、自定义二级目录  
模板文件位置 ejs : ../layout/_partial/_head/sidebar.ejs

###### 自定义头像 

```
dearHead: /Pexels.gif # 初始头像
dearHeadlogo: /logo.png # 遮罩 logo
PhotoHead: /resources/qiaoba.png  # 备用头像 
```

###### 自定义社交按钮

```
socialbtn:
  GitHub:
    - https://github.com/ZHD99/
    - icon-git
  email:
    - /outlook.html
    - icon-youxiang
  netease:
    - https://music.163.com/
    - icon-netease
  qq:
    - https://wpa.qq.com/msgrd?v=3&uin=2646405301&site=qq&menu=yes
    - icon-qq
  weibo:
    - https://weibo.com/
    - icon-weibo
```

!> 自定义社交按钮 如果有不需要的可以删除其中部分(无法添加哦)  
    暂时只支持 修改链接,如果需要添加新社交按钮内容   
	css : ../source/css/social/social.css  

###### 搜索功能


粗略 安装介绍:

- 安装hexo 2个插件 `npm install hexo-generator-search --save`  `npm install hexo-generator-searchdb --save`

- 找到和node_modules 同目录下的_config 文件打开

- 填写信息↓

  ```
  search: 
    path: search.xml
    field: post
    format: html
    limit: 10000
  ```
  - 然后在主题下_config 

主题配置

```
search:
  enable: false #true 为开启， 默认不启用，没安装插件启用 会报错
  searchjs: /js/s.js
```

具体安装:

https://github.com/theme-next/hexo-generator-search



!> 搜索也会有出错的时候，比如文章中的非法字符会导致搜索功能失效  
	模板文件位置 ejs : ../layout/_partial/_head/search.ejs

###### 文章档类

```
side:
  archive: 文章归档
  recent_posts: 最新文章
  categories: 文章分类
  tagcloud: 标签 
  axis: 
    name: 时间轴
    link: /axis.html
    
```

文章归档、文章分类、文章标签、时间轴 等等，不一一介绍，都是用ejs 迭代出来的  

!> 时间轴文件位置 ejs : ../layout/_axis.ejs  
	文件位置 ejs : ../layout/__side/*

###### 自定义二级目录

```
# 可自定义目录，具体添加多级在sidebar.ejs 59行左右
Catalog:
  自定义目录:
    - /
Catalog_son:
  地址0...:
    - /about.html
  地址1...:
    - /about.html
  地址2...:
    - /about.html
  地址3...:
    - /about.html
	
```

!> 可无限制添加二级目录，如果需要添加一级目录在  
	文件位置 ejs : ../layout/_partial/_head/sidebar.ejs 59行左右

## 主体

......