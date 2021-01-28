const regeneratorRuntime = require("regenerator-runtime");
// import Scrollbar from 'smooth-scrollbar';
// Scrollbar.init(document.querySelector('#mainBody'));
AOS.init();

const paragraph_api = "https://litipsum.com/api/1"

const paragraph_api_time = "https://litipsum.com/api/5"

var started = false
var completed = false
var inputItem = document.getElementById("inputArea")
var ctrl = false
var startingTime;
var currentTime;
var countId;
var speed;
var accuracy;
var input;
var incorrect = 0;
var incorrectChain = 0;
var timeMode = false;
var wordMode = false;
var theme = "light"
var timer = 60;
var scrollOffSet = 0;
var prevOffSet = 0;
var line = 0;
var sound = "typewriter"
var modalSuccess = document.getElementById("modalSuccess");
var modalFailed = document.getElementById("modalFailed");
var modalSuccessDark = document.getElementById("modalSuccessDark");
var modalFailedDark = document.getElementById("modalFailedDark");
var spanSuccess = document.getElementsByClassName("close")[0];
var spanFailed = document.getElementsByClassName("close")[1];
var spanSuccessDark = document.getElementsByClassName("close")[2];
var spanFailedDark = document.getElementsByClassName("close")[3];
var modalHome = document.getElementsByClassName("button1");
var modalTryAgain = document.getElementsByClassName("button2");
var loaderWrapperWord = document.getElementById("loaderWrapperWord");
var loaderWrapperTime = document.getElementById("loaderWrapperTime");
var timeAxis = []
var wpmAxis = []
var accuracyAxis = []
var statsChart = ""
var chart = document.getElementById("chart").getContext('2d');
var chartDark = document.getElementById("chartDark").getContext('2d');


window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

window.onclick = function (event) {
    inputItem.focus()
}

for (let button of modalHome) {
    button.addEventListener("click", () => {
        home()
        modalExit()
    })
}

for (let button of modalTryAgain) {
    button.addEventListener("click", () => {
        if (wordMode) {
            reset()
            resetWord()
            inputItem.focus();
            timeMode = false;
            wordMode = true;
        } else if (timeMode) {
            reset()
            resetTime()
            inputItem.focus();
            timeMode = true;
            wordMode = false;
        }

        modalExit()
    })
}

document.getElementById("slideOut").addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "250px";
})

document.getElementsByClassName("closebtn")[0].addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "0";
})

