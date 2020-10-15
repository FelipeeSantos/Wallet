import React from 'react';
import { ToggleButton, ToggleSelector } from "./Styles-Toggle";

interface IToggle {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggle> = ({ labelLeft, labelRight, checked, onChange }) => {
  return (
    <ToggleButton>
      <span>{labelLeft}</span>
      <ToggleSelector
        checked={checked}
        checkedIcon={false}
        onChange={onChange}
        uncheckedIcon={false}
      />
      <span>{labelRight}</span>
    </ToggleButton>
  );
};

export default Toggle;
