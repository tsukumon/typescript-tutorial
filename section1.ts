//
var x,kib:number;
x = 2;
kib = Math.pow(x,10);
alert(kib);

//演算子の結合方向
var a,b:number;
b = 10;
a = b += 2; 
alert("aの値は" + a + "\nbの値は" + b);

//
var a,b,c:number;
b = 30;
c = 2;
a = b/c * 3;
alert("aの値は" + a);

//インクリメントとデクリメント
var count:number = 0;
alert(++count);

var count:number = 0;
alert(count++);

var count:number = 0;
count++;
alert(count);

var max:number = 10;
alert(--max);

//カンマ演算子
var a:number = 10, b:number = 20;
var c;
c = (a + 1, b, 30);
alert(c);

//
var age:number;
age = 23;
if(age>= 18 && age < 25){
    alert('範囲内です');
}

//
var x:number = 10;
var y;
y = x++;
alert(y);