import React, {useState} from 'react'

import Header from './components/Header'
import Bodi from './components/Bodi'
import Footer from './components/footer'
import Popup from './components/Popup'

function App() {
  const [popup, setPopup] = useState(false)
  const [cartItems,setCartItems] = useState([

  ])
  function handleClick (){
      setPopup (prev => !prev)
      // document.querySelector('.fortransition').classList.toggle("active")
  }
  return (
    <>
     <Popup
      cartItems = {cartItems} 
      trigger={popup}
      handle={handleClick}
      />
      <Header />
      
     
      <Bodi 
      setCartItems = {setCartItems}
      />
      <Footer 
      
       handle={handleClick}
      />
    
   
    </>
  )
}

export default App

