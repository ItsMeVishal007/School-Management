import React, { useContext } from 'react';
import { SideBarContext } from '../context/sidebar';
import Burgur from '../assets/images/menu.png';
import cancel from '../assets/images/cancel.png';
import Button from './Button';
import '../styles/components/Layout.scss';
import Text from './Text';
import SideBar from './SideBar';

interface iLayout {
  children: any;
}

const Layout: React.FC<iLayout> = ({ children }) => {
  const { isSideBar, setIsSideBar } = useContext<any>(SideBarContext);
  return (
    <div className="layout">
      <div className="navbar">
        <div className="burgur-menu">
          <img
            src={isSideBar ? cancel : Burgur}
            alt="burgur"
            className={isSideBar && "img"}
            onClick={() => {
              setIsSideBar((previousData: boolean) => !previousData);
            }}
          />

          <Text hType="h3" text="CodeBox..." />
        </div>
        <div className="left-menu">
          <Button
            btnType="outlined"
            label="Chat here"
            onClick={() => {
              console.log('entering chat room');
            }}
            style={{ borderColor: 'white' }}
          />
          <div className="userIcon">
            <Text hType="h5" text="Account" />
          </div>
        </div>
      </div>
      <div>
        <SideBar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
