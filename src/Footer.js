import React from 'react'
export default function Footer() {
  return (
    <div>
        <div className='line'></div>
        <div className='footer'>
        <div className='part1'>
            <div className='foottitle' style={{marginLeft:20, marginBottom:20}}>More About Company</div>
            <div className='footcontent' style={{letterSpacing:2}}><center>I think that's the single best piece <br/>of advice; constantly thinking <br/>about how you could be doing <br/>things better & questioning yourself</center></div>
            <div style={{color:'rgb(167, 159, 159)',marginTop:10,marginLeft:0, fontFamily:'Cambria'}}><br/>- ELON MUSK</div>
        </div>
        <div className='part2'>
            <div className='foottitle' style={{marginLeft:40}}>Keep Connected</div>
            <ul>
                <li className='listitem'>
                    <img className="logoimg" src="facebook.png" alt="facebook"></img>
                    <a href='https://www.facebook.com/' className='footcontent' >Like us on Facebook</a>
                </li>
                <li className='listitem'>
                    <img  className="logoimg" src="twitter.png" alt="twitter"></img>
                    <a href='https://twitter.com/' className='footcontent'>Follow us on Twitter</a>
                </li>
                <li className='listitem'>
                    <img  className="logoimg" src="google-plus.png" alt="googleplus"></img>
                    <a href='https://support.google.com/'  className='footcontent'>Add us on Google Plus</a>
                </li>
                <li className='listitem'>
                    <img  className="logoimg" src="instagram.png" alt="instagram"></img>
                    <a href='https://www.instagram.com/'  className='footcontent'>Follow us on Instagram</a>
                </li>
                <li className='listitem'>
                    <img className="logoimg" src="pinterest.png" alt="pintrust"></img>
                    <a href='https://in.pinterest.com/' className='footcontent'>Like us on Pintrust</a>
                </li>
            </ul>
        </div>
        <div className='part3'>
            <div className='foottitle' style={{position:'relative', left:40}}>Contact information</div>
            <ul>
                <li className='listitem'>
                    <img className="logoimg1" src="home.png" alt="home"></img>
                    <div style={{paddingLeft:5, paddingBottom:10}}className='footcontent1'>Dizzo Info Tech<br/>Loreal Ipson Dollar<br/>Chennai 610001</div>
                </li>
                <li className='listitem'>
                    <img  className="logoimg1" src="viber.png" alt="phone"></img>
                    <div style={{paddingLeft:5, paddingBottom:15}} className='footcontent1'>1234567890</div>
                </li>
                <li className='listitem'>
                    <img className="logoimg1" src="email.png" alt="email"></img>
                    <div style={{paddingLeft:5, paddingBottom:10}} className='footcontent1'>dizzo@gmail.com</div>
                </li>
            </ul>
        </div>
        </div>
        <div className='lastfooter'>
            <div>@ 2023 Simple Footer Widget. All Rights Reserved. Design by Priyanga</div>
            <div style={{marginLeft:330}}>Company Information |</div>
            <div style={{marginLeft:15, marginRight:15}}>Privacy Policy |</div>
            <div style={{marginLeft:0, marginRight:0}}>Terms & Conditions</div>
        </div>
    </div>
  )
}
