import React from 'react'
import EmployeeExNav from './EmployeeExNav'
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import * as md from 'react-icons/md';
import * as go from 'react-icons/go';
import * as gr from 'react-icons/gr';
import * as ai from 'react-icons/ai';
import * as im from 'react-icons/im';
import { useState } from 'react';
import { Task } from './Task';
import Footer from './Footer';
import axios from 'axios';
import { useEffect } from 'react';

export default function EmployeeProfile() {

  const[data, setData] = useState([]);
  const[alldata, setAlldata] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/getTaskById/2')
    .then(response => {
        setData(response.data);
    })
    .catch(error => {
        console.log(error);
    })

    axios.get(`http://localhost:8080/getByIdMain/2`)
    .then(response => {
        setAlldata(response.data);
    })
    .catch(error => {
        console.log(error);
    })
},[]);


  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const[smonth, setmonth] = useState(7);

  const increment = () => {
    setmonth(smonth + 1);
  };

  const decrement = () => {
    setmonth(smonth - 1);
  };
  // Generate the calendar dates for 2023
  const calendarDates = generateCalendarDates(2023);

  // Mock student attendance data
  const studentAttendance = {
    '2023-07-18': 'absent',
    '2023-07-01': 'absent',
    '2023-06-05': 'absent',
    '2023-04-10': 'absent',
    '2023-04-11': 'absent',
    '2023-03-22': 'absent',
    '2023-02-06': 'absent',
    '2023-02-07':'absent',
    '2023-01-17':'absent',
    '2023-06-14': 'absent',

  };


  // Function to generate calendar dates for a given year
   // Initialize month with a default value of 6

  // Function to generate calendar dates for a given year
  function generateCalendarDates(year) {

    const startDate = new Date(year, smonth-1, 1);
    const endDate = new Date(year, smonth, 0);
    const calendarDates = [];

    while (startDate <= endDate) {
      calendarDates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return calendarDates;
  }

  // Function to group calendar dates by month
  function groupDatesByMonth(dates) {
    const groupedDates = {};
    dates.forEach((date) => {
      const month = date.toLocaleString('default', { month: 'long' });
      if (groupedDates[month]) {
        groupedDates[month].push(date);
      } else {
        groupedDates[month] = [date];
      }
    });
    return groupedDates;
  }

  const groupedDates = groupDatesByMonth(calendarDates);
  return (
    <div>
        <div><EmployeeExNav/></div>
        <div style={{marginTop:100, marginLeft:-115}}>
        <div className='profilewhole'>
          <div className='profilepage'>
            <div className='progrid1'>
              <div className='gridelem'>
                <div style={{ margin:10}}>
                  <img src='propro.jpg' alt="profile" className='proproo'/>
                  <div className='reactlogo' style={{position:'relative',top:-55,left:126}}><fa.FaEdit/></div>
                  <div className='grid1elements'>
                    <div className='grid1itemsss' style={{fontSize:20, fontWeight:600, marginTop:-150}}>{alldata.personalDetail?.first_name} {alldata.personalDetail?.last_name}</div>
                    <button className='activebutton'>Active</button>
                    <div className='listitem222'>
                      <div style={{display:'flex'}}>
                        <div className='grid2itemsss'>Position:</div>
                        <div className='grid1itemsss'>{alldata.professionalDetail?.position}</div>
                      </div>
                      <div style={{display:'flex'}}>
                        <div className='grid2itemsss'>Email:</div>
                        <div className='grid1itemsss'>{alldata.personalDetail?.email}</div>
                      </div>
                      <div style={{display:'flex'}}>
                        <div className='grid2itemsss'>Phone:</div>
                        <div className='grid1itemsss'>{alldata.contactDetail?.phone}</div>
                      </div>
                      <div style={{display:'flex'}}>
                        <div className='grid2itemsss'>Office:</div>
                        <div className='grid1itemsss'>{alldata.professionalDetail?.office}</div>
                      </div>
                    </div>
                    <div className='iconssocial'>
                      <a href = {alldata.contactDetail?.linkedin} className='iconssocialitem'><fa.FaLinkedin/></a>
                      <a href = {alldata.contactDetail?.github} className='iconssocialitem'><fa.FaGithubSquare/></a>
                      <div className='iconssocialitem'><bs.BsDiscord/></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='gridelem'>
                <div>
        <div className="month-group">
          {Object.keys(groupedDates).map((month, index) => {
            const dates = groupedDates[month];

            return (
              <div key={index} className="month-card">
                <div style={{display:'flex', textAlign:'center', alignItems:'center', position:'relative', left:55}}>
                  <button style={{border:'none', backgroundColor:'white'}} onClick={decrement}><gr.GrFormPrevious/></button>
                  <div className="month-title" style={{position:'relative', left:-4}}>{month} </div>
                  <button style={{border:'none', backgroundColor:'white'}} onClick={increment}><gr.GrFormNext/></button>
                </div>
                <div className='days'>
                  <div className='daysvalue'>SUN</div>
                  <div className='daysvalue'>MON</div>
                  <div className='daysvalue'>TUE</div>
                  <div className='daysvalue'>WED</div>
                  <div className='daysvalue'>THU</div>
                  <div className='daysvalue'>FRI</div>
                  <div className='daysvalue'>SAT</div>
                </div>
                <div className="dates-container">
                  {dates.map((date) => {
                    const dateString = date.toISOString().split('T')[0];
                    const attendanceStatus = studentAttendance[dateString];

                    return (
                      <div
                        key={dateString}
                        className={`calendar-date ${
                          attendanceStatus === 'absent' ? 'absent' : 'present'
                        }`}
                      >
                        {date.getDate()}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
                </div>
              </div>
              <div style={{marginRight:16}} className='gridelem'>
                <center><div className='headinggrid4' style={{paddingBottom:16}}>Support</div></center>
                <div style={{display:'flex'}}>
                  <img className="toggle" src="toggle.png"/>
                  <div className='toggleval'>Language Support</div>
                </div>
                <div style={{display:'flex'}}>
                  <img className="toggle" src="off-button.png"/>
                  <div className='toggleval'>Full Stack</div>
                </div>
                <div style={{display:'flex'}}>
                  <img className="toggle" src="toggle.png"/>
                  <div className='toggleval'>Cloud Support</div>
                </div>
                <div style={{display:'flex'}}>
                  <img className="toggle" src="toggle.png"/>
                  <div className='toggleval'>Testing</div>
                </div>
                <div style={{display:'flex'}}>
                  <img className="toggle" src="off-button.png"/>
                  <div className='toggleval'>Buisness Management</div>
                </div>
              </div>
            </div>
            <div className='progrid2'>
              <div className='gridelemmm'>
                <div className='grid1elements1'>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <div className='headinggrid4'>Basic Details</div>
                    <div style={{marginLeft:5, color:'grey', fontSize:11}}>(Non Editable)</div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div>
                      <div className='darkelem'>Hire Date</div>
                      <div className='padelem'>{alldata.professionalDetail?.hire_date}</div>
                    </div>
                    <div>
                      <div className='darkelem'>Worked for </div>
                      <div className='padelem'>1 year, 2 months</div>
                    </div>
                    <div>
                      <div className='darkelem'>Employee ID</div>
                      <div className='padelem'>{alldata.employee_id}</div>
                    </div>
                  </div>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <div className='headinggrid4'>Personal Details</div>
                    <div style={{marginLeft:5, color:'grey', fontSize:11}}>(Non Editable)</div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div>
                      <div className='darkelem'>Date of Birth</div>
                      <div className='padelem'>{alldata.personalDetail?.dob}</div>
                    </div>
                    <div>
                      <div className='darkelem'>Marital Status</div>
                      <div className='padelem'>{alldata.personalDetail?.marital_status}</div>
                    </div>
                  </div>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <div  className='headinggrid4'>Occupational Details</div>
                    <div style={{marginLeft:5, color:'grey', fontSize:11}}>(Non Editable)</div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div>
                      <div className='occu'><bs.BsSmartwatch/></div>
                      <div className='grid1itemsss'>Full-Time</div>
                    </div>
                    <div>
                      <div className='occu'><md.MdEngineering/></div>
                      <div className='grid1itemsss'>Engineering</div>
                    </div>
                    <div>
                      <div className='occu'><go.GoLocation/></div>
                      <div className='grid1itemsss'>{alldata.professionalDetail?.office}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{marginRight:16}} className='gridelemmm'>
                <div>
                  <div style={{display:'flex'}}>
                    <div style={{marginTop:10, marginLeft:40, paddingBottom:20}} className='headinggrid4'>Onboarding</div>
                    <div style={{marginTop:10, marginLeft:240}}  className='headinggrid4'>1/5</div>
                  </div>
              <div className='scrolllbar1' style={{height:300, marginLeft:20}}>
                <table cellSpacing={0} className='table2'>
                  <thead>
                  <tr className='headvaluess'>
                      <th>Task</th>
                      <th>Assigned By</th>
                      <th>Due Date</th>
                      <th>Attachments</th>
                      <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map(item => (
                          <tr>
                              <td>{item.task_id}</td>
                              <td>{item.assign_head}</td>
                              <td>{item.due_date}</td>
                              <td>{item.attach}</td>
                              <td><ai.AiFillEye/></td>
                          </tr>
                      ))}
                  </tbody>
                            </table>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{marginTop:20}}><Footer/></div>
    </div>
  )
}
