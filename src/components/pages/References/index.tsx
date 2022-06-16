import React from "react";
import styled from "styled-components";

import github from "../../../assets/icons8-github-30.png";
import linkedin from "../../../assets/icons8-linkedin-30.png";

import { Text } from "../../ui/Text";
import { ExternalLink, InternalLink } from "../../ui/Link";

const ReferenceSection = styled.section`
  display: flex;
  flex-direction: column;
  > :not(:first-child) {
    margin-bottom: 12px;
  }
`;

const SocialLink = styled.div`
  display: flex;
  align-items: flex-end;
`;

const References: React.FC = () => (
  <div id="references">
    <Text variant="h2">Professional experience and references</Text>
    <ReferenceSection id="references-projects">
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
    </ReferenceSection>
    <ReferenceSection id="references-socials">
      <Text variant="h3">Socials</Text>
      <Text variant="p">Want to see more?</Text>
      <ExternalLink href="https://github.com/keighleymcf">
        <SocialLink>
          <img
            src={github}
            alt="github icon from icons8 https://icons8.com/icons/set/github"
          />{" "}
          Github
        </SocialLink>
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/keighleymcfarland/">
        <SocialLink>
          <img
            src={linkedin}
            alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin"
          />{" "}
          LinkedIn
        </SocialLink>
      </ExternalLink>
    </ReferenceSection>
  </div>
);

export default References;
