import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulación de autenticación. En producción, realiza una llamada a la API.
  const login = async (username, password) => {
    let role = 'student';
    if (username.toLowerCase() === 'admin') role = 'admin';
    else if (username.toLowerCase() === 'profesor') role = 'teacher';

    const fakeResponse = {
      success: true,
      data: { username, role }
    };

    if (fakeResponse.success) {
      setUser(fakeResponse.data);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
