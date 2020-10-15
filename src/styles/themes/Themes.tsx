import React, {createContext, useContext, useState} from 'react';

import dark from "./dark";
import light from "./light";

interface IThemeContext {
  toggleTheme(): void;
  themes: ITheme;
}

interface ITheme {
  title: string;
  color: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    information: string;
    warning: string;
  }
}

const ThemeDashboard = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [themes, setThemes] = useState<ITheme>(() => {
    const savedTheme = localStorage.getItem("@my-wallet:theme");

    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (themes.title === "dark") {
      setThemes(light);
      localStorage.setItem("@my-wallet:theme", JSON.stringify(light))
    } else {
      setThemes(dark);
      localStorage.setItem("@my-wallet:theme", JSON.stringify(dark))
    }
  }
  return  (
    <ThemeDashboard.Provider value={{ toggleTheme, themes }}>
      { children }
    </ThemeDashboard.Provider>
  )
}

function useTheme(): IThemeContext {
  return useContext(ThemeDashboard);
}

export { ThemeProvider, useTheme };
