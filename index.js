function main() {
    getFirstPlayer()
    setInterval(setClickableCircles, 500)
}

main()

//--------------------------------//

// Bug to resolve cannot set onclick on null quand on finit une colonne -->x1 !=0//


function getFirstPlayer() {
    let firstPlayer = Math.floor(Math.random() * 2)
    if (firstPlayer) {
        document.getElementById("player1").classList.add("player-1")
    } else {
        document.getElementById("player2").classList.add("player-2")
    }

}

let circlesColumnOne = document.querySelectorAll("div.container :nth-child(7n+1)")
let circlesColumnTwo = document.querySelectorAll("div.container :nth-child(7n+2)")
let circlesColumnThree = document.querySelectorAll("div.container :nth-child(7n+3)")
let circlesColumnFour = document.querySelectorAll("div.container :nth-child(7n+4)")
let circlesColumnFive = document.querySelectorAll("div.container :nth-child(7n+5)")
let circlesColumnSix = document.querySelectorAll("div.container :nth-child(7n+6)")
let circlesColumnSeven = document.querySelectorAll("div.container :nth-child(7n+7)")


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

function setClickableCircles() {
    let x1 = getClickableCircleByColumn(circlesColumnOne)
    let x2 = getClickableCircleByColumn(circlesColumnTwo)
    let x3 = getClickableCircleByColumn(circlesColumnThree)
    let x4 = getClickableCircleByColumn(circlesColumnFour)
    let x5 = getClickableCircleByColumn(circlesColumnFive)
    let x6 = getClickableCircleByColumn(circlesColumnSix)
    let x7 = getClickableCircleByColumn(circlesColumnSeven)



    x1.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }
    x2.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }
    x3.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }

    x4.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }
    x5.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }
    x6.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }
    x7.onclick = (e) => {
        if (document.getElementById("player1").className.includes("player-1")) {
            e.target.classList.add("redChip")
            document.getElementById("player1").classList.remove("player-1")
            document.getElementById("player2").classList.add("player-2")
        } else {
            e.target.classList.add("greenChip")
            document.getElementById("player2").classList.remove("player-2")
            document.getElementById("player1").classList.add("player-1")
        }
    }
}