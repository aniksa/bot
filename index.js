const Telegraf = require('telegraf');
process.env.BOT_TOKEN = '774004691:AAEVLPBiObOIuohqFaH5oz-8GBn10uywITM';
const bot = new Telegraf(process.env.BOT_TOKEN);

//bot.command('start', ctx=>console.table(ctx.message.from));
bot.command('start', ctx=>ctx.reply('Hi, '+ctx.message.from.first_name+', \n/eq a b c - находит корни квадратного уравнения ax^2+bx+c=0' + ' (пример: /eq 1 2 3) '+ '\n /sap a1 an n - находит сумму арифметической прогрессии, \n а1 - первый член, аn - n-тый, n - кол-во членов'));
bot.use(Telegraf.log());
let a = 2;
let b = 3;
let c = 4;
let f = 2;
let g = 8;
let t = 4;
function solveEq(a,b,c){
  //return {
  //  "x1":(-b+Math.pow(Math.pow(b,2)-4*a*c,0.5))/(2*a),
   // "x2":(-b-Math.pow(Math.pow(b,2)-4*a*c,0.5))/(2*a)
    //};
    
    
    if(a==0&&b==0&&c==0){
      return {
    "x1":" ",
    "x2":"х - любое"
    };
    }
    if(a==0&&b==0){
      return {
    "x1":"There are no",
    "x2":"roots"
    };
    }
    if(a==0){
      return {
    "x1":' ',
    "x2":c/b
    };
    }
    let d =Math.pow(b,2)-4*a*c;
    if(d>=0){
     return {
    "x1":(-b+Math.pow(d,0.5))/(2*a),
    "x2":(-b-Math.pow(d,0.5))/(2*a)
    };
    }
    else{return {
    "x1":"There are no",
    "x2":"roots"
    };}
    
}
bot.command('eq', ctx=>
{
  let e =ctx.message.text.split(' ');
  console.log(e);
  let result = solveEq(Number(e[1]),Number(e[2]),Number(e[3]));
  ctx.reply(' '+result.x1+' '+result.x2)
});
function solveSap(f,g,t){
return ((f+g)/2)*t;
}
bot.command('sap', ctx=>
{
  let s =ctx.message.text.split(' ');
  console.log(s);

ctx.reply(' '+solveSap(Number(s[1]),Number(s[2]),Number(s[3])));
});
function solveSap2(a1,d,n){
return ((2*a1+d*(n-1))/2)*n;
}
bot.command('sap2', ctx=>
{
  let s =ctx.message.text.split(' ');
  console.log(s);

ctx.reply(' '+solveSap2(Number(s[1]),Number(s[2]),Number(s[3])));
});
function solveSap3(a1,a2,n){
  console.log(a2-a1);
return ((2*a1+(a2-a1)*(n-1))/2)*n;
}
bot.command('sap3', ctx=>
{
  let s =ctx.message.text.split(' ');
  console.log(s);

ctx.reply(' '+solveSap3(Number(s[1]),Number(s[2]),Number(s[3])));
});
bot.launch();


