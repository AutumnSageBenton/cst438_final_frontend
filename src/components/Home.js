import '../App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import styles from '../styles/Home.css';



function Home() {

  const byNameRef = useRef();
  
  return (
    <div className="Home">
      <h1>Home</h1>

      <button className='profileButton' onClick={event =>  window.location.href='/profile'}> View Profile </button>
      <br/>
      <br/>
      Search by Name:
      <input name='searchByName' ref={byNameRef}/>
    </div>
  );
}


export default Home;