import styled from "styled-components";

import { Text } from "../Text";

type FieldErrorProps = {
  error: string;
  name: string;
};

const StyledErrorMessage = styled(Text)`
  color: ${(props) => props.theme.palette.red};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-left: 8px;
  }
`;

export const FieldError = ({ error, name }: FieldErrorProps) => {
  return (
    <StyledErrorMessage data-testid={`${name}-error`} variant="p">
      {error}
    </StyledErrorMessage>
  );
};
