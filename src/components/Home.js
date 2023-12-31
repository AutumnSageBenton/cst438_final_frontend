import '../App.css';
import {BrowserRouter, Switch, Route, Link, useHistory  } from 'react-router-dom';
import styles from '../styles/Home.css';
import { useRef, useState} from 'react';
import { API_NAME_URL, API_RANDOM_URL } from '../constants';
import axios from 'axios';




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

  const getRandomDrink= async () =>{
    const searchResults = await axios.get(API_RANDOM_URL);
    if (!searchResults.data.drinks){
      window.location.href='/home';
    } else {
      console.log(searchResults.data.drinks); 
      window.location.href=`/display/${searchResults.data.drinks[0].idDrink}`;
    }
    console.log(searchResults.data.drinks);     
  }

  const byNameRef = useRef(null);
  
  return (
    <div className="Home">
      <h1>Home</h1>

      <button className='profileButton' onClick={event =>  window.location.href='/profile'}> View Profile </button>
      <button className='randomDrinkButton' onClick={getRandomDrink}> View Random Drink </button>
      <button className='showLikesButton' onClick={event =>  window.location.href='/likes'}> View Liked Drinks </button>
      <br/>
      <br/>
      Search by Name:
      <input name='SearchByNameInput' 
      ref={byNameRef} 
      type='text'
      onChange={e => setSearchByNameInput(e.target.value)}
      placeholder='Margarita'
      value ={SearchByNameInput}/>
      <button onClick={toComponentB}>Search</button>
    </div>
  );
}


export default Home;