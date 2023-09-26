import { useState } from 'react'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyles />
    </div>
  )
}

export default App
