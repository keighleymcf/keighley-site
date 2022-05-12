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

const StyledUnderline = styled.img`
  max-width: 100%;
  width: 100%;
`;

const LinkStyles = css`
  text-decoration: none;
  color: ${(props) => props.theme.palette.black};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8px;
  background: url(src/assets/underline-1.svg) bottom center no-repeat;
  background-size: contain;
  :hover,
  :focus {
    ${StyledUnderline} {
      filter: invert(66%) sepia(17%) saturate(1412%) hue-rotate(201deg)
        brightness(112%) contrast(101%);
    }
  }
`;

const StyledInternalLink = styled(Link)`
  ${LinkStyles}
`;

const StyledExternalLink = styled.a`
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
    <StyledUnderline
      src={underlines[Math.floor(Math.random() * 5)]}
      alt="link underline"
    />
  );
};

export const InternalLink = ({
  hideUnderline,
  children,
  ...props
}: InternalLinkProps) => (
  <StyledInternalLink {...props}>
    {children}
    {!hideUnderline && <LinkUnderline />}
  </StyledInternalLink>
);

export const ExternalLink = ({
  hideUnderline,
  children,
  ...props
}: ExternalLinkProps) => (
  <StyledExternalLink {...props}>
    {children}
    {!hideUnderline && <LinkUnderline />}{" "}
  </StyledExternalLink>
);
