import React from 'react'
import * as ai from 'react-icons/ai';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import * as io from 'react-icons/io';
import * as ri from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function EmployeeExNav() {
  return (
    <div>
        <div className='employee-nav1'>
            <div style={{display:'flex'}} className='wholeeitem'>
                <img style={{marginLeft:9}} src="logo.png" alt="logo" className='pic'/>
                <div className='navtext' style={{marginLeft:15, marginTop:10}}>Dizzo</div>
                <img src="x-button.png" className='cross1'></img>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><ai.AiFillHome/></div>
                <Link to = '/employeehome'>
                    <div className='homeitemm'>Home</div>
                </Link>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><ai.AiOutlineLaptop/></div>
                <Link to = '/workspace'>
                    <div className='homeitemm'>Workspace</div>
                </Link>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div  className='empnavvitem'><bi.BiNotepad/></div>
                <Link to='/leave'>
                    <div className='homeitemm'>Leave</div>
                </Link>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><fa.FaAward/></div>
                <div className='homeitemm'>Award</div>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><ai.AiOutlineFlag/></div>
                <Link to = '/empabout'>
                    <div className='homeitemm'>About Us</div>
                </Link>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><bs.BsFillPersonFill/></div>
                <Link to = '/empprofile'>
                    <div className='homeitemm'>Profile</div>
                </Link>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><io.IoIosNotifications/></div>
                <Link to = '/empnotification'>
                    <div className='homeitemm'>Notification</div>
                </Link>
            </div>
            <div style={{display:'flex'}} className='wholeeitem'>
                <div className='empnavvitem'><ri.RiLogoutBoxLine/></div>
                <Link to = '/login'>
                    <div className='homeitemm'>Logout</div>
                </Link>
            </div>
            <Link to = '/attendance2'><button className='viewmy'>View My Attendance</button></Link>
    </div>
    </div>
  )
}
