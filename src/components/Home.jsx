import React, {useEffect, useState} from 'react';

import { getReportsData } from '../service/getData';


export const Home =() =>{
    const [data, setData] = useState([])
 
    
  
  useEffect(() => {
   
   //getReportsData().then(user =>{ return(setData(user))})
   
      
  },[])
 return (
     <div className='container row home'>
         <h1>YOU ARE ON THE MAIN PAGE</h1>
     </div> 
 )
} 