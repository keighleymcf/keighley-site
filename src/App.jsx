import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './app.scss';

import Header from './Components/Header';
import Main from './Components/Main';
import MainButtons from './Components/MainButtons';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import References from './Components/References';
import Impressum from './Components/Impressum';

const App = () => {
  const locale = 'en';

  return (
    <IntlProvider locale={locale}>
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
