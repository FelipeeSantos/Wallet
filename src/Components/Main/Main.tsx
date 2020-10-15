import React from 'react';
import { MainContent  } from "./Styles-Main";

const Main: React.FC = ({ children }) => {
  return (
    <MainContent>
      {children}
    </MainContent>
  );
};

export default Main;
