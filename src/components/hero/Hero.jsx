import { React, useState, useEffect } from 'react'
import useName from '../../hooks/useName'

function Hero() {
  const list =useName()
  return (
    <div>
      <h1>WELCOME</h1>
      {list.map((name, index) => (
        <p key={index}>
          {name.id}|{name.name}
        </p>
      ))}

    </div>
  )
}
export default Hero
