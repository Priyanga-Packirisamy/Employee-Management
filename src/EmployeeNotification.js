import React from 'react'
import * as io from 'react-icons/io';
import { Notidata } from './Notidata';
import EmployeeExNav from './EmployeeExNav';
import Footer from './Footer';

export default function EmployeeNotification() {
  return (
    <div>
        <div style={{display:'flex'}}>
          <EmployeeExNav/>
          <div className='noti-page' style={{marginLeft:40}}>
            <div className='noti-text'>Notification</div>
            <div className='scrollerbar' style={{height:530, marginTop:10}}>
            {Notidata.map(item => (
                <div className='noti-bar'style={{width:1000}} >
                  <div style={{display:'flex', padding:5}}>
                    <img src = {item.profile}  className='prrooo'/>
                    <div className='noti-from'>{item.from}</div>
                    <div className='noti-type'>Type: Task assigned</div>
                    <div style={{color:'#383636',marginLeft:700}}><io.IoIosNotifications/></div>
                  </div>
                  <div className='noti-det'>{item.detail}</div>
                  <div className='noti-time'>{item.time} ago</div>
                </div>
            ))}
            </div>
          </div>
        </div>
        <div style={{margin:-17}}><Footer/></div>
    </div>
  )
}
