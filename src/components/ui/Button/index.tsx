import React from "react";
import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading: boolean;
  disabled: boolean;
};

const StyledButton = styled.button<{ $loading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
  height: 52px;

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

  ${(props) => {
    return (
      props.$loading &&
      `background-image: url("glitter.gif");
      color: transparent;
      border-color: ${props.theme.palette.periwinkle};
    `
    );
  }}
`;

export const Button = ({
  children,
  loading,
  disabled,
  ...props
}: ButtonProps) => (
  <StyledButton {...props} $loading={loading}>
    {loading ? "loading..." : children}
  </StyledButton>
);
