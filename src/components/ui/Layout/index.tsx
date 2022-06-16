import React from "react";
import styled from "styled-components";

import { Header } from "../../pages/Header";
import { Footer } from "../../pages/Footer";

type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  padding: 16px 16px 0;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
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
