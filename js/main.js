var audio = new Audio("/music/cwalx-xwwhd.mp3");
audio.play();
$(document).ready(function () 
{
    let day_time = new Date('4/29/2023')
    let  da = new Date()
    var difference= Math.abs(day_time-da)
    day = difference/(1000 * 3600 * 24)
    days = Math.round(day)+1
    console.log(days)
    $("#day").html(days+'天');
    
    audio.play();
})