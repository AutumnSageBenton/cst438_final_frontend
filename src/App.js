import './App.css';
import {BrowserRouter, Switch, Route, Routes, Link} from 'react-router-dom';

import Login from './components/Login'
import Profile from './components/Profile';
import Home from './components/Home';
import byNameResults from './components/byNameResults';
import displayCocktail from './components/displayCocktail';
import userLikes from './components/userLikes';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/likes" component={userLikes} />
              <Route path="/home" component={Home} />
              <Route path="/results/:query" component={byNameResults} />
              <Route path="/display/:id" component={displayCocktail} />
              <Route path="/" component={Login} />
              <Route render={ () => <h1>Page not found</h1>} />
            
          </Switch>
        </BrowserRouter>
    </div>

  );
}

export default App;