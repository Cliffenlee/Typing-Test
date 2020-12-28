const regeneratorRuntime = require("regenerator-runtime");
// import Scrollbar from 'smooth-scrollbar';
// Scrollbar.init(document.querySelector('#mainBody'));
AOS.init();

const paragraph_api = "http://metaphorpsum.com/paragraphs/1/4"

const paragraph_api_word = "http://metaphorpsum.com/paragraphs/1/25"

var started = false
var completed = false
var inputItem = document.getElementById("inputArea")
var ctrl = false
var startingTime;
var currentTime;
var countId;
var speed;
var input;
var incorrect = 0;
var timeMode = false;
var wordMode = false;
var theme = "light"
var timer = 60;
var scrollOffSet = 0;
var prevOffSet = 0;
var line = 0;

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

document.getElementById("slideOut").addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "250px";
  })
  
document.getElementsByClassName("closebtn")[0].addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "0";
})

document.getElementsByClassName("buttonTheme")[0].addEventListener("click", () => {
    console.log(theme)
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
        document.getElementById("main").style.backgroundColor = "#12161B"
        document.getElementById("subtitle").style.color = "#F5F5F7"
        document.getElementById("huskey").style.color = "#F5F5F7"
        document.getElementById("flex-options").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("subtitleTime").style.color = "#F2F2F2"
        document.getElementById("subtitleWord").style.color = "#F2F2F2"
        document.getElementById("wordMode").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("timeMode").style.backgroundColor = "rgba(0,0,0,0.2)"
        document.getElementById("buttonTime").style.backgroundColor = "rgba(255,255,255,0.5)"
        document.getElementById("buttonWord").style.backgroundColor = "rgba(255,255,255,0.5)"
        document.getElementById("buttonTime").style.color = "rgba(0,0,0,0.7)"
        document.getElementById("buttonWord").style.color = "rgba(0,0,0,0.7)"

        document.getElementsByClassName("gameTitle")[0].style.color = "#FFFFFF"
        document.getElementById("miniFlex").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("time").style.color = "#FFFFFF"
        document.getElementById("wpm").style.color = "#FFFFFF"
        document.getElementById("percent").style.color = "#FFFFFF"
        document.getElementById("speed").style.color = "#FFFFFF"
        document.getElementById("speed").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracy").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracy").style.color = "#FFFFFF"
        document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("passage").style.color = "#A0A0A0"

        document.getElementsByClassName("gameTitle")[1].style.color = "#FFFFFF"
        document.getElementById("miniFlexTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("timeTime").style.color = "#FFFFFF"
        document.getElementById("wpmTime").style.color = "#FFFFFF"
        document.getElementById("percentTime").style.color = "#FFFFFF"
        document.getElementById("speedTime").style.color = "#FFFFFF"
        document.getElementById("speedTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracyTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("accuracyTime").style.color = "#FFFFFF"
        document.getElementById("bodyTime").style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        document.getElementById("body").style.backgroundColor = "rgba(0, 0, 0, 0.2)"

        var sheet = document.styleSheets[0]
        sheet.removeRule(9)
        sheet.insertRule(".correct { background-color: rgba(60, 101, 177, 0.4);}",1)

        document.getElementById("passageTime").style.color = "#A0A0A0"
        document.getElementById("passageTime").style.color = "#A0A0A0"
        document.getElementById("darkIcon").style.display = "none"
        document.getElementsByTagName("html")[0].style.backgroundColor = "rgba(0, 0, 0, 0.9)"

        theme = "dark"
    } else if (theme == "dark"){
        document.getElementsByTagName("header")[0].style.backgroundColor = "#F4F5F4";

        document.getElementById("logo").style.display = ""
        document.getElementById("logoDark").style.display = "none"
        let navLinks = document.getElementsByClassName("buttonMode")

        for (let links of navLinks) {
            links.style.color = "#3C64B1"
        }

        document.getElementsByClassName("buttonTheme")[0].style.borderColor = "#3C64B1"
        document.getElementsByClassName("buttonTheme")[0].style.color = "#3C64B1"
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

        var sheet = document.styleSheets[0]
        sheet.removeRule(1)
        sheet.insertRule(".correct { background-color: #3c65b12a;}",9)

        theme = "light"


        document.getElementById("darkIcon").style.display = ""

    }

})

