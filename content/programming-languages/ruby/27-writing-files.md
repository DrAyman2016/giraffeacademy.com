---
date: 2017-11-01T00:12:44-04:00
title: "Writing Files"
seo_title: "Writing Files | Ruby | Mike Dane"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos and we'll teach you everything you need to know to start your programming journey!
description: This tutorial covers writing files in Ruby.
author: Mike Dane
image: writing-files.png
video: FW9hDsMY1is
url: /programming-languages/ruby/writing-files/
weight: 27
---

## Code

{{< code lang="rb" >}}
File.open("employees.txt", "r+") do |file|
     file.write("writing some text")
end
{{< /code >}}