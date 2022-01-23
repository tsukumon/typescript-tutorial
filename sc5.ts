var c:string, h:number, d:Date;
d = new Date();
h = d.getHours();

if(h < 12){
    c="skyblue";
}else{
    c="lightyellow";
}
document.body.style.backgroundColor=c;

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
