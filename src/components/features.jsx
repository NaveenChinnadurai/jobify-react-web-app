import React from 'react'
import '../styles/features.css'
import resume from "../assets/resume.png";
import com from '../assets/communication.png'
function Features() {
    const ResumeImg = (props) => {
        return (
            <div className="row feature-img" id={props.id} >
                <img src={props.img} alt={props.alt} className='feature-Img' />
            </div>
        )
    }
    return (
        <div className='col feature-div'>
            <div className="row fld-rr resume-div">
                <div className='feature-txt'>
                    <h1>Learn About The Critical Aspects </h1>
                    <h1>During Building Resume</h1>
                    <ResumeImg id='text-bt-img' img={resume} alt='resume-img' />
                    <p>Welcome to our Resume Building Platform! Create a standout resume that impresses employers with ease. Get expert tips and pre-written content suggestions to highlight your skills effectively. Choose from a variety of professionally designed templates that suit your style. </p>
                    <p>Unlock your potential and stand out from the crowd with a compelling resume. Join our platform now and take the first step towards landing your dream job!</p>
                    <p>You can create a strong and compelling resume that effectively showcases your qualifications and increases your chances of landing your desired job.</p>
                </div>
                <ResumeImg id='resume-img' img={resume} alt='resume-img' />
            </div>
            <div className="row resume-div">
                <div className="com-txt feature-txt ">
                    <h1>Bridging the Gap Between</h1>
                    <h1>Job Seekers and Companies</h1>
                    <ResumeImg img={com} id='text-bt-img' alt='Communication Image' class='com-img' />
                    <p>Providing effective communication between job seekers and companies is our priority. Connect with hiring companies easily, from application to interviews, for a seamless hiring process. Stay informed with application status updates.</p>
                    <p>For companies, streamline communication with potential candidates, provide feedback, and schedule interviews effortlessly. We value open communication, transparency, and mutual respect between job seekers and employers. Let's bridge the gap between talented job seekers and forward-thinking companies for a brighter future!</p>
                </div>
                <ResumeImg img={com} id='resume-img' alt='Communication Image' class='com-img' />
            </div>
        </div>
    )
}

export default Features