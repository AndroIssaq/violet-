import { useState } from 'react'
import './App.css'
import { Route , Routes } from 'react-router'
import Home from './sections/home/Home'
import Navbar from './sections/global/Navbar'
import { Provider } from 'react-redux'
import CartSlice from './features/CartSlice'
import { setIsCartOpen } from './features/CartSlice'
import Footer from './sections/footer/Footer'
import Products from './sections/products/Products';
import ItemDetails from './sections/itemDetails/ItemDetails'
import CheckOut from './sections/checkOut/CheckOut'
 function App() {
  const [count, setCount] = useState(0)
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/itemDetalis/:itemId' element={<ItemDetails/>}/>
          <Route path='/checkOut' element={<CheckOut/>}/>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