document.getElementsByClassName("buttonTheme")[0].addEventListener("click", () => {
    if (theme == "light") {
        document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(0, 0, 0, 0.92)";
        document.getElementById("logo").style.display = "none"
        document.getElementById("logoDark").style.display = ""
        let navLinks = document.getElementsByClassName("buttonMode")

        for (let links of navLinks) {
            links.style.color = "#F5F5F7"
        }

        document.getElementsByClassName("buttonTheme")[0].style.borderColor = "#F5F5F7"
        document.getElementsByClassName("buttonTheme")[0].style.color = "#F5F5F7"
        document.getElementsByClassName("ml11")[0].style.color = "#F5F5F7"
        document.getElementById("main").style.backgroundColor = "#12161B"
        document.getElementById("subtitle").style.color = "#F5F5F7"
        document.getElementById("huskey").style.color = "#F5F5F7"
        document.getElementById("flex-options").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("subtitleTime").style.color = "#fefefea4"
        document.getElementById("subtitleWord").style.color = "#fefefea4"
        document.getElementById("wordMode").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("timeMode").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("buttonTime").style.backgroundColor = "rgba(255,255,255,0.5)"
        document.getElementById("buttonWord").style.backgroundColor = "rgba(255,255,255,0.5)"
        document.getElementById("buttonTime").style.color = "rgba(0,0,0,0.7)"
        document.getElementById("buttonWord").style.color = "rgba(0,0,0,0.7)"

        document.getElementsByClassName("gameTitle")[0].style.color = "#cccccc"
        document.getElementById("timerTime").style.color = "#cccccc"
        document.getElementById("secondsTime").style.color = "#cccccc"
        document.getElementById("timer").style.color = "#cccccc"
        document.getElementById("seconds").style.color = "#cccccc"
        document.getElementById("miniFlex").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("time").style.color = "#cccccc"
        document.getElementById("wpm").style.color = "#cccccc"
        document.getElementById("percent").style.color = "#cccccc"
        document.getElementById("speed").style.color = "#cccccc"
        document.getElementById("speed").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracy").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracy").style.color = "#cccccc"
        document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("passage").style.color = "#A0A0A0"

        document.getElementsByClassName("gameTitle")[1].style.color = "#cccccc"
        document.getElementById("miniFlexTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("timeTime").style.color = "#cccccc"
        document.getElementById("wpmTime").style.color = "#cccccc"
        document.getElementById("percentTime").style.color = "#cccccc"
        document.getElementById("speedTime").style.color = "#cccccc"
        document.getElementById("speedTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracyTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracyTime").style.color = "#cccccc"
        document.getElementById("bodyTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.2)"

        let spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime")
        
        for (let item of spanList) {
            if (item.classList.contains("correct")) {
                item.classList.remove("correct")
                item.classList.add("correctDark")
            }
        }

        document.getElementById("passageTime").style.color = "#A0A0A0"
        document.getElementById("darkIcon").style.display = "none"
        document.getElementsByTagName("html")[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)"

        theme = "dark"
    } else if (theme == "dark") {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#F4F5F4";

        document.getElementById("logo").style.display = ""
        document.getElementById("logoDark").style.display = "none"
        let navLinks = document.getElementsByClassName("buttonMode")

        for (let links of navLinks) {
            links.style.color = "#3C64B1"
        }

        document.getElementsByClassName("buttonTheme")[0].style.borderColor = "#3C64B1"
        document.getElementsByClassName("buttonTheme")[0].style.color = "#3C64B1"
        document.getElementsByClassName("ml11")[0].style.color = "#7e7e7e"
        document.getElementById("main").style.backgroundColor = "rgb(60,100,177,0.06)"
        document.getElementById("subtitle").style.color = "#3C64B1"
        document.getElementById("huskey").style.color = "#3C64B1"
        document.getElementById("flex-options").style.backgroundColor = "transparent"
        document.getElementById("subtitleTime").style.color = "#3C64B1"
        document.getElementById("subtitleWord").style.color = "#3C64B1"
        document.getElementById("wordMode").style.backgroundColor = "#FBFBFD"
        document.getElementById("timeMode").style.backgroundColor = "#FBFBFD"
        document.getElementById("buttonTime").style.backgroundColor = "#3C64B1"
        document.getElementById("buttonWord").style.backgroundColor = "#3C64B1"
        document.getElementById("buttonTime").style.color = "#FFFFFF"
        document.getElementById("buttonWord").style.color = "#FFFFFF"

        document.getElementsByClassName("gameTitle")[0].style.color = "#3C64B1"
        document.getElementById("miniFlex").style.backgroundColor = "#3C64B1"
        document.getElementById("time").style.color = "#3C64B1"
        document.getElementById("wpm").style.color = "#3C64B1"
        document.getElementById("percent").style.color = "#3C64B1"
        document.getElementById("speed").style.color = "#3C64B1"
        document.getElementById("speed").style.backgroundColor = "#F6F6F7"
        document.getElementById("accuracy").style.backgroundColor = "#F6F6F7"
        document.getElementById("accuracy").style.color = "#3C64B1"
        document.getElementById("body").style.backgroundColor = "#FBFBFD"

        document.getElementById("timer").style.color = "#FFFFFF"
        document.getElementById("seconds").style.color = "#FFFFFF"
        document.getElementById("timerTime").style.color = "#FFFFFF"
        document.getElementById("secondsTime").style.color = "#FFFFFF"
        document.getElementById("passage").style.color = "#A0A0A0"
        document.getElementsByClassName("gameTitle")[1].style.color = "#3C64B1"
        document.getElementById("miniFlexTime").style.backgroundColor = "#3C64B1"
        document.getElementById("timeTime").style.color = "#3C64B1"
        document.getElementById("wpmTime").style.color = "#3C64B1"
        document.getElementById("percentTime").style.color = "#3C64B1"
        document.getElementById("speedTime").style.color = "#3C64B1"
        document.getElementById("speedTime").style.backgroundColor = "#F6F6F7"
        document.getElementById("accuracyTime").style.backgroundColor = "#F6F6F7"
        document.getElementById("accuracyTime").style.color = "#3C64B1"
        document.getElementById("bodyTime").style.backgroundColor = "#FBFBFD"
        document.getElementById("passageTime").style.color = "#A0A0A0"

        document.getElementsByTagName("html")[0].style.backgroundColor = "white"

        // let lightCorrects = document.getElementsByClassName("correctDark")
        // for (let lightCorrect of lightCorrects) {
        //     lightCorrect.classList.remove("correctDark")
        //     lightCorrect.classList.add("correct")
        // }
        
        let spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime")
        
        for (let item of spanList) {
            if (item.classList.contains("correctDark")) {
                item.classList.remove("correctDark")
                item.classList.add("correct")
            }
        }

        theme = "light"


        document.getElementById("darkIcon").style.display = ""

    }

})

document.getElementById("choice1").addEventListener("click", () => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = 0;
    startHeaders();
    reset();
    resetTime();
    document.getElementById("gameWord").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("flex-options").style.display = "none"
    document.getElementById("gameTime").style.display = "";
    inputItem.focus();
    wordMode = false;
    timeMode = true;
});

