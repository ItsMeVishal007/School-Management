import React, { createContext, useState } from 'react';

export const SideBarContext: any = createContext(false);

interface iSidebar {
  children: any;
}

export const SideBarContextProvider: React.FC<iSidebar> = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState<any>(false);
  return (
    <SideBarContext.Provider value={{ isSideBar, setIsSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};
