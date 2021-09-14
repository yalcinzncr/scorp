import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from './Home';
import ContactPage from './ContactPage';

function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/contact'  component={ContactPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
