//do..whileは最低でも1回は実行される
var count: number = 0;
var dice: number;
do{
    dice = Math.floor(Math.random()*6) + 1;
    count++;
}while(dice != 6);
alert(count);

