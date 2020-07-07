

## Git是什么？

Git是目前世界上最先进的分布式版本控制系统



## Git 安装

在Windows/Mac OS 安装git 软件   
https://git-scm.com/downloads  安装过程直接下一步，安装完成即可



### 初始化Git

```
git init
```

### 查看Git文件状态

```
git status
```

3种状态变化

- 红色： 新增文件/修改了原文件 => git add 文件名/.
- 绿色：git已经管理起来  =>  git commit -m '描述信息'
- 生成版本 

## 通过Git管理文件

可通过命令行输入

- ` git add 文件名字`   管理单个文件
- `git add .` 管理全部文件

### 个人信息配置： 用户名、邮箱[一次配置即可]

```
git config --global user.email ""
git config --global user.name ""
```

### 生成一个版本

```
git commit -m 'v1'
```

v1 指版本描述

### 查看版本记录

```
git log
```

### 版本回滚 

回滚之前的版本

```
git log
git reset --hard 843c9abf93588217ed1235b2a1028a6d2eb69f42(版本号)
```

回滚之之后版本

```
git reflog
git reset --hard 版本号
```

## 分支

### 查看当前分支

```
git branch
```

### 创建新分支

```
git branch dev(分支名字)      // 创建单分支
git branch dev bug abc ace  // 创建多个分支用空格
```

### 切换分支

```
git checkout dev(分支名字)
```

### 合并分支

```
git merge bug(某分支)
```

- 把某分支给合并到当前分支

### 删除分支

```
git branch -d bug(需要删除的分支)
```



## GitHub

###  项目地址起别名 并推送

```
git remote add origin https:.../dbhot.git
```

### 推送代码

```
git push -u origin master
```

### 拉取代码

```
git pull origin master
等价于
git fetch origin master
git merge origin/master
```

### 下载代码

```
git clone https:....hot.git hot 
克隆远程仓库代码      ↑ 地址    ↑ 别名
```

- 拉下的代码本地无法查看分支，但是可以切换仓库有的分支

### 保持代码提交整洁(变基)

```
git rebase dev(分支)
```

### 记录图形展示

```
git log --graph --pretty=format:"%h %s"
```



# 常见问题！

## git push 提示 Everything up-to-date

- 通常情况下 如果没有` git add .` |` git commit`  操作会 报错



## 如何解决git上传文件出错[rejected] master -> master (fetch first) error: failed to push some refs to '



错误如下：  

```
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:peTzxz/Property-management-system'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

问题解析：

出现这个问题是因为github中的某些文件不在本地代码目录中，可以通过如下命令进行代码合并

```
git pull --rebase origin master
再进行提交代码
git push origin master
```

