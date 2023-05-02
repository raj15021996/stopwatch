var hr=0;
var min=0;
var sec=0;
var count=0;
var mili=document.getElementById("milisec");

var timer=false;
console.log(mili)

function start(){
 timer=true;
 stopWatch();
console.log("start")
}

function stop(){
timer=false;
console.log("stop")

}
function reset(){
    console.log("reset")
    timer=false;
    count=0;
    sec=0;
    min=0;
    hr=0;
    mili.innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
}
function stopWatch(){
if(timer==true){
    count=count+1;
    if(count==100){
        sec=sec+1;
        count=0
        if(sec == 60){
            min=min+1;
            sec=0;
            if(min==60){
                hr=hr+1;
                min=0;
            }
        }
    }

   mili.innerHTML=(count<10? "0"+count : count);
   document.getElementById("seconds").innerHTML=sec<10 ? "0"+sec : sec;
   document.getElementById("minutes").innerHTML=min<10 ? "0"+min : min;
   document.getElementById("hour").innerHTML=hr<10? "0"+hr : hr;
   
   setTimeout("stopWatch()",10)
    
}
}