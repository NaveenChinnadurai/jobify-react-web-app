import React from 'react'
import '../styles/courses.css'
import ISO from '../assets/iso.png'
import { courses } from '../scripts/courses'
function Courses() {
    const courseList=courses.map((course)=>{
        return(
            <div className="course-card col" key={course.courseName}>
                <img src={course.img} alt={course.courseName} className='Course-img' />
                <h2><a href="">{course.courseName}</a></h2>
                <p>{course.description}</p>
                <div className="price-lang row">
                    <span className='course-price'>{course.price}</span>
                    <span className='course-lang'>{course.language}</span>
                </div>
            </div>
        )
    })
  return (
    <div className='courses-div'>
        <div className="course-head row">
            <div className="courses-title">
                <h1>Uncover the Variety Of <br />Courses We Offer</h1>
                <p >Discover the world of programming with our comprehensive course. From fundamentals to real-world projects, expert instructors will guide you through various languages and frameworks. Gain versatile, in-demand skills and unlock your potential. Join now to embark on a transformative learning experience and open doors to endless opportunities in the tech industry! </p><br/>
                <p>We Provides both free and Paid courses and Guidence for the candidates with ISO Verified Certificate.</p>
            </div>
            <div className='isoimg'>
                <img src={ISO} alt="ISO logo" className='isoImg'/>
            </div>
        </div>
        <div className="courses-list col">
            <h1>Courses We Offer</h1>
            <p>Unleash Your Potential and  Embark on a Journey of Endless Discovery with Our Dynamic Course Offerings!</p>
            <div className='courses-details row'>{courseList}</div>
        </div>
    </div>
  )
}

export default Courses