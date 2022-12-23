import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'
export default function Home() {
  return (
    <div>
      <section className="box">
        <video src="static/images/fieldvideo.mp4" autoPlay muted loop></video>
        <h1>Agriculture</h1>
        <h2>Grow on your own</h2>
        <Link to="/about" className="boxBtn">More about us</Link>
      </section>

      <div class="about-us">
      <div class="text">
          <h2>Discover</h2>
          <h3>Our Story</h3>
          <div><i class="fas fa-asterisk"></i></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores sit ipsam incidunt soluta aspernatur itaque pariatur! Fuga id provident quas vitae, dolore error mollitia excepturi iusto repellat, blanditiis deleniti.</p>
      </div>
      <div class="image-container">
          <div class="image image1">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988527/vertical-photo-1.jpg" alt="Food Photo"/>
          </div>
          <div class="image image2">
              <img src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988532/vertical-photo-2.jpg" alt="Food Photo"/>
          </div>
      </div>
  </div>
    </div>
  )
}
