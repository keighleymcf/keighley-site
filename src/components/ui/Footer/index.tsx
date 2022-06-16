import React from "react";
import styled from "styled-components";
import { InternalLink, ExternalLink } from "../Link";
import { Text } from "../Text";
import github from "../../../assets/icons8-github-30.png";
import linkedin from "../../../assets/icons8-linkedin-30.png";

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  position: relative;
  bottom: 0;
  z-index: 10;
  padding: 0 16px;
  height: 48px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;

  > :not(:last-child) {
    padding-right: 4px;
  }
`;

export const Footer: React.FC = () => (
  <FooterContainer>
    <Text variant="pFinePrint">© Keighley McFarland 2022</Text>
    <InternalLink to="/impressum">
      <Text variant="pFinePrint">Impressum</Text>
    </InternalLink>
    <IconContainer>
      <InternalLink to="/contact">
        <Text variant="pFinePrint">Contact</Text>
      </InternalLink>
      <ExternalLink href="https://github.com/keighleymcf">
        <img
          src={github}
          alt="github icon from icons8 https://icons8.com/icons/set/github"
        />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/keighleymcfarland/">
        <img
          src={linkedin}
          alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin"
        />
      </ExternalLink>
    </IconContainer>
  </FooterContainer>
);
