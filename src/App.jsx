import { useEffect } from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ProductList from './components/ProductList/ProductList'
import { useTelegram } from './hooks/useTelegram'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