document.getElementsByTagName("li")[0].addEventListener("click", () => {
    window.scrollTo(0, 0);
    startHeaders();
    reset();
    resetTime();
    document.getElementById("gameWord").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("flex-options").style.display = "none"
    document.getElementById("gameTime").style.display = "";
    inputItem.focus();
    wordMode = false;
    timeMode = true;
});

document.getElementById("choice2").addEventListener("click", () => {
    window.scrollTo(0, 0);
    startHeaders();
    reset();
    resetWord();
    document.getElementById("mySidenav").style.width = 0;
    document.getElementById("gameTime").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("flex-options").style.display = "none"
    document.getElementById("gameWord").style.display = "";
    inputItem.focus();
    timeMode = false;
    wordMode = true;
});

document.getElementsByTagName("li")[1].addEventListener("click", () => {
    window.scrollTo(0, 0);
    startHeaders();
    reset();
    resetWord();
    document.getElementById("gameTime").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("flex-options").style.display = "none"
    document.getElementById("gameWord").style.display = "";
    inputItem.focus();
    timeMode = false;
    wordMode = true;
});


document.getElementById("buttonWord").addEventListener("click", () => {
    startHeaders();
    reset();
    resetWord();
    document.getElementById("gameTime").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("flex-options").style.display = "none"
    document.getElementById("gameWord").style.display = "";
    window.scrollTo(0, 0);
    inputItem.focus();
    timeMode = false;
    wordMode = true;
});

document.getElementById("buttonTime").addEventListener("click", () => {
    startHeaders();
    reset();
    resetTime();
    document.getElementById("gameWord").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("flex-options").style.display = "none"
    document.getElementById("gameTime").style.display = "";
    window.scrollTo(0, 0);
    inputItem.focus();
    timeMode = true;
    wordMode = false;
});

document.getElementById("choiceHome").addEventListener("click", () => {
    home()
})



document.getElementsByTagName("img")[0].addEventListener("click", () => {
    home()
})

document.getElementsByTagName("img")[1].addEventListener("click", () => {
    home()
})

inputItem.onpaste = e => e.preventDefault();


inputItem.addEventListener("keyup", (e) => {
    if (e.key === "Control") {
        ctrl = false;
    }
})

