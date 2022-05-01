import React from "react";
import styled from "styled-components";

import { InternalLink } from "src/components/ui/Link";

const HeaderContainer = styled.header`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px 0 16px;
  > :not(:last-child) {
    padding-right: 16px;
  }
  border-bottom: 4px solid ${(props) => props.theme.palette.periwinkle};
`;

export const Header: React.FC = () => (
  <HeaderContainer>
    <InternalLink to="/">Keighley McFarland</InternalLink>
    <InternalLink to="/contact" className="link">
      Contact
    </InternalLink>
    <InternalLink to="/references" className="link">
      References
    </InternalLink>
  </HeaderContainer>
);
