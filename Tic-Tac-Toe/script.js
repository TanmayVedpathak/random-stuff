let playertext = document.getElementById('playertext')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const X_TEXT = "X"
const O_TEXT = "0"
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let current_player = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    const id = e.target.id
    if(!spaces[id]){
        // spaces[id] = current_player
        // e.target.innerText = current_player
        spaces[id] = X_TEXT
        e.target.innerText = X_TEXT
        if(playerHasWon() !== false){
            playertext.innerText = X_TEXT + ' has won!'
            return
        }
        // current_player = current_player == X_TEXT ? O_TEXT: X_TEXT
        computerMove()
    }
}

function computerMove(){
    const randomSpace = Math.floor(Math.random()*9)
    if(spaces[randomSpace] != null){
        computerMove()
    }
    if(spaces[randomSpace] == null) {
        spaces[randomSpace] = O_TEXT
        boxes[randomSpace].innerText = O_TEXT
    }
    if(playerHasWon() !== false){
        playertext.innerText = O_TEXT + ' has won!'
        return
    }
}

function playerHasWon(){
    for (const condition of winningCombos) {
        let [a,b,c] = condition
        if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c])){
            for(let i=0; i<spaces.length; i++){
                if(spaces[i] == null){
                    spaces[i] = "-"
                    boxes[i].innerText = '-'
                }
            }
            condition.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            return true
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart(){
    current_player = X_TEXT
    playertext.innerText = 'TIC TAC TOE'
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })
}

startGame()