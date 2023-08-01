import React from 'react'
import { useState } from 'react';
import AdminNav from './AdminNav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as im from 'react-icons/im';
// import { useState } from 'react';

export default function Register() {

    const [employee_id, setemployee_id] = useState('');

    const[first_name, setfirst_name] = useState('');
    const[last_name, setlast_name] = useState('');
    const[dob, setdob] = useState('');
    const[marital_status, setmarital_status] = useState('');
    const[email,setemail] = useState('');

    const[phone, setphone] = useState('');
    const[github, setgithub] = useState('');
    const[linkedin, setlinkedin] = useState('');

    const[dept_id, setdept_id] = useState(0);
    const[dept_name, setdept_name] = useState('');
    const[manager_id, setmanager_id] = useState(0);
    const[manager_name, setmanager_name] = useState('');
    const[office, setoffice] = useState('');
    const[hire_date, sethire_date] = useState('');
    const[position, setposition] = useState('');
    const[salary, setsalary] = useState(0);

    const [pass, setPass] = useState('');
    const [cpass, setcPass] = useState('');
    const [rpassmessage, setrpassmessage] = useState('');
    const[rcpassmessage, setrcpassmessage] = useState('');

    const [data, setData] = useState({});


    function handlePassChange(e){
        setPass(e.target.value);
    }

    function handleConPassChange(e){
        setcPass(e.target.value);
    }

    const handleValidation = (e) => {

        e.preventDefault();

        // const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        // if(!passwordregex.test(pass)){
        //   setrpassmessage("Password is invalid");
        // }
        // else{
        //   setrpassmessage("");
        // }

        // if( pass != cpass){
        //   setrcpassmessage("Password Mismatxh");
        // }
        // else{
        //   setrcpassmessage("");
        // }

    const empdata = {
        "personalDetail":{
            "first_name":first_name,
            "last_name":last_name,
            "dob":dob,
            "marital_status":marital_status,
            "email":email,
            "pass":pass
        },
        "contactDetail": {
            "email_id": email,
            "phone": phone,
            "github": github,
            "linkedin": linkedin,
        },
        "professionalDetail": {
            "dept_id": dept_id,
            "dept_name": dept_name,
            "manager_id": manager_id,
            "manager_name": manager_name,
            "office": office,
            "hire_date": hire_date,
            "position": position,
            "salary": salary
        }
    };
    axios.post("http://localhost:8080/postMain",empdata)
    .then(response => {
        setData(response.data);
    })
    .catch(error => {
        console.log(error);
    })
    openForm();
    console.log('Form submitted');
    console.log(data);
    }


    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
      };

      const closeForm = () => {
        setShowForm(false);
      };

    const sendMail = () => {
        window.location.reload();
        closeForm();
    };
  return (
    <div className='regback'>
        <AdminNav/>
        <div className='register'>
            <form onSubmit={handleValidation}>
                <div className='grid'>
                    <div className='rgrid1'>
                        <div className='rtag'>Personal Info</div>
                            <div className='griddesignn'>
                                <div className='regtext1'>Employee Id</div>
                                <input
                                style={{width:250}}
                                className='rinput'
                                placeholder='Employee Id'
                                type='text'
                                id='employee_id'
                                name='employee_id'
                                value={employee_id}
                                onChange={(e) => setemployee_id(e.target.value)}/>

                                <div className='regtext1'>First Name</div>

                                <input
                                 style={{width:250}}
                                 className='rinput'
                                 placeholder='First Name'
                                 type='text'
                                 id='first_name'
                                 onChange={(e) => setfirst_name(e.target.value)}
                                 name='first_name'
                                 value={first_name}/>

                                <div className='regtext1'>last Name</div>
                                <input
                                 style={{width:250}}
                                 className='rinput'
                                 placeholder='Last Name'
                                 type='text'
                                 id='last_name'
                                 onChange={(e) => setlast_name(e.target.value)}
                                 name='last_name'
                                 value={last_name}/>
                                <div style={{display:'flex'}}>
                                    <div className='regtext1'>Gender</div>
                                    <input type='radio' id='male'/>
                                    <div className='regtext1'>Male</div>
                                    <input type='radio' id='female'/>
                                    <div className='regtext1'>Female</div>
                                </div>
                                <div className='regtext1'>Date of Birth</div>
                                <input
                                 className='rinput'
                                 type='date'
                                 id='dob'
                                 onChange={(e) => setdob(e.target.value)}
                                 name='dob'
                                 value={dob}/>
                                <div className='regtext1'>Marital Status</div>
                                <input
                                 style={{width:250}}
                                 className='rinput'
                                 placeholder='Marital Status'
                                 type='text'
                                 id='marital_status'
                                 onChange={(e) => setmarital_status(e.target.value)}
                                 name='marital_status'
                                 value={marital_status}/>
                            </div>

                    </div>
                    <div className='rgrid2'>
                        <div className='rtag'>Contact Info</div>
                            <div className='griddesignn'>
                                <div className='regtext1'>Address</div>
                                <input className='rinput' placeholder='Street' type='text' id='street'/>
                                <input className='rinput' placeholder='City' type='text' id='city'/>
                                <input className='rinput' placeholder='State' type='text' id='state'/>
                                <input className='rinput' placeholder='Zip Code' type='text' id='zip code'/>
                                <input className='rinput' placeholder='Country' type='text' id='country'/>
                                <div className='regtext1'>Mobile Number</div>
                                <input
                                 style={{width:200}}
                                 className='rinput'
                                 placeholder='Mobile'
                                 type='text'
                                 id='phone'
                                 onChange={(e) => setphone(e.target.value)}
                                 name='phone'
                                 value={phone}/>
                                <div className='regtext1'>Email</div>
                                <input
                                 style={{width:200}}
                                 className='rinput'
                                 placeholder='Email'
                                 type='email'
                                 id='email'
                                 onChange={(e) => setemail(e.target.value)}
                                 name='email'
                                 value={email}/>
                                <div className='regtext1'>LinkedIn Profile</div>
                                <input
                                 style={{width:200}}
                                 className='rinput'
                                 placeholder='Linkedin'
                                 type='text'
                                 id='linkedin'
                                 onChange={(e) => setlinkedin(e.target.value)}
                                 name='linkedin'
                                 value={linkedin}/>
                                <div className='regtext1'>GitHub Profile</div>
                                <input
                                 style={{width:200}}
                                 className='rinput'
                                 placeholder='Github'
                                 type='text'
                                 id='github'
                                 onChange={(e) => setgithub(e.target.value)}
                                 value={github}
                                 name='github'/>
                            </div>
                    </div>
                    <div className='rgrid3'>
                    <div className='rtag'>Acadamic Info</div>
                            <div className='griddesignn'>
                                <div className='regtext1'>Team</div>
                                <input className='rinput' placeholder='Qualification' type='text' id='text'/>
                                <input className='rinput' placeholder='Specialization' type='text' id='special'/>
                                <input
                                 className='rinput'
                                 placeholder='Dept Name'
                                 type='text'
                                 id='deptname'
                                 onChange={(e) => setdept_name(e.target.value)}
                                 name='dept_name'
                                 value={dept_name}/>
                                <input
                                 className='rinput'
                                 placeholder='Dept Id'
                                 type='number'
                                 min="1"
                                 max="10"
                                 id='dept_id'
                                 onChange={(e) => setdept_id(e.target.value)}
                                 name='dept_id'
                                 value={dept_id}/>
                                <input
                                 className='rinput'
                                 placeholder='Manager Id'
                                 type='number'
                                 id='managerid'
                                 onChange={(e) => setmanager_id(e.target.value)}
                                 name='manager_id'
                                 value={manager_id}/>
                                <input
                                 className='rinput'
                                 placeholder='Manager Name'
                                 type='text'
                                 id='manager_name'
                                 onChange={(e) => setmanager_name(e.target.value)}
                                 name='manager_name'
                                 value={manager_name}/>
                                <input
                                 className='rinput'
                                 placeholder='Position'
                                 type='text'
                                 id='position'
                                 onChange={(e) => setposition(e.target.value)}
                                 name='position'
                                 value={position}/>
                                <input
                                 className='rinput'
                                 placeholder='Salary'
                                 type='text'
                                 id='salary'
                                 onChange={(e) => setsalary(e.target.value)}
                                 name='salary'
                                 value={salary}/>
                                <div className='regtext1'>Hire Date</div>
                                <input
                                 className='rinput'
                                 placeholder='Hire Date'
                                 type='date'
                                 id='hire_date'
                                 onChange={(e) => sethire_date(e.target.value)}
                                 name='hire_date'
                                 value={hire_date}/>
                                <div className='regtext1'>Location</div>
                                <input
                                style={{marginRight:20}}
                                className='rinput'
                                placeholder='Location'
                                type='text'
                                id='office'
                                onChange={(e) => setoffice(e.target.value)}
                                name='office'
                                value={office}/>
                                <input
                                style={{marginTop:20}}
                                className='rinput'
                                placeholder='Password'
                                type='password'
                                name='pass'
                                onChange={handlePassChange}/>
                                <b className='message3'><p>{rpassmessage}</p></b>
                                <input className='rinput' placeholder='Confirm Password' type='password' name='cpass' onChange={handleConPassChange}/>
                                <b className='message3' style={{padding:0}}><p>{rcpassmessage}</p></b>
                            </div>
                    </div>
                </div>
                <center><input type='submit' className='rbutton'/></center>
            </form>
        </div>
        <Footer/>
        {showForm && (
            <div className="form-overlay">
              <div className="form-container" style={{width:280, height:200}}>
                {/* Your form content goes here */}
                <div className='assign-task1' style={{marginLeft:65, fontSize:21, paddingBottom:10, fontWeight:600}}>Employee Recipt</div>
                <div className='recipt-text'> Employee ID : {data.employee_id}</div>
                <div className='recipt-text'> Employee Name : {data.personalDetail?.first_name} {data.personalDetail?.last_name}</div>
                <div className='recipt-text'>Position: {data.professionalDetail?.position}</div>
                <div className='recipt-text'> Department: {data.professionalDetail?.dept_name}</div>
                  <button onClick={sendMail} style={{marginTop:12, padding:5,paddingLeft:12, paddingRight:12, color:'white', backgroundColor:'blue',borderRadius:5, border:'none', marginLeft:10, borderRadius:5}} type='submit'>Mail</button>
              </div>
            </div>
          )}
    </div>
  )
}
