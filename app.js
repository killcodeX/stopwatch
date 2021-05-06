let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let watchDisplay = document.getElementById('watch-display');
let i = 0;
let startStop = 0;
// setInterval
let interval1;


// common function

function start (){
    interval1 = setInterval(counter,1000)
}

function stop (){
    clearInterval(interval1)
}

function counter(){
    i = i + 1;
    watchDisplay.innerHTML = i;
}


//eventListner
startBtn.addEventListener('click', function(){
    start()
})

stopBtn.addEventListener('click', function(){
    if(startStop == 0){
        stop()
        stopBtn.innerHTML = 'Resume'
        startStop = 1;
    }else if(startStop == 1){
        stopBtn.innerHTML = 'Stop'
        startStop = 0;
        start()
    }
    console.log('value of startStop', stopBtn.textContent)
    console.log('value of startStop', startStop)
})

resetBtn.addEventListener('click', function(){
    i = 0;
    watchDisplay.innerHTML = 0;
})
