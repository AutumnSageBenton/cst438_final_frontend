import './App.css';
import {BrowserRouter, Switch, Route, Routes, Link} from 'react-router-dom';

import Login from './components/Login'
import Profile from './components/Profile';
import Home from './components/Home';
import byNameResults from './components/byNameResults';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/home" component={Home} />
              <Route path="/results/:query" component={byNameResults} />
              <Route path="/" component={Login} />
              <Route render={ () => <h1>Page not found</h1>} />
            
          </Switch>
        </BrowserRouter>
    </div>

  );
}

export default App;