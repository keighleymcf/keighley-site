import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import References from './Components/References';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/references'>
            <References />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
