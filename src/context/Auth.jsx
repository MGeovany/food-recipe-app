import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [authData, setAuthData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        authData,
        setUserInfo,
        setAuthData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
