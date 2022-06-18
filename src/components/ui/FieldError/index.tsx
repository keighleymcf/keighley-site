import styled from "styled-components";

import { Text } from "../Text";

type FieldErrorProps = {
  error: string | undefined;
};

const StyledErrorMessage = styled(Text)`
  color: ${(props) => props.theme.palette.red};

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-left: 8px;
  }
`;

export const FieldError = ({ error }: FieldErrorProps) => {
  return <StyledErrorMessage variant="p">{error}</StyledErrorMessage>;
};
