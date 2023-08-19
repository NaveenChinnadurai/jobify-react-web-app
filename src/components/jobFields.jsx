import React from 'react'
import '../styles/jobFields.css'
import { jobList } from '../scripts/jobsList'
import {TbHandClick as Click} from 'react-icons/tb'
function JobFields() {
    const jobLists=jobList.map((job)=>{
        return(
            <div className="job-card row" key={job.jobTitle}>
                <div className="card-start row">
                    <div className="card-img">
                        <img src={job.img} alt="" className='job-img'/>
                    </div>
                    <div className="job-title">
                        <h4><a href="">{job.jobTitle}</a></h4>
                        <p>{job.company}</p>
                    </div>
                </div>
                <div className='job-info row sp'>
                    <span>{job.type}</span>
                    <span>{job.level}</span>
                    <span>{job.time}</span>
                </div>
                <div className="card-end card-div row sp">
                    <span >{job.location}</span>
                    <p >{job.postedOn}</p>
                </div>
                <div className="job-icon">
                    <span><a href=""><Click className='job-Icon'/></a></span>
                </div>
            </div>
        )
    })
    const timeList=['Full Time','Part-Time','Virtual']
    const filterTime=timeList.map((eli)=>{
        return(
            <div className="time-div" key={eli}>
                    <input type="checkbox" name={eli} className='time-input'/>
                    <span>{eli}</span>
            </div>
        )
    })
  return (
    <div className='job-div row'>
        <div className="filter-div">
            <div className="filter-head">
                <h4>Filter</h4>
                <input type="text" placeholder='Company' className='filter-input' />
            </div>
            <div className="filter-time">
                <h4>Work time</h4>
                <div className="work-time">{filterTime}</div>
            </div>
            <div className="filter-time">
                <h4>Job Type</h4>
                <div className="work-time">
                    <div className="time-div">
                        <input type="checkbox" name="job" className='job-input'/>
                        <span>Job</span>
                    </div>
                    <div className="time-div">
                        <input type="checkbox" name="intership" className='job-input'/>
                        <span>Interships</span>
                    </div>
                </div>
            </div>
            <div className="filter-btn row">
                <span className='apply-btn'>Apply Filter</span>
            </div>
        </div>
        <div className="jobs-list col">{jobLists}</div>
    </div>
  )
}

export default JobFields