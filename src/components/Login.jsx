//import { Button, makeStyles, TextField } from "@material-ui/core";
import React, {useState} from "react";
import { postData } from "../service/getData";

import './Login.css'

export const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const loginButton= (e) =>{
        e.preventDefault()
        postData(email,password,setToken)      
    }

    return(
      <div className=" mt-5  d-flex justify-content-center align-items-center  ">
      
      <form className='container row'  onSubmit={loginButton} >
          <div class="mb-2 col-8"> 
            <input type="email" class="form-control mb-2" onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
  
            <div class="mb-2">
   
              <input type="password" class="form-control"  placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
        
    </div>
    )
}