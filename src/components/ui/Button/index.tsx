import React from "react";
import styled from "styled-components";
import { LoadingIndicator } from "../LoadingIndicator";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${(props) => (props.loading ? "0" : "12px")};
  background-color: transparent;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;

  &:hover {
    border-color: ${(props) => props.theme.palette.periwinkle};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.palette.periwinkle};
  }
  &:active {
    border-color: ${(props) => props.theme.palette.periwinkleLight};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette.shadow};
    color: ${(props) => props.theme.palette.darkGrey};
    border-color: ${(props) => props.theme.palette.darkGrey};
    cursor: not-allowed;
  }
`;

export const Button = ({ children, loading, ...props }: ButtonProps) => (
  <StyledButton loading={loading} {...props}>
    {loading ? <LoadingIndicator /> : children}
  </StyledButton>
);
