import React from 'react'
import { highlights } from '../scripts/quotes'
import '../styles/highlight.css'
function Highlights() {
  const highlight=highlights.map((quotes)=>{
    return(
      <div className="highlights">
        <h1>"</h1>
        <p>{quotes}</p>
        <h1 className='astris-end'>"</h1>
      </div>
    )
  })
  return (
    <div className='highlight-div col'>
        <h1>Top Reasons to Pick Our Platform</h1>
        <div className="features-div row">{highlight}</div>
      </div>
  )
}

export default Highlights