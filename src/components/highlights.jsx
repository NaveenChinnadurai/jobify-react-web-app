import React from 'react'
import { highlights } from '../scripts/quotes'
import '../styles/highlight.css'
function Highlights() {
  const highlight=highlights.map((quotes)=>{
    return(
      <div className="highlights" key={quotes.id}>
        <h1>"</h1>
        <p>{quotes.txt}</p>
        <h1 className='astris-end'>"</h1>
      </div>
    )
  })
  return (
    <div className='col highlight-div '>
        <h1>Top Reasons to Pick Our Platform</h1>
        <div className="row features-div">{highlight}</div>
      </div>
  )
}

export default Highlights