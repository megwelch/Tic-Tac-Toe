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
let tracker = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const human = 'X'
const computer = 'O'


const startGame = () => {
    gridSquares.forEach(square => square.addEventListener('click', squareClicked, {once:true}))
}

function squareClicked (square) {
    playerTurn(square.target.id)
}

function playerTurn (squareId, computerTurn){
    if(squareClicked){
        document.getElementById(squareId).innerText = human
        tracker.splice(squareId, 1)
        computerTurn
    } 

    function computerTurn (){
        const randomIndex = Math.floor(Math.random() * tracker.length)
        let computerChoice = tracker[randomIndex]
        document.getElementById(computerChoice).innerText = computer
        tracker.splice(randomIndex, 1)
    }
}




function check(spot1, spot2, spot3){
    if (spot1.getElementByClass('square').interHTML = 
    ){
        return true
    } else {
        return false
    }
}





startGame()

// -----------------------------------------------------------------


// const gridSquares = document.querySelectorAll('.square')
// const gridArray = Array.from(gridSquares)
// const restartBtn = document.querySelector('#restart-btn')
// const winCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]
// const tracker = [0, 1, 2, 3, 4, 5, 6, 7, 8]


// const human = 'X'
// const computer = 'O'


// const startGame = () => {
//     gridSquares.forEach(square => square.addEventListener('click', squareClicked, {once:true}))
// }

// function squareClicked (square) {
//     playerTurn(square.target.id, human)
// }

// function playerTurn (squareId){
//     document.getElementById(squareId).innerText = human
//     tracker.splice(squareId, 1)
//     computerTurn()
// }

// function computerTurn (){
//     if (squareClicked){
//         const randomIndex = Math.floor(Math.random() * tracker.length)
//         let computerChoice = tracker[randomIndex]
//         document.getElementById(computerChoice).innerText = computer
//         tracker.splice(randomIndex, 1);
//     }
// }


// function check(spot1, spot2, spot3){
//     if (
//         spot1
//     ){
//         return true
//     } else {
//         return false
//     }
// }





// startGame()

// -------------------------------------------------------------


// const squareClicked = (e) => {
//     const index = gridArray.indexOf(e.target)
//     gridArray[index].innerHTML = human

//     const spliceNum = tracker.indexOf(index)
//     tracker.splice(spliceNum, 1)

//     turn (e.target.id, human)
// }

// function turn (index, player)



    







// function turn (squareId, player){
//     tracker[squareId] = player
//     document.getElementById(squareId).innerText = player
// }

// function changePlayer () {

// }







// const sq1 = document.querySelector('#one')
// const sq2 = document.querySelector('#two')
// const sq3 = document.querySelector('#three')
// const sq4 = document.querySelector('#four')
// const sq5 = document.querySelector('#five')
// const sq6 = document.querySelector('#six')
// const sq7 = document.querySelector('#seven')
// const sq8 = document.querySelector('#eight')
// const sq9 = document.querySelector('#nine')


// const board = ['', '', '', '', '', '', '', '', '']
// const choices = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9]

// const squareClick = () =>{
//     console.log('click')

// }

// square.addEventListener('click', squareClick)









// // const playerMove = () => {

// // }




// // const div = document.querySelector(".square")
// // const playerX = div.innerhtml = 'X'
// // playerX.classList.add('x')

// const makeX = () => {
//     let one = div.innerHTML = 'X'
//     div.classList.add('x')
// }

// div.addEventListener("click", makeX);