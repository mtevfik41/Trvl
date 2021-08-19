import React, {Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

const App = () => {
  return (
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/Trvl' exact component={Home} />
            <Route path='/Trvl/services' component={Services} />
            <Route path='/Trvl/products' component={Products} />
            <Route path='/Trvl/sign-up' component={SignUp} />
          </Switch>
        </Router>
      </Fragment>
  );
}

export default App;