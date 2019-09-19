function isLeapYear(year) {
    if (year % 100 == 0) {
        return (year % 400 == 0)
    } else {
        return (year % 100 == 0)
    }
}

function getLevel(percentage) {
    if (percentage <= 60) {
        return "success";
    } else if (percentage <= 90) {
        return "warning";
    } else {
        return "danger"
    }
}

function addLeftZero(num) {
    return num.toString().padStart(2, "0");
}

function getComplicatedTimeBySeconds(seconds) {
    var temp = seconds;
    let fSecond = Math.floor(temp % 60);
    temp = Math.floor(temp / 60);
    let fMinute = temp % 60;
    temp = Math.floor(temp / 60);
    let fHour = temp % 24;
    temp = Math.floor(temp / 24);
    let fDay = temp;
    return `${fDay}day, ${fHour}hour, ${fMinute}minute, ${fSecond}second.`;
}

function calculate(currentTimeSpan, pastTimeSpan, remainingTimeSpan, bar) {
    // get current time
    let now = new Date();

    // format it
    let year = now.getFullYear();
    let month = addLeftZero(now.getMonth() + 1);
    let day = addLeftZero(now.getDate());
    let hour = addLeftZero(now.getHours());
    let minute = addLeftZero(now.getMinutes());
    let second = addLeftZero(now.getSeconds());

    // get begin and end of this year
    let beginOfThisYear = new Date(year + "/01/01 00:00:00");
    let endOfThisYear = new Date((year + 1) + "/01/01 00:00:00");

    // do some calculate
    let totalSeconds = parseInt((endOfThisYear - beginOfThisYear) / 1000);

    let pastSeconds = parseInt((now - beginOfThisYear) / 1000);
    let pastTime = getComplicatedTimeBySeconds(pastSeconds);

    let remainingSeconds = endOfThisYear / 1000 - Math.floor(now / 1000);
    let remainingTime = getComplicatedTimeBySeconds(remainingSeconds);

    let percentage = Math.floor(100 * (pastSeconds / totalSeconds));
    let level = getLevel(percentage);

    let barClassName = "bar striped " + level + " w-" + percentage;
    let barInnerText = percentage + "%";

    // change text
    currentTimeSpan.innerText = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    pastTimeSpan.innerText = pastTime;
    remainingTimeSpan.innerText = remainingTime;
    if (bar.className != barClassName) {
        bar.className = barClassName;
    }
    if (bar.innerText != barInnerText) {
        bar.innerText = barInnerText
    }

    var initialized = localStorage.getItem("initialized");
    if (initialized==='false') {
        initialized = true;
        localStorage.setItem("initialized", initialized);
        var quote = document.querySelector("div#quote");
        var div = document.createElement('div');
        div.innerHTML = '<h3 class="opacity">Time flies like an arrow.</h3>'
        var node1 = div.firstChild;
        div.innerHTML = '<img class="slidein" src="img/arrow.png" alt="Arrow"></img>'
        var node2 = div.firstChild;
        quote.appendChild(node1);
        quote.appendChild(node2);
        console.log("Added classname.")
    }
}

function run() {
    // get elements
    let currentTimeSpan = document.getElementById("currentTime");
    let pastTimeSpan = document.getElementById("pastTime");
    let remainingTimeSpan = document.getElementById("remainingTime");
    let bar = document.getElementById("bar");
    let timezoneSpan = document.getElementById("tz");
    timezoneSpan.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;

    localStorage.setItem("initialized", false);
    setInterval(function () {
        calculate(currentTimeSpan, pastTimeSpan, remainingTimeSpan, bar)
    }, 1000);
}

run();