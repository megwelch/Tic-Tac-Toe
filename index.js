const gridSquares = document.querySelectorAll('.square')
const gridArray = Array.from(gridSquares)
const restartBtn = document.querySelector('#restart-btn')
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let tracker = ['', '', '', '', '', '', '', '', '']
let player = {
    human: 'X',
    computer: 'O'
}


const startGame = () => {
    gridSquares.forEach(square => square.addEventListener('click', squareClicked, {once:true}))
}

function squareClicked (square) {
    playerTurn(square.target.id)
}

function playerTurn (squareId) {
    document.getElementById(squareId).innerText = player.human
    tracker.splice(squareId, 1, squareId)

    computerTurn()
    function computerTurn (){
        let randomIndex = Math.floor(Math.random() * tracker.length)
        if (!tracker[randomIndex]){
            document.getElementById(randomIndex).innerText = player.computer
            tracker.splice(randomIndex, 1, randomIndex);
        } else {
            computerTurn()
        }
    }
    console.log(tracker)
}

function check(spot1, spot2, spot3){
    if (
        (gridSquares[spot1].includes(player)) &
        (gridSquares[spot2].includes(player)) &
        (gridSquares[spot3].includes(player))
    ){
        return true
    } else
        return false
}

function winCheck () {
        if (check(0, 1, 2)){
        return true
    } else if(check(3, 4, 5)){
        return true
    } else if (check(6, 7, 8)){
        return true
    } else if (check(0,3, 6,)){
        return true
    } else if (check(1, 4, 7)){
        return true
    } else if (check(2, 5, 8)){
        return true
    } else if (check (0, 4, 8)){
        return true
    } else if (check(2, 4, 6)){
        return true
    } else {
        return false
    }
}

startGame()
