const timer = document.getElementById("timer");

let christmasDate = new Date('Dec, 2025 00:00:01').getTime()

let x = setInterval(() => {

    const currentDate = new Date().getTime();

    let difference = christmasDate - currentDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timer.innerHTML = days + "D " + hours + "HR " + minutes + "M " + seconds + 'S ';

    if(distance < 0){
        clearInterval(x)
        timer,innerHTML = 'EXPIRED';
    }
}, 1000)
console.log(christmasDate)