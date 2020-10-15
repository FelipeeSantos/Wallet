import React from 'react';
import { FilterSection } from "./Styles-Filters";

const Filter: React.FC = ({ children }) => {
  return (
    <FilterSection>
      <div>
        { children }
      </div>
    </FilterSection>
  );
};

export default Filter;
