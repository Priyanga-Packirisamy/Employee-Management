import React from 'react'
import { useState } from 'react';
import AdminNav from './AdminNav';
import Footer from './Footer';
import Dept from './Dept';
import * as ai from 'react-icons/ai';
import * as bi from 'react-icons/bi';
import * as fa from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import * as im from 'react-icons/im';


export default function EmployeeList({setemployeeid}) {


  const [showForm, setShowForm] = useState(false);

  const [input1Value, setInput1Value] = useState(0);
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [input4Value, setInput4Value] = useState('');
  const [input5Value, setInput5Value] = useState('');
  const [input6Value, setInput6Value] = useState('');
  const [input7Value, setInput7Value] = useState('');

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleAssignTask = (e) => {
    e.preventDefault();

    const meetdata = {
      "dept_id": input1Value,
      "meeting_date": input2Value,
      "meeting_title": input5Value,
      "start_time": input3Value,
      "end_time": input4Value,
      "manager_name": input6Value,
      "meet_link": input7Value
    }

    axios.post("http://localhost:8080/postMeet",meetdata);
    console.log('Form submitted');
    closeForm();
  };

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


const [selectedDept, setSelectedDept] = useState(null);


const handleDeptItemClick = (dept_id) => {
  setSelectedDept(dept_id);
  axios.get(`http://localhost:8080/getAllDept/${selectedDept}`)
    .then(response => {
        setData(response.data);
    })
    .catch(error => {
        console.log(error);
    })
};

console.log(selectedDept);

const handleDelete = (id) =>{
  axios.delete(`http://localhost:8080/deleteMain/${id}`)
  window.location.reload()
  .then(response =>{
      setData(data.filter(data => data.id !== id));
  console.log(response + "deleted");
  })
  .catch(error => {
      console.log(error);
  })
}
  const [searchTerm, setSearchTerm] = useState('');

// Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

// Filtered EmployeeData based on search term
   const edata = data.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="employeewhole">
        <Dept handleDeptItemClick={handleDeptItemClick}/>
        <div className='employeeList'>
          <div className='employeeList1'>
            <div className='member'>Memebers of Workforce</div>
            <button style={{padding:7, fontFamily:'Gill Sans', fontSize:"16px", marginLeft:770, marginTop:-100, color:'white', backgroundColor:"#272626", border:'none'}} onClick={openForm}>Schedule Meet <ai.AiFillFileAdd/></button>
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
          <div className='scrolllbar' style={{height:500}}>
            <table cellSpacing={0} className='table1'>
                  <thead className='tablehead'>
                  <tr className='tablehead1'>
                      <th>Id</th>
                      <th>Employee</th>
                      <th>Manager</th>
                      <th>Position</th>
                      <th>Dept</th>
                      <th>Office</th>
                      <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                      {edata.map(item => (
                          <tr>
                              <td><Link to = '/profile' onClick={() => setemployeeid(item.employee_id)}>{item.employee_id}</Link></td>
                              <td>{item.first_name}</td>
                              <td>{item.manager_name}</td>
                              <td>{item.position}</td>
                              <td>{item.dept_name}</td>
                              <td>{item.office}</td>
                              <td  onClick={() => handleDelete(item.employee_id)} className='deletebut'><ai.AiFillDelete/></td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </div>
        <div style={{position:'relative', top:-700, }}><Footer/></div>
        {showForm && (
            <div className="form-overlay">
              <div className="form-container" style={{height:370, width:350}}>
                {/* Your form content goes here */}
                <div className='assign-task1'>Schedule Meet</div>
                <button style={{position:'relative',top:-29,left:320,paddingTop:5, color:'white', backgroundColor:'rgba(0, 0, 0, 0.8)',borderRadius:'50%'}} onClick={closeForm}><im.ImCross/></button>
                {/* Add your form fields and buttons */}
                <form onSubmit={handleAssignTask} style={{position:'relative', top:-20}}>
                  <div style={{display:'flex'}}>
                    <div>
                      <div className='assign-text'>Department Id</div>
                      <input className='assign-input' type='number' placeholder='Department Id' value={input1Value} onChange={(e) => setInput1Value(e.target.value)}/>
                    </div>
                    <div style={{marginLeft:40}}>
                      <div className='assign-text'>Date</div>
                      <input className='assign-input' type='date' placeholder='End Time' value={input2Value} onChange={(e) => setInput2Value(e.target.value)}/>
                    </div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div>
                      <div className='assign-text'>Start Time</div>
                      <input className='assign-input' type='text' placeholder='Start Time' value={input3Value} onChange={(e) => setInput3Value(e.target.value)}/>
                    </div>
                    <div style={{marginLeft:40}}>
                      <div className='assign-text'>End Time</div>
                      <input className='assign-input' type='text' placeholder='End Time' value={input4Value} onChange={(e) => setInput4Value(e.target.value)}/>
                    </div>
                  </div>
                  <div style={{display:'flex'}}>
                    <div>
                      <div className='assign-text' >Meeting Title</div>
                      <input className='assign-input' style={{marginRight:30}} placeholder='Meeting Title' type='text' value={input5Value} onChange={(e) => setInput5Value(e.target.value)}/>
                    </div>
                    <div style={{marginLeft:10}}>
                      <div className='assign-text'>Manager Name</div>
                      <input className='assign-input' type='text' placeholder='Attachment' value={input6Value} onChange={(e) => setInput6Value(e.target.value)}/><br/>
                    </div>
                  </div>
                  <div className='assign-text' >Meeting Link</div>
                  <input className='assign-input' style={{marginRight:30, width:318}} placeholder='Meeting Link' type='text' value={input7Value} onChange={(e) => setInput7Value(e.target.value)}/>
                  <button style={{marginTop:20, marginLeft:130, padding:6, color:'white', backgroundColor:'rgba(0, 0, 0, 0.8)', border:'none'}} type='submit'>Assign</button>
                </form>
              </div>
            </div>
          )}
    </div>
  )
}
