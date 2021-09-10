import React, {useEffect, useState} from 'react';

import { Login } from './Login';
import { getReportsData } from '../service/getData';


export const Home =() =>{
    const [data, setData] = useState([])
 
    
  
  useEffect(() => {
   
   getReportsData().then(user =>{ return(setData(user))})
   
      
  },[])
 return (
     <Login />
 )
} 