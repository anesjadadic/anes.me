import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './style.css';
import headshot from "./assets/headshot2.png";
import reactIcon from './assets/react.png';
import phpIcon from './assets/php.png';
import tsIcon from './assets/typescript.png';
import sqlIcon from './assets/mysql.png';
import jsIcon from './assets/js.jpeg';
import pythonIcon from './assets/python.png';
import javaIcon from './assets/java.png';
import arrows from './assets/arrows.png';

const Greetings = () => {
  let myDate = new Date();
  let hours= myDate.getHours();
  let greet;

  if (hours < 12)
      greet = "Good morning, friend.";
  else if (hours >= 12 && hours <= 17)
      greet = "Good afternoon, friend.";
  else if (hours >= 17 && hours <= 24)
     greet = "// Good evening, friend.";
  
  return <h1>{greet}</h1>
}

export default function App() {
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
              Check out my skills and projects down below!
            </h3>
          </div>
        </div>
        <div className="skills">
          <h1>SKILLS</h1>
          <table className="skillsTable">
            <tr>
              <td><img src={reactIcon}/></td>
              <td><img src={phpIcon}/></td>
              <td><img src={tsIcon}/></td>
              <td><img src={sqlIcon}/></td>
              <td><img src={jsIcon}/></td>
              <td><img src={javaIcon}/></td>
              <td><img src={pythonIcon}/></td>
            </tr>
          </table>
        </div>
        <img id='arrows' src={arrows}/>
      </>
  )
}
