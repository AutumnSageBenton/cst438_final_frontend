import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import styles from '../styles/Profile.css';

import {SERVER_URL} from '../constants'

function Profile(props) {
    const [user, setUser] = useState([]);

    const token = sessionStorage.getItem("jwt");

    
  useEffect(() => {
    // called once after intial render
    fetchProfile();
   }, [] )

    const fetchProfile = () => {
        console.log("fetchProfile");
        fetch(`${SERVER_URL}/profile`,{
        headers: {'Authorization' : token}
        })
        .then((response) => response.json() ) 
        .then((data) => { 
        console.log("profile length "+data.length);
        setUser(data);
        }) 
        .catch(err => console.error(err)); 
    }


  const headers = ['Id', 'Alias', 'Email', 'Role'];

  return (
    <div className="Profile">
      <h1>Profile</h1>

      <table className='center'>
        <thead>
            <tr>
                {headers.map((title, idx) => (<th key={idx}>{title}</th>))}
            </tr>
        </thead>
        <tbody>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.alias}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                </tbody>
      </table>
    </div>
  );
}


export default Profile;