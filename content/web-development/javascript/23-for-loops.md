---
date: 2017-10-22T11:23:35-04:00
title: "For Loops"
seo_title: "For Loops | Javascript | Mike Dane"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos and we'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers for loops in Javascript.
author: Mike Dane
image: for-loops.png
video: 4H5363dWbK0
url: /web-development/javascript/for-loops/
weight: 23
---

## Code

{{< code lang="js" >}}
for(var i = 0; i < 5; i++){
     document.write(i);
}

var luckyNums = [4, 8, 15, 16, 23, 42];
luckyNums.forEach(function(luckyNum){
     document.write(luckyNum + "<br>");
});
{{< /code >}}