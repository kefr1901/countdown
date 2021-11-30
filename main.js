const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minElement = document.getElementById('minutes');
const secElement = document.getElementById('seconds');

const newYearsEve = '1 Jan 2023';

function countdown(){
    const newYearsDate = new Date(newYearsEve);
    const currentDate = new Date();
 
    const totalSeconds = (newYearsDate - currentDate ) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60 % 24);
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minElement.innerHTML = formatTime(minutes);
    secElement.innerHTML = formatTime(seconds);
    
}

function formatTime(time){
    //If time is under 10, adding 0 to it, so 9 becomes 09. 
    return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000)
