---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %} 
<code background="blue">{{ tag[0] }}</code>
{% for post in tag[1] %}
[{{ post.title }}]({{ post.url }})
{% endfor %}
{% endfor %}