let gridSquares = document.querySelectorAll('.square')
console.log(gridSquares)
const gridArray = Array.from(gridSquares)
const restartBtn = document.querySelector('#restart-btn')
const messageText = document.querySelector('#message-text')
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
let playedBoard = ['', '', '', '', '', '', '', '', '']
let isPlayerOne = true
let isGameOver = false
let moveCount = 0

const startGame = () => {
    gridSquares.forEach(square => square.addEventListener('click', playSpot, {once:true}))
}

const checkWin = () => {
    const winX1 =
		playedBoard[0] === 'X' &&
		playedBoard[1] === 'X' &&
		playedBoard[2] === 'X'
	const winX2 =
		playedBoard[0] === 'X' &&
		playedBoard[3] === 'X' &&
		playedBoard[6] === 'X'
	const winX3 =
		playedBoard[0] === 'X' &&
		playedBoard[4] === 'X' &&
		playedBoard[8] === 'X'
	const winX4 =
		playedBoard[1] === 'X' &&
		playedBoard[4] === 'X' &&
		playedBoard[7] === 'X'
	const winX5 =
		playedBoard[2] === 'X' &&
		playedBoard[5] === 'X' &&
		playedBoard[8] === 'X'
	const winX6 =
		playedBoard[2] === 'X' &&
		playedBoard[4] === 'X' &&
		playedBoard[6] === 'X'
	const winX7 =
		playedBoard[3] === 'X' &&
		playedBoard[4] === 'X' &&
		playedBoard[5] === 'X'
	const winX8 =
		playedBoard[6] === 'X' &&
		playedBoard[7] === 'X' &&
		playedBoard[8] === 'X'
	const winO1 =
		playedBoard[0] === 'O' &&
		playedBoard[1] === 'O' &&
		playedBoard[2] === 'O'
	const winO2 =
		playedBoard[0] === 'O' &&
		playedBoard[3] === 'O' &&
		playedBoard[6] === 'O'
	const winO3 =
		playedBoard[0] === 'O' &&
		playedBoard[4] === 'O' &&
		playedBoard[8] === 'O'
	const winO4 =
		playedBoard[1] === 'O' &&
		playedBoard[4] === 'O' &&
		playedBoard[7] === 'O'
	const winO5 =
		playedBoard[2] === 'O' &&
		playedBoard[5] === 'O' &&
		playedBoard[8] === 'O'
	const winO6 =
		playedBoard[2] === 'O' &&
		playedBoard[4] === 'O' &&
		playedBoard[6] === 'O'
	const winO7 =
		playedBoard[3] === 'O' &&
		playedBoard[4] === 'O' &&
		playedBoard[5] === 'O'
	const winO8 =
		playedBoard[6] === 'O' &&
		playedBoard[7] === 'O' &&
		playedBoard[8] === 'O'

        ++moveCount
        console.log(moveCount)
        if(moveCount === 9){
            messageText.innerText = `It's a tie!`
            return true
        }

        if(winX1 || winX2 || winX3 || winX4 || winX5 || winX6 || winX6 || winX7 || winX8){
            messageText.innerText = 'Player X Wins!'
            return true
        } else if (winO1 || winO2 || winO3 || winO4 || winO5 || winO6 || winO6 || winO7 || winO8){
            messageText.innerText= 'Player O Wins!'
            return true
        }
}

const playSpot = (event) => {
    const playedSpot = event.target.getAttribute('id')
    const currentPlayer = isPlayerOne ? 'X' : 'O'
    if (isGameOver) return
    isPlayerOne = !isPlayerOne
    event.target.innerText = currentPlayer
    playedBoard[playedSpot] = currentPlayer
    console.log(playedBoard)
    isGameOver = checkWin()
}

const restart = () => {
    playedBoard = ['', '', '', '', '', '', '', '', '']
    isPlayerOne = true
    isGameOver = false
    moveCount = 0
    messageText.innerText = ''
    gridArray.forEach((square) => {
		square.innerText = ''
	})
	startGame()
}

restartBtn.addEventListener('click', restart)

startGame()