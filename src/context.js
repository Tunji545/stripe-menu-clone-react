import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [singlePage, setSinglePage] = useState({ page: '', links: [] });
  const openSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };
  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setLocation(coordinates);
    setSinglePage(page);
    setIsSubMenu(true);
  };
  const closeSubMenu = () => {
    setIsSubMenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSideBar,
        isSubMenu,
        closeSideBar,
        openSideBar,
        openSubMenu,
        closeSubMenu,
        location,
        singlePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
