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
const human= 'X'
let humanArr = ['', '', '', '', '', '', '', '', '']
const computer= 'O'
let compArr = ['', '', '', '', '', '', '', '', '']


const startGame = () => {
    gridSquares.forEach(square => square.addEventListener('click', squareClicked, {once:true}))
}

function squareClicked (square) {
    playerTurn(square.target.id)
}

function playerTurn (squareId) {
    document.getElementById(squareId).innerText = human
    tracker.splice(squareId, 1, squareId)
    humanArr.splice(squareId, 1, squareId)

    computerTurn()
    function computerTurn (){
        let randomIndex = Math.floor(Math.random() * tracker.length)
        if (!tracker[randomIndex]){
            document.getElementById(randomIndex).innerText = computer
            tracker.splice(randomIndex, 1, randomIndex);
            compArr.splice(randomIndex, 1, randomIndex)
            document.getElementById(randomIndex).classList.add('disable-click')
        } else {
            computerTurn()
        }
    }
}


function checkWin () {

    for(let i = 0; i < winCombos.length; i++){

        const condition = winCombos[i]
        const a = tracker[condition[0]]
        const b = tracker[condition[1]]
        const c = tracker[condition[2]]

        if((a == '') || (b == '') || (c == '')){
        } else if ((a.innerText == 'X') && (b.innerText == 'X') && (c.innerText == 'X')){
            document.getElementById('winner-text').classList.add('You Won!')
        } else if ((a.innerText == 'O') && (b.innerText == 'O') && (c.innerText == 'O')){
            document.getElementById('winner-text').classList.add('Computer Won!')
        }
    }
    
}

restartBtn.addEventListener('click', restart)
function restart () {
    window.location.reload();
}

startGame()
checkWin()


// function check(spot1, spot2, spot3){
//     console.log(gridSquares[0].innerText)
//     if (
//         (gridSquares[spot1].innerHTML == 'X') &
//         (gridSquares[spot2].innerHTML == 'X') &
//         (gridSquares[spot3].innerHTML == 'X') 
//     ){
//         return true
//     } else
//         return false
// }

// function winCheck () {

//     if (check(0, 1, 2)){
//         return true
//     } else if(check(3, 4, 5)){
//         return true
//     } else if (check(6, 7, 8)){
//         return true
//     } else if (check(0,3, 6,)){
//         return true
//     } else if (check(1, 4, 7)){
//         return true
//     } else if (check(2, 5, 8)){
//         return true
//     } else if (check (0, 4, 8)){
//         return true
//     } else if (check(2, 4, 6)){
//         return true
//     } else {
//         return false
//     }
// }
// check()
// winCheck()