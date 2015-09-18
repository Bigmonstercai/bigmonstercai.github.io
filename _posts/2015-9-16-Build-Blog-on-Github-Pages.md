---
layout: post
title: 第一篇文章就记录下这个博客搭建的过程吧！
tags : [Github Pages, Jekyll]
excerpt : 记录下我这个博客搭建的过程，给其他想在Github Pages上搭建博客的同学一些参考，也方便未来我想把这个博客推倒重盖时，不用再花那么多时间……
---

&emsp;&emsp;年纪大了，脑子越来越不好使了，小时候学点儿啥分分钟就搞定，现在天天都在研究配置环境。这不，想搭建个博客，又折腾了三天……

&emsp;&emsp;初中时就写过博客，那时候纯属为了玩，做个整人的视频贴上面好让大家都去看。现在又有了一个搭建博客的想法，主要是想把平时学习到的方方面面的知识都做个记录，以便以后随时查看。

&emsp;&emsp;为啥就选了这个Github Pages来搭建博客呢？

&emsp;&emsp;首先吧，小时候用的百度空间说关就关了，而Github上托管着这么多项目的代码，肯定不能那么轻易就没了。

&emsp;&emsp;其次Github就像一个免流量无限大的主机空间，往上面传什么都可以，图片、视频都可以和网站保存在一起，不像其他博客，还得找优酷啊、百度网盘啊托管各种资源，哪天说给删了就给删了，几年后肯定都是死链。

&emsp;&emsp;最后，当然，Github作为全球最大的同性交友网站，连给大家的主页域名都是.io，逼格就是高啊！不用他用谁？

&emsp;&emsp;总之，使用Github Pages搭建博客，既不像使用现有的博客服务那么简单，在浏览器里就可以直接利用在线的编辑器完成日志的编写，也不像搭建一个完整的独立博客那么复杂，不用考虑服务器方面的问题。它就是托管在Github上的一个项目，你可以自由定制，利用jekyll和Github配合还可以在本地进行调试。发布新文章就是新建一个文本文档，配上Liquid脚本代码就可以方便的利用网页模板生成一个个页面。而且在Github上有大量的主题，只需要轻轻地fork一下，就可以“据为己有”，大大地方便了我们这种设计苦手。

&emsp;&emsp;下面，我就记录下我这个博客搭建的过程，给其他想在Github Pages上搭建博客的同学一些参考，也方便未来我想把这个博客推倒重盖时，不用再花那么多时间……

#在Github上新建项目库

&emsp;&emsp;既然选择了Github Pages，那肯定已经注册过Github账号了吧？（废话！不注册怎么交友）

&emsp;&emsp;Github Pages分为用户和组织站点及项目站点两种，用户和组织站点就是可以直接使用username.github.io访问的主页，项目站点则是通过username.github.io/repository来访问的。作为个人博客，肯定是第一种逼格更高，.io后面还有一大坨单词多难看！所以博客搭建选用用户和组织站点。

