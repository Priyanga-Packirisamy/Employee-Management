import React from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'

export default function AdminHome1() {
  return (
    <div>
        <AdminNav/>
        <div style={{backgroundImage:`url("wallpaper.jpg")`}} className='adminhome'>
            <div className='layer2'>
                <div className='text'>
                    <div className='text1'>SOLVE FIRST</div>
                    <div className='text2'>CODE NEXT</div>
                </div>
                <div className='message'>Measuring progress by lines of code is like measuring aircraft building progress by weigth</div>
                <div className='buttoncol'>
                    <button className='button1'>MY TASK</button>
                    <button className='button2'>MANAGE</button>
                </div>
            </div>
        </div>
        <div className='line'></div>
        <div style={{backgroundImage:`url("table.jpg")`}} className='adminhome1'>
        <div style={{backgroundColor:'rgb(0, 0, 0,0.55)',height: 1010}}>
                <div className='toptop'><center>
                    <div className='top'>Top Performers of the Month</div></center>
                </div>
                        <div className='grid1'>
                            <div className='title'> <center>Employee of the Month</center></div>
                            <div className='ename'>Ms. Meenakshi Ashokumar</div>
                            <div className='details'><center>The executive summary is very close to a product description. It covers similar ground and can even be interchangeable with the project description. Using our free executive summary template for Word will lay out everything you need to fill in for a thorough project description.you need to fill in for a thorough project description.</center></div>
                            <button className='learn'>Learn More</button>
                        </div>
                        <div className='grid2'>
                            <div className='title'><center>Best Performer</center></div>
                            <div className='ename'>Mr. Ranjith</div>
                            <div className='details'><center>The executive summary is very close to a product description. It covers similar ground and can.</center></div>
                            <button className='learn'>Learn More</button>
                        </div>
                        <div className='grid3'>
                            <div className='title'><center>Budding Employee</center></div>
                            <div className='ename'>Ms. Madhumitha</div>
                            <div className='details'><center>The executive summary is very close to a product description. It covers similar ground and can.</center></div>
                            <button className='learn'>Learn More</button>
                        </div>
                        <div className='grid4'>
                            <div className='title'><center>Perfect Attendance</center></div>
                            <div className='ename'>Ms. Megadharshini</div>
                            <div className='details'><center>The executive summary is very close to a product description. It covers similar ground and can.</center></div>
                            <button className='learn'>Learn More</button>
                        </div>
                        <div className='grid5'>
                            <div className='title'><center>Sales Awardee</center></div>
                            <div className='ename'>Mr. Mohammed Aasif</div>
                            <div className='details'><center>The executive summary is very close to a product description. It covers similar ground and can.</center></div>
                            <button className='learn'>Learn More</button>
                        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
