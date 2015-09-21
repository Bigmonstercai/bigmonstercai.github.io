---
layout: post
title: 利用Python从音乐文件中提取专辑封面
tags : [Python, ID3, Music Album with music albums]
excerpt : 本文探讨利用Python从MP3、M4A等音乐文件中提取出专辑封面图片的方法
---

&emsp;&emsp;使用iTunes管理音乐文件时，我给每张专辑都设置了专辑封面。iTunes把专辑封面图片嵌入到了每一个音频文件中，当我们在资源管理器中以缩略图的形式查看这些文件时，就可以看到每个音频文件显示的都是专辑封面。

![1]({{site.baseurl}}/images/{{ page.url }}/1.png)

&emsp;&emsp;在我突发奇想制作[“来自封面们的封面”](https://github.com/Bigmonstercai/Music-Album-with-music-albums/)这个音乐播放可视化效果时，我需要从这些音频文件中提取出专辑封面，本文将具体探讨利用Python提取专辑封面的方法。

#<a name="MP3">