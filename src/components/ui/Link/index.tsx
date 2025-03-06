import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";
import Underline1 from "../../../assets/underline-1.svg";
import Underline2 from "../../../assets/underline-2.svg";
import Underline3 from "../../../assets/underline-3.svg";
import Underline4 from "../../../assets/underline-4.svg";
import Underline5 from "../../../assets/underline-5.svg";
// import { ReactComponent as Arrow } from "../../../assets/arrow.svg";

type BaseLinkProps = { variant?: "primary" | "secondary" };
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

// const StyledArrow = styled(Arrow)`
//   width: 36px;
//   transform: translateY(12.5%);
// `;

const LinkStyles = css<BaseLinkProps>`
  text-decoration: none;
  color: ${(props) => props.theme.palette.black};
  cursor: pointer;
  display: inline-block;
  height: min-content;

  :hover,
  :focus {
    ${StyledUnderline} {
      filter: invert(62%) sepia(53%) saturate(1671%) hue-rotate(201deg)
        brightness(95%) contrast(83%);
    }
  }

  ${(props) =>
    props.variant === "secondary" ? `width: auto;` : `width: min-content`}

  ${(props) =>
    props.variant === "secondary" &&
    `width: auto;
   
    :hover,
    :focus {
      
    }`}
`;
// ${StyledArrow} {
//   filter: invert(66%) sepia(17%) saturate(1412%) hue-rotate(201deg)
//   brightness(112%) contrast(101%);
// }
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
  variant = "primary",
  children,
  ...props
}: InternalLinkProps) => (
  <StyledInternalLink variant={variant} {...props}>
    {/* {variant === "secondary" && (
      <>
        <StyledArrow />{" "}
      </>
    )} */}
    {children}
    {variant === "primary" && <LinkUnderline />}
  </StyledInternalLink>
);

export const ExternalLink = ({
  variant = "primary",
  children,
  ...props
}: ExternalLinkProps) => (
  <StyledExternalLink variant={variant} {...props}>
    {/* {variant === "secondary" && (
      <>
        <StyledArrow />{" "}
      </>
    )} */}
    {children}
    {variant === "primary" && <LinkUnderline />}
  </StyledExternalLink>
);
