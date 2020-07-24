import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import {Helmet} from "react-helmet"

import './app.scss';

import Header from './Components/Header';
import Main from './Components/Main';
import MainButtons from './Components/MainButtons';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import References from './Components/References';
import Impressum from './Components/Impressum';

import preview from "./assets/social-preview-image.png"

const App = () => {
  const locale = 'en';

  return (
    <IntlProvider locale={locale}>
    <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Keighley McFarland | Full-stack web development with spark"
    />
    <meta property="og:image" content={preview}/>
    <meta property="og:image:type" content="image/png"/>
    <meta property="og:image:width" content="1024"/>
    <title>Keighley McFarland | Full-Stack Web Development</title>        </Helmet>
      <Router>
        <div className="App">
          <div className="main-content">
            <Header />
            <Main />
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/references">
                <References />
              </Route>
              <Route path="/impressum">
                <Impressum />
              </Route>
              <Route path="/">
                <MainButtons />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </IntlProvider>
  );
};

export default App;
