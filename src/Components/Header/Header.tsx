import React, { useMemo, useState } from 'react';

import Toggle from "../Toggle/Toggle";
import emojis from "../../utils/emojis";

import { useTheme } from "../../styles/themes/Themes"

import { HeaderBar, Profile, Welcome, UserName } from "./Styles-Header"

const Header: React.FC = () => {
  const { toggleTheme, themes } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => themes.title === "dark");

  const handleTheThemeChange = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <HeaderBar>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleTheThemeChange}
      />
      <Profile>
        <Welcome>Hello! {emoji}</Welcome>
        <UserName>Felipe Santos</UserName>
      </Profile>
    </HeaderBar>
  );
};

export default Header;
