import React, {useState} from 'react';
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
  MdClose,
  MdMenu
} from "react-icons/md";

import logoImage from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../styles/themes/Themes";

import { AsideBar, Logo, Navigation, NavigationItemLink, NavigationItemButton, ToggleMenu, ThemeToggleFooter } from "./Styles-Aside"
import Toggle from "../Toggle/Toggle";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, themes } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
  const [darkTheme, setDarkTheme] = useState(() => themes.title === "dark");

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  const handleChangedTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <AsideBar menuIsOpen={toggleMenuIsOpened}>
      <Logo>
        <ToggleMenu onClick={handleToggleMenu}>
          { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
        </ToggleMenu>
        <img
          src={logoImage}
          alt="logo dollar sign my wallet"
        />
        <h3>My Wallet</h3>
      </Logo>
      <Navigation>
        <NavigationItemLink href="/dashboard">
          <MdDashboard />
          <h4>DashBoard</h4>
        </NavigationItemLink>
        <NavigationItemLink href="/list/money-deposit">
          <MdArrowUpward />
          <h4>Money deposit</h4>
        </NavigationItemLink>
        <NavigationItemLink href="/list/outflow-money">
          <MdArrowDownward />
          <h4>Outflow money</h4>
        </NavigationItemLink>
        <NavigationItemButton onClick={signOut}>
          <MdExitToApp />
          <h4>Log out !</h4>
        </NavigationItemButton>
      </Navigation>

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={ handleChangedTheme }
        />
      </ThemeToggleFooter>
    </AsideBar>
  );
};

export default Aside;
