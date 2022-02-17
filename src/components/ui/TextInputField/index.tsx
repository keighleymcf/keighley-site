import React from "react";
import styled from "styled-components";

type TextInputFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const StyledTextInputField = styled.textarea`
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

export const TextInputField = ({
  rows = 1,
  children,
  ...props
}: TextInputFieldProps) => (
  <StyledTextInputField rows={rows} {...props}>
    {children}
  </StyledTextInputField>
);
