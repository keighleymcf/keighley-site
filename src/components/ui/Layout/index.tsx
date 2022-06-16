import React from "react";
import styled from "styled-components";

import { Header } from "../Header";
import { Footer } from "../Footer";

type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 16px 32px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 720px;
  justify-content: center;
  align-items: center;
`;

export const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    <Header />
    <ContentContainer>{children}</ContentContainer>
    <Footer />
  </LayoutContainer>
);
