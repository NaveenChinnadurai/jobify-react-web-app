import React from 'react'
import '../styles/footer.css'
import { FaSquareFacebook as FB } from 'react-icons/fa6'
import { FaTwitterSquare as Twitter, FaLinkedin as Linked, FaInstagram as Ig } from 'react-icons/fa'
import { AiOutlineWhatsApp as WB } from 'react-icons/ai'
import { MdKeyboardArrowRight as RightArr } from 'react-icons/md'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-details">
                <div className="footer-div-1 footer-div">
                    <div className="footer-title">
                        <span>Get Hired</span>
                        <span>with Us</span>
                        <p className='footer-title-icon'>JOBIFY</p>
                    </div>
                    <ul className='footer-icons'>
                        <li><FB className='footer-icon' /></li>
                        <li><Twitter className='footer-icon' /></li>
                        <li><WB className='footer-icon' /></li>
                        <li><Linked className='footer-icon' /></li>
                        <li><Ig className='footer-icon' /></li>
                    </ul>
                </div>
                <div className="footer-div-2 footer-div">
                    <ul>
                        <li className='footer-head'>Search Jobs</li>
                        <li>Search by Cities</li>
                        <li>Search by Category</li>
                        <li>Search by Job Role</li>
                    </ul>
                </div>
                <div className="footer-div-3 footer-div">
                    <ul>
                        <li className='footer-head'>Recuite Employees</li>
                        <li><RightArr />Hire Employees</li>
                        <li><RightArr />Post new Jobs</li>
                        <li><RightArr />Employers FAQs</li>
                    </ul>
                </div>
                <div className="footer-div-4 footer-div">
                    <ul>
                        <li className='footer-head'>For Candidates</li>
                        <li><RightArr />Search Jobs</li>
                        <li><RightArr />Sign Up/Log in</li>
                        <li><RightArr />FAQ's</li>
                        <li><RightArr />Report Problem/Issue</li>
                    </ul>
                </div>
                <div className="footer-div">
                    <ul>
                        <li className='footer-head'>Important Links</li>
                        <li><RightArr />Home</li>
                        <li><RightArr />New Jobs</li>
                        <li><RightArr />About US</li>
                        <li><RightArr />Our partners</li>
                    </ul>
                </div>
            </div>
            <div className="footer-end">
                <p>&copy;2023.All Rights are reserved and owned by Jobify.pvt</p>
            </div>
        </div>
    )
}

export default Footer