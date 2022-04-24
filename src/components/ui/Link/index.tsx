import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";

type InternalLinkProps = LinkProps;
type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkStyles = css`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
`;

const StyledInternalLink = styled(Link)`
  ${LinkStyles}
`;

const StyledExternalLink = styled.a`
  ${LinkStyles}
`;

export const InternalLink = ({ children, ...props }: InternalLinkProps) => (
  <StyledInternalLink {...props}>{children}</StyledInternalLink>
);

export const ExternalLink = ({ children, ...props }: ExternalLinkProps) => (
  <StyledExternalLink {...props}>{children}</StyledExternalLink>
);
