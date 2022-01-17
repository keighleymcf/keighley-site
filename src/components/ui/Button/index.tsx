import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: $heading;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 18px;
  background-color: white;
  border: solid black 4px;
  box-shadow: $shadow -6px 6px;
  margin: 8px 8px 8px 8px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    box-shadow: $periwinkle -6px 6px;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translate(-1px, 1px);
    box-shadow: $periwinkle -5px 5px;
  }
  &:disabled {
    background-color: $shadow;
    color: $darkGrey;
    border-color: $darkGrey;
    box-shadow: $shadow -5px 5px;
    cursor: not-allowed;
  }
`;

export const Button: React.FC = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
