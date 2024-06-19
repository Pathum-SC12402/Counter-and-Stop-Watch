import './ButtonType_2.css'
import React from 'react'

export default function ButtonType_2({name,onClick}) {
  return (
    <div>
      <button className='button2' onClick={onClick}>{name}</button>
    </div>
  )
}
