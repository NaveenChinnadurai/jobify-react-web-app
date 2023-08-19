import React from 'react'
import '../styles/features.css'
import resume from "../assets/resume.png";
import com from '../assets/communication.png'
function Features() {
  return (
    <div className='col feature-div'>
        <div className="row resume-div">
            <div className='feature-txt'>
                <h1>Learn About The Critical Aspects <br /> During Building Resume</h1>
                <p>Welcome to our Resume Building Platform! Create a standout resume that impresses employers with ease. Get expert tips and pre-written content suggestions to highlight your skills effectively. Choose from a variety of professionally designed templates that suit your style. </p>
                <p>Unlock your potential and stand out from the crowd with a compelling resume. Join our platform now and take the first step towards landing your dream job!</p>
                <p>You can create a strong and compelling resume that effectively showcases your qualifications and increases your chances of landing your desired job.</p>
            </div>
            <div className="row feature-img">
                <img src={resume} alt="resume-img" className='feature-Img' />
            </div>
        </div>
        <div className="row com-div">
            <div className="feature-txt com-txt">
                <h1>Bridging the Gap Between <br /> Job Seekers and Companies</h1>
                <p>Providing effective communication between job seekers and companies is our priority. Connect with hiring companies easily, from application to interviews, for a seamless hiring process. Stay informed with application status updates.</p>
                <p>For companies, streamline communication with potential candidates, provide feedback, and schedule interviews effortlessly.</p>
                <p>We value open communication, transparency, and mutual respect between job seekers and employers. Let's bridge the gap between talented job seekers and forward-thinking companies for a brighter future!</p>
            </div>
            <div className="row feature-img com-img">
                <img src={com} alt="Communication Image" className='feature-Img'/>
            </div>
        </div>
    </div>
  )
}

export default Features