import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Login from './components/Login'

function App() {
  return (
    <div className='app'>
      <Login/>
    </div>

  );
}

export default App;