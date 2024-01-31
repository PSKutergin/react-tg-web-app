import { useEffect } from 'react';
import Header from './components/Header/Header'
import './App.css'

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default App
