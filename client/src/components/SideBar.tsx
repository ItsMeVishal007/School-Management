import React, { useContext } from 'react';
import { SideBarContext } from '../context/sidebar';
import '../styles/components/Sidebar.scss';
import Text from './Text';

const SideBar: React.FC = () => {
  const { isSideBar } = useContext<any>(SideBarContext);
  return (
    <div
      className="sidebar"
      style={{ height: isSideBar ? '80px' : '0px', overflow: 'hidden', alignItems:'center' }}
    >
      <div className="links">
        <Text hType="h6" text="Home" />
        <Text hType="h6" text="Project" />
        <Text hType="h6" text="Employees" />
        <Text hType="h6" text="My Report" />
        <Text hType="h6" text="Support" />
      </div>
    </div>
  );
};

export default SideBar;
