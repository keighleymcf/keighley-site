import styled from "styled-components";

const StyledErrorMessage = styled.span`
  color: ${(props) => props.theme.palette.red};
  font-size: 1.6rem;
  padding-left: 8px;
`;

export const FieldError = () => {
  return <StyledErrorMessage>This field is required</StyledErrorMessage>;
};
