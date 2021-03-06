---
title: 在OS X上完成全局一键截图
tags : [Mac, OS X, AppleScript]
excerpt : 编写一个简单的AppleScript脚本，在OS X下全局一键截图
---

今天看论文时，有一张图和文字隔了两页，来回翻页实在不爽，于是想要是能把图片截下来在外接屏幕上打开对着看就好了。

在Mac中截图主要有两种方式，一种是使用快捷键⇧⌘3进行全局截屏或使用快捷键⇧⌘4选择区域进行截图，截图结果自动保存到桌面上；还有一种需要打开应用程序>实用工具下的抓图app，选择对应的功能进行截图，截图结果会自动显示在一个窗口中，选择保存或直接复制。

以上两种方法都需要在不同的应用程序及桌面间切换多次才能满足我的要求，对工作的连贯性干扰很大，因此我就想能否设置一个全局快捷键，一键截屏并在新的窗口中显示。
很快我发现AppleScript可以满足我的要求，稍微研究了一下便完成了这个功能。

具体步骤如下：

1. 打开应用程序下的automator
2. 新建文稿，选择“服务”
3. 在左侧的资源库选择“实用工具”，双击“运行AppleScript”
4. ““服务”收到”一项选择“没有输入”
5. 将以下代码复制到代码框中
6. 保存服务
7. 在系统偏好设置中选择“键盘”
8. 选择“快捷键”标签，在左侧选择服务
9. 在右侧通用下面找到刚刚新建的服务，指定一个快捷键，以后就可以在任何时候一键截图啦

<link rel="stylesheet" href="{{ site.baseurl }}\_sass\_highlights.scss">
{% highlight applescript %}
tell application "Grab" to activate
    tell application "System Events"
	    keystroke "a" using {command down, shift down}
end tell
{% endhighlight %}

换了MacBook Pro快一个月了，发现使用触摸板手势以及PopClip、Alfred等软件可以大大的提高效率。今天又发现使用AppleScript基本上可以随意定制自己想要完成的任务，而Alfred也支持AppleScript脚本，日后在使用过程中可以根据自己的习惯编写各种各样的脚本辅助自己的工作，想想就有点儿小激动呢！