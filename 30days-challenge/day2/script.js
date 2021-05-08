const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');

function checkTransition(obj, value) {
    if(value == 0) {
        obj.classList.add('notransition');
    } else {
        if(obj.classList.contains('notransition')) {
            obj.classList.remove('notransition');
        }
    }
}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    checkTransition(secondHand, seconds);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegrees = (((minutes / 60) * 360) + 90) + ((seconds *6)) / 60;
    checkTransition(minuteHand, minutes);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = (((hours / 12) * 360) + 90) + ((minutes * 30) / 60);
    checkTransition(hourHand, hours);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate, 1000);