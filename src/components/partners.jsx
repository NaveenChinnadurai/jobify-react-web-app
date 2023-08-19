import React from 'react'
import '../styles/partners.css'
import { partner } from '../scripts/partnersIcons'
function Partners() {
    const Partner=partner.map((img)=>{
        return(
            <img src={img.img} alt="Image" className={img.name} key={img.id}/>
        )
    })
  return (
    <div className='partners-div'>
        <h1>Our Frequent Partners</h1>
        <div className="partners-icons">{Partner}</div>
    </div>
  )
}

export default Partners