inputItem.onblur = e => {
    inputItem.focus();
}

inputItem.addEventListener("input", () => {
    var spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime")
    input = document.getElementById("inputArea").value.split("")
    var latest = spanList[input.length - 1]
    var quota = Math.floor((parseInt(getComputedStyle(document.getElementById("bodyTime")).height) + parseInt(getComputedStyle(document.getElementById("bodyTime")).padding) * 4) / (43.2 * 2)) - 1

    if (!started && wordMode) {
        started = true
        startingTime = new Date();
        countId = setInterval(() => {
            currentTime = new Date();
            let time = Math.floor((currentTime - startingTime) / 1000)
            document.getElementById("timer").innerText = time
            speed = Math.floor((((input.length - incorrect) / 5)) / (((currentTime - startingTime) / 1000) / 60))
            accuracy = Math.floor(((input.length - incorrect) / input.length) * 100)
            speed = speed < 0 ? 0 : speed
            accuracy = accuracy < 0 ? 0 : accuracy
            document.getElementById("speed").innerHTML = speed
            document.getElementById("accuracy").innerText = accuracy
            wpmAxis.push(speed)
            accuracyAxis.push(accuracy)
            timeAxis.push(time)
        }, 1000)

    } else if (!started && timeMode) {
        started = true
        startingTime = new Date();
        countId = setInterval(() => {
            currentTime = new Date();
            document.getElementById("timerTime").innerText = --timer
            speed = Math.floor((((input.length - incorrect) / 5)) / (((currentTime - startingTime) / 1000) / 60))
            accuracy = Math.floor(((input.length - incorrect) / input.length) * 100)
            speed = speed < 0 ? 0 : speed
            accuracy = accuracy < 0 ? 0 : accuracy
            document.getElementById("speedTime").innerHTML = speed
            document.getElementById("accuracyTime").innerText = accuracy
            wpmAxis.push(speed)
            accuracyAxis.push(accuracy)
            timeAxis.push(Math.abs(timer-60))

            if (timer == 0) {
                generateCompletedModal()
                completed = true;
                started = false;
                clearInterval(countId);

            }
        }, 1000)
    }

    if (latest != null) {
        if (latest.offsetTop > prevOffSet) {
            prevOffSet = latest.offsetTop;
            line++;

            if (line > quota) {
                scrollDown();
            }
        } else if (latest.offsetTop < prevOffSet) {
            prevOffSet = latest.offsetTop;
            line--;

            if (line >= quota) {
                scrollUp();
            }
        }
    }

    if (!completed) {

        let incorrectCount = 0;

        for (let item of spanList) {
            if (item.classList.contains("incorrect")) {
                incorrectCount++;
            }
        }
        incorrect = incorrectCount;

        for (let item in spanList) {
            if (item <= input.length) {
                if (input[item] == null) {
                    spanList[item].classList.remove("incorrect")
                    spanList[item].classList.remove("correct")
                    spanList[item].classList.remove("correctDark")
                    
                } else if (input[item] != spanList[item].innerText) {
                    incorrectChain++
                    // theme == "dark" ? spanList[item].classList.remove("correctDark") : spanList[item].classList.remove("correct")
                    spanList[item].classList.remove("correct")
                    spanList[item].classList.remove("correctDark")
                    spanList[item].classList.add("incorrect")
                } else if (input[item] === spanList[item].innerText) {
                    incorrectChain = 0
                    spanList[item].classList.remove("incorrect")
                    theme == "dark" ? spanList[item].classList.add("correctDark") : spanList[item].classList.add("correct")
                }
            }
        }

        if (incorrectChain >= 15) {
            generateFailedModal()
            completed = true;
            started = false;
            clearInterval(countId);
            return
        } else {
            incorrectChain = 0
        }

        if (wordMode && input.length >= spanList.length) {
            generateCompletedModal()
            completed = true;
            started = false;
            clearInterval(countId);
        }
    }
})

