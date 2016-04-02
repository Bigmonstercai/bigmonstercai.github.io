---
layout: post
title: 恢复混乱的iBooks数据库
tags : [Mac, OS X, SQL, Python]
excerpt : 更新10.11.4后iBooks数据库混乱了，如果你有TimeMachine备份，可以使用我的脚本恢复
---

之前过年时我在iBooks中把所有PDF和电子书都导入了iBooks，并把书名、作者信息和类别都整理好了。OS X10.11.4 的更新带来了iBooks可以同步PDF的功能，但是我却发现我所有图书的信息也随之全部丢失了。好在我一直都在使用TimeMachine进行备份，因此理论上讲完全可以恢复回来。
经过查找，我发现iBooks把所有图书都存在了`/Users/用户名/Library/Containers/com.apple.BKAgentService/Data/Documents/iBooks/Books`这个位置，同时这个文件夹里还有个`books.plist`，里面有所有图书的信息，但是直接修改这个信息好像并没有什么变化。
之后我又找到了`/Users/用户名/Library/Containers/com.apple.iBooksX/Data/Documents`这个文件夹，其中`BKLibrary`文件夹内的数据库有着更为全面的图书信息，而`BKSeriesDatabase`文件夹里的数据库记录着图书的文集信息（貌似可以像文件夹一样把一套书归到一起，目前我还没用过这个功能），直接修改`BKLibrary`文件夹内的数据库相关的键值，再重启iBooks，发现图书信息也发生了相应的变化。因此只要把这个数据库的内容恢复就好了。但是我发现直接把原数据库文件覆盖过来好像也起不到效果，估计是某些键值发生了变化导致通不过校验，因此最好的办法就是只把需要的键值从原数据库中复制过去，其他键值都不要改动。
把以下代码保存成.py文件，将对应的路径修改好，在终端中使用Python运行即可完成原数据库向现数据库复制的工作。其中ZFILESIZE是图书文件的大小，ZPAGECOUNT为图书文件的页数，ZAUTHOR就是作者信息，ZCOLLECTIONID为精选集信息，ZGENRE为类别信息，ZASSETID为图书文件的编号（这个编号貌似是根据图书文件唯一确定的，因此两个数据库中这个信息是一致的，可以用于检索），ZTITLE则是图书的名称，可以根据个人需求适当增减需要修改的键值，注意execute语句中不要遗漏%s两侧的双引号即可。

```Python
#!usr/bin/python
# -*- coding:utf-8 -*-

import sqlite3

conn0319 = sqlite3.connect('BKLibrary0319/BKLibrary-1-091020131601.sqlite')		# 从TimeMachine中恢复的数据库，改为自己保存的地址
conn = sqlite3.connect('/Users/用户名/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite')		# 现在的数据库，把“用户名”改为自己的用户名
cursor = conn0319.execute("SELECT ZFILESIZE, ZPAGECOUNT, ZAUTHOR, ZCOLLECTIONID, ZGENRE, ZASSETID, ZTITLE from ZBKLIBRARYASSET")
i = 1
for row in cursor:
	try:
		conn.execute('UPDATE ZBKLIBRARYASSET set ZFILESIZE=%d, ZPAGECOUNT=%d, ZAUTHOR="%s", ZCOLLECTIONID="%s", ZGENRE="%s" where ZASSETID="%s"'%(row[0], row[1], row[2], row[3], row[4], row[5]))
		print i,'.\t',row[6], "updated\n"
	except sqlite3.OperationalError as e:
		print i,'.\tERROR:',e, row[6]
	i+=1
conn.commit()
```


