import React from 'react';
import "./App.css";
import {Link} from 'react-router-dom';
import * as io from 'react-icons/io';


export default function AdminNav() {


  return (
    <div className = "Anav">
        <div className='navitem'>
            <Link to = '/employeelist'><img src="list.png" alt="logo" className='menupic'/></Link>
            <img src="logo.png" alt="logo" className='pic'/>
            <Link to = '/home'>
              <p className='navtext' style={{marginRight:"50px"}}>Dizzo</p>
            </Link>
            <li className='navList'>
                <Link to='/register'>
                  <ul className='nav-item-list' style={{marginLeft:100}}>CREATE EMPLOYEE</ul>
                </Link>
                <Link to='/attendance1'>
                  <ul className='nav-item-list'>ATTENDANCE</ul>
                </Link>
                <Link to='/about'>
                  <ul className='nav-item-list' style={{marginRight:"170px"}}>ABOUT US</ul>
                </Link>
            </li>
            <Link to = '/login'><button className='button'>LOGOUT</button></Link>
            <img src="profile.jpg" alt="profile pic" className='profilepic'/>
            <Link to='/empprofile'>
              <p className='navtext' style={{fontSize:"18px", marginTop:12}}>Profile</p>
            </Link>
            <Link to = '/notification'>
              <div style={{color:'white', marginTop:15, marginLeft:20}}><io.IoIosNotifications/></div>
            </Link>
        </div>
    </div>
  )
}
