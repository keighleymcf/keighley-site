import React from "react";
import styled from "styled-components";

import { InternalLink } from "../Link";

const HeaderContainer = styled.header`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 24px 0;

  > :not(:last-child) {
    padding-right: 16px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 16px 0 24px;
  }
`;

const HeaderName = styled(InternalLink)`
  margin-right: 24px;
`;

export const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderName to="/" variant="secondary">
      Keighley McFarland
    </HeaderName>
    <InternalLink to="/contact" className="link">
      Contact
    </InternalLink>
    <InternalLink to="/references" className="link">
      References
    </InternalLink>
  </HeaderContainer>
);
