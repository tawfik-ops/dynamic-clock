function clock() {
    'use strict';

    const fulldate = new Date();
    var hour=fulldate.getHours();
    var min=fulldate.getMinutes();
    var sec=fulldate.getSeconds();
    
if (hour < 10){
    hour= "0"+hour;
}
    if (min < 10){
        min="0"+min;
    }
    if(sec < 10){
        sec= "0"+sec;
    }
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('minute').innerHTML=": " + min +" :";
    document.getElementById('second').innerHTML= sec;

    
    
    
    }

 setInterval(clock,100);
    
