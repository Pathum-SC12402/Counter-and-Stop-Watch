import './ButtonType_1.css';
import React from 'react'


export default function ButtonType_1({name,onClick}) {
  return (
    <div>
      <button className='button1' onClick={onClick}>{name}</button>
    </div>
  )
}
