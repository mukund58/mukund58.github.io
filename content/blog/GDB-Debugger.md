+++
title = "How to debug Your code"
date = 2024-10-24 
description = "How to debug Your code using GDB debugger"
[taxonomies]
tags = ["gdb","debugger","c++","programming"]
categories = ["programming","tools"]

[extra]
image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_YqCCDkmkV2jWyCSwwCsyjEtuNknGjtYEUhGAp5eqwQhgOHjDb3khwg1rzL9Jn4WNR5ljFoTYha4wzNl5tt4m8tn1T_1cG7CEyMOcD5pyOz-ZaUUkGBwXoD380GunlviJTw_loMAuQ2Z8jxNxuHp_Dpp-SmzouKJGmyaBFUFHq7bvNomCu6cucCZBSm19/s1366/pic-full-240910-1913-48.png"
toc = true 
in_search_index = true
+++

When your code is running but not working at that time we mostly check line by line code it cant find any clue.

The best way to check your code line by line and what code acutally do internally, when you run the code.

so anyway let's start by installing GDB debugger in computer .

To install on Ubuntu 
```
sudo apt install gdb
```
To install on arch 
```
sudo pacman -S gdb
```
To download on Your Machine 
`https://sourceware.org/gdb/download/`

You can also use it online `https://www.onlinegdb.com/`


How to run GDB

- Run Your complier
```
$ g++ -g program
```
- Run Your gdb
```
$ gdb a.out
```
you will get output something like 

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1MRdJ05GegnQsLcDMAANqWMjfdqUodUt60DdytAogc20kgN_if3b5-E31D1XxdkA3HgeOcdHhebmnvLCdc4T-YZE9RuqhnMokxGt0adIE6cBU2W1MUbtXJ3Bh-5E1mM7z1LN1DlBH5gPYQZSquW5IFFd3v02gL3AWUmNw_DBnO4uTi1PFKazy2OXs4gpY/s1062/pic-selected-240910-1852-15.png", alt="Screenshot")}}

Start Your gdb with start command
```
start 
```
Now Press ctrl + x + a
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_YqCCDkmkV2jWyCSwwCsyjEtuNknGjtYEUhGAp5eqwQhgOHjDb3khwg1rzL9Jn4WNR5ljFoTYha4wzNl5tt4m8tn1T_1cG7CEyMOcD5pyOz-ZaUUkGBwXoD380GunlviJTw_loMAuQ2Z8jxNxuHp_Dpp-SmzouKJGmyaBFUFHq7bvNomCu6cucCZBSm19/s1366/pic-full-240910-1913-48.png", alt="Screenshot")
}}
Now for go to next line 
```
next
```
it go two second line
```
next
```
if your ui is not lagging than press `ctrl + l` to refresh the ui

To check store data in variable

```
print var_name
```
or

```
info locals
```

To Go Function defination when debgger reach to that line
```
step 
```

To exit 
```
exit
```

Hope you get basic idea who to use this software 

I know that i did not teach everything ,so
To know more You can refere any Documenation or cheatsheet

If i get sometime than i may continue this blog to the end and I will teach everything


Thank You For Your Time :)
