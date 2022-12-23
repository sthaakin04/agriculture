import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'
export default function Home() {
  return (
    <div>
      <section class="box">
        <video src="static/images/fieldvideo.mp4" autoPlay muted loop></video>
        <h1>Agriculture</h1>
        <h2>Grow on your own</h2>
        <Link to="/about" className="boxBtn">More about us</Link>
    </section>
    </div>
  )
}
