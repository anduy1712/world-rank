import React from 'react';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from '../pages/Detail/Detail';
import Header from '../components/Header';
import Home from '../pages/Home/Home';
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:slug" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
