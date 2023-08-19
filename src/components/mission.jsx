import React from 'react'
import '../styles/missions.css'
import {mission} from '../scripts/achievements'
function Missions() {
    const Achivement=mission.map((data)=>{
        return(
            <div className="mission-card" key={data.id}>
                <p>{data.txt}</p>
            </div>
        )
    })
    return (
        <div className='mission-div col'>
            <h1>Our Mission</h1>
            <div className="mission-points row">{Achivement}</div>
        </div>
    )
}

export default Missions