---
date: 2017-11-07T01:21:26-05:00
title: "Methods"
seo_title: "Methods | C++ | Mike Dane"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos and we'll teach you everything you need to know to start your programming journey!
description: This tutorial covers methods in C++.
author: Mike Dane
image: methods.png
video: eG_4onafcgc
url: /programming-languages/c++/methods/
weight: 14
---

## Code

{{< code lang="cpp" >}}

int addNumbers(int num1, int num2);

int main()
{
     int sum = addNumbers(4, 60);
     cout << sum << endl;

     return 0;
}

int addNumbers(int num1, int num2){
     return num1 + num2;
}
{{< /code >}}