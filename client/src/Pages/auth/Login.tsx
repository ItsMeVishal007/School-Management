import React from "react";
import Text from '../../components/Text'
import Input from "../../components/Input";
import Button from "../../components/Button";
import "../../styles/auth/Login.scss";

const Login: React.FC = () => {
  return (
    <div className='container'>
      <div className='left-Section'>
        <div className='wallpaper' />
      </div>
      <div className='right-Section'>
        <div className='login-container'>
        <Text
          hType="h3"
          text="Login"
        />
          <Input
            onChange={(e: any) => console.log(e.target.value)}
            label='Email'
          />
          <Input
            onChange={(e: any) => console.log(e.target.value)}
            label='Password'
          />
          <Button
            btnType='Primary'
            label='Login'
            onClick={() => console.log("hello world")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
