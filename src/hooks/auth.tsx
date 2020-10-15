import React, {createContext, useContext, useState} from "react";

interface IContextAuthentication {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const ContextAuthentication = createContext<IContextAuthentication>({} as IContextAuthentication );

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const islogged = localStorage.getItem("@my-wallet:logged");
    return !!islogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "felipe@gmail.com" && password === "123") {
      localStorage.setItem("@my-wallet:logged", "true")
      setLogged(true);
    } else {
      alert("Invalid password, please try again")
    }
  }

  const signOut = () => {
    localStorage.removeItem("@my-wallet:logged");
    setLogged(false);
  }

  return (
    <ContextAuthentication.Provider value={{logged, signIn, signOut}}>
      { children }
    </ContextAuthentication.Provider>
  )
}

function useAuth(): IContextAuthentication  {
  return useContext(ContextAuthentication);
}

export { AuthProvider, useAuth };
