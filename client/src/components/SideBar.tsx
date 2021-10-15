import React, { useContext } from 'react';
import { SideBarContext } from '../context/sidebar';
import '../styles/components/Sidebar.scss';
import Text from './Text';

const SideBar: React.FC = () => {
  const { isSideBar } = useContext<any>(SideBarContext);
  return (
    <div
      className="sidebar"
      style={{ width: isSideBar ? '300px' : '0px', overflow: 'hidden' }}
    >
      <div className="links">
        <Text hType="h5" text="Home" />
        <Text hType="h5" text="Project" />
        <Text hType="h5" text="Employees" />
        <Text hType="h5" text="My Report" />
        <Text hType="h5" text="Support" />
      </div>
    </div>
  );
};

export default SideBar;
