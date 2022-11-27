let clock = document.getElementById('clock');

setInterval(() => {
    showTime();
}, 1000);

showTime=()=>{
    let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    let am_pm="AM";
    if(hour>12){
        am_pm="PM";
        hour=hour-12;
    }
    if(hour==12){
        am_pm="PM";
    }
    if(hour==00){
        hour=12;
        am_pm="AM";
    }
    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    clock.innerHTML=`${hour}:${min}:${sec} ${am_pm}`;
}
showTime();