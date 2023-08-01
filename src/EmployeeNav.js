import React from 'react'
import * as ai from 'react-icons/ai';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import * as gr from 'react-icons/gr';
import * as bs from 'react-icons/bs';
import * as io from 'react-icons/io';
import * as ri from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function EmployeeNav() {
  return (
    <div className='employee-nav'>
            <Link to='/employeehome'><img style={{marginLeft:9}} src="logo.png" alt="logo" className='pic'/></Link>
            <Link to = '/employeehome'>
              <div className='empnavvitem'><ai.AiFillHome/></div>
            </Link>
            <Link to='/workspace'>
              <div className='empnavvitem'><ai.AiOutlineLaptop/></div>
            </Link>
            <Link to = '/leave'>
              <div className='empnavvitem'><bi.BiNotepad/></div>
            </Link>
            <Link to = '/feedback'>
              <div className='empnavvitem'><fa.FaAward/></div>
            </Link>
            <Link to = '/empabout'>
              <div className='empnavvitem'><ai.AiOutlineFlag/></div>
            </Link>
            <Link to = '/empprofile'>
              <div className='empnavvitem'><bs.BsFillPersonFill/></div>
            </Link>
            <Link to = '/empnotification'>
              <div className='empnavvitem'><io.IoIosNotifications/></div>
            </Link>
            <Link to = '/login'>
              <div className='empnavvitem'><ri.RiLogoutBoxLine/></div>
            </Link>
    </div>
  )
}
