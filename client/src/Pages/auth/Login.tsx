import React from "react";
import Typography from "@mui/material/Typography";
import Input from "../../components/Input";
import Button from '../../components/Button'
import "../../styles/auth/Login.scss";

const Login: React.FC = () => {
  return (
    <div className='container'>
      <div className='left-Section'>
        <div className='wallpaper' />
      </div>
      <div className='right-Section'>
        <div className='login-container'>
          <Typography variant='h3' component='div' gutterBottom>
            Login
          </Typography>
          <Input onChange={(e: any)=>console.log(e.target.value)} label='Email' />
          <Input onChange={(e: any)=>console.log(e.target.value)} label='Password' />
          <Button btnType="Primary" label="Login" onClick={()=> console.log("hello world")} />
        </div>
      </div>
    </div>
  );
};

export default Login;
