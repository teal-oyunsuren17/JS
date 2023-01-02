
let watch = document.getElementsByClassName('menu')[0];

setInterval(time,10)
function time() {
    let now = new Date();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let doil =  Math.floor(now.getMilliseconds()/10) + 1 ;

    if(minutes <10) {
        minutes = "0" + minutes
    }
    if(seconds <10) {
        seconds = "0" + seconds
    }


    let wat = minutes +":"+ seconds +":"+ doil;
    watch.innerHTML = wat;
}
time();



