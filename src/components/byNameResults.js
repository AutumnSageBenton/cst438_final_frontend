import '../App.css';
import {BrowserRouter, Switch, Route, Link, useLocation, useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import styles from '../styles/byNameResults.css';
import { useRef } from 'react';
import { API_NAME_URL } from '../constants';
import axios from 'axios';




function byNameResults(props) {

  
  const params = useParams();

    const [cocktails , setCocktails] = useState([]);
    useEffect(() => {
      // called once after intial render
      getCocktail();
     }, [] )

    const searchByName = () => {
        fetch(`${API_NAME_URL}${params.query}`, {
            method:'GET',
            headers: {'Content-Type':'application/json' },
        })
        .then(res => { 
    
        })
        .catch(err => console.log(err));
    }

    const getCocktail = async() => {
      const URL = `${API_NAME_URL}${params.query}`;
      const searchResults = await axios.get(URL);
      if (!searchResults.data.drinks){
        window.location.href='/home';
      }
      setCocktails(searchResults.data.drinks);
      console.log(searchResults.data.drinks);    
      } 
      
    

    const fetchResults = () => {
      // setSearchQuery(search);
    }
  
  return (
    <div className="byNameResults">
      <h1>Results</h1>

      <button className='profileButton' onClick={event =>  window.location.href='/profile'}> View Profile </button>
      <button className='homeButton' onClick={event =>  window.location.href='/home'}> Home </button>
      <br/>
      <br/>
      <p>Search by {(params.query)}:</p>

      {cocktails.map((row, id) => (
                    <div key={id}>
                      <img src={row.strDrinkThumb}/>
                      <p>{row.strDrink}</p>
                      <button className='viewDrinkButton' onClick={event =>  window.location.href=`/display/${row.idDrink}`}>View Details </button>
                    </div>
                  ))}
      
      
    </div>
  );
}


export default byNameResults;