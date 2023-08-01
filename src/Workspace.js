import React from 'react'
import EmployeeExNav from './EmployeeExNav'
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import * as md from 'react-icons/md';
import * as go from 'react-icons/go';
import * as gr from 'react-icons/gr';
import * as ai from 'react-icons/ai';
import * as hi from 'react-icons/hi';
import { Meeting } from './Meeting';
import { Task } from './Task';
import { Team } from './Team';
import Footer from './Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Workspace() {
  const[meetdata, setMeetdata] = useState([]);
  const[taskdata, settaskdata] = useState([]);
  const[team, setteamdata] = useState([]);
  const[alldata, setAlldata] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/getMeetByEmpId/2')
    .then(response => {
        setMeetdata(response.data);
    })
    .catch(error => {
        console.log(error);
    })

    axios.get(`http://localhost:8080/getTaskById/2`)
    .then(response => {
        settaskdata(response.data);
    })
    .catch(error => {
        console.log(error);
    })

    axios.get(`http://localhost:8080/sameDepartment/2`)
    .then(response => {
        setteamdata(response.data);
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
  return (
    <div>
        <div style={{display:'flex', backgroundColor: '#cdc8c8'}}>
            <EmployeeExNav/>
            <div className='work'>
                    <div className='part1grid'>

                        <div className='ggrid1'>
                            <div className='workpro'>My Profile</div>
                            <div style={{marginLeft:10, marginTop:10}}>
                                <img src='propro.jpg' alt="profile" className='proproo'/>
                                <div className='reactlogo' style={{position:'relative',top:-55,left:126}}><fa.FaEdit/></div>
                            </div>
                            <div className='grid1elements' style={{marginLeft:170}}>
                    <div className='grid1itemsss' style={{fontSize:19, fontWeight:600, marginTop:-150}}>{alldata.personalDetail?.first_name} {alldata.personalDetail?.last_name}</div>
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
                      <div className='iconssocialitem'><fa.FaLinkedin/></div>
                      <div className='iconssocialitem'><fa.FaGithubSquare/></div>
                      <div className='iconssocialitem'><bs.BsDiscord/></div>
                    </div>
                  </div>
                </div>


                        <div className='ggrid2'>
                            <div className='workpro'>My Tasks</div>
                            <div className='scrollerbar'>
                                {taskdata.map(item => (
                                    <div className='iitems'>
                                            <div className='itemmmtitle'>{item.task_title}</div>
                                            <div  className='statusss' style={{ color: item.assign_head == 'Ashok' ? 'green' : 'orange' }}><go.GoDotFill/></div>
                                        <div className='itemmduee'>Due: {item.due_date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='ggrid3'>
                            <div className='workpro'>My Team</div>
                            <div className='scrollerbar'>
                            {team.map(item => (
                                    <div className='iitemzz'>
                                            <div style={{display:'flex'}}>
                                                <img className='prrooo' src='https://t3.ftcdn.net/jpg/02/36/48/86/360_F_236488644_opXVvD367vGJTM2I7xTlsHB58DVbmtxR.jpg' alt='pro'/>
                                                <div className='heyname'>{item.personalDetail?.first_name}</div>
                                            </div>
                                            <div className='heycity'><hi.HiOutlineLocationMarker/>{item.professionalDetail?.office}</div>
                                            <div className='heyemail'>{item.personalDetail?.email}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='addgrid'>
                    <div className='workpro'>Upcoming Meeting</div>
                    <div className='hello'>
                    {meetdata.map(item => (
                        <div className='mappitemm'>
                            <div style={{display:'flex'}}>
                                <div className='detitle'>{item.meeting_title}</div>
                                <div className='managee'>Coordinate: {item.manager_name}</div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div className='timetime'>{item.start_time} - {item.end_time}</div>
                                <a href = {item.meet_link}><button className='joinbuttonn'>Join</button></a>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
