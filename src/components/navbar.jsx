import React from 'react'
import '../styles/navbar.css'
export const Navbar=()=> {
  return (
    <div className="nav-div1">
        <div className="subdiv1">
            <div className="title-icon ">
                <span>JobiFy</span>
            </div>
            <div className="list-1">
                <ul className="navbar-list ">
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className="subdiv2">
            <input type="text" placeholder='Search Jobs' className='nav-search-tab'></input>
        </div>
    </div>
  )
}
