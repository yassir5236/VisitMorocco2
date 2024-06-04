// import  { useState } from 'react';
// import PropTypes from 'prop-types';
// import AuthContext from './AuthContext';

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
