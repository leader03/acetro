import React, { useState } from 'react'
import Card from './card'
import list from './list.json'

function Bodi(props) {
  const [isActive, setIsActive] = useState(1)
 
  function toggle(index) {
    setIsActive(index)
  }
  return (
    <>
      <div className=' mt-10 w-full '>
        <div className='  '>
          <ul className='flex w-full overflow-auto  '>
            <li className={isActive === 1 ? "quick_replies activess" : "quick_replies"}><button onClick={() => toggle(1)}>All </button></li>
            <li className={isActive === 2 ? "quick_replies activess" : "quick_replies"}><button onClick={() => toggle(2)}>Pizza</button></li>
            <li className={isActive === 3 ? "quick_replies activess" : "quick_replies"}><button onClick={() => toggle(3)}>Chicken</button></li>
            <li className={isActive === 4 ? "quick_replies activess" : "quick_replies"}><button onClick={() => toggle(4)}>Chowmein</button></li>
            <li className={isActive === 5 ? "quick_replies activess" : "quick_replies"}><button onClick={() => toggle(5)}>Chowmein</button></li>
            <li className={isActive === 6 ? "quick_replies activess" : "quick_replies"}><button onClick={() => toggle(6)}>Chowmein</button></li>
          </ul>
        </div>
      </div>

      <div className={isActive === 1 || isActive === 2 ? "visible" : "hidden"}>
        {list.map((cont) => {
          return (
             cont.catagory === "pizza"  && <Card
             key={cont.id}
           setCartItems =  { props.setCartItems }
            cont={cont} 
          /> 
          )
        })}

      </div>
      <div className={isActive === 1 || isActive === 3 ? "visible" : "hidden"}>
      {list.map((cont) => {
          return (
             cont.catagory === "chicken"  && <Card
            key={cont.id}
            setCartItems =  { props.setCartItems }
            cont={cont} 
          /> 
          )
        })}
      </div>
      <div className={isActive === 1 || isActive === 4 ? "visible" : "hidden"}>
      {list.map((cont) => {
          return (
             cont.catagory === "chowmein"  && <Card
            key={cont.id}
            setCartItems =  { props.setCartItems }
            cont={cont} 
          /> 
          )
        })}
      </div>



    </>
  )
}

export default Bodi
