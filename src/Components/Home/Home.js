import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'
export default function Home() {
  return (
    <div id="home">
      <section className="box">
        <video src="static/images/fieldvideo.mp4" autoPlay muted loop></video>
        <h1>Agriculture</h1>
        <h2>Grow on your own</h2>
        <Link to="/about" className="boxBtn">More about us</Link>
      </section>

      <div className="about-us">
      <div className="text">
          <h2>Discover</h2>
          <h3>Our Story</h3>
          <div><i className="fas fa-asterisk"></i></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores sit ipsam incidunt soluta aspernatur itaque pariatur! Fuga id provident quas vitae, dolore error mollitia excepturi iusto repellat, blanditiis deleniti.</p>
      </div>
      <div className="image-container">
          <div className="image image1">
              <img src="static/images/ag1.png" alt="aboutus photo"/>
          </div>
          <div className="image image2">
              <img src="static/images/ag2.png" alt="aboutus photo"/>
          </div>
      </div>
  </div>
    </div>
  )
}
