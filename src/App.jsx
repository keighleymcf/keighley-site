import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./app.css";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";

import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import References from "./components/pages/References";
import Impressum from "./components/pages/Impressum";

const App = () => {
  const locale = "en";

  return (
    <IntlProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <div className="main-content">
              <Header />
              <Main />
              <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/references" element={<References />} />
                <Route path="/impressum" element={<Impressum />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
