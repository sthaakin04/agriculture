import React from 'react'
import HomeContents from '../HomeContents/HomeContents'
import './Home.css'
export default function Home() {
  return (
    <div>
      <section class="box">
        <video src="static/images/fieldvideo.mp4" autoPlay muted Loop></video>
        <h1>Yoga Center</h1>
        <h1>Find your own path in yoga</h1>
        <a href="#" class="boxBtn">Contact Us</a>
    </section>
      {/* <HomeContents/> */}
    </div>
  )
}