document.getElementsByTagName("li")[0].addEventListener("click", () => {
    window.scrollTo(0, 0);
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

document.getElementsByTagName("li")[1].addEventListener("click", () => {
    window.scrollTo(0, 0);
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

document.getElementsByTagName("img")[0].addEventListener("click", () => {
    reset();
    document.getElementById("main").style.display = ""
    document.getElementById("flex-options").style.display = ""
    document.getElementById("gameWord").style.display = "none";
    document.getElementById("gameTime").style.display = "none";
})

document.getElementsByTagName("img")[1].addEventListener("click", () => {
    reset();
    document.getElementById("main").style.display = ""
    document.getElementById("flex-options").style.display = ""
    document.getElementById("gameWord").style.display = "none";
    document.getElementById("gameTime").style.display = "none";
})

inputItem.onpaste = e => e.preventDefault();
inputItem.addEventListener("keydown", (e) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(e.key) > -1) {
        e.preventDefault();
    }

    if (ctrl) {
        if (e.key === "a") {
            e.preventDefault();
        }

        if (e.key === "Backspace") {
            e.preventDefault();
        }
    } else if (e.key === "Control") {
        ctrl = true;
    }
})

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
    console.log(document.getElementById("main").style.height)

    if (!started && wordMode) {
        started = true
        startingTime = new Date();
        countId = setInterval(() => {
            currentTime = new Date();
            document.getElementById("timer").innerText = Math.floor((currentTime - startingTime) / 1000)
            speed = Math.floor((((input.length - incorrect) / 5)) / (((currentTime - startingTime) / 1000) / 60))
            let accuracy = Math.floor(((input.length - incorrect) / input.length) * 100)
            speed = speed < 0 ? 0 : speed
            accuracy = accuracy < 0 ? 0 : accuracy
            document.getElementById("speed").innerHTML = speed
            document.getElementById("accuracy").innerText = accuracy
        }, 1000)

    } else if (!started && timeMode) {
        started = true
        startingTime = new Date();
        countId = setInterval(() => {
            currentTime = new Date();
            document.getElementById("timerTime").innerText = --timer
            speed = Math.floor((((input.length - incorrect) / 5)) / (((currentTime - startingTime) / 1000) / 60))
            let accuracy = Math.floor(((input.length - incorrect) / input.length) * 100)
            speed = speed < 0 ? 0 : speed
            accuracy = accuracy < 0 ? 0 : accuracy
            document.getElementById("speedTime").innerHTML = speed
            document.getElementById("accuracyTime").innerText = accuracy

            if (timer == 0) {
                completed = true;
                started = false;
                clearInterval(countId);
                wordMode = false;
                timeMode = false;
            }
        }, 1000)
    }

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
                } else if (input[item] != spanList[item].innerText) {
                    spanList[item].classList.remove("correct")
                    spanList[item].classList.add("incorrect")
                } else if (input[item] === spanList[item].innerText) {
                    spanList[item].classList.remove("incorrect")
                    spanList[item].classList.add("correct")
                }
            }

        }

        if (wordMode && input.length >= spanList.length) {
            completed = true;
            started = false;
            clearInterval(countId);
            wordMode = false;
            timeMode = false;
        }
    }
})

function getParagraphs(para_api) {
    return fetch(para_api)
        .then(function (response) {
            return response.text();
        })
}

async function getNextParagraph() {
    const paragraph = await getParagraphs(paragraph_api)
    const paragraphList = paragraph.split("\n\n")
    document.getElementById("passage").innerText = ""
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

async function getNextParagraphTime() {
    const paragraph = await getParagraphs(paragraph_api_word)
    const paragraphList = paragraph.split("\n\n")
    document.getElementById("passageTime").innerText = ""
    for (let miniParagraph of paragraphList) {
        let para = document.createElement('p')
        for (let character of miniParagraph) {
            let itemSpan = document.createElement('span')
            itemSpan.className = "charSpanTime"
            itemSpan.innerText = character
            para.appendChild(itemSpan)

        }

        document.getElementById("passageTime").appendChild(para)
    }

    document.getElementById("bodyTime").scrollTo(0, 0)
    document.getElementById("body").scrollTo(0, 0)

    return;
}

function reset() {

    document.getElementById("timer").innerText = "0"
    document.getElementById("speed").innerText = "0"
    document.getElementById("accuracy").innerText = "0"
    document.getElementById("inputArea").value = ""
    clearInterval(countId);

    document.getElementById("bodyTime").scrollTo(0, 0)
    document.getElementById("body").scrollTo(0, 0)

    document.getElementById("passage").innerText = ""
    document.getElementById("passageTime").innerText = ""

    completed = false;
    started = false;
    wordMode = false;
    timeMode = false;
    timer = 60;
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

var scroller = {
    target: document.querySelector("#contents"),
    ease: 0.05, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
};


var html = document.documentElement;
var body = document.body;


var requestId = null;

TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
});

window.addEventListener("load", onLoad);
function onLoad() {
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
}

function updateScroller() {

    var resized = scroller.resizeRequest > 0;

    if (resized) {
        // var height = scroller.target.clientHeight;
        var height = parseInt(getComputedStyle(document.getElementById("main")).height)
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
        console.log(height);
    }

    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
        y: -scroller.y
    });

    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}