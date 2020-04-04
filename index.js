function main() {
    getFirstPlayer()
    setInterval(setClickableCircles, 1000)
    setInterval(playerTurnText, 500)
}

main()


//--------------------------------//

// Le if et le else s'execute consecutivement puisque je change ma condition devient fausse dans le if //
// Bug 2 --> si je clique deux fois de suite sur un jeton il change de couleur//

function getFirstPlayer() {
    let firstPlayer = Math.floor(Math.random() * 2)
    if (firstPlayer) {
        document.getElementById("player1").classList.add("player-1")
    } else {
        document.getElementById("player2").classList.add("player-2")
    }

}

function playerTurnText() {
    if (document.getElementById("player1").className.includes("player-1")) {
        document.querySelector(".player-turn").textContent = `It's player 1's Turn`
    } else {
        document.querySelector(".player-turn").textContent = `It's player 2's Turn`
    }
}

const circlesColumnOne = document.querySelectorAll("div.container :nth-child(7n+1)")
const circlesColumnTwo = document.querySelectorAll("div.container :nth-child(7n+2)")
const circlesColumnThree = document.querySelectorAll("div.container :nth-child(7n+3)")
const circlesColumnFour = document.querySelectorAll("div.container :nth-child(7n+4)")
const circlesColumnFive = document.querySelectorAll("div.container :nth-child(7n+5)")
const circlesColumnSix = document.querySelectorAll("div.container :nth-child(7n+6)")
const circlesColumnSeven = document.querySelectorAll("div.container :nth-child(7n+7)")

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

    if (!column[6].className.includes("redChip") && !column[6].className.includes("greenChip")) {
        return column[6]
    } else if (column[0].className.includes("redChip") || column[0].className.includes("greenChip")) {
        return 0
    } else {
        for (let i = 1; i < 7; i++) {

            if (column[i].className.includes("redChip") || column[i].className.includes("greenChip")) {
                clickableCircle = column[i - 1]
                break;
            }
        }
    }

    return clickableCircle
}

function setClickEventListener(x) {
    if (x != 0) {
        x.onclick = (e) => {
            if (document.getElementById("player1").className.includes("player-1") && !e.target.className.includes("greenChip")) {
                e.target.classList.add("redChip")
                document.getElementById("player1").classList.remove("player-1")
                document.getElementById("player2").classList.add("player-2")
                console.log(checkConnectFour())
                return 0
            } else if (!e.target.className.includes("redChip")) {
                e.target.classList.add("greenChip")
                document.getElementById("player2").classList.remove("player-2")
                document.getElementById("player1").classList.add("player-1")
                console.log(checkConnectFour())
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
        if ((column[i].className.includes("redChip") && column[i + 1].className.includes("redChip") && column[i + 2].className.includes("redChip") && column[i + 3].className.includes("redChip")) || (column[i].className.includes("greenChip") && column[i + 1].className.includes("greenChip") && column[i + 2].className.includes("greenChip") && column[i + 3].className.includes("greenChip"))) {
            return true
        }
    }
}

function checkConnectFourByRow(row) {
    for (let i = 0; i < 4; i++) {
        if ((row[i].className.includes("redChip") && row[i + 1].className.includes("redChip") && row[i + 2].className.includes("redChip") && row[i + 3].className.includes("redChip")) || (row[i].className.includes("greenChip") && row[i + 1].className.includes("greenChip") && row[i + 2].className.includes("greenChip") && row[i + 3].className.includes("greenChip"))) {
            return true
        }
    }
}

function checkConnectFourByDiagonal() {
    for (let j = 0; j < 23; j += 7) {
        for (let i = 0; i < 4; i++) {
            if ((allCircles[i + j].className.includes("redChip") && allCircles[i + j + 8].className.includes("redChip") && allCircles[i + j + 16].className.includes("redChip") && allCircles[i + j + 24].className.includes("redChip")) || (allCircles[i + j].className.includes("greenChip") && allCircles[i + j + 8].className.includes("greenChip") && allCircles[i + j + 16].className.includes("greenChip") && allCircles[i + j + 24].className.includes("greenChip"))) {
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