&emsp;&emsp;然后可以跟着[官方的教程](https://pages.github.com/)先建立一个名为"username.github.io"的项目库（username为Github账号），并利用Git同步到本地。

#自动生成（可选）

&emsp;&emsp;在Github上可以自动生成一个主页，不过这个主页有点儿太简单，都不能显示最新的日志，根本就没用到Jekyll，连用来学习的价值都没有。

####进入"username.github.io"项目库,点击右侧的“Settings”

![1]({{site.baseurl}}/images/{{ page.url }}/1.png)

####点击“Launch automatic page generator”

![2]({{site.baseurl}}/images/{{ page.url }}/2.png)

####输入页面标题（Page name）、标语（Tagline）和正文，点击“Continue to layouts”

![3]({{site.baseurl}}/images/{{ page.url }}/3.png)

####最后选择一个喜欢的模板，点击“Publish page”就完成啦！

![4]({{site.baseurl}}/images/{{ page.url }}/4.png)

&emsp;&emsp;自动生成页面虽然操作简单，也还挺漂亮，但是只有这一个页面，如果想增加功能、新建日志恐怕需要有一些HTML和CSS的基础了（反正我没有）。总之如果想建立一个博客，自动生成之后还有很多路要走，不是很推荐使用这个方法。

#手工搭建

&emsp;&emsp;说是手工搭建，其实也是可以利用网上现成的模板的，不过在这之前我们最好把Jekyll安装好，方便在本地进行调试。

##安装Jekyll

&emsp;&emsp;这一步我依然是安装[官方教程](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll)走的。不用理会那个GitHub Pages Gem，直接从安装Ruby开始即可，windows用户可以直接下载[RubyInstallers](http://rubyinstaller.org/downloads/)安装。不要着急，在这个页面中往下翻，有个DEVELOPMENT KIT,这个也是需要用到的，下载合适自己使用的版本(32位和64位一定不要弄错)。

&emsp;&emsp;安装RubyInstallers，确保Ruby的bin目录在你的环境变量的path中，然后在命令行中输入 <code>gem update --system</code> 来升级gem。由于某些众所周知的原因，直接用gem命令连接到rubygems.org下载软件包的过程可能并不流畅，因此可以把源替换为淘宝提供的完整镜像源https://ruby.taobao.org/，执行如下指令：
<blockquote>
<p>gem sources --remove https://rubygems.org/</p>
<p>gem sources -a https://ruby.taobao.org/</p>
</blockquote>
&emsp;&emsp;执行
<code>gem sources -l</code>
，确保只有ruby.taobao.org，以后就可以顺利安装各种软件包了。

&emsp;&emsp;接下来安装DEVELOPMENT KIT，DevKit一定要选择和自己系统相匹配的版本，否则后面安装其他组件时会出现"Failed to build gem native extension"错误。将下载到的DevKit解压，在解压后的目录中打开命令提示行(在一个打开的目录中，按住shift键，同时在空白处点右键，就可以在当前目录中打开命令提示行)，输入如下命令：
<blockquote>
<p>ruby dk.rb init</p>
<p>ruby dk.rb install</p>
</blockquote>
&emsp;&emsp;然后就可以开始安装Jekyll了。官方教程中推荐先安装一个Bundler，说是方便各种Ruby软件包的管理和使用，实际上装不装好像都可以。如果需要安装的话，只需要执行<code>gem install bundler</code>即可。如果安装了Bundler，那么需要在你的项目库中建立一个名为Gemfile的文件，文件内容为：
<blockquote>
<p>source 'https://ruby.taobao.org'</p>
<p>gem 'github-pages'</p>
</blockquote>
&emsp;&emsp;然后在命令提示行执行<code>bundle install</code>即可完成Jekyll的安装。如果没有安装Bundler，那直接在命令行执行<code>install github-pages</code>也可以完成安装。

##自建站点（可选）

&emsp;&emsp;配置完环境，就可以开始建站了。我们当然可以选择自己从头建立一个站点，这部分内容可以跟着[阮一峰老师的教程](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)来做,创建项目的步骤我们已经在之前做完了，可以直接从第二步创建设置文件开始。由于阮一峰老师这个教程是2012年写的，估计那时候还没有.io这种个人主页，所以还需要创建名为‘gh-pages’的分支，现在这种做法只针对项目站点了，在项目库username.github.io中我们只需要在master分支下进行操作即可。

&emsp;&emsp;虽然跟着阮一峰老师的教程做出来的站点很简陋，但是可以大概了解在Github Pages上建站的目录结构。首先在项目库根目录下需要有一个设置文件"_config.yml"，在这里记录了站点名称、作者信息、调用的插件、一些资源的目录等基本信息，在jekyll生成静态页面时会从中读取配置。

&emsp;&emsp;在项目库根目录下的"_layouts"文件夹存放着模板文件，整个站点的所有页面都是在这里的模板的基础上填充具体内容生成的。通常模板有default.html、page.html和post.html三种，default是最底层的模板，定义了所有页面共有的元素，page和post也是在default的基础上构建的。page是除日志外一般页面的模板，而post则是日志页面的模板。

&emsp;&emsp;在项目库根目录下的"_posts"文件夹里存放的是所有的日志，创作新的日志只需在这个文件夹新建一个文本文件即可。可以采用html格式或md格式两种，都可以使用Liquid模板语言来调用变量填充页面，在md格式文件中也可以正常使用html元素。日志的文件名需为“年-月-日-标题.后缀名”的格式，jekyll在生成站点时可以自动解析文件名。在每篇文章开始的地方，需要有一个yaml文件头，用来设置一些属性，用”---“标记开始和结束，每行设置一种元数据。通常需要设置的有layout来选择模板，title来设置文章标题（不设置的话则与文件名中的标题相同），excerpt可以设置摘要（不设置的话则默认为文章第一段）。

&emsp;&emsp;在项目库根目录下创建index.html或index.md来作为整个站点的首页，具体格式与日志的格式没有什么区别。通常在首页使用<code>\{ % for post in site.posts % \}</code>来对所有日志进行遍历，然后调用每一篇日志的标题、摘要等信息显示在主页上。
 
&emsp;&emsp;此外还可以在项目库根目录下建立about、404等其他非日志页面。

&emsp;&emsp;修改完所有页面后，在命令行中运行<code>bundle exec jekyll serve</code>(如果安装了bundler)或者<code>jekyll serve</code>，等到提示站点生成完成后，在浏览器中打开[localhost:4000](http://localhost:4000/)即可在本地预览调试你的页面了。

##使用现有模板

&emsp;&emsp;对于我们这种没什么HTML和CSS基础的人来说，从阮老师建立的基本框架到一个完整美观的站点无异于跟着网上各种教绘画的教程学绘画一般。

<div align="center">
<img src="{{site.baseurl}}/images/{{ page.url }}/ma.png"/>
</div>

&emsp;&emsp;所以推荐的做法还是寻找现成的模板，在别人已经完整搭建好的站点的基础上进行修改，快速的制作出属于自己的博客，同时还能逐步熟悉Jekyll的使用。

&emsp;&emsp;目前使用较多的是[Jekyll-Bootstrap](https://github.com/plusjade/jekyll-bootstrap)，功能强大，还拥有丰富的Theme可供随时下载切换。但是我试用了一番，感觉对新手还不是很友好，功能太多导致想修改时很多部分找不到应该去哪里修改。而且不知道什么原因，经常会出现"Failed to get header"错误（大概是因为Jekyll Bootstrap需要调用Python 2而我装的是Python 3？）。

&emsp;&emsp;建立这个博客，我使用的是[Jekyll-now](https://github.com/barryclark/jekyll-now)。这个模板功能完整但又很简单，稍微熟悉一下就可以着手进行修改。基本上把"_config.yml"中的信息修改一下，把images文件夹中的logo修改一下，就可以开始写自己的日志了。需要注意的是，虽然logo采用jpg格式的文件在本地调试都没有问题，但是上传到Github上之后可能会无法显示，因此使用的图片都采用png格式为妥。

#markdown语言

&emsp;&emsp;下面说说markdown语言。我这篇日志是用md格式写的，其中使用到了markdown语言。

&emsp;&emsp;markdown语言就是是用一些特殊的符号来生成html代码，简化格式。在文本中插入HTML标签完全没有问题。此外常用的符号有：

<blockquote>
	<p>[显示的文字](链接地址) ： 可以用来设置超链接</p>
	<p>![图片名称](图片地址) ： 可以用来显示图片</p>
	<p>###标题 ： 设置标题，#数量代表标题级数</p>
	<p>*斜体* ： 斜体</p>
	<p>**粗体** ： 粗体</p>
	<p>***粗斜体*** ： 粗斜体</p>
	<p>>引用内容 ： 引用</p>
	<p>```代码``` ： 代码</p>	   
</blockquote>

&emsp;&emsp;此外还可以使用\来对markdown语言中用到的符号进行转义。使用\&emsp;表示中文空格，使用\&nbsp;表示英文空格。如果需要图片居中等问题，markdown语言就解决不了了，需要直接使用HTML语言。如果想在网页中直接显示markdown语句，那么就在大括号、中括号两端加\<a\>标签就好啦！

#日志分类

&emsp;&emsp;最后说说日志的分类。虽然我现在写的是博客的第一篇日志，但是想到我感兴趣的东西那么多，而且还在与日俱增，可以预见到未来整个博客一定是杂乱无章的。因此需要未雨绸缪，提前建设好日志分类的系统。

&emsp;&emsp;最简单的办法就是给每篇文章加标签，在每篇日志的yaml文件头中可以定义日志的标签。每篇日志可以只拥有一个标签（<code>tag : 标签</code>），也可以拥有多个标签（<code>tags : [标签1，标签2，标签3]</code>）。Jekyll在生成整个站点时会遍历所有日志，并将标签储存在变量site.tags中。site.tags相当于一个数组，其中每个元素对应一个标签。每个元素tag也是一个数组，tag[0]是这个标签的名称，tag[1]中储存着所有拥有这个标签的文章信息。因此可以使用下列代码遍历打印出所有标签及其下的文章：

<blockquote>
<p><a>{</a>% for tag in site.tags %<a>}</a></p>
<p><a>{</a><a>{</a> tag[0] <a>}</a><a>}</a></p>
<p><a>{</a>% for post in tag[1] %<a>}</a></p>
<p><a>[</a><a>{</a><a>{</a> post.title <a>}</a><a>}</a><a>]</a>(<a>{</a><a>{</a> post.url <a>}</a><a>}</a>)</p>
<p><a>{</a>% endfor %<a>}</a></p>
<p><a>{</a>% endfor %<a>}</a></p>	
</blockquote>

&emsp;&emsp;从建站到这第一篇日志的发表，一共就用到了以上内容，未来就要开始愉快的写博客的日子了，如果再遇到更高级的问题，会新开日志或回到本日志来补充。
