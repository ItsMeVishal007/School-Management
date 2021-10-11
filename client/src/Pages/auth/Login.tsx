import React from "react";
import Typography from "@mui/material/Typography";
import Input from "../../components/Input";
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
          <Input label='Email' />
          <Input label='Password' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
