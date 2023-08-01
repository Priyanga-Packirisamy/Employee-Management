import React, {useState} from 'react';
import "./App.css";
import {Link} from 'react-router-dom';

export default function EmployeeLogin() {

  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const [emailmessage, setemailmessage] = useState('');
  const[passmessage, setpassmessage] = useState('');

  function handlePassChange(e){
    setPass(e.target.value);
  }
  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  const handleValidation = (e) => {

    e.preventDefault();

    const emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(! emailregex.test(email)){
      setemailmessage("Email is invalid");
    }
    else{
      setemailmessage("");
    }

    if(!passwordregex.test(pass)){
      setpassmessage("Password is invalid");
    }
    else{
      setpassmessage("");
    }
  }

  return (
    <body style={{backgroundImage:`url("black1.jpg")`}} className='loginbody'>
      <img className='loginimg' src="user.png"></img>
      <div className='login'>
          <form className='formdes' onSubmit={handleValidation}>
            <p style={{fontSize:30, fontStyle:Boolean, marginLeft:125}}>Login</p>
            <p style={{marginLeft:100}}>Welcome Back!</p>
            <p className='text3'>Employee ID</p>
            <input style={{paddingLeft:10}}
                   className="inputfiled"
                   type="text"
                   placeholder="Employee ID"
                   id="user"
                   onChange={handleEmailChange}/>
            <b className='message2'><p>{emailmessage}</p></b>

            <p className='text3'>Password</p>
            <input style={{paddingLeft:10}}
                  className="inputfiled"
                  type="password"
                  placeholder="Password"
                  id="pass"
                  onChange={handlePassChange}/>
            <b className='message2'><p>{passmessage}</p></b>

            <Link to='/employeehome'><button className='loginbut'>Login</button></Link>
          </form>
      </div>
    </body>
  )
}