inputItem.addEventListener("keydown", (e) => {
    if (e.key === "Control") {
        ctrl = true
        e.preventDefault();
        return
    }

    if (ctrl) {
        if (e.key === "a") {
            e.preventDefault();
        }

        if (e.key === "Backspace") {
            e.preventDefault();
        }

        return
    }

    if (inputItem === document.activeElement && !completed) {
        playKeyPress()
    }

    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(e.key) > -1) {
        e.preventDefault();
    }
})

function getParagraphs(para_api) {
    return fetch(para_api)
        .then(function (response) {
            return response.text();
        })
}

async function getNextParagraph() {
    let spanList = wordMode ? document.getElementsByClassName("charSpan") : document.getElementsByClassName("charSpanTime")
    let paragraph = ""

    loaderWrapperWord.style.display = "flex"

    while (paragraph.length < 150) {
        paragraph = await getParagraphs(paragraph_api)
    }

    if (paragraph.length > 200) {
        paragraph = shorten(paragraph)
    }	

    paragraph = paragraph.replace(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g,'"')
    paragraph = paragraph.replace(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g,"'")
    paragraph = paragraph.replace("’","'")
    paragraph = paragraph.replace("  ", " ")
    																		
    const paragraphList = paragraph.split("\n")
    document.getElementById("passage").innerText = ""

    loaderWrapperWord.style.display = "none"

    for (let miniParagraph of paragraphList) {
        let para = document.createElement('p')
        for (let character of miniParagraph) {
            let itemSpan = document.createElement('span')
            itemSpan.className = "charSpan"
            itemSpan.innerText = character
            para.appendChild(itemSpan)

        }

        document.getElementById("passage").appendChild(para)
    }

    return;
}

function shorten(paragraph) {
    let modified = paragraph.substring(200, paragraph.length)
    let stoppingIndex1 = modified.indexOf(".") == -1 ? 999999999 : modified.indexOf(".")
    let stoppingIndex2 = modified.indexOf("!") == -1 ? 999999999 : modified.indexOf("!")
    let stoppingIndex3 = modified.indexOf("?") == -1 ? 999999999 : modified.indexOf("?")
    let stoppingIndex4 = modified.indexOf(";") == -1 ? 999999999 : modified.indexOf(";")


    let min = Math.min(stoppingIndex1, stoppingIndex2, stoppingIndex3, stoppingIndex4)
    if (modified.charAt(min + 1) == '"' || modified.charAt(min + 1) == "'") {
        min++
    }

    return paragraph.substring(0, 200 + min + 1)
}

async function getNextParagraphTime() {
    loaderWrapperTime.style.display = "flex"
    let paragraph = await getParagraphs(paragraph_api_time)
    paragraph = paragraph.replace(/[\u0022\u02BA\u02DD\u02EE\u02F6\u05F2\u05F4\u1CD3\u201C\u201D\u201F\u2033\u2036\u3003\uFF02]/g,'"')
    paragraph = paragraph.replace(/[\u0027\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05D9\u05F3\u07F4\u07F5]/g,"'")
    paragraph = paragraph.replace("’","'")
    paragraph = paragraph.replace("  ", " ")

    const paragraphList = paragraph.split("\n\n")
    document.getElementById("passageTime").innerText = ""

    loaderWrapperTime.style.display = "none"

    for (let miniParagraph of paragraphList) {
        let div = document.createElement('div')
        let para = document.createElement('p')
        for (let character of miniParagraph) {
            let itemSpan = document.createElement('span')
            itemSpan.className = "charSpanTime"
            itemSpan.innerText = character
            para.appendChild(itemSpan)

        }

        div.appendChild(para)
        document.getElementById("passageTime").appendChild(div)
    }

    
    document.getElementById("bodyTime").scrollTo(0, 0)
    document.getElementById("body").scrollTo(0, 0)

    return;
}

