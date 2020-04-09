function main() {
    setInterval(setClickableCircles, 500)
    setInterval(setClickableCirclesComputer, 1000)
    setInterval(checkConnectFour, 900)
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
        document.querySelector(".player-turn.computer").textContent = `It's Computer's Turn`
        timeoutID2 = window.setTimeout(makeComputerPlay, 1000)
    } else {
        document.getElementById("player").classList.add("player-2")
        document.querySelector(".player-turn.computer").textContent = `It's Player's Turn`
    }
}

twoPlayersButton.onclick = (e) => {
    document.querySelector(".main-menu").classList.add("hidden")
    document.querySelector(".two-players-game").classList.remove("hidden")
    let firstPlayer = Math.floor(Math.random() * 2)
    if (firstPlayer) {
        document.getElementById("player1").classList.add("player-1")
        document.querySelector(".player-turn").textContent = `It's player 1's Turn`
    } else {
        document.getElementById("player2").classList.add("player-2")
        document.querySelector(".player-turn").textContent = `It's player 2's Turn`
    }

}


function playerTurnText() {

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



const circlesColumnOne = document.querySelectorAll("div.grid.two-players :nth-child(7n+1)")
const circlesColumnTwo = document.querySelectorAll("div.grid.two-players :nth-child(7n+2)")
const circlesColumnThree = document.querySelectorAll("div.grid.two-players :nth-child(7n+3)")
const circlesColumnFour = document.querySelectorAll("div.grid.two-players :nth-child(7n+4)")
const circlesColumnFive = document.querySelectorAll("div.grid.two-players :nth-child(7n+5)")
const circlesColumnSix = document.querySelectorAll("div.grid.two-players :nth-child(7n+6)")
const circlesColumnSeven = document.querySelectorAll("div.grid.two-players :nth-child(7n+7)")

const circlesRowOne = document.querySelectorAll(".two-players .row1")
const circlesRowTwo = document.querySelectorAll(".two-players .row2")
const circlesRowThree = document.querySelectorAll(".two-players .row3")
const circlesRowFour = document.querySelectorAll(".two-players .row4")
const circlesRowFive = document.querySelectorAll(".two-players .row5")
const circlesRowSix = document.querySelectorAll(".two-players .row6")
const circlesRowSeven = document.querySelectorAll(".two-players .row7")

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

let clickSound = document.getElementsByTagName("audio")[0];

function setClickEventListener(x) {
    if (x != 0) {
        x.onclick = (e) => {
            if (document.getElementById("player1").className.includes("player-1") && !e.target.className.includes("greenChip")) {
                makeChipFall(whichColumnIndex(e.target), "purpleChip")
                document.getElementById("player1").classList.remove("player-1")
                document.getElementById("player2").classList.add("player-2")
                playerTurnText()
                // checkConnectFour()
                return 0
            } else if (document.getElementById("player2").className.includes("player-2") && !e.target.className.includes("purpleChip")) {
                makeChipFall(whichColumnIndex(e.target), "greenChip")
                document.getElementById("player2").classList.remove("player-2")
                document.getElementById("player1").classList.add("player-1")
                playerTurnText()
                // checkConnectFour()

                return 0
            }
        }
    }
}

function whichColumnIndex(circle) {
    if (circle.className.includes("column1")) {
        return 0
    } else if (circle.className.includes("column2")) {
        return 1
    } else if (circle.className.includes("column3")) {
        return 2
    } else if (circle.className.includes("column4")) {
        return 3
    } else if (circle.className.includes("column5")) {
        return 4
    } else if (circle.className.includes("column6")) {
        return 5
    } else if (circle.className.includes("column7")) {
        return 6
    }
}

let circles = 0

function makeChipFall(columnIndex, chipColor, gameMode) {

    if (gameMode === "computer") {
        circles = computerAllCircles
    } else {
        circles = allCircles
    }
    timeoutID3 = window.setTimeout(() => {
        if (!circles[0 + columnIndex].className.includes("greenChip") && !circles[0 + columnIndex].className.includes("purpleChip")) {
            circles[0 + columnIndex].classList.add(`${chipColor}`)
        } else {
            clickSound.play()
        }
    }, 100)


    timeoutID4 = window.setTimeout(() => {
        if (!circles[7 + columnIndex].className.includes("greenChip") && !circles[7 + columnIndex].className.includes("purpleChip")) {
            circles[0 + columnIndex].classList.remove(`${chipColor}`);
            circles[7 + columnIndex].classList.add(`${chipColor}`)
        } else {
            clickSound.play()
        }
    }, 200)
    timeoutID5 = window.setTimeout(() => {
        if (!circles[14 + columnIndex].className.includes("greenChip") && !circles[14 + columnIndex].className.includes("purpleChip")) {
            circles[7 + columnIndex].classList.remove(`${chipColor}`);
            circles[14 + columnIndex].classList.add(`${chipColor}`)
        } else {
            clickSound.play()
        }
    }, 300)
    timeoutID6 = window.setTimeout(() => {
        if (!circles[21 + columnIndex].className.includes("greenChip") && !circles[21 + columnIndex].className.includes("purpleChip")) {
            circles[14 + columnIndex].classList.remove(`${chipColor}`);
            circles[21 + columnIndex].classList.add(`${chipColor}`)
        } else {
            clickSound.play()
        }
    }, 400)
    timeoutID7 = window.setTimeout(() => {
        if (!circles[28 + columnIndex].className.includes("greenChip") && !circles[28 + columnIndex].className.includes("purpleChip")) {
            circles[21 + columnIndex].classList.remove(`${chipColor}`);
            circles[28 + columnIndex].classList.add(`${chipColor}`)
        } else {
            clickSound.play()
        }
    }, 500)
    timeoutID8 = window.setTimeout(() => {
        if (!circles[35 + columnIndex].className.includes("greenChip") && !circles[35 + columnIndex].className.includes("purpleChip")) {
            circles[28 + columnIndex].classList.remove(`${chipColor}`);
            circles[35 + columnIndex].classList.add(`${chipColor}`)
        } else {
            clickSound.play()
        }
    }, 600)
    timeoutID9 = window.setTimeout(() => {
        if (!circles[42 + columnIndex].className.includes("greenChip") && !circles[42 + columnIndex].className.includes("purpleChip")) {
            circles[35 + columnIndex].classList.remove(`${chipColor}`);
            circles[42 + columnIndex].classList.add(`${chipColor}`)
            clickSound.play()
        } else {
            clickSound.play()
        }
    }, 700)

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
    for (let j = 0; j < 22; j += 7) {
        for (let i = 0; i < 4; i++) {
            if ((computerAllCircles[i + j].className.includes("purpleChip") && computerAllCircles[i + j + 8].className.includes("purpleChip") && computerAllCircles[i + j + 16].className.includes("purpleChip") && computerAllCircles[i + j + 24].className.includes("purpleChip")) || (computerAllCircles[i + j].className.includes("greenChip") && computerAllCircles[i + j + 8].className.includes("greenChip") && computerAllCircles[i + j + 16].className.includes("greenChip") && computerAllCircles[i + j + 24].className.includes("greenChip"))) {
                computerAllCircles[i + j].classList.add("blinking")
                computerAllCircles[i + j + 8].classList.add("blinking")
                computerAllCircles[i + j + 16].classList.add("blinking")
                computerAllCircles[i + j + 24].classList.add("blinking")
                return true
            }
        }
    }
    for (let j = 0; j < 22; j += 7) {
        for (let i = 6; i > 2; i--) {
            if ((computerAllCircles[i + j].className.includes("purpleChip") && computerAllCircles[i + j + 6].className.includes("purpleChip") && computerAllCircles[i + j + 12].className.includes("purpleChip") && computerAllCircles[i + j + 18].className.includes("purpleChip")) || (computerAllCircles[i + j].className.includes("greenChip") && computerAllCircles[i + j + 6].className.includes("greenChip") && computerAllCircles[i + j + 12].className.includes("greenChip") && computerAllCircles[i + j + 18].className.includes("greenChip"))) {
                computerAllCircles[i + j].classList.add("blinking")
                computerAllCircles[i + j + 6].classList.add("blinking")
                computerAllCircles[i + j + 12].classList.add("blinking")
                computerAllCircles[i + j + 18].classList.add("blinking")
                return true
            }
        }
    }

}

function checkConnectFour() {

    if (checkConnectFourByColumn(circlesColumnOne) || checkConnectFourByColumn(circlesColumnTwo) || checkConnectFourByColumn(circlesColumnThree) || checkConnectFourByColumn(circlesColumnFour) || checkConnectFourByColumn(circlesColumnFive) || checkConnectFourByColumn(circlesColumnSix) || checkConnectFourByColumn(circlesColumnSeven) || checkConnectFourByColumn(computerCirclesColumnOne) || checkConnectFourByColumn(computerCirclesColumnTwo) || checkConnectFourByColumn(computerCirclesColumnThree) || checkConnectFourByColumn(computerCirclesColumnFour) || checkConnectFourByColumn(computerCirclesColumnFive) || checkConnectFourByColumn(computerCirclesColumnSix) || checkConnectFourByColumn(computerCirclesColumnSeven)) {
        makeWinningPlayerBlink()
        return true
    } else if (checkConnectFourByRow(circlesRowOne) || checkConnectFourByRow(circlesRowTwo) || checkConnectFourByRow(circlesRowThree) || checkConnectFourByRow(circlesRowFour) || checkConnectFourByRow(circlesRowFive) || checkConnectFourByRow(circlesRowSix) || checkConnectFourByRow(circlesRowSeven) || checkConnectFourByRow(computerCirclesRowOne) || checkConnectFourByRow(computerCirclesRowTwo) || checkConnectFourByRow(computerCirclesRowThree) || checkConnectFourByRow(computerCirclesRowFour) || checkConnectFourByRow(computerCirclesRowFive) || checkConnectFourByRow(computerCirclesRowSix) || checkConnectFourByRow(computerCirclesRowSeven)) {
        makeWinningPlayerBlink()
        return true
    } else if (checkConnectFourByDiagonal()) {
        makeWinningPlayerBlink()
        return true
    } else {
        return false
    }

}

let applause = document.getElementsByTagName("audio")[1];
let boo = document.getElementsByTagName("audio")[2];

function makeWinningPlayerBlink() {

    if (document.getElementById("player1").className.includes("player-1")) {
        document.getElementById("player2").classList.add("blinking")
        document.getElementById("player2").classList.add("winning-background")
        document.getElementById("player1").classList.remove("player-1")
        document.querySelector(".player-turn").textContent = `Player 2 Wins`
        applause.play()
    } else if (document.getElementById("player2").className.includes("player-2")) {
        document.getElementById("player1").classList.add("blinking")
        document.getElementById("player1").classList.add("winning-background")
        document.getElementById("player2").classList.remove("player-2")
        document.querySelector(".player-turn").textContent = `Player 1 Wins`
        applause.play()
    } else if (document.getElementById("computer").className.includes("player-1")) {
        document.getElementById("player").classList.add("blinking")
        document.getElementById("player").classList.add("winning-background")
        document.getElementById("computer").classList.remove("player-1")
        document.querySelector(".player-turn.computer").textContent = `Player Wins`
        applause.play()
    } else if (document.getElementById("player").className.includes("player-2")) {
        document.getElementById("computer").classList.add("blinking")
        document.getElementById("computer").classList.add("winning-background")
        document.getElementById("player").classList.remove("player-2")
        document.querySelector(".player-turn.computer").textContent = `Computer Wins`
        boo.play()

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



function makeComputerPlay() {
    let x1 = getClickableCircleByColumn(computerCirclesColumnOne)
    let x2 = getClickableCircleByColumn(computerCirclesColumnTwo)
    let x3 = getClickableCircleByColumn(computerCirclesColumnThree)
    let x4 = getClickableCircleByColumn(computerCirclesColumnFour)
    let x5 = getClickableCircleByColumn(computerCirclesColumnFive)
    let x6 = getClickableCircleByColumn(computerCirclesColumnSix)
    let x7 = getClickableCircleByColumn(computerCirclesColumnSeven)

    let possibleConnectFourCircle = checkConnectThree()
    let possibleConnectThreeCircle = checkConnectTwo()
    if (!checkConnectFour()) {
        if (possibleConnectFourCircle.length === 0 && possibleConnectThreeCircle.length === 0) {
            let RandomInteger = Math.floor(Math.random() * 7)

            switch (RandomInteger) {
                case 0:
                    makeChipFall(0, "purpleChip", "computer")
                    break;
                case 1:
                    makeChipFall(1, "purpleChip", "computer")
                    break;
                case 2:
                    makeChipFall(2, "purpleChip", "computer")
                    break;
                case 3:
                    makeChipFall(3, "purpleChip", "computer")
                    break;
                case 4:
                    makeChipFall(4, "purpleChip", "computer")
                    break;
                case 5:
                    makeChipFall(5, "purpleChip", "computer")
                    break;
                case 6:
                    makeChipFall(6, "purpleChip", "computer")
                    break;

                default:
                    break;


            }
        } else if (possibleConnectFourCircle.length != 0) {
            console.log("three")
            if (possibleConnectFourCircle.className.includes("column1")) {
                makeChipFall(0, "purpleChip", "computer")
            } else if (possibleConnectFourCircle.className.includes("column2")) {
                makeChipFall(1, "purpleChip", "computer")
            } else if (possibleConnectFourCircle.className.includes("column3")) {
                makeChipFall(2, "purpleChip", "computer")
            } else if (possibleConnectFourCircle.className.includes("column4")) {
                makeChipFall(3, "purpleChip", "computer")
            } else if (possibleConnectFourCircle.className.includes("column5")) {
                makeChipFall(4, "purpleChip", "computer")
            } else if (possibleConnectFourCircle.className.includes("column6")) {
                makeChipFall(5, "purpleChip", "computer")
            } else if (possibleConnectFourCircle.className.includes("column7")) {
                makeChipFall(6, "purpleChip", "computer")
            }


        } else if (possibleConnectThreeCircle.length != 0) {
            console.log("two")
            if (possibleConnectThreeCircle.className.includes("column1")) {
                makeChipFall(0, "purpleChip", "computer")
            } else if (possibleConnectThreeCircle.className.includes("column2")) {
                makeChipFall(1, "purpleChip", "computer")
            } else if (possibleConnectThreeCircle.className.includes("column3")) {
                makeChipFall(2, "purpleChip", "computer")
            } else if (possibleConnectThreeCircle.className.includes("column4")) {
                makeChipFall(3, "purpleChip", "computer")
            } else if (possibleConnectThreeCircle.className.includes("column5")) {
                makeChipFall(4, "purpleChip", "computer")
            } else if (possibleConnectThreeCircle.className.includes("column6")) {
                makeChipFall(5, "purpleChip", "computer")
            } else if (possibleConnectThreeCircle.className.includes("column7")) {
                makeChipFall(6, "purpleChip", "computer")
            }

        }
        document.getElementById("computer").classList.remove("player-1")
        document.getElementById("player").classList.add("player-2")
        playerTurnText()
        checkConnectFour()
    }


}


function setClickEventListenerComputer(x) {
    if (x != 0) {
        x.onclick = (e) => {
            if (document.getElementById("player").className.includes("player-2") && !e.target.className.includes("purpleChip")) {
                makeChipFall(whichColumnIndex(e.target), "greenChip", "computer")
                document.getElementById("player").classList.remove("player-2")
                document.getElementById("computer").classList.add("player-1")
                playerTurnText()
                // checkConnectFour()
                timeoutID = window.setTimeout(makeComputerPlay, 1000)
                return 0

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

// MAKE COMPUTER A BIT MOR CLEVER //

function checkConnectThree() {
    let possibleConnectFourArray = [checkConnectThreeByColumn(computerCirclesColumnOne), checkConnectThreeByColumn(computerCirclesColumnTwo), checkConnectThreeByColumn(computerCirclesColumnThree), checkConnectThreeByColumn(computerCirclesColumnFour), checkConnectThreeByColumn(computerCirclesColumnFive), checkConnectThreeByColumn(computerCirclesColumnSix), checkConnectThreeByColumn(computerCirclesColumnSeven),
        checkConnectThreeByRow(computerCirclesRowOne), checkConnectThreeByRow(computerCirclesRowTwo), checkConnectThreeByRow(computerCirclesRowThree), checkConnectThreeByRow(computerCirclesRowFour), checkConnectThreeByRow(computerCirclesRowFive), checkConnectThreeByRow(computerCirclesRowSix), checkConnectThreeByRow(computerCirclesRowSeven), checkConnectThreeByDiagonal()
    ]
    let purpleResult = ""
    for (let i = 0; i < possibleConnectFourArray.length; i++) {
        if (possibleConnectFourArray[i] === "") {
            possibleConnectFourArray.splice(i, 1)
            i--
        } else if (possibleConnectFourArray[i].className.includes("purpleMarker")) {
            purpleResult = possibleConnectFourArray[i]
        }
    }
    if (possibleConnectFourArray.length === 0) {
        return ""
    } else if (purpleResult != "") {
        console.log("purpleMarker")
        return purpleResult
    } else {
        let RandomInteger = Math.floor(Math.random() * possibleConnectFourArray.length)
        return possibleConnectFourArray[RandomInteger]
    }
}

function checkConnectThreeByColumn(column) {
    let result = ""
    for (let i = 6; i > 2; i--) {
        if ((column[i].className.includes("purpleChip") && column[i - 1].className.includes("purpleChip") && column[i - 2].className.includes("purpleChip")) || (column[i].className.includes("greenChip") && column[i - 1].className.includes("greenChip") && column[i - 2].className.includes("greenChip"))) {
            if (!column[i - 3].className.includes("purpleChip") && !column[i - 3].className.includes("greenChip")) {
                if (column[i].className.includes("purpleChip")) {
                    column[i - 3].classList.add("purpleMarker")
                }
                result = column[i - 3]
            }

        }
    }
    return result

}


function checkConnectThreeByRow(row) {
    let clickableCircleArray = [getClickableCircleByColumn(computerCirclesColumnOne), getClickableCircleByColumn(computerCirclesColumnTwo), getClickableCircleByColumn(computerCirclesColumnThree), getClickableCircleByColumn(computerCirclesColumnFour), getClickableCircleByColumn(computerCirclesColumnFive), getClickableCircleByColumn(computerCirclesColumnSix), getClickableCircleByColumn(computerCirclesColumnSeven)]
    let result = ""
    for (let i = 0; i < 5; i++) {
        if ((row[i].className.includes("purpleChip") && row[i + 1].className.includes("purpleChip") && row[i + 2].className.includes("purpleChip")) || (row[i].className.includes("greenChip") && row[i + 1].className.includes("greenChip") && row[i + 2].className.includes("greenChip"))) {
            if (i === 0) {
                if (!row[i + 3].className.includes("greenChip") && !row[i + 3].className.includes("purpleChip") && clickableCircleArray.includes(row[i + 3])) {
                    if (row[i].className.includes("purpleChip")) {
                        row[i + 3].classList.add("purpleMarker")
                    }
                    result = row[i + 3]
                }

            } else if (i === 4) {
                if (!row[i - 1].className.includes("greenChip") && !row[i - 1].className.includes("purpleChip") && clickableCircleArray.includes(row[i - 1])) {
                    if (row[i].className.includes("purpleChip")) {
                        row[i - 1].classList.add("purpleMarker")
                    }
                    result = row[i - 1]
                }
            } else {
                /* Since the computer makes random choices in the final possibleConnectFourArray,
                 i'll push only one value here even in the case of multiple possibilities, 
                 because in this case computer looses anyway */

                if (!row[i - 1].className.includes("greenChip") && !row[i - 1].className.includes("purpleChip") && clickableCircleArray.includes(row[i - 1])) {
                    if (row[i].className.includes("purpleChip")) {
                        row[i - 1].classList.add("purpleMarker")
                    }
                    result = row[i - 1]
                } else if (!row[i + 3].className.includes("greenChip") && !row[i + 3].className.includes("purpleChip") && clickableCircleArray.includes(row[i + 3])) {
                    if (row[i].className.includes("purpleChip")) {
                        row[i + 3].classList.add("purpleMarker")
                    }
                    result = row[i + 3]
                }
            }
        }
    }
    return result

}


function checkConnectThreeByDiagonal() {
    let result = ""
    let clickableCircleArray = [getClickableCircleByColumn(computerCirclesColumnOne), getClickableCircleByColumn(computerCirclesColumnTwo), getClickableCircleByColumn(computerCirclesColumnThree), getClickableCircleByColumn(computerCirclesColumnFour), getClickableCircleByColumn(computerCirclesColumnFive), getClickableCircleByColumn(computerCirclesColumnSix), getClickableCircleByColumn(computerCirclesColumnSeven)]
    for (let j = 0; j < 29; j += 7) {
        for (let i = 0; i < 5; i++) {
            if ((computerAllCircles[i + j].className.includes("purpleChip") && computerAllCircles[i + j + 8].className.includes("purpleChip") && computerAllCircles[i + j + 16].className.includes("purpleChip")) || (computerAllCircles[i + j].className.includes("greenChip") && computerAllCircles[i + j + 8].className.includes("greenChip") && computerAllCircles[i + j + 16].className.includes("greenChip"))) {
                /* verifier que le result est cliquable
                C'est à dire qu'il est un inclus dans le 
                clickableCircleArray */
                if (clickableCircleArray.includes(computerAllCircles[i + j - 8])) {
                    if (computerAllCircles[i + j].className.includes("purpleChip")) {
                        computerAllCircles[i + j - 8].classList.add("purpleMarker")
                    }
                    result = computerAllCircles[i + j - 8]
                } else if (clickableCircleArray.includes(computerAllCircles[i + j + 24])) {
                    if (computerAllCircles[i + j].className.includes("purpleChip")) {
                        computerAllCircles[i + j + 24].classList.add("purpleMarker")
                    }
                    result = computerAllCircles[i + j + 24]
                }
            }
        }
    }
    for (let j = 0; j < 29; j += 7) {
        for (let i = 6; i > 1; i--) {
            if ((computerAllCircles[i + j].className.includes("purpleChip") && computerAllCircles[i + j + 6].className.includes("purpleChip") && computerAllCircles[i + j + 12].className.includes("purpleChip")) || (computerAllCircles[i + j].className.includes("greenChip") && computerAllCircles[i + j + 6].className.includes("greenChip") && computerAllCircles[i + j + 12].className.includes("greenChip"))) {

                if (clickableCircleArray.includes(computerAllCircles[i + j - 6])) {
                    if (computerAllCircles[i + j].className.includes("purpleChip")) {
                        computerAllCircles[i + j - 6].classList.add("purpleMarker")
                    }
                    result = computerAllCircles[i + j - 6]
                } else if (clickableCircleArray.includes(computerAllCircles[i + j + 18])) {
                    if (computerAllCircles[i + j].className.includes("purpleChip")) {
                        computerAllCircles[i + j + 18].classList.add("purpleMarker")
                    }
                    result = computerAllCircles[i + j + 18]
                }
            }
        }
    }
    return result

}

// Check Connect TWO //

function checkConnectTwo() {
    let possibleConnectFourArray = [checkConnectTwoByColumn(computerCirclesColumnOne), checkConnectTwoByColumn(computerCirclesColumnTwo), checkConnectTwoByColumn(computerCirclesColumnThree), checkConnectTwoByColumn(computerCirclesColumnFour), checkConnectTwoByColumn(computerCirclesColumnFive), checkConnectTwoByColumn(computerCirclesColumnSix), checkConnectTwoByColumn(computerCirclesColumnSeven),
        checkConnectTwoByRow(computerCirclesRowOne), checkConnectTwoByRow(computerCirclesRowTwo), checkConnectTwoByRow(computerCirclesRowThree), checkConnectTwoByRow(computerCirclesRowFour), checkConnectTwoByRow(computerCirclesRowFive), checkConnectTwoByRow(computerCirclesRowSix), checkConnectTwoByRow(computerCirclesRowSeven), checkConnectTwoByDiagonal()
    ]
    for (let i = 0; i < possibleConnectFourArray.length; i++) {
        if (possibleConnectFourArray[i] === "") {
            possibleConnectFourArray.splice(i, 1)
            i--
        }
    }

    let RandomInteger = Math.floor(Math.random() * possibleConnectFourArray.length)
    return possibleConnectFourArray.length === 0 ? "" : possibleConnectFourArray[RandomInteger]
}

function checkConnectTwoByColumn(column) {
    let result = ""
    for (let i = 6; i > 1; i--) {
        if ((column[i].className.includes("purpleChip") && column[i - 1].className.includes("purpleChip")) || (column[i].className.includes("greenChip") && column[i - 1].className.includes("greenChip"))) {
            if (!column[i - 2].className.includes("purpleChip") && !column[i - 2].className.includes("greenChip")) {
                result = column[i - 2]
            }

        }
    }
    return result

}


function checkConnectTwoByRow(row) {
    let clickableCircleArray = [getClickableCircleByColumn(computerCirclesColumnOne), getClickableCircleByColumn(computerCirclesColumnTwo), getClickableCircleByColumn(computerCirclesColumnThree), getClickableCircleByColumn(computerCirclesColumnFour), getClickableCircleByColumn(computerCirclesColumnFive), getClickableCircleByColumn(computerCirclesColumnSix), getClickableCircleByColumn(computerCirclesColumnSeven)]
    let result = ""
    for (let i = 0; i < 6; i++) {
        if ((row[i].className.includes("purpleChip") && row[i + 1].className.includes("purpleChip")) || (row[i].className.includes("greenChip") && row[i + 1].className.includes("greenChip"))) {
            if (i === 0) {
                if (!row[i + 2].className.includes("greenChip") && !row[i + 2].className.includes("purpleChip") && clickableCircleArray.includes(row[i + 2])) {
                    result = row[i + 2]
                }

            } else if (i === 5) {
                if (!row[i - 1].className.includes("greenChip") && !row[i - 1].className.includes("purpleChip") && clickableCircleArray.includes(row[i - 1])) {
                    result = row[i - 1]
                }
            } else {
                /* Since the computer makes random choices in the final possibleConnectFourArray,
                 i'll push only one value here even in the case of multiple possibilities, 
                 because in this case computer looses anyway */

                if (!row[i - 1].className.includes("greenChip") && !row[i - 1].className.includes("purpleChip") && clickableCircleArray.includes(row[i - 1])) {
                    result = row[i - 1]
                } else if (!row[i + 2].className.includes("greenChip") && !row[i + 2].className.includes("purpleChip") && clickableCircleArray.includes(row[i + 2])) {
                    result = row[i + 2]
                }
            }
        }
    }
    return result

}

function checkConnectTwoByDiagonal() {
    let result = ""
    let clickableCircleArray = [getClickableCircleByColumn(computerCirclesColumnOne), getClickableCircleByColumn(computerCirclesColumnTwo), getClickableCircleByColumn(computerCirclesColumnThree), getClickableCircleByColumn(computerCirclesColumnFour), getClickableCircleByColumn(computerCirclesColumnFive), getClickableCircleByColumn(computerCirclesColumnSix), getClickableCircleByColumn(computerCirclesColumnSeven)]
    for (let j = 0; j < 36; j += 7) {
        for (let i = 0; i < 6; i++) {
            if ((computerAllCircles[i + j].className.includes("purpleChip") && computerAllCircles[i + j + 8].className.includes("purpleChip")) || (computerAllCircles[i + j].className.includes("greenChip") && computerAllCircles[i + j + 8].className.includes("greenChip"))) {
                /* verifier que le result est cliquable
                C'est à dire qu'il est un inclus dans le 
                clickableCircleArray */
                if (clickableCircleArray.includes(computerAllCircles[i + j - 8])) {
                    result = computerAllCircles[i + j - 8]
                } else if (clickableCircleArray.includes(computerAllCircles[i + j + 16])) {
                    result = computerAllCircles[i + j + 16]
                }
            }
        }
    }
    for (let j = 0; j < 36; j += 7) {
        for (let i = 6; i > 0; i--) {
            if ((computerAllCircles[i + j].className.includes("purpleChip") && computerAllCircles[i + j + 6].className.includes("purpleChip")) || (computerAllCircles[i + j].className.includes("greenChip") && computerAllCircles[i + j + 6].className.includes("greenChip"))) {

                if (clickableCircleArray.includes(computerAllCircles[i + j - 6])) {
                    result = computerAllCircles[i + j - 6]
                } else if (clickableCircleArray.includes(computerAllCircles[i + j + 12])) {
                    result = computerAllCircles[i + j + 12]
                }
            }
        }
    }
    return result

}