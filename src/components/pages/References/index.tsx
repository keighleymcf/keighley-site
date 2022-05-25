import React from "react";
import github from "../../../assets/icons8-github-30.png";
import linkedin from "../../../assets/icons8-linkedin-30.png";

import { Text } from "../../ui/Text";
import { ExternalLink, InternalLink } from "../../ui/Link";

const References: React.FC = () => (
  <div className="references">
    <Text variant="h3">Professional experience and references</Text>
    <section className="references-projects">
      <Text variant="p">
        I have worked on a variety of products and projects in the fields of{" "}
        <span>health tech</span>, <span>HR tech</span>,{" "}
        <span>tech education</span>, <span>crypto</span>, and more
      </Text>
      <Text variant="p">
        Most of my recent work is proprietary but I am very happy to answer
        questions and provide up-to-date reference code if you send me a{" "}
        <InternalLink to="/contact">message</InternalLink>
      </Text>
    </section>
    <section className="references-socials">
      <Text variant="h3">Socials</Text>
      <Text variant="p">Want to know more?</Text>
      <ExternalLink href="https://github.com/keighleymcf">
        <>
          <img
            src={github}
            alt="github icon from icons8 https://icons8.com/icons/set/github"
          />{" "}
          Github
        </>
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/keighleymcfarland/">
        <>
          <img
            src={linkedin}
            alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin"
          />{" "}
          LinkedIn
        </>
      </ExternalLink>
    </section>
  </div>
);

export default References;
