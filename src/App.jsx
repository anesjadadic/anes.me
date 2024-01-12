import './style.css';
import React from 'react';
import Pdf from "./assets/Resume.pdf";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import headshot from "./assets/headshot2.png";
import reactIcon from './assets/react.png';
import phpIcon from './assets/php.png';
import tsIcon from './assets/typescript.png';
import sqlIcon from './assets/mysql.png';
import jsIcon from './assets/js.jpeg';
import pythonIcon from './assets/python.png';
import javaIcon from './assets/java.png';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import emailIcon from './assets/email.png';
import arrows from './assets/arrows.png';
import bjc1 from './assets/bjc1.png'
import bjc2 from './assets/bjc2.png'
import bjc3 from './assets/bjc3.png'
import bjc4 from './assets/bjc4.png'
import sc1 from './assets/sc1.png'
import sc2 from './assets/sc2.png'
import sc3 from './assets/sc3.png'
import sc4 from './assets/sc4.png'
import sc5 from './assets/sc5.png'

const Greetings = () => {
  let myDate = new Date();
  let hours= myDate.getHours();
  let greet;

  if (hours < 12)
      greet = "// Good morning, friend.";
  else if (hours >= 12 && hours <= 17)
      greet = "// Good afternoon, friend.";
  else if (hours >= 17 && hours <= 24)
      greet = "// Good evening, friend.";
  
  return <h1>{greet}</h1>
}

function SampleNextArrow(props) {
  const { className, onClick, } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      id='nextArrow'
    >
      <h2>&gt;</h2>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, id } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      id='prevArrow'
    >
      <h2>&lt;</h2>
    </div>
  );
}

export default function App() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
      <>
        <nav className="navbar">
          <ul>
            <li><h1>ABOUT</h1></li>
            <li><h1>PROJECTS</h1></li>
            <li><h1>CONTACT</h1></li>
          </ul>
        </nav>

        <div className="aboutMe">
          <div className='aboutMeImg'>
            <img className='headshot' src={headshot}/>
          </div>
          <div className='aboutMeText'>
            <Greetings />
            <h2>I'm Anes Jadadic, welcome to my website.</h2>
            <h3>
              I am a 23 year old undergrad at Iona University who is aspiring to become a full-time web developer.
              My interests lie in both the front-end and back-end, and I work hard to develop my skills in each field.
              <br/><br/>
              Outside of programming I enjoy music, basketball, cooking, and reading.
              <br/><br/>
              Please consider viewing my <a href={Pdf} target="_blank" style={{ color:'rgb(68, 68, 68)'}}>resume</a>.
              <br/><br/>
              And why not check out my skills and projects down below!
            </h3>
          </div>
        </div>

        <div className="skills">
          <h1>SKILLS</h1>
          <img src={reactIcon}/>
          <img src={phpIcon}/>
          <img src={tsIcon}/>
          <img src={sqlIcon}/>
          <img src={jsIcon}/>
          <img src={javaIcon}/>
          <img src={pythonIcon}/>
        </div>
  
        <img id='arrows' src={arrows}/>

        <div className='projects'>
          <h2>My Projects</h2>
          <div className='project'>
            <h1>
              Blue Jay Cafe <br/>
              <img src={reactIcon} style={{width:'40px', margin:'1rem 0.5rem 0 0.5rem'}}/>
              <img src={tsIcon} style={{width:'40px', margin:'1rem 0.5rem 0 0.5rem'}}/>
            </h1>
            <Slider {...settings}>
              <div>
                <img src={bjc1}/>
              </div>
              <div>
                <img src={bjc2}/>
              </div>
              <div>
                <img src={bjc3}/>
              </div>
              <div>
                <img src={bjc4}/>
              </div>
            </Slider>
            <h3>
              A front-end focused project meant to represent the website of a fictional NYC cafe.
              This project challenged me to utilize hooks and components in React, as well as some
              interesting CSS techniques, to create a functional, modern, and mobile-friendly website.
            </h3>
            <a href="https://anesjadadic.github.io/blue-jay-cafe/" target="_blank">Live Demo</a>&ensp;&ensp;
            <a href="https://github.com/anesjadadic/blue-jay-cafe" target="_blank">GitHub Link</a>
          </div>

          <div className='project'>
            <h1>
              Spin City <br/>
              <img src={phpIcon} style={{width:'70px', margin:'1rem 0.5rem 0 0.5rem'}}/>
              <img src={sqlIcon} style={{width:'70px', margin:'1rem 0.5rem 0 0.5rem'}}/>
              <img src={jsIcon} style={{width:'40px', margin:'1rem 0.5rem 0 0.5rem'}}/>
            </h1>
            <Slider {...settings}>
              <div>
                <img src={sc1}/>
              </div>
              <div>
                <img src={sc2}/>
              </div>
              <div>
                <img src={sc3}/>
              </div>
              <div>
                <img src={sc4}/>
              </div>
              <div>
                <img src={sc5}/>
              </div>
            </Slider>
            <h3>
              A fullstack project representing a physical music vendor. This project helped me 
              learn more about SQL security measures as well as how to design apps which allow 
              for the creation, reading, updating, and deletion of data.
            </h3>
            <h2>Demo Out Soon</h2>&ensp;&ensp;
            <a href="https://github.com/anesjadadic/spin-city" target="_blank">GitHub Link</a>
          </div>
        </div>

        <div className='contact'>
          <h1>Contact Me</h1>
          <h1 style={{ margin:'0' }}>
            <a href="https://github.com/anesjadadic" target="_blank">
              <img src={githubIcon}/>
            </a>
            <a href="https://www.linkedin.com/in/anes-jadadic/" target="_blank">
              <img src={linkedinIcon}/>
            </a>
            <a href="mailto:anesjadadic1@gmail.com" target="_blank">
              <img src={emailIcon}/>
            </a>
          </h1>
        </div>
      </>
  )
}
