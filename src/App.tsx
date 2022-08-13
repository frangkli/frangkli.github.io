import React from 'react';
import profilepic from './assets/profilepic.jpg';
import resume from './assets/resume.pdf';
import Button from './components/Button';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faFile, faEnvelope} from '@fortawesome/free-solid-svg-icons' 
import './App.css';

function App() {
  return (
    <div className="App bg-background h-screen text-primary flex items-center justify-center">

      <div className="flex flex-row items-start justify-start">

        <img className='w-96 mr-20' src={profilepic} alt='profile'/>

        <div className='m-5 font-thin'>
          <h1 className='text-4xl'>Ang Li (Frank)</h1>
          <h2 className='text-xl mt-5'>Freshman at University of Washington - Seattle, WA</h2>
          <h2 className='text-xl mt-1'>Pursuing Bachelor of Science in Computer Science</h2>
          <div className='text-center mt-5 flex'>
            <Button icon={faEnvelope} href='mailto://frankla0203@outlook.com'></Button>
            <Button icon={faGithub} href='https://github.com/frankla0203'></Button>
            <Button icon={faLinkedin} href='https://linkedin.com/in/anglifrank'></Button>
            <Button icon={faFile} href={resume} target="_blank"></Button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;