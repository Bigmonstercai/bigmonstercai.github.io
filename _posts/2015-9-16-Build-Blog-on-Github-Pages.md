---
layout: post
title: 第一篇文章就记录下这个博客搭建的过程吧！
---

年纪大了，脑子越来越不好使了，小时候学点儿啥分分钟就搞定，现在天天都在研究配置环境。这不，想搭建个博客，又折腾了三天……

初中时就写过博客，那时候纯属为了玩，做个整人的视频贴上面好让大家都去看。现在又有了一个搭建博客的想法，主要是想把平时学习到的方方面面的知识都做个记录，以便以后随时查看。

为啥就选了这个Github Pages来搭建博客呢？

首先吧，小时候用的百度空间说关就关了，而Github上托管着这么多项目的代码，肯定不能那么轻易就没了。

其次Github就像一个免流量无限大的主机空间，往上面传什么都可以，图片、视频都可以和网站保存在一起，不像其他博客，还得找优酷啊、百度网盘啊托管各种资源，哪天说给删了就给删了，几年后肯定都是死链。

最后，当然，Github作为全球最大的同性交友网站，连给大家的主页域名都是.io，逼格就是高啊！不用他用谁？

总之，使用Github Pages搭建博客，既不像使用现有的博客服务那么简单，在浏览器里就可以直接利用在线的编辑器完成日志的编写，也不像搭建一个完整的独立博客那么复杂，不用考虑服务器方面的问题。它就是托管在Github上的一个项目，你可以自由定制，利用jekyll和Github配合还可以在本地进行调试。发布新文章就是新建一个文本文档，配上Liquid脚本代码就可以方便的利用网页模板生成一个个页面。而且在Github上有大量的主题，只需要轻轻地fork一下，就可以“据为己有”，大大地方便了我们这种设计苦手。

下面，我就记录下我这个博客搭建的过程，给其他想在Github Pages上搭建博客的同学一些参考，也方便未来我想把这个博客推倒重盖时，不用再花那么多时间……

#在Github上新建项目库

既然选择了Github Pages，那肯定已经注册过Github账号了吧？（废话！不注册怎么交友）

Github Pages分为用户和组织站点及项目站点两种，用户和组织站点就是可以直接使用username.github.io访问的主页，项目站点则是通过username.github.io/repository来访问的。作为个人博客，肯定是第一种逼格更高，.io后面还有一大坨单词多难看！所以博客搭建选用用户和组织站点。

然后可以跟着[官方的教程](https://pages.github.com/)先建立一个名为"username.github.io"的项目库（username为Github账号），并利用Git同步到本地。

#自动生成（可选）

在Github上可以自动生成一个主页，不过这个主页有点儿太简单，都不能显示最新的日志，根本就没用到Jekyll，连用来学习的价值都没有。

####进入"username.github.io"项目库,点击右侧的“Settings”

![1]({{site.baseurl}}/images/{{ page.url }}/1.png)

####点击“Launch automatic page generator”

![2]({{site.baseurl}}/images/{{ page.url }}/2.png)

####输入页面标题（Page name）、标语（Tagline）和正文，点击“Continue to layouts”

![3]({{site.baseurl}}/images/{{ page.url }}/3.png)

####最后选择一个喜欢的模板，点击“Publish page”就完成啦！

![4]({{site.baseurl}}/images/{{ page.url }}/4.png)

自动生成页面虽然操作简单，也还挺漂亮，但是只有这一个页面，如果想增加功能、新建日志恐怕需要有一些HTML和CSS的基础了（反正我没有）。总之如果想建立一个博客，自动生成之后还有很多路要走，不是很推荐使用这个方法。

#手工搭建

说是手工搭建，其实也是可以利用网上现成的模板的，不过在这之前我们最好把Jekyll安装好，方便在本地进行调试。

##安装Jekyll

这一步我依然是安装[官方教程](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll)走的。不用理会那个GitHub Pages Gem，直接从安装Ruby开始即可，windows用户可以直接下载[RubyInstallers](http://rubyinstaller.org/downloads/)安装。不要着急，在这个页面中往下翻，有个DEVELOPMENT KIT,这个也是需要用到的，下载合适自己使用的版本(32位和64位一定不要弄错)。

安装RubyInstallers，确保Ruby的bin目录在你的环境变量的path中，然后在命令行中输入 <code>gem update --system</code> 来升级gem。