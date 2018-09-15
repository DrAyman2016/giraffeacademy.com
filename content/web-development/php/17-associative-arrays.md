---
date: 2017-11-15T17:52:37-05:00
title: "Associative Arrays"
seo_title: "Associative Arrays | PHP | Mike Dane"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos and we'll teach you everything you need to know to start your programming journey!
description: This tutorial covers associative arrays in PHP.
author: Mike Dane
image: associative-arrays.png
video: gLjv4gp8IAg
url: /web-development/php/associative-arrays/
weight: 17
---

## Code

{{< code lang="php" >}}
test_grades = {
    "Andy" => "B+",
    "Stanley" => "C",
    "Ryan" => "A",
    3 => 95.2
}
echo  test_grades["Andy"]."<br>";
echo  test_grades["Ryan"]."<br>";
echo  test_grades[3]."<br>";
{{< /code >}}