function reset() {
    if (statsChart != "") {
        statsChart.destroy()
    }
    document.getElementById("timer").innerText = "0"
    document.getElementById("speed").innerText = "0"
    document.getElementById("accuracy").innerText = "0"
    document.getElementById("inputArea").value = ""
    wpmAxis = []
    accuracyAxis = []
    timeAxis = []
    clearInterval(countId);

    document.getElementById("bodyTime").scrollTo(0, 0)
    document.getElementById("body").scrollTo(0, 0)

    document.getElementById("passage").innerText = ""
    document.getElementById("passageTime").innerText = ""

    inputItem.focus();
    completed = false;
    started = false;
    wordMode = false;
    timeMode = false;
    timer = 60;
    incorrectChain = 0
    scrollOffSet = 0;

    return;
}

function resetWord() {

    document.getElementById("timer").innerText = "0"
    document.getElementById("speed").innerText = "0"
    document.getElementById("accuracy").innerText = "0"
    document.getElementById("inputArea").value = ""
    clearInterval(countId);

    getNextParagraph();

    completed = false;
    started = false;
    wordMode = false;
    timeMode = false;
    incorrectChain = 0
    scrollOffSet = 0;

    return;
}

function resetTime() {

    document.getElementById("timerTime").innerText = "60"
    document.getElementById("speedTime").innerText = "0"
    document.getElementById("accuracyTime").innerText = "0"
    document.getElementById("inputArea").value = ""
    clearInterval(countId);

    getNextParagraphTime();

    incorrectChain = 0
    completed = false;
    started = false;
    wordMode = false;
    timeMode = false;
    timer = 60;
    scrollOffSet = 0;

    return;
}

function scrollDown() {
    if (timeMode) {
        scrollOffSet += document.getElementsByClassName("charSpanTime")[0].offsetHeight * 1.75
        document.getElementById("bodyTime").scrollTo({
            top: scrollOffSet,
            left: 0,
            behavior: "smooth"
        })
    } else if (wordMode) {
        scrollOffSet += document.getElementsByClassName("charSpan")[0].offsetHeight * 1.75
        document.getElementById("body").scrollTo({
            top: scrollOffSet,
            left: 0,
            behavior: "smooth"
        })
    }

    return
}

function scrollUp() {
    if (timeMode) {
        scrollOffSet -= document.getElementsByClassName("charSpanTime")[0].offsetHeight * 1.75
        document.getElementById("bodyTime").scrollTo({
            top: scrollOffSet,
            left: 0,
            behavior: "smooth"
        })
    } else if (wordMode) {
        scrollOffSet -= document.getElementsByClassName("charSpan")[0].offsetHeight * 1.75
        document.getElementById("body").scrollTo({
            top: scrollOffSet,
            left: 0,
            behavior: "smooth"
        })
    }

    return
}

function playKeyPress() {
    var title = ""
    if (sound == "apple") {
        title += "./macPress"
    } else if (sound == "mechanical") {
        title += "./buttonPress"
    } else if (sound == "typewriter") {
        title += "./typewriterPress"
    }

    var select = Math.floor(Math.random() * 5 + 1)
    title += select + ".mp3"
    var audio = new Audio(title)
    audio.loop = false
    audio.play()

    return
}

function playSpaceBar() {
    var title = ""
    if (sound == "apple") {
        title += "./macPressSpaceBar"
    } else if (sound == "mechanical") {
        title += "./buttonPressSpaceBar"
    } else if (sound == "typewriter") {
        title += "./typewriterPressSpaceBar2"
    }

    title += ".mp3"
    var audio = new Audio(title)
    audio.loop = false
    audio.play()

    return
}

