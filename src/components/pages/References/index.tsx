import React from "react";
import { Link } from "react-router-dom";
import github from "../../../assets/icons8-github-30.png";
import linkedin from "../../../assets/icons8-linkedin-30.png";

import "./styles.scss";

const References: React.FC = () => (
  <div className="references">
    <h3>Professional experience and references</h3>
    <section className="references-projects">
      <p>
        I have worked on a variety of products and projects in the fields of{" "}
        <span>health tech</span>, <span>HR tech</span>,{" "}
        <span>tech education</span>, <span>crypto</span>, and more
      </p>
      <p>
        Most of my recent work is proprietary but I am very happy to answer
        questions and provide up-to-date reference code if you send me a{" "}
        <Link to="/contact">message</Link>
      </p>
    </section>
    <section className="references-socials">
      <h3>Socials</h3>
      <p>Want to know more?</p>
      <a href="https://github.com/keighleymcf">
        <img
          src={github}
          alt="github icon from icons8 https://icons8.com/icons/set/github"
        />{" "}
        Github
      </a>
      <a href="https://www.linkedin.com/in/keighleymcfarland/">
        <img
          src={linkedin}
          alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin"
        />{" "}
        LinkedIn
      </a>
    </section>
  </div>
);

export default References;
