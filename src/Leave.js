import React, { useState } from 'react';
import EmployeeNav from './EmployeeNav';
import Footer from './Footer';
import { useEffect } from 'react';
import axios from 'axios';

const Leave = () => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [input4Value, setInput4Value] = useState('');
  const [input5Value, setInput5Value] = useState('');
  const [input6Value, setInput6Value] = useState(0);
  const [input7Value, setInput7Value] = useState(0);
  const [input8Value, setInput8Value] = useState('');
  const [input9Value, setInput9Value] = useState('');
  const [input10Value, setInput10Value] = useState('');

  const [selectedOption, setSelectedOption] = useState('Others');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const leavedata = {
      "emp_fname": input1Value,
      "emp_lname": input2Value,
      "manager_fname": input3Value,
      "manager_lname": input4Value,
      "ldept_name": input5Value,
      "ldept_id": input6Value,
      "reason": selectedOption,
      "employee_id": input7Value,
      "manager_email": input8Value,
      "leave_from": input9Value,
      "leave_to": input10Value,
      "leave_status": "Pending"
    }
    axios.post("http://localhost:8080/postLeave",leavedata);
    window.location.reload();
    console.log('Form submitted');
  };

  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getLeaveByEmpId/4")
    .then(response => {
        setData(response.data);
    })
    .catch(error => {
        console.log(error);
    })
},[]);

  // Handle form submission


  // Handle input1 change
  const handleInput1Change = (e) => {
    setInput1Value(e.target.value);
  };

  // Handle input2 change
  const handleInput2Change = (e) => {
    setInput2Value(e.target.value);
  };

  const handleInput3Change = (e) => {
    setInput3Value(e.target.value);
  };

  const handleInput4Change = (e) => {
    setInput4Value(e.target.value);
  };

  const handleInput5Change = (e) => {
    setInput5Value(e.target.value);
  };

  const handleInput6Change = (e) => {
    setInput6Value(e.target.value);
  };

  const handleInput7Change = (e) => {
    setInput7Value(e.target.value);
  };

  const handleInput8Change = (e) => {
    setInput8Value(e.target.value);
  };

  const handleInput9Change = (e) => {
    setInput9Value(e.target.value);
  };

  const handleInput10Change = (e) => {
    setInput10Value(e.target.value);
  };

  return (
    <div>
      <div style={{display:'flex'}}>
          <EmployeeNav/>
          <div>

              <div style={{display:'flex'}}>
                  <div className='emp-leave-form'>
                    <div className='member'style={{padding:10, marginLeft:230}}>Employee Leave Form</div>
                      <form className='formmalignn' onSubmit={handleSubmit}>
                        <div className='leave-form-text'>Employee Name</div>
                        <input
                          className='emp-leave-input'
                          type="text"
                          value={input1Value}
                          onChange={handleInput1Change}
                          placeholder="First Name"
                        />
                        <input
                          className='emp-leave-input'
                          type="text"
                          value={input2Value}
                          onChange={handleInput2Change}
                          placeholder="Last Name"
                        />
                        <div className='leave-form-text'>Manager Name</div>
                        <input
                          className='emp-leave-input'
                          type="text"
                          value={input3Value}
                          onChange={handleInput3Change}
                          placeholder="First Name"
                        />
                        <input
                          className='emp-leave-input'
                          type="text"
                          value={input4Value}
                          onChange={handleInput4Change}
                          placeholder="Last Name"
                        />
                        <div className='leave-form-text'>Department</div>
                        <input
                          className='emp-leave-input'
                          type="text"
                          value={input5Value}
                          onChange={handleInput5Change}
                          placeholder="Department Name"
                        />
                        <input
                          className='emp-leave-input'
                          type="number"
                          value={input6Value}
                          onChange={handleInput6Change}
                          placeholder="Department id"
                        />
                        <div className='leave-form-text'>Reason</div>
                        <div className='emp-reason'>
                            <div className='boddyy1'>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Vacation"
                                    checked={selectedOption === 'Vacation'}
                                    onChange={handleOptionChange}
                                    />Vacation
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Doctor Appointment"
                                    checked={selectedOption === 'Doctor Appointment'}
                                    onChange={handleOptionChange}
                                    />Doctor Appointment
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Sick-Self"
                                    checked={selectedOption === 'Sick-Self'}
                                    onChange={handleOptionChange}
                                    />Sick-Self
                                </div>
                            </div>
                            <div className='boddyy2'>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Sick-Family"
                                    checked={selectedOption === 'Sick-Family'}
                                    onChange={handleOptionChange}
                                    />Sick-Family
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Commitment"
                                    checked={selectedOption === 'Commitment'}
                                    onChange={handleOptionChange}
                                    />Commitment
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Workers Camp"
                                    checked={selectedOption === 'Workers Camp'}
                                    onChange={handleOptionChange}
                                    />Workers Camp
                                </div>
                            </div>
                            <div className='boddyy3'>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Funeral"
                                    checked={selectedOption === 'Funeral'}
                                    onChange={handleOptionChange}
                                    />Funeral
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Family Invite"
                                    checked={selectedOption === 'Family Invite'}
                                    onChange={handleOptionChange}
                                    />Family Invite
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Military"
                                    checked={selectedOption === 'Military'}
                                    onChange={handleOptionChange}
                                    />Military
                                </div>
                            </div>
                            <div  className='boddyy4'>
                                <div className='leave-form-text1'>
                                    <input className='emp-leave-input1'
                                    type="radio"
                                    value="Jury Duty"
                                    checked={selectedOption === 'Jury Duty'}
                                    onChange={handleOptionChange}
                                    />Jury Duty
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Stress Leave"
                                    checked={selectedOption === 'Stress Leave'}
                                    onChange={handleOptionChange}
                                    />Stress Leave
                                </div>
                                <div className='leave-form-text1'>
                                    <input
                                    className='emp-leave-input1'
                                    type="radio"
                                    value="Others"
                                    checked={selectedOption === 'Others'}
                                    onChange={handleOptionChange}
                                    />Others
                                </div>
                            </div>
                        </div>
                        <div className='leave-form-text'>Manager</div>
                        <input
                          type="number"
                          value={input7Value}
                          onChange={handleInput7Change}
                          placeholder="Employee Id"
                          className='emp-leave-input'
                        />
                        <input
                          type="text"
                          value={input8Value}
                          onChange={handleInput8Change}
                          placeholder="Email Id"
                          className='emp-leave-input'
                        />
                        <div className='leave-form-text'>Start From</div>
                        <input
                          type="date"
                          value={input9Value}
                          onChange={handleInput9Change}
                          placeholder="Employee Id"
                          className='emp-leave-input'
                        />
                        <div style={{marginTop:-75, marginLeft:325}}>
                            <div className='leave-form-text'>Ends At</div>
                            <input
                              type="date"
                              value={input10Value}
                              onChange={handleInput10Change}
                              placeholder="Email Id"
                              className='emp-leave-input'
                            />
                        </div>
                        <button  style={{padding:5, backgroundColor:'#333', color:'white', marginLeft:288, marginTop:9, fontFamily:' Cambria, Cochin, Georgia, Times '}}type="submit">Submit</button>
                      </form>
                  </div>
                  {/* Render the array of data */}
                  <div className='emp-leave-list'>
                    <div className='member' style={{marginLeft:80,marginTop:10, padding:10}}>Leave History</div>
                      <div className='leavescroller'>
                        {data.map((data) => (
                          <div className='leave-detailss'>
                            <div className='monntthh'>{data.reason}</div>
                            <div className='startsss'>Starts at:{data.leave_from}</div>
                            <div className='endsss'>Ends at: {data.leave_to}</div>
                            <div className='approval' >Approval: {data.manager_fname}</div>
                          </div>
                        ))}
                      </div>
                  </div>

              </div>

          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Leave;
