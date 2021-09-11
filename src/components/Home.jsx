import React, {useEffect, useState} from 'react';
import {CandidateCard} from './CandidateCard'
import { getUserData } from '../service/getData';


export const Home =() =>{
   
    const [users, setUsers] = useState([])
  
  useEffect(() => {
    getUserData().then(users => setUsers(users))
      
  },[])
 return (
     <div className='container row home'>
        
         { users.map((user) =>(<CandidateCard name={user.name} email={user.email}/>))}
     </div> 
 )
} 