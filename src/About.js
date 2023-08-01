import React from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import { useState } from 'react';
import { useEffect } from 'react';

export default function About() {

  const [index, setIndex] = useState(0);
  const images1 = ['office1.jpg', 'office2.jpg','office3.jpg','office4.jpg', 'office5.jpg'];
  const images2 = ['discuss1.jpg', 'discuss2.jpg','discuss3.jpg','discuss4.jpg', 'discuss5.jpg'];

  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % images1.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <AdminNav/>
      <div>
        <div style={{display:'flex'}}>
          <div class="vl1"></div>
          <div class="vl2"></div>
          <div className='about-us'><div className='about-us1'>ABOUT US</div></div>
          <img classname='officespace'style={{height: 548,width: 700}} src='office.jpg'/>
        </div>
          <div className='hr1'><hr/></div>
          <div className='hr2'><hr/></div>
          <div className='dizzo-pvt'>DIZZO PVT</div>
      </div>
      <div className='aboutt-uss'>
        <div className='phase1'>
          <div className='slide1img'>
          <div className='slide'>
              <img src={images1[index]} alt='Slide' style={{ width: '600px', height: '400px', top: '50%', position: 'top 120px',position:'static '}} />
          </div>
          </div>
          <div className='about-content-1'>
            Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.Of course, you have a homepage and dedicated pages for your products, but summarizing your offerings on the About Us page is crucial to tie them in with brand values in your messaging.Reviews, client logos, case studies, and results bring consistency to your About Us page. It’s what really proves what you are saying is real and the impact you can bring to future clients.Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
          </div>
        </div>
        {/* <div className='middle-about'>Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.Of course, you have a homepage and dedicated pages for your products, but summarizing your offerings on the About Us page is crucial to tie them in with brand values in your messaging.Reviews, client logos, case studies, and results bring consistency to your About Us page. It’s what really proves what you are saying is real and the impact you can bring to future clients.Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future</div> */}
        <div className='phase1'style={{marginTop:-40}}>
          <div className='about-content-1' style={{marginLeft:22}}>
            Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.Of course, you have a homepage and dedicated pages for your products, but summarizing your offerings on the About Us page is crucial to tie them in with brand values in your messaging.Reviews, client logos, case studies, and results bring consistency to your About Us page. It’s what really proves what you are saying is real and the impact you can bring to future clients.Every business has an origin story worth telling, and usually, one that justifies why you even do business and have clients.Some centennial enterprises have pages of content that can fit in this section, while startups can tell the story of how the company was born, its challenges, and its vision for the future.
          </div>
          <div className='slide1img'>
          <div className='slide'>
              <img src={images2[index]} alt='Slide' style={{marginLeft:-20, width: '520px', height: '350px', top: '50%', position: 'top 120px',position:'static '}} />
          </div>
          </div>

        </div>
        <Footer/>
      </div>

    </div>
  )
}
