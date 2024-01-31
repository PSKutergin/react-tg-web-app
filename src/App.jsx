import { useEffect } from 'react';
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'
import './App.css'

function App() {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </>
  )
}

export default App
