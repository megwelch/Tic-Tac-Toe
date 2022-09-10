let squares = Array.from(document.getElementsByClassName('square'))
let emptySpaces = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

const startGame = () => {
    squares.forEach(square => square.addEventListener('click', squareClicked, {once:true}))
}

const squareClicked = (e) => {
   const id = e.target.id
   if (!emptySpaces[id]){
    emptySpaces[id] = currentPlayer
    e.target.innerHTML = currentPlayer
    e.target.classList.add('x')
   }
}

startGame()






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

// // let computerMove = () => {
// //     const randomIndex = Math.floor(Math.random() * choices.length)
// //     let computerChoice = choices[randomIndex]
// // }


// // const div = document.querySelector(".square")
// // const playerX = div.innerhtml = 'X'
// // playerX.classList.add('x')

// const makeX = () => {
//     let one = div.innerHTML = 'X'
//     div.classList.add('x')
// }

// div.addEventListener("click", makeX);

