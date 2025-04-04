import React from "react";
import styled from "styled-components";
import { InternalLink, ExternalLink } from "../Link";
import { Text } from "../Text";
import github from "../../../assets/icons8-github-30.png";
import linkedin from "../../../assets/icons8-linkedin-30.png";

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  align-self: flex-end;
  height: 48px;
  margin-top: 24px;
`;

const FooterCopyrightText = styled(Text)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const FooterLinkContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    align-items: flex-end;

    > :not(:last-child) {
      padding-right: 8px;
    }
  }
`;

const SocialIcon = styled.img`
  transform: translateY(25%);
`;

export const Footer: React.FC = () => (
  <FooterContainer>
    <FooterCopyrightText variant="spanFinePrint">
      © Keighley McFarland {new Date().getFullYear()}
    </FooterCopyrightText>
    <FooterLinkContainer>
      <InternalLink to="/impressum">
        <Text variant="spanFinePrint">Impressum</Text>
      </InternalLink>
    </FooterLinkContainer>
    <FooterLinkContainer>
      <InternalLink to="/contact">
        <Text variant="spanFinePrint">Contact</Text>
      </InternalLink>
      <ExternalLink href="https://github.com/keighleymcf">
        <SocialIcon
          src={github}
          alt="github icon from icons8 https://icons8.com/icons/set/github"
        />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/keighleymcfarland/">
        <SocialIcon
          src={linkedin}
          alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin"
        />
      </ExternalLink>
    </FooterLinkContainer>
  </FooterContainer>
);
