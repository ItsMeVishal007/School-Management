import React from 'react';
import Burgur from '../assets/images/menu.png';
import Button from './Button';
import '../styles/components/Layout.scss';
import Text from './Text';

interface iLayout {
  children: any;
}

const Layout: React.FC<iLayout> = ({ children }) => {
  return (
    <div className="layout">
      <div className="navbar">
        <div className="burgur-menu">
          <img src={Burgur} alt="burgur" />
          <Text hType="h3" text="CodeBox..." />
        </div>
        <div className="left-menu">
          <Button
            btnType="outlined"
            label="Chat here"
            onClick={() => {
              console.log('entering chat room');
            }}
            style={{borderColor: 'white'}}
          />
          <div className="userIcon">
            <Text hType="h5" text="Account" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
