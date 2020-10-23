var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var help = document.getElementById("help")


var wm = document.getElementById("w_minutes");
var ws = document.getElementById("w_seconds");

var bm = document.getElementById("b_minutes");
var bs = document.getElementById("b_seconds");

var startTimer;

start.addEventListener('click', function(){
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert("The timer is already running, get back to work!")
    }
})

reset.addEventListener("click", function() {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
})

stop.addEventListener('click',function() {
    stopInterval();
    startTimer = undefined;
})

help.addEventListener('click',function () {
    helpAlert();
})

function helpAlert() {
    alert(`HOW TO USE POMODORO :

1. Choose a task you'd like to get done
2. Start the pomodoro timer by clicking the start button
3. Work on the task for 25 minutes
4. Take a short break for 5 minutes
5. Now repeat the cycle at least four times a day and get productive!`);
}

function timer() {
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById("counter").innerText++;
    }

    if (wm.innerText == 0 && ws.innerText == 10 || bm.innerText == 0 && bs.innerText == 10) {
        var tau = document.getElementById("timerAudio")
        tau.play(); 
    }
    
    if(ws.innerText.length < 2 || bs.innerText.length < 2) {
        ws.innerText = ("00" + ws.innerText).substr(-2);
        bs.innerText = ("00" + bs.innerText).substr(-2);
    }
}

function stopInterval() {
    clearInterval(startTimer);
}

