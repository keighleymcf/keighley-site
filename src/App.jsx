import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./app.css";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";

import Header from "./components/views/Header";
import Main from "./components/views/Main";
import Footer from "./components/views/Footer";
import Contact from "./components/views/Contact";
import References from "./components/views/References";
import Impressum from "./components/views/Impressum";

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
