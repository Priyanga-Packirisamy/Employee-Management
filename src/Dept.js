import React from 'react'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'

export default function Dept({ handleDeptItemClick }) {
  return (
    <div>
        <AdminNav/>
        <div className='dept'>
            <img src="logo.png" alt="logo" className='dlogo'/>
            <Link to='/'>
              <div className='dname'>Dizzo</div>
            </Link>
            <img src="x-button.png" className='cross'></img>
            <button style={{position:'relative',top:-10,left:-10, fontFamily:'Cambria, Cochin, Georgia, Times', fontSize:16}} className='button1'>Assign Task</button>
            <button style={{position:'relative',top:-10,left:-10, fontFamily:'Cambria, Cochin, Georgia, Times', fontSize:16}} className='button2'>Edit Details</button>
            <div className='department5'>DEPARTMENT</div>
            <ul className='deptlist'>
                <li className='deptitems' onClick={() => handleDeptItemClick(1)}>Accounts</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(2)}>Admin Dept</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(3)}>Buisness Development</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(4)}>Finance</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(5)}>Human Resourse</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(6)}>Infrastructures</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(7)}>IT Services</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(8)}>Product development</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(9)}>Research and Development</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(10)}>Software Testing</li>
                <li className='deptitems' onClick={() => handleDeptItemClick(11)}>Security and Transport</li>
            </ul>
        </div>

    </div>
  )
}
