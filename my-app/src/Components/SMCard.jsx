import React from 'react'
import '../Css/Card.css'


function SMCard() {

    return (
        
<div className="container">
  <div className="card">
    <h3 className="title">Snapchat</h3>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div className="card">
    <h3 className="title">Instagram</h3>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div className="card">
    <h3 className="title">LinkedIn</h3>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div className="card">
    <h3 className="title">GitHub</h3>
    <div className="bar">
      <div className="emptybar"></div>
      <div className="filledbar"></div>
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
</div>
       

    )
}

export default SMCard;