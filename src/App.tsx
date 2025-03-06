import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";

import { Layout } from "./components/ui/Layout";
import Main from "./components/pages/Main";
import Contact from "./components/pages/Contact";
import References from "./components/pages/References";
import { Impressum } from "./components/pages/Impressum";

const App = () => {
  return (
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
  );
};

export default App;
