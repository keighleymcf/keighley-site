import React from 'react';
import github from '../../assets/icons8-github-30.png';
import linkedin from '../../assets/icons8-linkedin-30.png';

import './styles.scss';

const References = () => (
  <div className="references">
    <h3>References</h3>
    <section className="references-projects">
      <h4>Experimentation and Learning Projects</h4>
      <a href="https://appointer-med.herokuapp.com/">AppointerMed</a>
      <ul>
        <li>React, Express, Node, MongoDB, MaterialUI, HTML5, CSS3, SCSS</li>
        <li><a href="https://appointer-med.herokuapp.com/">Link to app</a></li>
        <li><a href="https://github.com/keighleymcf/ironhack-react-project">Github repo</a></li>
      </ul>
      <a href="https://sht-i-wanna-eat.herokuapp.com/">sh*t i wanna eat</a>
      <ul>
        <li>Express, Node, MongoDB, Handlebars, Google Maps API, HTML5, CSS3</li>
        <li><a href="https://sht-i-wanna-eat.herokuapp.com/">Link to app</a></li>
        <li><a href="https://github.com/keighleymcf/sht-i-wanna-eat">Github repo</a></li>
      </ul>
      <a href="https://keighleymcf.github.io/ironhack-game-project/">Peace Pal</a>
      <ul>
        <li>vanilla Javascript, HTML5, CSS3</li>
        <li><a href="https://keighleymcf.github.io/ironhack-game-project/">Link to app</a></li>
        <li><a href="https://github.com/keighleymcf/ironhack-game-project">Github repo</a></li>
      </ul>
    </section>
    <section className="references-socials">
      <h4>Socials</h4>
      <a href="https://github.com/keighleymcf">
        <img src={github} alt="github icon from icons8 https://icons8.com/icons/set/github" />
        {' '}
        Github
      </a>
      <a href="https://www.linkedin.com/in/keighleymcfarland/">
        <img src={linkedin} alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin" />
        {' '}
        LinkedIn
      </a>
    </section>
  </div>
);

export default References;
