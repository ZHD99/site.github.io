#  TCP/IP四层参考模型

OSI模型，即开放式通信系统互联参考模型(Open System Interconnection,OSI/RM,Open Systems Interconnection Reference Model)，是国际标准化组织(ISO)提出的一个试图使各种计算机在世界范围内互连为网络的标准框架，简称OSI。  
这是一种事实上被TCP/IP 4层模型淘汰的协议。在当今世界上没有大规模使用。

## TCP/IP 介绍

　TCP/IP协议栈是美国国防部高级研究计划局计算机网（Advanced Research Projects Agency Network，ARPANET）和其后继因特网使用的参考模型。ARPANET是由美国国防部（U.S．Department of Defense，DoD）赞助的研究网络。最初，它只连接了美国境内的四所大学。随后的几年中，它通过租用的电话线连接了数百所大学和政府部门。最终ARPANET发展成为全球规模最大的互连网络-因特网。最初的ARPANET于1990年永久性地关闭。　　  
TCP/IP参考模型分为四个层次：应用层、传输层、网络互连层和物理+数据链路层。

![这里写图片描述](https://img-blog.csdn.net/20180812081016811?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FuZHJld2dpdGh1Yg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

1.链路层（数据链路层/网络接口层）：包括操作系统中的设备驱动程序、计算机中对应的网络接口卡   

2.网络层（互联网层）：处理分组在网络中的活动，比如分组的选路。   

3.运输层：主要为两台主机上的应用提供端到端的通信。

4.应用层：负责处理特定的应用程序细节。  



![这里写图片描述](https://img-blog.csdn.net/20180812081024973?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FuZHJld2dpdGh1Yg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

应用层协议：TCP/IP协议族  
Telnet,ftp,smtp,dns,snmp,http等协议；  

地址识别协议(ARP)  
ARP实际上不是网络层部分，处于IP和数据链路层之间，它是在32为IP地址和48位局域网物理地址之间执行翻译的协议。  
就是使用ARP协议能够将IP地址翻译为MAC地址。
telnet远程登录协议；  
smtp简单的文件传输协议；    
IP协议主要有以下四种主要功能；  
数据传送  
寻址  
路由选择   
数据报文分段   

TCP提供一种面向链接的、可靠的字节流服务；
UDP是无连接不可靠的传输服务，但是执行开销小，执行时速度快。
————————————————
版权声明：本文为CSDN博主「Achou.Wang」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/andrewgithub/java/article/details/81603205