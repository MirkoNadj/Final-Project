import React, {useEffect, useState} from 'react';
import {CandidateCard} from './CandidateCard'
import { getUserData } from '../service/getData';
import Loading from '../components/Loading'


export const Home =() =>{
    console.log('session 1', window.sessionStorage.getItem("token"))
    const [users, setUsers] = useState([])
    const [showLoading, setShowLoading] = useState(false);
  
  useEffect(() => {
    console.log('session if', window.sessionStorage.getItem("token"))
    if (window.sessionStorage.getItem("token") === '') {
      setShowLoading(true)      
    }
    else {
      console.log('session else', window.sessionStorage.getItem("token"))
      setShowLoading(false)
      getUserData().then(users => setUsers(users))
    //setTimeout(function(){getUserData().then(users => setUsers(users))}, 0)    
    }      
  },[window.sessionStorage.getItem("token")])
 return (
     <div className='container row home'>

     {showLoading ? (<Loading />) :        
      ( users.map((user) =>(<CandidateCard name={user.name} email={user.email} key={user.id} users={user}/>)))}

     </div> 
 )
}