import styled from "styled-components";

import { Text } from "../Text";

const StyledErrorMessage = styled(Text)`
  color: ${(props) => props.theme.palette.red};
  padding-left: 8px;
`;

export const FieldError = () => {
  return (
    <StyledErrorMessage variant="p">This field is required</StyledErrorMessage>
  );
};
