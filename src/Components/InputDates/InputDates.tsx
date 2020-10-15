import React from 'react';
import { Date } from "./Styles-InputDates";

interface IInputDates {
  options: {
    value: string | number;
    label: string | number;
  }[],
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
  defaultValue?: string | number;
}

const InputDates: React.FC<IInputDates> = ({ options, onChange, defaultValue }) => {
  return (
      <Date>
        <select onChange={onChange} defaultValue={defaultValue}>
          {
            options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </Date>
  );
};

export default InputDates;
