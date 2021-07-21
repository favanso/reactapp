
import React, {useState} from 'react';
import axios from 'axios';


export default function App(props) {
  const [user, setUser] = useState('')
  function handleSearch(){
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => console.log(response));
  }
  return ( 
    <>
    <p> {user} </p>
    <input className = "user" placeholder = "User" value = {user} 
    onChange={e=> setUser(e.target.value)}/> 
    <button type = "button" onClick= {handleSearch}> Search </button>
    </>
  );
}
