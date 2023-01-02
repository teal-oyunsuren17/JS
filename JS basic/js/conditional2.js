const date = new Date()
const time = date.getHours()

console.log(time)


/**
 * let username = prompt('What is your name')
 * if( time <=12) {
    console.log(alert(username + " " + 'good morning'))
} else if ( time<=18) {
    console.log(alert(username + " " + 'good afternoon'))
} else {
    console.log(alert(username + " " + 'good night'))
}
 */

    let text;
    let username = prompt("What's your name" );
    if( time <=12) {
        console.log(username + " " + 'good morning')
    } else if ( time<=18) {
        console.log(username + " " + 'good afternoon')
        text = username + " " + 'good afternoon'
    } else {
        console.log(username + " " + 'good night')
    }
    document.getElementById("demo").innerHTML = text;


    