import React from "react";
import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonProps>`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 18px;
  margin: 8px;
  font-size: 1.8rem;
  background-color: white;
  border: solid black 4px;
  box-shadow: ${(props) => props.theme.palette.shadow} -6px 6px;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.palette.periwinkle} -6px 6px;
  }
  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.palette.periwinkle} -6px 6px;
  }
  &:active {
    transform: translate(-2px, 2px);
    box-shadow: ${(props) => props.theme.palette.periwinkle} -4px 4px;
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette.shadow};
    color: ${(props) => props.theme.palette.darkGrey};
    border-color: ${(props) => props.theme.palette.darkGrey};
    box-shadow: ${(props) => props.theme.palette.shadow} -6px 6px;
    cursor: not-allowed;
  }
`;

export const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);
