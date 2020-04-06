function main() {
    setInterval(setClickableCircles, 1000)
    setInterval(setClickableCirclesComputer, 1000)
    setInterval(playerTurnText, 500)
    setInterval(makeWinningPlayerBlink, 500)
}


main()


//--------------------------------//

computerButton = document.getElementById("computer-game-selection")
twoPlayersButton = document.getElementById("two-players-game-selection")

computerButton.onclick = (e) => {
    document.querySelector(".main-menu").classList.add("hidden")
    document.querySelector(".computer-game").classList.remove("hidden")
    let firstPlayer = Math.floor(Math.random() * 2)
    if (firstPlayer) {
        document.getElementById("computer").classList.add("player-1")
    } else {
        document.getElementById("player").classList.add("player-2")
    }
}

twoPlayersButton.onclick = (e) => {
    document.querySelector(".main-menu").classList.add("hidden")
    document.querySelector(".two-players-game").classList.remove("hidden")
    let firstPlayer = Math.floor(Math.random() * 2)
    if (firstPlayer) {
        document.getElementById("player1").classList.add("player-1")
    } else {
        document.getElementById("player2").classList.add("player-2")
    }

}


function playerTurnText() {
    if (!checkConnectFour()) {
        if (document.getElementById("player1").className.includes("player-1")) {
            document.querySelector(".player-turn").textContent = `It's player 1's Turn`
        } else if (document.getElementById("player2").className.includes("player-2")) {
            document.querySelector(".player-turn").textContent = `It's player 2's Turn`
        } else if (document.getElementById("computer").className.includes("player-1")) {
            document.querySelector(".player-turn.computer").textContent = `It's Computer's Turn`
        } else {
            document.querySelector(".player-turn.computer").textContent = `It's Player's Turn`
        }
    }

}

const circlesColumnOne = document.querySelectorAll("div.grid :nth-child(7n+1)")
const circlesColumnTwo = document.querySelectorAll("div.grid :nth-child(7n+2)")
const circlesColumnThree = document.querySelectorAll("div.grid :nth-child(7n+3)")
const circlesColumnFour = document.querySelectorAll("div.grid :nth-child(7n+4)")
const circlesColumnFive = document.querySelectorAll("div.grid :nth-child(7n+5)")
const circlesColumnSix = document.querySelectorAll("div.grid :nth-child(7n+6)")
const circlesColumnSeven = document.querySelectorAll("div.grid :nth-child(7n+7)")

const circlesRowOne = document.querySelectorAll(".row1")
const circlesRowTwo = document.querySelectorAll(".row2")
const circlesRowThree = document.querySelectorAll(".row3")
const circlesRowFour = document.querySelectorAll(".row4")
const circlesRowFive = document.querySelectorAll(".row5")
const circlesRowSix = document.querySelectorAll(".row6")
const circlesRowSeven = document.querySelectorAll(".row7")

const allCircles = document.querySelectorAll(".item")

function getClickableCircleByColumn(column) {
    let clickableCircle = ""

    if (!column[6].className.includes("purpleChip") && !column[6].className.includes("greenChip")) {
        return column[6]
    } else if (column[0].className.includes("purpleChip") || column[0].className.includes("greenChip")) {
        return 0
    } else {
        for (let i = 1; i < 7; i++) {

            if (column[i].className.includes("purpleChip") || column[i].className.includes("greenChip")) {
                clickableCircle = column[i - 1]
                break;
            }
        }
    }

    return clickableCircle
}

let clickSound = document.getElementsByTagName("audio")[1];

function setClickEventListener(x) {
    if (x != 0) {
        x.onclick = (e) => {
            if (document.getElementById("player1").className.includes("player-1") && !e.target.className.includes("greenChip")) {
                e.target.classList.add("purpleChip")
                document.getElementById("player1").classList.remove("player-1")
                document.getElementById("player2").classList.add("player-2")
                checkConnectFour()
                clickSound.play()
                return 0
            } else if (!e.target.className.includes("purpleChip")) {
                e.target.classList.add("greenChip")
                document.getElementById("player2").classList.remove("player-2")
                document.getElementById("player1").classList.add("player-1")
                checkConnectFour()
                clickSound.play()
                return 0
            }
        }
    }
}

