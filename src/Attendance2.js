import React from 'react';
import AdminNav from './AdminNav';
import Progress from './Progress';
import Footer from './Footer';

function Attendance2() {
  // Generate the calendar dates for 2023
  const calendarDates = generateCalendarDates(2023);

  // Mock student attendance data
  const studentAttendance = {
    '2023-07-01': 'absent',
    '2023-06-05': 'absent',
    '2023-04-10': 'absent',
    '2023-04-11': 'absent',
    '2023-03-22': 'absent',
    '2023-02-06': 'absent',
    '2023-02-07':'absent',
    '2023-01-17':'absent',
    '2023-08-28': 'absent',
    '2023-09-16': 'absent',
    '2023-10-09': 'absent',
    '2023-11-23': 'absent',
    // Add more attendance data as needed
  };

  // Function to generate calendar dates for a given year
  function generateCalendarDates(year) {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);
    const calendarDates = [];

    while (startDate <= endDate) {
      calendarDates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return calendarDates;
  }

  // Function to group calendar dates by month
  function groupDatesByMonth(dates) {
    const groupedDates = {};
    dates.forEach((date) => {
      const month = date.toLocaleString('default', { month: 'long' });
      if (groupedDates[month]) {
        groupedDates[month].push(date);
      } else {
        groupedDates[month] = [date];
      }
    });
    return groupedDates;
  }

  const groupedDates = groupDatesByMonth(calendarDates);

  return (

    <div>

        <AdminNav/>

        <div style={{display:'flex'}}>
          <div className="calendar-container">
            <div className="calendar-wrapper">
              <div className="month-group1">
                {Object.keys(groupedDates).map((month, index) => {
                  const dates = groupedDates[month];
                  return (
                    <div key={index} className="month-card1">
                      <h2 className="month-title">{month} 2023</h2>
                      <div className='days'>
                    <div className='daysvalue'>SUN</div>
                    <div className='daysvalue'>MON</div>
                    <div className='daysvalue'>TUE</div>
                    <div className='daysvalue'>WED</div>
                    <div className='daysvalue'>THU</div>
                    <div className='daysvalue'>FRI</div>
                    <div className='daysvalue'>SAT</div>
                  </div>
                      <div className="dates-container">
                        {dates.map((date) => {
                          const dateString = date.toISOString().split('T')[0];
                          const attendanceStatus = studentAttendance[dateString];
                          return (
                            <div
                              key={dateString}
                              className={`calendar-date ${
                                attendanceStatus === 'absent' ? 'absent' : 'present'
                              }`}
                            >
                              {date.getDate()}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        <div className='rightbar'>
                <div className='progress-pad'><Progress percent='234'/></div>
                <div style={{marginTop:-30}}>
                  <div className='enter-date' style={{paddingTop:10, marginLeft:20}}>Priyanga Packirisamy</div>
                  <div className='enter-date' style={{fontSize:11, fontWeight:500, padding:3, marginLeft:22}}>Senior Software Engineer - NewYork</div>
                    <div style={{display:'flex', marginLeft:20}} className='dateattend'>
                        <div className='enter-date'>Month:</div>
                        <input type="number" min={1} max={12}  name="dateFieldName" style={{width:30, marginLeft:10}}></input>
                    </div>
                    <ul className='deptlist'>
                    <li className='deptitems1'>Salary Per Hr - 500/-</li>
                    <li className='deptitems1'>Total Hr - 168 hr</li>
                    <li className='deptitems1'>Additional Hr - 24 hr</li>
                    <li className='deptitems1'>Allowance - 6000/-</li>
                    <li className='deptitems1'>Increment - 4%</li>
                    <li className='deptitems1'>Project - 3</li>
                    <li className='deptitems1'>Credit - 8.9</li>
                    <li className='deptitems1'>review - 9/10</li>
                    <div className='salaryy'>Salary - 200000/-</div>
                    </ul>
                </div>
            </div>
            </div>
            <Footer/>
    </div>
  );
}

export default Attendance2;
