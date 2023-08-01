import logo from './logo.svg';
import './App.css';
import AdminNav from './AdminNav';
import EmployeeLogin from './EmployeeLogin';
import AdminHome1 from './AdminHome1';
import Dept from './Dept';
import EmployeeList from './EmployeeList';
import Register from './Register';
import Profile from './Profile';
import EmployeeNav from './EmployeeNav';
import EmployeeHome from './EmployeeHome';
import EmployeeExNav from './EmployeeExNav';
import Workspace from './Workspace';
import Progress from './Progress';
import Attendance1 from './Attendance1';
import Attendance2 from './Attendance2';
import Leave from './Leave';
import About from './About';
import EmployeeAbout from './EmployeeAbout';
import Notification from './Notification';
import EmployeeNotification from './EmployeeNotification';
import EmployeeProfile from './EmployeeProfile';
import FeedBack from './feedback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import store from './store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const [employeeid, setemployeeid] = useState(() => {
    const storedEmployeeId = localStorage.getItem('employeeid');
    return storedEmployeeId ? parseInt(storedEmployeeId) : 1;
  });

  // Update local storage whenever employeeid changes
  useEffect(() => {
    localStorage.setItem('employeeid', employeeid.toString());
  }, [employeeid]);

  return (
    <div className="App">
      <Provider store={store}>
       <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<EmployeeLogin/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<AdminHome1/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/employeelist" element={<EmployeeList setemployeeid={setemployeeid}/>} />
          <Route path="/profile" element={<Profile empid={employeeid}/>} />
          <Route path="/empprofile" element={<EmployeeProfile/>} />
          <Route path="/attendance1" element={<Attendance1/>} />
          <Route path="/attendance2" element={<Attendance2/>} />
          <Route path="/employeehome" element={<EmployeeHome/>} />
          <Route path="/workspace" element={<Workspace/>} />
          <Route path="/leave" element={<Leave/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/empabout" element={<EmployeeAbout/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/empnotification" element={<EmployeeNotification/>} />
          <Route path="/feedback" element={<FeedBack/>} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
