import React from 'react';
import { Grid } from "./Styles-Layout-Grid"

import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import Main from "../Main/Main";

const LayoutGrid: React.FC = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Aside />
      <Main>
        {children}
      </Main>
    </Grid>
  );
};

export default LayoutGrid;
