window.onload=init;

let canvas;
let ctx;
let x=100;
let y=300;

let w=200;
let h=100;

let r=20;
let dx=5;
let dy=-5;
let score = 0;
let barx=460;
let bary=20;
let barw=20;
let barh=100;


function init(){
    let  btn = document.querySelector("#btnname");
    btn.addEventListener("click",showinfo);

    canvas = document.querySelector("#mycanvas")
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousemove",mouseTrack);


    // draw();
    // drawCar();
    drawBall();
    setInterval(drawgame,17);//1000 ms= 1s
}
function mouseTrack(e){
    bary = e.clientY - canvas.offsetTop - (barh/2);
}


function drawgame(){
    drawBall();
    drawBar();
}
function drawBar(){ 
    ctx.beginPath();
    ctx.rect(barx,bary,barw,barh);
    ctx.closePath();
    ctx.fillStyle="blue";
    ctx.fill();


}

function resetGame(){

    x=100;
    y=300;
    score=0;
    r=20;
    barh=100;


}

function drawBall(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.arc(x,y,r,2*Math.PI,false);
    ctx.closePath();
    ctx.fillStyle="red";
    ctx.fill();


    if(x+r >canvas.width )
    {
        alert("you lose-game over-your score:"+score);
        resetGame();
    }
        
    if(x-r <0)
        dx=dx*-1;


    if(y-r<0)
        dy=dy*-1;
       
    if(y+r >canvas.height )
        dy=dy * -1;//agar + te manfish kon agar manfie mosbatesh kon

  
    if(x+r >barx )
        {
         if(y>bary && y<bary+barh)
         {
            dx=dx * -1;
            score++;
            r=r-2*0.9; //change the ball size:
            // dx=dx*1.1;//change ball speed:
            barh = barh * 0.9;

         } 
            
        }

    y+=dy;
    x+=dx;

    document.querySelector("#gamescore").innerHTML=score;

}

///////////////az inja moraba shoro mishe
function drawCar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ///badane mashin
    ctx.beginPath();
    ctx.fillStyle="blue";
    x+=100;
    

    ctx.fillRect(x,y,w,h);
    ctx.closePath();

    //tayer samte chap
    ctx.beginPath();
    ctx.arc(x+30,y+h,20,2* Math.PI,false);
    ctx.fillStyle="black";
    ctx.fill();

    //tayer samte rast
    ctx.beginPath();
    ctx.arc(x+w-30,y+h,20,2* Math.PI,false);
    ctx.fillStyle="black";
    ctx.fill();
    

    
}



function draw(){

/*
    ctx.beginPath();
    ctx.fillStyle= "red";//range dakhele moraba
    ctx.strokeStyle="black";//range hashie
    ctx.lineWidth=10;
   //ctx.fillRect(100,100,300,300)//(x.y.w.h)
    //ctx.strokeRect(100,100,300,300);
    ctx.rect(0,0,500,160);//chahar goosh mikeshe
    ctx.fill();// poresh mikone
    ctx.stroke();//khato doresh mikeshe
    ctx.closePath();

///////////////////////////////////////
    ctx.beginPath();
    ctx.fillStyle= "blue";//range dakhele moraba
    ctx.strokeStyle="black";//range hashie
    ctx.lineWidth=10;
   //ctx.fillRect(100,100,300,300)//(x.y.h.w)
    //ctx.strokeRect(100,100,300,300);
    ctx.rect(0,500-160,500,160);//chahar goosh mikeshe
    ctx.fill();// poresh mikone
    ctx.stroke();//khato doresh mikeshe
    ctx.closePath();
*/

    // ctx.arc(250,250,100,0,2*Math.PI,false);
    // ctx.fillStyle="red";
    // ctx.fill();
///////////////////mosalas////////////////////////////
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,100);
ctx.lineTo(200,200);

ctx.closePath();

ctx.lineWidth = 5;
ctx.strokeStyle="black";

ctx.fillStyle ="green";
ctx.fill();
ctx.stroke();


 
}
function showinfo(){
    let inptxt = document.querySelector("#txtusername");
    let title = document.querySelector("#txttilttle");
    title.innerHTML="welcome " + inptxt.value;
    
    let box = document.querySelector("#container");
    let helement = document.createElement("h2");
    helement.innerHTML = "your score is : 0";
    box.appendChild(helement);

    let aelement = document.createElement("a");
    aelement.innerHTML="click here";
    aelement.href="https://www.google.com";
    box.appendChild(aelement);


    inptxt.value="";

}



