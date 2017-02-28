# 我的书架
访问地址：[hajing.github.io/MyBookshelf/](http://www.hejinghemin.me/MyBookshelf/)

用flex和$.ajax做了一个我的书架的页面。

本页面flex水平方向为主轴，垂直方向为交叉轴，用了一些基本的属性。

$.ajax()调用的是豆瓣的[图书Api](https://developers.douban.com/wiki/?title=book_v2)，获取了一些我在[个人在线简历](http://www.hejinghemin.me/hejing-resume/)中提到的正在阅读的书籍，从接口只获取了部分字段的值，并在页面上实现了渲染。

用flex布局的效果（会根据窗口大小实现排版）：

![宽屏适应](http://7xpy9b.com1.z0.glb.clouddn.com/weix_20170228112629.png)

![窄屏适应](http://7xpy9b.com1.z0.glb.clouddn.com/weix_20170228112843.png)

文字排版不美观，还需要调整。
