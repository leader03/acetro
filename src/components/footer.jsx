import React, { useState } from 'react'

function Footer(props) {
   
  return (
    <>
    <div className=' fixed inline-block bottom-0 bg-blue-700 h-20 w-full '>
        <div className=' items-center text-white '>
            <ul className=' flex justify-center items-center'>
                <li className='m-5'><button><a href="#">Home</a></button></li>
                <li><button onClick={props.handle}>Show popup</button></li>
            </ul>
        </div>

    </div>
   
    </>
  )
}

export default Footer
