import React from 'react'


function Card(props) {
    const {name,prize,catagory} = props.cont
     
    function click (){
      props.setCartItems((prev) =>  ( [ ...prev,  {name:name, prize:prize}] ))
    }
  return (
    <div className=" w-screen border-2 border-red-500 flex  justify-around py-4 ">
      <div><span>{name}</span></div>
      <div><em>{prize}</em></div>
      <div>
          <button onClick={click}>Add</button>
      </div>
    </div>
  )
}

export default Card
