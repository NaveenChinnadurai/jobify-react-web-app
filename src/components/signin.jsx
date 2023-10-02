import React from 'react'
import '../styles/signin.css'
import { FaGoogle as Google, FaLinkedin as Linked } from 'react-icons/fa'
import { FaSquareFacebook as FB } from 'react-icons/fa6'
function Signin() {
    return (
        <div className="col account-div">
            <div className="sign-head">
                <h2>Empower your career aspirations and unlock boundless opportunities.</h2>
                <h2>Step into your future Now!</h2>
            </div>
            <div className='row signin-div' >
                <div className="col signin">
                    <div className="col signin-title">
                        <h2>Your dream job is just a login away!</h2>
                        <p>One click away from the stars! Sign in and launch your soaring career path.</p>
                    </div>
                    <div className="signin-icons">
                        <span><Google className='signin-icon' /></span>
                        <span><FB className='signin-icon' /></span>
                        <span><Linked className='signin-icon' /></span>
                    </div>
                    <div className="col signin-inputs">
                        <input type="text" placeholder='Email/Mobile No.' className='signin-input' />
                        <input type="text" placeholder='Password' className='signin-input' />
                        <a href="#" className='pass'>Forget password</a>
                        <span className='signin-btn'>Log In</span>
                    </div>
                </div>
                <div className="col signup">
                    <div className="col signin-title">
                        <h2>Join us and unlock a world of career possibilities</h2>
                        <p>Ready to fuel your career growth? Sign up for an extraordinary journey!</p>
                    </div>
                    <p className='signup-head'>Sign up here </p>
                    <div className="row signup-inputs">
                        <input type="text" placeholder='Email' className='signup-input' />
                        <input type="text" placeholder='Mobile No.' className='signup-input' />
                        <input type="text" placeholder='Create password' className='signup-input' />
                        <input type="text" placeholder='Confirm password' className='signup-input' />
                        <span className='signin-btn signup-btn'>Sign Up</span>
                    </div>
                    <p>OR</p>
                    <div className="signin-icons">
                        <span><Google className='signin-icon' /></span>
                        <span><FB className='signin-icon' /></span>
                        <span><Linked className='signin-icon' /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin