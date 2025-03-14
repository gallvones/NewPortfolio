import React, { useState, useRef } from 'react';
import '../Section2/Section2.css';

// Icons
import { FaNodeJs, FaReact, FaDocker, FaGitAlt, FaGithub, FaTrello, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiVite, SiJest, SiMongoose, SiJsonwebtokens, SiCanva, SiPostman, SiNotion } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BsBootstrapFill } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';

const Section2 = () => {
  const [names, setNames] = useState({
    coreTechs: '',
    frontEnd: '',
    backEnd: '',
    tools: '',
  });

  
  const timeoutRef = useRef({});

  const changingNames = (section, value) => {
   
    if (timeoutRef.current[section]) {
      clearTimeout(timeoutRef.current[section]);
    }

    
    setNames((prevNames) => ({
      ...prevNames,
      [section]: value,
    }));

    
    timeoutRef.current[section] = setTimeout(() => {
      setNames((prevNames) => ({
        ...prevNames,
        [section]: '',
      }));
    }, 3000); 
  };
const more = '+'

  return (
    <div className='section2-container'>
      <div className='section2-title'>
        <h1>Tecnologias</h1>
      </div>

       {/* First Card */}
      <div className='cardsexp-container'>
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Core Techs</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.coreTechs}</h2>
            <div className='firstCard-icons'>
              <FaReact className='react' onClick={() => changingNames('coreTechs', 'React')} />
              <FaNodeJs className='node' onClick={() => changingNames('coreTechs', 'Node')} />
              <SiMongodb className='mongodb' onClick={() => changingNames('coreTechs', 'MongoDB')} />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Front-End</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.frontEnd}</h2>
            <div className='secondCard-icons'>
              <div className='secondCard-firstline-icons'>
                <FaReact className='react' onClick={() => changingNames('frontEnd', 'React')} /> <div className='more'>{more}</div>
                <SiVite className='vite' onClick={() => changingNames('frontEnd', 'Vite')} />
              </div>
              <RiTailwindCssFill className='tailwind' onClick={() => changingNames('frontEnd', 'Tailwind')} />
              <BsBootstrapFill className='bootstrap' onClick={() => changingNames('frontEnd', 'Bootstrap')} />
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Back-End</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.backEnd}</h2>
            <div className='thirdCard-icons'>
              <div className='thirdCard-firstline-icons'>
                <FaNodeJs className='node' onClick={() => changingNames('backEnd', 'NodeJS')} />  <div className='more'>{more}</div><p>Express</p>
              </div>
              <div className='thirdCard-secondline-icons'>
                <SiJest className='jest' onClick={() => changingNames('backEnd', 'Jest')} /> <div className='more'>{more}</div><p>Supertest</p>
              </div>
              <div className='thirdCard-thirdline-icons'>
                <FaDocker className='docker' onClick={() => changingNames('backEnd', 'Docker')} />
                <SiJsonwebtokens className='jwt' onClick={() => changingNames('backEnd', 'JWT')} />
                <SiMongoose className='mongoose' onClick={() => changingNames('backEnd', 'Mongoose')} />
                <FaGitAlt className='git' onClick={() => changingNames('backEnd', 'Git')} />
              </div>
            </div>
          </div>
        </div>

        {/* Fourd Card */}
        <div className='cards-exp'>
          <div className='section2Card-title'>
            <h1>Tools</h1>
          </div>
          <div className='section2-iconCard'>
            <h2>{names.tools}</h2>
            <div className='fourdCard-icons'>
              <div className='fourdCard-firstline-icons'>
                <FaTrello className='trello' onClick={() => changingNames('tools', 'Trello')} />
                <FaGithub className='github' onClick={() => changingNames('tools', 'GitHub')} />
                <VscVscode className='vscode' onClick={() => changingNames('tools', 'VSCode')} />
                <p onClick={() => changingNames('tools', 'DeepSeek')}>IA</p>
              </div>
              <div className='fourdCard-secondline-icons'>
                <FaFigma className='figma' onClick={() => changingNames('tools', 'Figma')} />
                <SiCanva className='canva' onClick={() => changingNames('tools', 'Canva')} />
                <SiPostman className='postman' onClick={() => changingNames('tools', 'Postman')} />
                <SiNotion className='notion' onClick={() => changingNames('tools', 'Notion')} />
              </div>
              <div className='fourdCard-thirdline-icons'>
                <p onClick={() => {changingNames('tools', 'Office Packet')}}> Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
