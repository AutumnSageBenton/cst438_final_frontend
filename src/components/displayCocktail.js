import '../App.css';
import { BrowserRouter, Switch, Route, Link, useLocation, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from '../styles/displayCocktail.css';
import { useRef } from 'react';
import { API_NAME_URL, API_DETAILS_URL } from '../constants';
import axios from 'axios';

function displayCocktail(props) {
  const params = useParams();

  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    // called once after initial render
    getDetails();
  }, []);

  const searchByName = () => {
    fetch(`${API_DETAILS_URL}${params.id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {})
      .catch(err => console.log(err));
  };

  const getDetails = async () => {
    const URL = `${API_DETAILS_URL}${params.id}`;
    const searchResults = await axios.get(URL);
    if (!searchResults.data.drinks) {
      window.location.href = '/home';
    }
    setCocktails(searchResults.data.drinks);
    console.log(searchResults.data.drinks);
  };

  const fetchResults = () => {
    // setSearchQuery(search);
  };

  return (
    <div className="displayCocktail">
      <button className="profileButton" onClick={event => (window.location.href = '/profile')}>
        View Profile
      </button>
      <button className="homeButton" onClick={event => (window.location.href = '/home')}>
        Home
      </button>
      <br />
      <br />

      {cocktails.map((row, id) => (
        <div key={id}>
          <h1>{row.strDrink} Results</h1>
          <img src={row.strDrinkThumb} alt={row.strDrink} />
          <p className="leftAlign">
            {row.strDrink}
            <br /> Drink category: {row.strCategory}
            <br /> Drink type: {row.strAlcoholic} <br /> <br />
            <br /> Instructions: {row.strInstructions}
            <br />
            {/* Display ingredients that are not null */}
            <strong>Ingredients:</strong>
            <ul>
              {Object.keys(row)
                .filter(key => key.startsWith('strIngredient') && row[key] !== null)
                .map((ingredientKey, index) => (
                  <li key={index}>{row[ingredientKey]}</li>
                ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
}

export default displayCocktail;
