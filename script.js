const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
let audio = new Audio('start-bell.wav');
let alreadyStarted = false;
let pause = false;
let recall;
let currentChoose = 25;

const totalTime = Number.parseInt(minutes.textContent);   //transforming the '25' string into 25 number
let sec = 0;  
let min = 0;                                     //seconds start from 0

let totalSeconds = totalTime * 60;               //transform minutes in seconds by multiplying with 60

function decreaseSeconds() {
    if(pause == false) {

        totalSeconds --;                         //decreasing first so the timing starts correctly from 24:59

        min = Math.floor(totalSeconds / 60);     //find out the number of minutes
        if(min < 10) {
            minutes.innerText = "0" + min;
        } else {
            minutes.innerText = min;             //show the number of minutes on the timer
        }
    
        sec = totalSeconds % 60;                 //find out the number of seconds
        if(sec < 10) {
            seconds.innerText = "0" + sec;
        } else {
            seconds.innerText = sec;             //show the number of seconds on the timer
        }

        if ((min == 0) && (sec == 0)) {
            audio.play();
            clearInterval(recall);
        }
    } 

}

function startApp() {
    if(alreadyStarted == false) {
        recall = setInterval(decreaseSeconds, 1000);      //the function 'decreaseSeconds' is called every 1 second
        alreadyStarted = true;
        } 
    pause = false;
    }

function pauseApp() {
    if(pause == false) {
        pause = true;
    } else {
        pause = false;
    }
}

function resetApp() {
    clearInterval(recall);
    alreadyStarted = false;
    seconds.innerText = "00";
    if(currentChoose == 25)
        minutes.innerText = "25";
    else if(currentChoose == 10) 
        minutes.innerText = "10";
    else if(currentChoose == 15)
        minutes.innerText = "15";
    const totalTime = Number.parseInt(minutes.textContent);
    totalSeconds = totalTime * 60;
    pause = false;
}

function chooseTime(time) {
    clearInterval(recall);
    alreadyStarted = false;
    seconds.innerText = "00";
    if(time == 25){
        minutes.innerText = "25";
        currentChoose = 25;
    }
    else if(time == 10) {
        minutes.innerText = "10";
        currentChoose = 10;
    }
    else if(time == 15) {
        minutes.innerText = "15";
        currentChoose = 15;
    }
    const totalTime = Number.parseInt(minutes.textContent);
    totalSeconds = totalTime * 60;
    pause = false;
}



    
