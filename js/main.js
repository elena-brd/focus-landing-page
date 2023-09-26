const time = document.getElementById('time');
const greetings = document.getElementById('greetings');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// display time
function getTime() {
    const currentTime = new Date();

    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZeroToTime(minutes)}<span>:</span>${addZeroToTime(seconds)}`

    setTimeout(getTime, 1000)
}

// add zero
function addZeroToTime(number) {
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// background Image
function backgroundImageTime() {
    const timesOfTheDay = new Date();
    const hour = timesOfTheDay.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greetings.textContent = 'Good Morning';

    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greetings.textContent = 'Good Afternoon';

    } else {
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greetings.textContent = 'Good Evening';
        document.body.style.color = '#fff';
    }
}

// user name
function setUserName(e) {
    if (e.type == 'keypress') {
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}

function getUserName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Your Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// focus
function setFocus(e) {
    if (e.type == 'keypress') {
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Your Focus]';
        focus.style.color = '#333'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setUserName);
name.addEventListener('blur', setUserName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


function init() {
    getTime();
    backgroundImageTime();
    getUserName();
    getFocus()
}

init();