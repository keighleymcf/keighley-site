import React from "react";
import styled, { css } from "styled-components";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant: "textarea" | "input";
};

const fieldStyles = css`
  margin-bottom: 16px;
  padding: 8px;
  font-size: 1.4rem;
  line-height: 1.2rem;
  border: 2px solid black;
  border-radius: 0;
  box-shadow: none;
  &:focus {
    border: 2px solid black;
    outline: ${(props) => props.theme.palette.shadow} solid 2px;
  }
`;

const StyledInputField = styled.input`
  ${fieldStyles}
`;

const StyledTextAreaField = styled.input`
  ${fieldStyles}
`;

export const InputField = ({ variant, children, ...props }: InputFieldProps) =>
  variant === "textarea" ? (
    <StyledTextAreaField {...props}>{children}</StyledTextAreaField>
  ) : (
    <StyledInputField {...props}>{children}</StyledInputField>
  );
