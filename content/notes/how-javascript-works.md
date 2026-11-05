+++
title = "JavaScript notes"
date = 2024-10-09
description = "How JavaScript Works and its Execution Context"
tags = ["JavaScript","Execution Context","Call Stack","Synchronous","Asynchronous","Single Threaded","Multi Threaded"]
categories = ["JavaScript","Programming"]
[extra]
image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim3XmMyXtIw7xgiECdqHePh2dkJN6LPqcydmj0LDhjY1Gtn-HuqqczqBkiLJC395xn3b5JCnee0uhUjmeeOPtvzJdZzipPRmRCk3SJtwWezplF6szNw6QXjBeO2Ynjv85-rB3m1UJagAbnfKIcvU369M3IU0pYVXIsdn6CVNnTC6gBrGG-SlqB8hqKw4Xp/s16000/09-02-2025+16:45:36.png"
  toc = true
+++

#### How JavaScript Works 
- Everything in JavaScript happen inside an Execution context 
##### Execution context 

|Memory        | code           |
| ------------- |:-------------:|
|Variable Environment | Thread Of Execution|
|Key Value   |Your Programs | 
| a:10 |   Where code line by line Execute     |  
|fn:{...}|| 

`JavaScript Is a Synchronous Single-Threaded Language`

 
Single-Threaded Language - Executed code line by line  
Synchronous Single-Threaded Language - Executed code line by line but at specific order 

##### What happen when You run JavaScript code ?
let take a JavaScript Programs
```JavaScript
1 var n = 2;
2 function square(num) {
3  var ans = num * num;
4  return ans;
4 }
5 var square2 = square(n);
6 var square4 = square(4);
```
When Code is Executed it has two phase

##### 1.Memory Allocation phase
|Memory        | code           |
| ------------- |:-------------:|
|n : undefined | at line 1 |
|square:{store whole code of the function}   | skip 2 to 5|
| square2:undefined |At 6 Function Invocation      |
|square4:undefined ||
In 1st phase of Memory allocation  we were allocating memory to variable and function inside the global space (whole program) and we allocated the memory to variable which is undefined in case of function we totally store whole functions code into the memory 

##### 2.Code Execution phase
|Memory        | code           |
| ------------- |:-------------:|
|n : 2 | at line 1 |
|square:{store whole code of the function}   | skip 2 to 5|
| square2:4 |At 6 Function Invocation      |
|square4:16 ||
In 2nd Phase which is Code Execution Phase Now it executed code line by line and 
it goes to first line allocate value to it variable and 
as control goes to line number 6 ,it'll invoke the function so when you invoke the function Execution context is created and as it is there 1st Memory allocation num and ans is allocated to memeory and 2nd in Code Execution whole function will run here num * num it store into ans and return statement is executed.In return statement we take back the control over at line number 6 and now square2 will store new value which is coming from function invocation which was the ans 


##### What Do you mean by Function Invocation 
It means that function is now begin executed 
```js
var square2 = square(n);
```
Everytime when Function Invoaction there a new Execution Context has been created 

{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim3XmMyXtIw7xgiECdqHePh2dkJN6LPqcydmj0LDhjY1Gtn-HuqqczqBkiLJC395xn3b5JCnee0uhUjmeeOPtvzJdZzipPRmRCk3SJtwWezplF6szNw6QXjBeO2Ynjv85-rB3m1UJagAbnfKIcvU369M3IU0pYVXIsdn6CVNnTC6gBrGG-SlqB8hqKw4Xp/s16000/09-02-2025+16:45:36.png", alt="Screenshot")}}

As soon as you run the code there a global Execution context is created and 

In 1st phase of Memory allocation  we were allocating memory to variable and function inside the global space (whole program) and we allocated the memory to variable which is undefined in case of function we totally store whole functions code into the memory 

Now in 2nd Phase which is Code Execution Phase Now it executed code line by line and 
it goes to first line allocate value to it variable and 

as control goes to line number 6 ,it'll invoke the function so when you invoke the function Execution context is created and as it is there 1st Memory allocation num and ans is allocated to memeory and 2nd in Code Execution whole function will run here num * num it store into ans and return statement is executed.In return statement we take back the control over at line number 6 and now square2 will store new value which is coming from function invocation which was the ans  

##### How javascript Engine handle all this execution context creation,deletion and control 
- It Manages a Call Stack

It is stack where a whole(Global) execution context is pushed inside the stack(GEC). 
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNgv7cIqJ7TynCvJSFwU19lFliThp1fHyFYVxeENPomHa5CJxJFX11lB86MIGmVE70PZZoqDAXhd6QoWR4-YmY-KcNKt7Fu7r8KmEQejYuGo-lPNoqBPUKCwK5HV0BM-uUYu2VBG8TIakNtLMGF7ihXaxwqIaIIx23myQXqhpvg6gJ3nDBMJjuzQbkfN3v/s1600/09-02-2025+21:29:51.png", alt="Screenshot")}}

 when control goes to function invoaction it create new execution context 1. Which is pushed into stack e.g E1 Once we are done with executing function, we return the ans and poped out E1 and 
{{ image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrRsXvWFsJF8diu93CipTdGVnmLRKr5veGckgDcNMHdXdgdg5Hmjomi2tFDid8AqQpqsVy1YGOrwH-QWom5pvwMiphlHJOKM250RMLwHmIcO9-volynANnINnX4CbNphC00gcy_TPLywxMHBmrPastjRhYOjmyw1w0n60AeYPYxEcJZID2DpbN8ivQbnmj/s1600/09-02-2025+21:19:55.png", alt="Screenshot") }}
control goes back to GEC where it left  
then we move on line numeber 7,Where the new function is invoked and new execution context is created e.g E2...
After executing function, we return the ans and poped out E2 and control goes back to GEC where it left

after all code is executed Whole stack become empty
{{image_url(url="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8r4M3GWmCQlsMng-ycQkPZkCoTfMfAejzkoSmQeqgfy2MkTyJ1ffqJfQeGxY5VB2eOT9ncti3uDT_0Ump8MgKNCfWJxJY5MbuesEb3Wfmrydhe7ycIgcqxgUo0lHyOQoHbCpHswsPdL0wFdMeTkoyaIi_hrDBKmYYv7t70DeBbqVZSNOfvO5MlmJiqKvx/s1600/09-02-2025+21:28:08.png", alt="Screenshot")}}

`Call Stack Maintain the order of execution of execution context`

ALt Names of Call Stack 
- 1.call Stack
- 2.Execution Context Stack
- 3.Program Stack
- 4.Runtime Stack
- 5.Machine Stack
#### Synchronous OR Asynchronous
#### Single Threaded OR Multi-Threaded
-


Thank You For Your Time :)
