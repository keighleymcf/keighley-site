import React from "react";
import styled, { css } from "styled-components";
import { Field, FieldProps } from "formik";

import { FieldError } from "../../ui/FieldError";

const fieldStyles = css`
  margin-bottom: 16px;
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: none;
  &:focus {
    border: 2px solid black;
    outline: ${(props) => props.theme.palette.periwinkle} solid 2px;
  }
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
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
      {error && <FieldError error={error} />}
    </LabelContainer>
  );
};

export const TextField = ({ label, error, ...props }: TextFieldProps) => {
  return (
    <InputFieldContainer>
      <Label label={label} error={error} name={props.name} />
      <StyledInputField {...props}></StyledInputField>
    </InputFieldContainer>
  );
};

const StyledTextareaField = styled(Field)`
  ${fieldStyles}
`;

type TextareaFieldProps = BaseInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

//TODO fix field not picking up value
export const TextareaField = ({
  rows = 1,
  label,
  error,
  ...props
}: TextareaFieldProps) => {
  return (
    <InputFieldContainer>
      <Label label={label} error={error} name={props.name} />
      <StyledTextareaField as="textarea" rows={rows} {...props} />
    </InputFieldContainer>
  );
};
