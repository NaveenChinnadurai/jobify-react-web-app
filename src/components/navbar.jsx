import React from 'react'
import '../styles/navbar.css'
import { useRef } from 'react'
import { FaBars as NavIcon } from 'react-icons/fa6'
import { FaTimes as Cross } from 'react-icons/fa'
export const Navbar = () => {
    const classChange = useRef();
    const handleClickBurger=()=>{
        classChange.current.classList.toggle("display-nav")
    }
    return (
        <div className="nav-div1">
            <div className="subdiv1">
                <div className="title-icon ">
                    <span>JobiFy</span>
                </div>
                <ul className="navbar-list" ref={classChange}>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                    <li className='nav-cross-btn' onClick={handleClickBurger}><Cross /></li>
                </ul>
            </div>
            <div className="subdiv2">
                < input type="text" placeholder='Search Jobs' className='nav-search-tab' />
                <span className='burger-icon' onClick={handleClickBurger}><NavIcon /></span>
            </div>
        </div>
    )
}
