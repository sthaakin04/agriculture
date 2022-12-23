import React from 'react'
import HomeContents from '../HomeContents/HomeContents'
import './Home.css'
export default function Home() {
  return (
    <div>
      <section class="box">
        <video src="static/images/fieldvideo.mp4" autoPlay muted loop></video>
        <h1>Agriculture</h1>
        <h2>Grow on your own</h2>
        <a href="#" class="boxBtn">Contact Us</a>
    </section>
      {/* <HomeContents/> */}
    </div>
  )
}