function generateCompletedModal() {
    if (theme == "light") {
        statsChart = new Chart(chart, {
            responsive: true,
            type: 'line',
            data: {
                labels: timeAxis,
                datasets: [{
                    data: wpmAxis,
                    label: "Words per Minute",
                    fill: true,
                    borderColor: "#3e95cd"
                }, {
                    data: accuracyAxis,
                    label: "Accuracy",
                    fill: false,
                    borderColor: "#c45850"
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            stepSize: 4
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: Math.ceil(Math.max(Math.max(...accuracyAxis), Math.max(...wpmAxis))/20)*20,
                            stepSize: 20
                        }
                    }]
                }
            }
        })
    } else {
        statsChart = new Chart(chartDark, {

            backgroundColor: "#7a7a7a",
            responsive: true,
            type: 'line',
            data: {
                labels: timeAxis,
                datasets: [{
                    data: wpmAxis,
                    label: "Words per Minute",
                    backgroundColor: "#313131",
                    borderColor: "#3e95cd",
                }, {
                    data: accuracyAxis,
                    label: "Accuracy",
                    fill: false,
                    borderColor: "#c45850"
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            stepSize: 4,
                            fontColor: "#CCCCCC"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: Math.floor(Math.max(Math.max(...accuracyAxis), Math.max(...wpmAxis))/20)*20 + 20,
                            stepSize: 20,
                            fontColor: "#CCCCCC"
                        }
                    }]
                },
                legend: {
                    labels: {
                       fontColor: '#CCCCCC'
                    }
                 },
            }
        })
    }
    

    let remark = ""
    if (speed > 100 && accuracy > 95) {
        remark = "WOW! You're blazing fast!"
    } else if (speed > 90 && accuracy > 95) {
        remark =  "Well done! That was remarkable."
    } else if ( speed > 75 && accuracy > 85 ) {
        remark = "Great job! You're getting better!"
    } else {
        remark = "Not bad! Keep on practicing!"
    }
    if (wordMode) {
        document.getElementById("resultsSuccess").innerHTML = `Congrats! You've completed the passage.`
        document.getElementById("resultsSuccessDark").innerHTML = `Congrats! You've completed the passage.`
    } else if (timeMode) {
        document.getElementById("resultsSuccess").innerHTML = `Awesome! Thats another minute of practice today.`
        document.getElementById("resultsSuccessDark").innerHTML = `Awesome! Thats another minute of practice today.`
    }

    document.getElementById("statsSuccess").innerHTML = `You typed ${inputItem.value.length} characters at <span style="color: #3e95cd;">${speed} wpm</span> with <span style="color: #c45850;">${accuracy}% accuracy</span>!`
    document.getElementById("remark").innerHTML = remark
    
    document.getElementById("statsSuccessDark").innerHTML = `You typed ${inputItem.value.length} characters at <span style="color: #3e95cd;">${speed} wpm</span> with <span style="color: #c45850;">${accuracy}% accuracy</span>!`
    document.getElementById("remarkDark").innerHTML = `<span style="color: #CCCCCC;">${remark}</span>`

    if (theme == 'light') {
        modalSuccess.style.display = "block"
    } else {
        modalSuccessDark.style.display = "block"
    }
    return
}

function generateFailedModal() {
    if (theme == 'light') {
        modalFailed.style.display = "block"
    } else {
        modalFailedDark.style.display = "block"
    }
    return
}

function modalExit() {
    modalSuccess.style.display = "none";
    modalFailed.style.display = "none";
    modalSuccessDark.style.display = "none";
    modalFailedDark.style.display = "none";

    if (timeMode) {
        resetTime()
        timeMode = true
    } else if (wordMode) {
        resetWord()
        wordMode = true
    }
}

function home() {
    reset();
    document.getElementsByClassName("navLinks")[0].style.display = "";
    document.getElementsByClassName("ml11")[0].style.display = "none";
    document.getElementById("mySidenav").style.width = 0;
    document.getElementById("main").style.display = "";
    document.getElementById("flex-options").style.display = "";
    document.getElementById("gameWord").style.display = "none";
    document.getElementById("gameTime").style.display = "none";
}

function startHeaders() {
    document.getElementsByClassName("navLinks")[0].style.display = "none";
    document.getElementsByClassName("ml11")[0].style.display = "flex";

    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\u0021)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.ml11 .line',
        opacity: 0,
        duration: 700,
        easing: "easeOutExpo",
        delay: 0
      });;

}

