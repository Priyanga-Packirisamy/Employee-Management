import React from 'react'
import { useState } from 'react';
import Progress from './Progress'
import AdminNav from './AdminNav'
import Footer from './Footer';
import Dept from './Dept';
import { EmployeeData } from './EmployeeData';
import * as ai from 'react-icons/ai';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Attendance1() {

  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/details')
    .then(response => {
        setData(response.data);
    })
    .catch(error => {
        console.log(error);
    })
},[]);
const [searchTerm, setSearchTerm] = useState('');

// Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

// Filtered EmployeeData based on search term
  const FEmployeeData = data.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div>
        <AdminNav/>
        <div style={{display:'flex'}}>

            <div className='Attendance-whole' >
                <div className='employeeList1'>
                    <div className='member'>Admittance Management</div>
                    <div className='edetails'>
                        <input className='searchbar' placeholder='Search' value={searchTerm} onChange={handleSearchTermChange}/>
                        <div className='down'><bi.BiSolidDownload/></div>
                        <div className='buttongroup'>
                          <div style={{paddingLeft:7,paddingRight:7, marginTop:10}}><bi.BiSortDown/></div>
                          <button className='sbutton'>Sort</button>
                          <div style={{paddingLeft:7,paddingRight:7, marginTop:10}}><fa.FaFilter/></div>
                          <button className='sbutton'> Filter</button>
                        </div>
                    </div>
                  </div>
                <div className='scrolllbar' style={{height:440}}>
                    <table cellSpacing={0} className='table1'>
                          <thead className='tablehead'>
                          <tr className='tablehead1'>
                              <th>Id</th>
                              <th>Employee</th>
                              <th>Manager</th>
                              <th>Position</th>
                              <th>Department</th>
                              <th>Office</th>
                              <th>Status</th>
                          </tr>
                          </thead>
                          <tbody>
                              {FEmployeeData.map(item => (
                                  <tr>
                                      <td>{item.employee_id}</td>
                                      <td><Link to='/attendance2'>{item.first_name}</Link></td>
                                      <td>{item.manager_name}</td>
                                      <td>{item.position}</td>
                                      <td>{item.dept_name}</td>
                                      <td>{item.office}</td>
                                      <td style={{ color: item.manager_name === 'Ashok' ? 'green' : 'red' }} className='status-font'>Logged in</td>
                                      <div className="hover-block">
                                        <div className='status-font' style={{ color: item.manager_name === 'Ashok' ? 'green' : 'red' }}>Logged in: 10:00 AM</div>
                                        <div className='status-font' style={{ color: item.manager_name === 'Ashok' ? 'green' : 'red' }}>Logged out: 6:00 PM</div>
                                        <div className='status-font' style={{ color: item.manager_name === 'Ashok' ? 'green' : 'red' }}>Total Hours: 8:00 AM</div>
                                      </div>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
            </div>
            <div className='rightbar'>
                <div className='progress-pad'><Progress percent='92'/></div>
                <div style={{marginTop:-30}}>
                    <div style={{display:'flex'}} className='dateattend'>
                        <div className='enter-date'>Date</div>
                        <input type="date" name="dateFieldName"></input>
                    </div>
                    <ul className='deptlist'>
                    <li className='deptitems1'>Accounts</li>
                    <li className='deptitems1'>Admin Dept</li>
                    <li className='deptitems1'>Buisness Development</li>
                    <li className='deptitems1'>Cloud Support</li>
                    <li className='deptitems1'>Finance</li>
                    <li className='deptitems1'>Human Resourse</li>
                    <li className='deptitems1'>Infrastructures</li>
                    <li className='deptitems1'>IT Services</li>
                    <li className='deptitems1'>Product development</li>
                    <li className='deptitems1'>Research</li>
                    <li className='deptitems1'>Software Testing</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
