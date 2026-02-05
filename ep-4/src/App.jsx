import './App.css'
import { Navbar } from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <>
       <Navbar itemNum={12} />
       <ProductCard  />
    </>
  )
}

export default App
