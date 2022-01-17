import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: $heading;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button: React.FC = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
