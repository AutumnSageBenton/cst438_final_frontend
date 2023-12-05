import '../App.css';
import {BrowserRouter, Switch, Route, Link, useHistory  } from 'react-router-dom';
import styles from '../styles/Home.css';
import { useRef, useState} from 'react';
import { API_NAME_URL } from '../constants';




function Home() {

  const [SearchByNameInput, setSearchByNameInput] = useState('');
  const history = useHistory();

  var data = 
    {
      search: ""
    };

  const toComponentB=()=>{
      console.log(byNameRef.current.value);
      window.location =`/results/${byNameRef.current.value}`;
      // data.search = byNameRef.current.value;
      // history.push('/result', { data });
    }

  const byNameRef = useRef(null);
  
  return (
    <div className="Home">
      <h1>Home</h1>

      <button className='profileButton' onClick={event =>  window.location.href='/profile'}> View Profile </button>
      <br/>
      <br/>
      Search by Name:
      <input name='SearchByNameInput' 
      ref={byNameRef} 
      type='text'
      onChange={e => setSearchByNameInput(e.target.value)}
      placeholder='test'
      value ={SearchByNameInput}/>
      <button onClick={toComponentB}>Search</button>
    </div>
  );
}


export default Home;