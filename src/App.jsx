import { useEffect } from 'react';
import './App.css'

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      work
      <button onClick={onClose}>Close</button>
    </>
  )
}

export default App
