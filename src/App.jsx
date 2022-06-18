import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./app.css";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";

import { Layout } from "./components/ui/Layout";
import Main from "./components/pages/Main";
import Contact from "./components/pages/Contact";
import References from "./components/pages/References";
import { Impressum } from "./components/pages/Impressum";

const App = () => {
  const locale = "en";

  return (
    <IntlProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/references" element={<References />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/" element={<Main />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
