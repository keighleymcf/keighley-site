import React from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { FieldError } from "../../ui/FieldError";

const fieldStyles = css`
  margin-bottom: 16px;
  padding: 8px;
  font-size: 1.6rem;
  line-height: 1.8rem;
  border: 2px solid black;
  border-radius: 0;
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

const StyledLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 300;
`;

const StyledInputField = styled.input`
  ${fieldStyles}
`;

type BaseInputProps = {
  label: string;
  error: string;
  name: string;
};
type TextFieldProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Label = ({ label, error, name }: BaseInputProps) => {
  return (
    <LabelContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {error && <FieldError />}
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

const StyledTextareaField = styled.textarea`
  ${fieldStyles}
`;

type TextareaFieldProps = BaseInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField = ({
  rows = 1,
  label,
  error,
  ...props
}: TextareaFieldProps) => {
  return (
    <InputFieldContainer>
      <Label label={label} error={error} name={props.name} />
      <StyledTextareaField rows={rows} {...props} />
    </InputFieldContainer>
  );
};
