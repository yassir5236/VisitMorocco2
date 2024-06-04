// import  { createContext, useContext, useState } from 'react';
// import PropTypes from 'prop-types';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user_info'));

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('user_info');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export function useAuth() {
//   return useContext(AuthContext);
// }



// import { createContext, useContext } from 'react';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default AuthContext;
