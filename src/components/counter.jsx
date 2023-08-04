import React from 'react'
import '../styles/counter.css'
import CountUp from 'react-countup'

function Counter() {
  return (
    <div className="counterUp">
        <div className="counter-div-1 col">
          <div className="sub-counter-div row">
            <h1><CountUp start={0} end={100} duration={4}/></h1>
            <span className='plus'>+</span>
          </div>
          <p>Cities</p>
        </div>
        <div className="counter-div-1 col">
          <div className="sub-counter-div row">
            <h1><CountUp start={1} end={250} duration={4}/></h1>
            <span className='plus'>+</span>
          </div>
          <p>Internships</p>
        </div>
        <div className="counter-div-1 col">
          <div className="sub-counter-div row">
            <h1><CountUp start={1} end={400} duration={5}/></h1>
            <span className='plus'>+</span>
          </div>
          <p>Companies</p>
        </div>
        <div className="counter-div-1 col">
          <div className="sub-counter-div row">
            <h1><CountUp start={0} end={900} duration={3}/></h1>
            <span className='plus'>+</span>
          </div>
          <p>Jobs</p>
        </div>
    </div>
  )
}

export default Counter