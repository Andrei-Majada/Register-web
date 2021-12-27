import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import usePersistedState from './usePersistedState';

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = usePersistedState('userInfo', null);

  return (
    <authContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const { userInfo, setUserInfo } = useContext(authContext);
  return [userInfo, setUserInfo];
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default useAuth;
export { AuthProvider };