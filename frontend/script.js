AOS.init();

const paragraph_api = "http://metaphorpsum.com/paragraphs/1/4"
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

    const spanList = document.getElementsByTagName("span")
    input = document.getElementById("inputArea").value.split("")

    if (!started) {
        started = true;
        startingTime = new Date();
        countId = setInterval( () => {
            currentTime = new Date();
            document.getElementById("time").innerText = Math.floor((currentTime - startingTime) / 1000)
            speed = Math.floor((((input.length-incorrect) / 5)) / (((currentTime - startingTime) / 1000) / 60))
            speed = speed < 0 ? 0 : speed
            document.getElementById("wpm").innerHTML =  speed + " wpm"
            document.getElementById("percent").innerText = Math.floor(((input.length-incorrect)/input.length) * 100) + " %"
        }, 1000)

    }
    if (!completed) {
        let incorrectCount = 0;

        for (let item of spanList) {
            if (item.className == "incorrect") {
                incorrectCount ++;
            }
        }

        incorrect = incorrectCount;

        for (let item in spanList) {
            if (item <= input.length) {
                if (item == input.length) {
                    spanList[item].className = "current"
                } else if (input[item] == null) {
                    spanList[item].className = ""
                } else if (input[item] != spanList[item].innerText) {
                    spanList[item].className = "incorrect"
                } else {
                    spanList[item].className = "correct"
                }
            }
            
        }

        if (input.length >= spanList.length) {
            completed = true;
            clearInterval(countId);
        }
    }
})

function getParagraphs() {
    return fetch(paragraph_api)
        .then(function (response) {
            return response.text();
        })
}

async function getNextParagraph() {
    const paragraph = await getParagraphs()
    let first = true
    const paragraphList = paragraph.split("\n\n")
    for (let miniParagraph of paragraphList) {
        let para = document.createElement('p')
        for (let character of miniParagraph) {
            let itemSpan = document.createElement('span')
            itemSpan.innerText = character

            if (first) {
                itemSpan.className = "current";
                first = false;
            }

            para.appendChild(itemSpan)

        }

        document.getElementById("passage").appendChild(para)
    }
}

function startGame() {
    getNextParagraph()

}

startGame()