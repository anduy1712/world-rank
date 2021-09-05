import React, { useState } from 'react';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from '../pages/Detail/Detail';
import Header from '../components/Header';
import Home from '../pages/Home/Home';
const App = () => {
  const [darkTheme, setdarkTheme] = useState(
    JSON.parse(localStorage.getItem('theme'))
  );
  const toggleTheme = () => {
    setdarkTheme(!darkTheme);
    localStorage.setItem('theme', JSON.stringify(!darkTheme));
  };
  return (
    <div>
      <Router>
        <Header theme={darkTheme} toggle={toggleTheme} />
        <Switch>
          <Route exact path="/" component={() => <Home theme={darkTheme} />} />
          <Route exact path="/country/:slug" component={()=><Detail theme={darkTheme}/>} />
        </Switch>
        <Footer theme={darkTheme} />
      </Router>
    </div>
  );
};

export default App;
