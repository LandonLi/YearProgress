function isLeapYear(year) {
    if (year % 100 == 0) {
        return (year % 400 == 0);
    } else {
        return (year % 100 == 0);
    }
}

function getLevel(percentage) {
    if (percentage <= 60) {
        return "success";
    } else if (percentage <= 90) {
        return "warning";
    } else {
        return "danger";
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
    // 初始化动画节点
    var counter = parseInt(localStorage.getItem("counter"));
    if (counter++ === 0) {
        var quote = document.querySelector("div#quote");
        var div = document.createElement('div');
        div.innerHTML = '<h3 class="opacity">Time flies like an arrow.</h3>';
        var node1 = div.firstChild;
        div.innerHTML = '<img class="slidein" src="img/arrow.png" alt="Arrow"></img>';
        var node2 = div.firstChild;
        quote.appendChild(node1);
        quote.appendChild(node2);
    }

    // 获取当前时间
    let now = new Date();

    // 格式化
    let year = now.getFullYear();
    let month = addLeftZero(now.getMonth() + 1);
    let day = addLeftZero(now.getDate());
    let hour = addLeftZero(now.getHours());
    let minute = addLeftZero(now.getMinutes());
    let second = addLeftZero(now.getSeconds());

    // 获取年初、年末时间
    let beginOfThisYear = new Date(year + "/01/01 00:00:00");
    let endOfThisYear = new Date((year + 1) + "/01/01 00:00:00");

    // 做一些计算
    let totalSeconds = parseInt((endOfThisYear - beginOfThisYear) / 1000);

    let pastSeconds = parseInt((now - beginOfThisYear) / 1000);
    let pastTime = getComplicatedTimeBySeconds(pastSeconds);

    let remainingSeconds = endOfThisYear / 1000 - Math.floor(now / 1000);
    let remainingTime = getComplicatedTimeBySeconds(remainingSeconds);

    // 更改时间相关标签文字
    currentTimeSpan.innerText = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    pastTimeSpan.innerText = pastTime;
    remainingTimeSpan.innerText = remainingTime;

    currentTimeSpan.innerText = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    pastTimeSpan.innerText = pastTime;
    remainingTimeSpan.innerText = remainingTime;

    if (counter == 1) {
        let percentage = Math.floor(100 * (pastSeconds / totalSeconds));
        let loopTime = Math.floor(percentage / 10) + 1;
        let percentageList = [...Array(loopTime).keys()].map(i => i * 10);
        if (percentageList[percentageList.length - 1] < percentage) {
            percentageList.push(percentage);
        }
        
        for (let i = 0; i < percentageList.length; i++) {
            let currentPercentage = percentageList[i];
            let level = getLevel(currentPercentage);
            let barClassName = "bar striped " + level + " w-" + currentPercentage;
            let barInnerText = currentPercentage + "%";

            setTimeout(function () {
                if (bar.className != barClassName) {
                    bar.className = barClassName;
                }
                if (bar.innerText != barInnerText) {
                    bar.innerText = barInnerText;
                }
            }, 150 * i);
        }

        localStorage.setItem("counter", counter);
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

    localStorage.setItem("counter", 0);
    setInterval(function () {
        calculate(currentTimeSpan, pastTimeSpan, remainingTimeSpan, bar);
    }, 1000);
}

run();