import React, {useState} from "react";
import { postData } from "../../service/getData";
import './Login.css'

export const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginButton= (e) =>{
        e.preventDefault()
        postData(email,password,setToken)      
    }

    return(
      <div className="login-form mt-5  d-flex justify-content-center align-items-center  ">
      
      <form className='container row'  onSubmit={loginButton} >
          <div className="mb-2 col-8"> 
            <input type="email" className="form-control mb-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
  
            <div className="mb-2">
   
              <input type="password" className="form-control" value={password} placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </div>
        </form>
        
    </div>
    )
}