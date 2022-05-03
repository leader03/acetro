import React from 'react'

function Popup(props) {
  const remove = () => {
    
  }

  return (
    <div className={` fortransition ${props.trigger && "active"}  `}>

      {props.cartItems.map((cartItem) => {
        return (
          <div className=" w-screen border-2 border-red-500 flex  justify-around py-4 text-white ">
            <div><span>{cartItem.name}</span></div>
            <div><em>{cartItem.prize}</em></div>
            <button onClick={remove}>Remove</button>

          </div>
        )
      })}
      <button className=' fixed bottom-0 text-white' onClick={props.handle}>Close Popup</button>

    </div>

  )
}

export default Popup
