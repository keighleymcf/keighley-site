import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
import Underline1 from "../../../assets/underline-1.svg";
import Underline2 from "../../../assets/underline-2.svg";
import Underline3 from "../../../assets/underline-3.svg";
import Underline4 from "../../../assets/underline-4.svg";
import Underline5 from "../../../assets/underline-5.svg";

type BaseLinkProps = { hideUnderline?: boolean };
type InternalLinkProps = LinkProps & BaseLinkProps;
type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseLinkProps;

const UnderlineContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 16px;
  display: flex;
  align-items: flex-start;
`;

const StyledUnderline = styled.img`
  width: 100%;
  height: 100%;
`;

const LinkStyles = css`
  text-decoration: none;
  color: ${(props) => props.theme.palette.black};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover,
  :focus {
    ${StyledUnderline} {
      filter: invert(62%) sepia(53%) saturate(1671%) hue-rotate(201deg)
        brightness(95%) contrast(83%);
    }
  }
  ${(props) => (props.hideUnderline ? `width: auto;` : `width: min-content`)}
`;

const StyledInternalLink = styled(Link)<InternalLinkProps>`
  ${LinkStyles}
`;

const StyledExternalLink = styled.a<ExternalLinkProps>`
  ${LinkStyles}
`;

const LinkUnderline = () => {
  const underlines = [
    Underline1,
    Underline2,
    Underline3,
    Underline4,
    Underline5,
  ];

  return (
    <UnderlineContainer>
      <StyledUnderline
        src={underlines[Math.floor(Math.random() * 5)]}
        alt="link underline"
      />
    </UnderlineContainer>
  );
};

export const InternalLink = ({
  hideUnderline,
  children,
  ...props
}: InternalLinkProps) => (
  <StyledInternalLink hideUnderline={hideUnderline} {...props}>
    {children}
    {!hideUnderline && <LinkUnderline />}
  </StyledInternalLink>
);

export const ExternalLink = ({
  hideUnderline,
  children,
  ...props
}: ExternalLinkProps) => (
  <StyledExternalLink hideUnderline={hideUnderline}>
    {children}
    {!hideUnderline && <LinkUnderline />}
  </StyledExternalLink>
);
