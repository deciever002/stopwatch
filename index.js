//Set the initial state of seconds and milliseconds in timer
let [seconds,milliseconds] = [0,0];

//Grab the timer minutes and seconds
let timer = document.getElementById("timer");

//Grab all the buttons 
let startTimer = document.getElementById("start");
let stopTimer = document.getElementById("stop");
let resetTimer = document.getElementById("reset");
let interval;

//Add Event Listeners to the buttons
//Start the stopwatch if start button is clicked
startTimer.addEventListener("click",() => {
    console.log("Started the Stopwatch");
    clearInterval(interval);
    interval = setInterval(startWatch,10);
});

//Stop the stopwatch if stop is clicked
stopTimer.addEventListener('click',()=>{
    console.log("Stopwatch Stopped!");
    clearInterval(interval);
});

//Reset the stopwatch back to default or initial values if reset button is clicked
resetTimer.addEventListener('click',() => {
    console.log("Stopwatch Resetted!")
    clearInterval(interval);
    [seconds,milliseconds] = [0,0];
    timer.innerHTML = '00:00';
});

//Set Interval calls the start watch function which starts the stopwatch 
//This function is called after every 10ms unless someone stops or resets the stopwatch
function startWatch(){
    milliseconds++;
    if(milliseconds == 100){
        seconds++;
        milliseconds = 0;
        seconds == 60 ? seconds = 0 : seconds; 
    }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    timer.innerHTML = `${s}:${ms}`;
}