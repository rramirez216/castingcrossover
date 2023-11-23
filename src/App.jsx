import Home from './pages/Home'

function App() {
  return (
    <div className='h-full flex flex-col items-center'>
      <h1 className='text-4xl'>Costar Crossover</h1>
      <h2>
        Enter the name of an actor in each input field to find any movie they
        have co starred in:
      </h2>
      <Home />
    </div>
  )
}

export default App
