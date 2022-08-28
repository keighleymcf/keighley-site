import React from "react";
import styled, { css } from "styled-components";
import { Field, FieldProps, useField } from "formik";

import { FieldError } from "../../ui/FieldError";

const fieldStyles = css`
  margin-bottom: 16px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: none;
  &:focus {
    border: 2px solid black;
    outline: ${(props) => props.theme.palette.periwinkleLight} solid 2px;
  }
  &:disabled {
    color: ${(props) => props.theme.palette.darkGrey};
    border: 2px solid ${(props) => props.theme.palette.darkGrey};
    background-color: ${(props) => props.theme.palette.shadow};
    cursor: not-allowed;
  }
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledInputField = styled(Field)`
  ${fieldStyles}
`;

type BaseInputProps = {
  label: string;
  error: string | undefined;
  name: string;
};
type TextFieldProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Label = ({ label, error, name }: BaseInputProps) => {
  return (
    <LabelContainer>
      <label htmlFor={name}>{label}</label>
      {error && <FieldError error={error} name={name} />}
    </LabelContainer>
  );
};

export const TextField = ({ label, error, ...props }: TextFieldProps) => {
  return (
    <InputFieldContainer>
      <Label label={label} error={error} name={props.name} />
      <StyledInputField aria-labelledby={label} {...props}></StyledInputField>
    </InputFieldContainer>
  );
};

const StyledTextareaField = styled.textarea`
  ${fieldStyles}
`;

type TextareaFieldProps = BaseInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  Partial<FieldProps>;

//TODO fix field not picking up value
export const TextareaField = ({
  name,
  rows = 1,
  label,
  error,
  ...props
}: TextareaFieldProps) => {
  const [field] = useField(name);
  return (
    <InputFieldContainer>
      <Label label={label} error={error} name={name} />
      <StyledTextareaField
        as="textarea"
        rows={rows}
        aria-labelledby={label}
        {...field}
        {...props}
      />
    </InputFieldContainer>
  );
};
