import React from 'react'
import '../styles/about.css'
function About() {
    const content=" We offer a wide range of top-notch job listings across various industries and experience levels. Whether you're a recent graduate or a seasoned professional, we have something for everyone.Our platform is designed to simplify the job search process with powerful tools and advanced algorithms that provide personalized job recommendations based on your skills and aspirations.Beyond job listings, we provide comprehensive career resources, including resume-building tools, interview tips, and expert advice, to enhance your chances of success in the job market.With our user-friendly interface, you can easily apply to jobs and track your applications conveniently.Join us today and become partou achieve your career goals. Let's embark on a transformative journey towards a future filled with promise and potential. Your dream job is just a few clicks away!";
    const about = ['A','B','O','U','T'];
    const aboutText = about.map((x)=>{
        return(
            <p className='about-letter' key={x}>{x}</p>
        )
    })
    return (
        <div className='row aboutTxt'>
            <div className="col aboutLeft ">{aboutText}</div>
            <div className='aboutPara'>
                <h1>Welcome to Jobify</h1>
                <p>{content}</p>
            </div>
            <div className="aboutImg row"></div>
        </div>
    )
}

export default About