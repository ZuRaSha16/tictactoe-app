import { useState } from "react"

function App() {

  const[board, setBoard] = useState(Array(9).fill(null))
  
  const [isXTurn, setIsXTurn] = useState(true)

  const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], // rows

    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], // columns

    [0, 4, 8], 
    [2, 4, 6] // diagonals
  ]

  function getWinner(squares){

    for(let combination of winningCombinations){
      const [a,b,c] = combination

      if(
        squares [a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ){
        return squares[a]
      }
    }
    return null
  }

  function handleSquareClick(index){
    if(board[index] || getWinner(board))
      return
    
    const updatedBoard = [...board]
    updatedBoard[index] = isXTurn ? 'X' : 'O'

    setBoard(updatedBoard)
    setIsXTurn(!isXTurn)
  }

  function getGameStatus(){
    const winner = getWinner(board)

    if(winner){
      return `Winner: ${winner}`
    } else if(board.every(square => square)){
      return 'Draw'
    } else {
      return `Next player: ${isXTurn ? 'X' : 'O'}`
  }

  function resetGame () 
  {
    setBoard(Array(9).fill(null))
    setIsXTurn(true)
  }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center
    justify-center">

      <div className="w-full max-w-[400px} mx-5">

        <h1 className="text-5xl font-semibold text-white mb-8
        text-center">Tic Tac Toe</h1>

        <div>
          game status
        </div>

        <div className="grid grid-col-3 gap-1 rounded-xl
        overflow-hidden mb-6">

          <button className="w-full py-3 text-lg text-white border
          rounded-xl hover:bg-gray-50 hover:text-gray-800
          transition-colors duration-200">
            NEW GAME
          </button>
        </div>
      </div>

    </div>
  )
}

export default App