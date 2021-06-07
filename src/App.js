import React from 'react'
import {Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
