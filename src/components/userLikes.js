import '../App.css';
import {BrowserRouter, Switch, Route, Link, useHistory  } from 'react-router-dom';
// import styles from '../styles/userLikes.css';
import { useRef, useState, useEffect} from 'react';
import { API_NAME_URL, API_RANDOM_URL, SERVER_URL } from '../constants';
import axios from 'axios';




function userLikes() {

  const [SearchByNameInput, setSearchByNameInput] = useState('');
  const history = useHistory();

  const token = sessionStorage.getItem("jwt");

  var data = 
    {
      search: ""
    };

    useEffect(() => {
      // called once after intial render
      fetchLikes();
     }, [] )

  const toComponentB=()=>{
      console.log(byNameRef.current.value);
      window.location =`/results/${byNameRef.current.value}`;
      // data.search = byNameRef.current.value;
      // history.push('/result', { data });
  }

  const fetchLikes = () => {
    console.log("fetchLikes");
    fetch(`${SERVER_URL}/likes`,{
      headers: {'Authorization' : token}
    })
    .then((response) => response.json() ) 
    .then((data) => { 
      console.log("likes length " + data.length);
      // setAssignments(data);
     }) 
    .catch(err => console.error(err)); 
  }

  const byNameRef = useRef(null);
  
  return (
    <div className="userLikes">
      <h1>User Likes</h1>

      <button className='profileButton' onClick={event =>  window.location.href='/profile'}> View Profile </button>
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


export default userLikes;