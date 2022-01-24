//
var c:string, h:number, d:Date;
d = new Date();
h = d.getHours();

if(h < 12){
    c="skyblue";
}else{
    c="lightyellow";
}
document.body.style.backgroundColor=c;
//
var c,t:string;
var h:number, d:Date;

d=new Date();
h=d.getHours();
if(h<12){
    t="午前のページ";
    c="skyblue";
}else{
    t="午後のページ";
    c="lightblue";
}
document.title=t;
document.body.style.backgroundColor=c;

//
var c:string;
var h:number,d:Date;
d = new Date();
h = d.getHours();
c="lightyellow";

if(h>12) c="skyblue";
document.body.style.backgroundColor=c;

//
var message:string;
var age,sex:number;
enum SEX {MALE, FEMALE};
sex = SEX.FEMALE;
age = 17;

if(sex==SEX.FEMALE){
    if(age >= 18){
        message="結婚できます";
    }else{
        message="まだ結婚できません。";
    }
}else{ //男
    if(age >= 16){
        message="けっこんできます";
    }else{
        message="まだけっこんできません"
    }
}

alert(message);


//
var rank: string[] = ["不可", "可", "良", "優"];
var score,rnum: number;
score=75;

if(score < 60){
    rnum = 0;
}else if(score < 70){
    rnum = 1;
}else if(score < 80){
    rnum = 2;
}else{
    rnum = 3;
}

alert("あなたの成績は" + rank[rnum] + "です。");

//

//output list
var rank:string[] = ["不可", "可", "良", "優"];

//input
var score_data = document.createElement('input');
var rank_text = document.createElement('div');

//内部
var score,rnum: number;

score_data.type = "number"; //入力ボックスを数値専用に
score_data.addEventListener("keydown", showText, false); //キーを押したらshowText関数を実行
document.body.appendChild(score_data); //ドキュメントの本文に入力ボックスを追加
document.body.appendChild(rank_text); //ドキュメント本文にテキストを追加

//show text function
function showText(){
    if(event.keyCode == 13 || event.keyCode == 9){ //input Enter or Tab
        var s: number = score_data.valueAsNumber; //入力ボックスから数値取得
        if(s < 60){
            rnum = 0;
        }else if(s < 70){
            rnum = 1;
        }else if(s < 80){
            rnum = 2;
        }else{
            rnum = 3;
        }
        rank_text.innerText = rank[rnum]; //成績を表示
    }
}


//
var pos: number;
var str: string = "hoge";

pos = str.indexOf("ge");
alert(pos);

//
var pos: number;
var str: string = "hoge";

if(str.indexOf("ge") != -1) alert("pos");

//
//Switch文

var fortune: string;
var n: number;

n = Math.floor(Math.random()*7); //0～6までの整数の乱数

switch(n){
    case 0:
        fortune="大吉";
    case 1:
        fortune="中吉";
        break;
    case 2:
        fortune="小吉";
        break;
    case 3:
    case 4:
        fortune="凶";
        break;
    case 5:
    default:
        fortune="大凶";
}
alert(n+":"+fortune);

//?演算子
var discount: number;
var price: number = 1000;
var rank: string = "gold";

discount = (rank == "gold" ? price * 0.2 : price * 0.1);
alert(discount);