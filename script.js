let buttonclick1=document.querySelectorAll(".btn")[0];
let buttonclick2=document.querySelectorAll(".btn")[1];
let buttonclick3=document.querySelectorAll(".btn")[2];
resultMatch=document.querySelector(".result h1");
//console.log(resultMatch);
//console.log(buttonclick1);
let no1=1;
let no2=2;
let no3=3;
const pic1="image/pic"+no1+".png";
const pic2="image/pic"+no2+".png";
const pic3="image/pic"+no3+".png";
let player1=document.querySelector(".pic1");
//console.log(player1);
let player2=document.querySelector(".pic2");
let isplaying=false;
buttonclick1.addEventListener("click",()=>{
    if(!isplaying){
        isplaying=true;
        setTimeout(()=>{
            player1.classList.add("add");
            player2.classList.add("add");
            var audio=new Audio("audio/game.mpeg");
            audio.play();
        },.1);
        setTimeout(()=>{
            player1.classList.remove("add");
            player2.classList.remove("add");
        },4000);
        setTimeout(()=>{
           let randompic=Math.floor(Math.random()*3)+1;
           let picsource="image/"+"pic"+randompic+".png";
           player1.setAttribute("src",pic1);
           player2.setAttribute("src",picsource);
           if(no1===randompic){
            resultMatch.innerHTML="Match Draw";
           }
           else if(no2===randompic){
            resultMatch.innerHTML="Computer Won";
           }
           else{
            resultMatch.innerHTML="You Won";
           }
        },4000);
        setTimeout(()=>{
            player1.setAttribute("src",pic1);
           player2.setAttribute("src",pic1);
           resultMatch.innerHTML="Play Again";
           isplaying=false;
        },6000);
    }
});
buttonclick2.addEventListener("click",()=>{
    if(!isplaying){
        isplaying=true;
        setTimeout(()=>{
            player1.classList.add("add");
            player2.classList.add("add");
            var audio=new Audio("audio/game.mpeg");
            audio.play();
        },.1);
        setTimeout(()=>{
            player1.classList.remove("add");
            player2.classList.remove("add");
        },4000);
        setTimeout(()=>{
           let randompic=Math.floor(Math.random()*3)+1;
           let picsource="image/"+"pic"+randompic+".png";
           player1.setAttribute("src",pic2);
           player2.setAttribute("src",picsource);
           if(no2===randompic){
            resultMatch.innerHTML="Match Draw";
           }
           else if(no3===randompic){
            resultMatch.innerHTML="Computer Won";
           }
           else{
            resultMatch.innerHTML="You Won";
           }
        },4000);
        setTimeout(()=>{
            player1.setAttribute("src",pic1);
           player2.setAttribute("src",pic1);
           resultMatch.innerHTML="Play Again";
           isplaying=false;
        },6000);
    }
});
buttonclick3.addEventListener("click",()=>{
    if(!isplaying){
        isplaying=true;
        setTimeout(()=>{
            player1.classList.add("add");
            player2.classList.add("add");
            var audio=new Audio("audio/game.mpeg");
            audio.play();
        },.1);
        setTimeout(()=>{
            player1.classList.remove("add");
            player2.classList.remove("add");
        },4000);
        setTimeout(()=>{
           let randompic=Math.floor(Math.random()*3)+1;
           let picsource="image/"+"pic"+randompic+".png";
           player1.setAttribute("src",pic3);
           player2.setAttribute("src",picsource);
           if(no3===randompic){
            resultMatch.innerHTML="Match Draw";
           }
           else if(no1===randompic){
            resultMatch.innerHTML="Computer Won";
           }
           else{
            resultMatch.innerHTML="You Won";
           }
        },4000);
        setTimeout(()=>{
            player1.setAttribute("src",pic1);
           player2.setAttribute("src",pic1);
           resultMatch.innerHTML="Play Again";
           isplaying=false;
        },6000);
    }
});

