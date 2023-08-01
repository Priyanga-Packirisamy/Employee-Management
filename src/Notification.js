import React from 'react'
import AdminNav from './AdminNav'
import Dept from './Dept'
import * as io from 'react-icons/io';
import { Notidata } from './Notidata';
import Footer from './Footer';

export default function Notification() {
  return (
    <div>
      <div>
        <Dept/>
        <div style={{marginTop:-700, marginLeft:300}}>
          <div className='noti-page'>
            <div className='noti-text'>Notification</div>
            <div className='scrollerbar' style={{height:585, marginTop:10}}>
            {Notidata.map(item => (
                <div className='noti-bar'>
                  <div style={{display:'flex', padding:5}}>
                    <img src = {item.profile} style={{}} className='prrooo'/>
                    <div className='noti-from'>{item.from}</div>
                    <div className='noti-type'>Type: {item.type}</div>
                    <div style={{color:'#383636',marginLeft:600}}><io.IoIosNotifications/></div>
                  </div>
                  <div className='noti-det'>{item.detail}</div>
                  <div className='noti-time'>{item.time} ago</div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:-22}}><Footer/></div>
    </div>
  )
}
