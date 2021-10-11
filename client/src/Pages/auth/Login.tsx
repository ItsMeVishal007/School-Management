import React from "react";
import "../../styles/auth/Login.scss"

const Login: React.FC = () => {
  return (
    <div className='container' >
      <div className='left-Section'>
          <div className="wallpaper" />
      </div>
      <div className='right-Section'>
        <div className='login-container'>
          <input placeholder='Email' />
          <input placeholder='Password' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
