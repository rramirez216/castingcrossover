import Home from './pages/Home'

function App() {
  return (
    <div className='h-full flex flex-col gap-16 px-4 pt-16 font-playpen text-lg '>
      <header className='text-center'>
        <h1 className='text-4xl mb-4'>Costar Crossover</h1>
        <p>
          Enter the name of an actor in each input field to find any movie they
          have co starred in:
        </p>
      </header>
      <Home />
    </div>
  )
}

export default App
