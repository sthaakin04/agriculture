import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
      <div className="container">
  <h1>Global agriculture</h1>
  <p>Zlatibor is a mountain of exceptional beauty whose special geographical properties have made this mountain a real gem of western Serbia.</p>
  {/* <a href="#">Learn more</a> */}
</div>

<div className="blank">
    <h2>Hey we are an agricultural company we help u to grow the best goodies</h2>
</div>

<div className="container second">
  <div className="item">
    <div className="img img-first"></div>
    <div className="card">
      <h3>Rock climbing</h3>
      <p>The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling</p>
      {/* <a href="#">Learn more</a> */}
    </div>
  </div>
  <div className="item">
    <div className="img img-second"></div>
    <div className="card">
      <h3>Caving</h3>
      <p>Exploring underground through networks of tunnels and passageways, which can be natural or artificial.</p>
      {/* <a href="#">Learn more</a> */}
    </div>
  </div>
  <div className="item">
    <div className="img img-third"></div>
    <div className="card">
      <h3>Parachuting</h3>
      <p>Jumping from an aeroplane and falling through the air before opening your parachute.</p>
      {/* <a href="#">Learn more</a> */}
    </div>
  </div>
</div>
    </div>
  )
}