function setClickableCircles() {
    let x1 = getClickableCircleByColumn(circlesColumnOne)
    let x2 = getClickableCircleByColumn(circlesColumnTwo)
    let x3 = getClickableCircleByColumn(circlesColumnThree)
    let x4 = getClickableCircleByColumn(circlesColumnFour)
    let x5 = getClickableCircleByColumn(circlesColumnFive)
    let x6 = getClickableCircleByColumn(circlesColumnSix)
    let x7 = getClickableCircleByColumn(circlesColumnSeven)


    setClickEventListener(x1)
    setClickEventListener(x2)
    setClickEventListener(x3)
    setClickEventListener(x4)
    setClickEventListener(x5)
    setClickEventListener(x6)
    setClickEventListener(x7)

}

function checkConnectFourByColumn(column) {
    for (let i = 0; i < 4; i++) {
        if ((column[i].className.includes("purpleChip") && column[i + 1].className.includes("purpleChip") && column[i + 2].className.includes("purpleChip") && column[i + 3].className.includes("purpleChip")) || (column[i].className.includes("greenChip") && column[i + 1].className.includes("greenChip") && column[i + 2].className.includes("greenChip") && column[i + 3].className.includes("greenChip"))) {
            column[i].classList.add("blinking")
            column[i + 1].classList.add("blinking")
            column[i + 2].classList.add("blinking")
            column[i + 3].classList.add("blinking")
            return true
        }
    }
}

function checkConnectFourByRow(row) {
    for (let i = 0; i < 4; i++) {
        if ((row[i].className.includes("purpleChip") && row[i + 1].className.includes("purpleChip") && row[i + 2].className.includes("purpleChip") && row[i + 3].className.includes("purpleChip")) || (row[i].className.includes("greenChip") && row[i + 1].className.includes("greenChip") && row[i + 2].className.includes("greenChip") && row[i + 3].className.includes("greenChip"))) {
            row[i].classList.add("blinking")
            row[i + 1].classList.add("blinking")
            row[i + 2].classList.add("blinking")
            row[i + 3].classList.add("blinking")
            return true
        }
    }
}

function checkConnectFourByDiagonal() {
    for (let j = 0; j < 22; j += 7) {
        for (let i = 0; i < 4; i++) {
            if ((allCircles[i + j].className.includes("purpleChip") && allCircles[i + j + 8].className.includes("purpleChip") && allCircles[i + j + 16].className.includes("purpleChip") && allCircles[i + j + 24].className.includes("purpleChip")) || (allCircles[i + j].className.includes("greenChip") && allCircles[i + j + 8].className.includes("greenChip") && allCircles[i + j + 16].className.includes("greenChip") && allCircles[i + j + 24].className.includes("greenChip"))) {
                allCircles[i + j].classList.add("blinking")
                allCircles[i + j + 8].classList.add("blinking")
                allCircles[i + j + 16].classList.add("blinking")
                allCircles[i + j + 24].classList.add("blinking")
                return true
            }
        }
    }
    for (let j = 0; j < 22; j += 7) {
        for (let i = 6; i > 2; i--) {
            if ((allCircles[i + j].className.includes("purpleChip") && allCircles[i + j + 6].className.includes("purpleChip") && allCircles[i + j + 12].className.includes("purpleChip") && allCircles[i + j + 18].className.includes("purpleChip")) || (allCircles[i + j].className.includes("greenChip") && allCircles[i + j + 6].className.includes("greenChip") && allCircles[i + j + 12].className.includes("greenChip") && allCircles[i + j + 18].className.includes("greenChip"))) {
                allCircles[i + j].classList.add("blinking")
                allCircles[i + j + 6].classList.add("blinking")
                allCircles[i + j + 12].classList.add("blinking")
                allCircles[i + j + 18].classList.add("blinking")
                return true
            }
        }
    }

}

function checkConnectFour() {

    if (checkConnectFourByColumn(circlesColumnOne) || checkConnectFourByColumn(circlesColumnTwo) || checkConnectFourByColumn(circlesColumnThree) || checkConnectFourByColumn(circlesColumnFour) || checkConnectFourByColumn(circlesColumnFive) || checkConnectFourByColumn(circlesColumnSix) || checkConnectFourByColumn(circlesColumnSeven)) {
        return true
    } else if (checkConnectFourByRow(circlesRowOne) || checkConnectFourByRow(circlesRowTwo) || checkConnectFourByRow(circlesRowThree) || checkConnectFourByRow(circlesRowFour) || checkConnectFourByRow(circlesRowFive) || checkConnectFourByRow(circlesRowSix) || checkConnectFourByRow(circlesRowSeven)) {
        return true
    } else if (checkConnectFourByDiagonal()) {
        return true
    } else {
        return false
    }

}

