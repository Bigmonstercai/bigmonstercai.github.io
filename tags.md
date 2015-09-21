---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %} 
<code><a name={{ tag[0] }}>{{ tag[0] }}</a></code>
{% for post in tag[1] %}
[{{ post.title }}]({{ post.url }})
{% endfor %}
{% endfor %}