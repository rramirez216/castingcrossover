import { useState } from 'react'
import GlobalStyles from './components/GlobalStyles'
import Home from './pages/Home'

function App() {
  const [actorOne, setActorOne] = useState('')
  const [actorTwo, setActorTwo] = useState('')
  const [NamesObject, setNamesObject] = useState(null)

  return (
    <div>
      <Home />
      <GlobalStyles />
    </div>
  )
}

export default App