function makeWinningPlayerBlink() {

    if (checkConnectFour()) {
        if (document.getElementById("player1").className.includes("player-1")) {
            document.getElementById("player2").classList.add("blinking")
            document.getElementById("player2").classList.add("winning-background")
            document.getElementById("player1").classList.remove("player-1")
            document.querySelector(".player-turn").textContent = `Player 2 Wins`
        } else if (document.getElementById("player2").className.includes("player-2")) {
            document.getElementById("player1").classList.add("blinking")
            document.getElementById("player1").classList.add("winning-background")
            document.getElementById("player2").classList.remove("player-2")
            document.querySelector(".player-turn").textContent = `Player 1 Wins`
        }
    }

}


// COMPUTER MODE //

const computerCirclesColumnTwo = document.querySelectorAll("div.grid.computer :nth-child(7n+2)")
const computerCirclesColumnOne = document.querySelectorAll("div.grid.computer :nth-child(7n+1)")
const computerCirclesColumnThree = document.querySelectorAll("div.grid.computer :nth-child(7n+3)")
const computerCirclesColumnFour = document.querySelectorAll("div.grid.computer :nth-child(7n+4)")
const computerCirclesColumnFive = document.querySelectorAll("div.grid.computer :nth-child(7n+5)")
const computerCirclesColumnSix = document.querySelectorAll("div.grid.computer :nth-child(7n+6)")
const computerCirclesColumnSeven = document.querySelectorAll("div.grid.computer :nth-child(7n+7)")

const computerCirclesRowOne = document.querySelectorAll("div.grid.computer .row1")
const computerCirclesRowTwo = document.querySelectorAll("div.grid.computer .row2")
const computerCirclesRowThree = document.querySelectorAll("div.grid.computer .row3")
const computerCirclesRowFour = document.querySelectorAll("div.grid.computer .row4")
const computerCirclesRowFive = document.querySelectorAll("div.grid.computer .row5")
const computerCirclesRowSix = document.querySelectorAll("div.grid.computer .row6")
const computerCirclesRowSeven = document.querySelectorAll("div.grid.computer .row7")

const computerAllCircles = document.querySelectorAll("div.grid.computer .item")

function setClickEventListenerComputer(x) {
    if (x != 0) {
        x.onclick = (e) => {
            if (document.getElementById("player").className.includes("player-2") && !e.target.className.includes("purpleChip")) {
                e.target.classList.add("greenChip")
                document.getElementById("player").classList.remove("player-2")
                document.getElementById("computer").classList.add("player-1")
                // checkConnectFour()
                clickSound.play()
                return 0
                // } else if (!e.target.className.includes("purpleChip")) {
                //     e.target.classList.add("greenChip")
                //     document.getElementById("player2").classList.remove("player-2")
                //     document.getElementById("player1").classList.add("player-1")
                // checkConnectFour()
                //     clickSound.play()
                //     return 0
                // }
                // }
            }
        }
    }
}

function setClickableCirclesComputer() {
    let x1 = getClickableCircleByColumn(computerCirclesColumnOne)
    let x2 = getClickableCircleByColumn(computerCirclesColumnTwo)
    let x3 = getClickableCircleByColumn(computerCirclesColumnThree)
    let x4 = getClickableCircleByColumn(computerCirclesColumnFour)
    let x5 = getClickableCircleByColumn(computerCirclesColumnFive)
    let x6 = getClickableCircleByColumn(computerCirclesColumnSix)
    let x7 = getClickableCircleByColumn(computerCirclesColumnSeven)


    setClickEventListenerComputer(x1)
    setClickEventListenerComputer(x2)
    setClickEventListenerComputer(x3)
    setClickEventListenerComputer(x4)
    setClickEventListenerComputer(x5)
    setClickEventListenerComputer(x6)
    setClickEventListenerComputer(x7)

}