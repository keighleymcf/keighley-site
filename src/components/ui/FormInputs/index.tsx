import React from "react";
import styled, { css } from "styled-components";

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
    outline: ${(props) => props.theme.palette.periwinkle} solid 2px;
  }
`;

const StyledInputField = styled.input`
  ${fieldStyles}
`;

export const TextField = ({
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <StyledInputField {...props}>{children}</StyledInputField>
);

const StyledTextareaField = styled.textarea`
  ${fieldStyles}
`;

export const TextareaField = ({
  rows = 1,
  children,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <StyledTextareaField rows={rows} {...props}>
    {children}
  </StyledTextareaField>
);
