import React from 'react';
import Home from './component/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route,Switch } from 'react-router';
import Detail from './component/Countries/Detail';
import './media.css'

const App = () => {
   
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detail' component={Detail} />
    </Switch>
    </>
  );
};

export default App;