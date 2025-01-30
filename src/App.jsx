function App() {

  

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
