import { Button, makeStyles, TextField } from "@material-ui/core";
import React, {useState} from "react";
import { postData } from "../service/getData";

import './Login.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
      const useStyles = makeStyles((theme) => ({
        root: {
          "& .MuiTextField-root": {
            margin: theme.spacing(1),
          },
          "& .MuiButtonBase-root": {
            margin: theme.spacing(1),
          },
        },
    }));
      
      const classes = useStyles();
      

    


    const loginButton= (e) =>{
        e.preventDefault()
        postData(email,password)
      
    }

   
      
  


    return(
        <div className="page page-login">
        <form
          className={classes.root}
          onSubmit={loginButton}
          noValidate
          autoComplete="off"
          //action="//google.com"
          style={{ minHeight: "100vh", maxWidth: "240px", margin: "80px auto" }}
        >
          <TextField
            fullWidth
            id="email"
            label="E-Mail"
            onChange={(e)=>setEmail(e.target.value)}
            //value={email}
            //error={formInfo.errEmail}
            //helperText={formInfo.errEmail && "Invalid e-mail."}
          />
          <TextField
            fullWidth
            type="password"
            id="password"
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
            //value={password}
           // error={formInfo.errPassword}
           // helperText={formInfo.errPassword && "Invalid password."}
          />
          <Button
            fullWidth
            //disabled={formInfo.isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </div>
      
    )
}