import React from "react"
import Img from "gatsby-image"



const CardOne = ({ skill, svg, skillText }) => (
  <div className="card">
    <img src={svg} alt={`an svg of ${skill}`} />
    <h3>{skill}</h3>
    <p>{skillText}</p>
  </div>
)

const CardTwo = ({ photo, name, desc, text }) => (
  <div className="card">
    <div className="card-header">
      <Img className="photo" fluid={photo} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
    <p>{text}</p>
  </div>
)

const CardThree = ({ project: { title, gitURL, demoURL, text, img } }) => {


  return (


    <div className="card">
      <h2>
        <span className='text'>{title}</span>
        <span className='underline'></span>
      </h2>
      <div className="project-photo">
        <img src={img} alt={title} />
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="btn-container">
        <a href={gitURL}>Live Demo</a>
        <a href={demoURL}>Git Repo</a>
      </div>
    </div>
  )
}



export { CardOne, CardTwo, CardThree }