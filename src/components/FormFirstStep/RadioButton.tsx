import React, { FC } from "react";
import { RadioOptionType } from "../../types";
import "./styles.css";

interface IRadioButtonProps<T> {
  checkedValue: boolean;
  label: string;
  handleChange: (val: T) => void;
  value: T;
}

export const RadioButton: FC<IRadioButtonProps<RadioOptionType>> = ({
  checkedValue,
  label,
  handleChange,
  value
}) => {
  return (
    <>
      <label>
        <input
          className="RadioButton"
          type="radio"
          name="radio"
          checked={checkedValue}
          onChange={() => handleChange(value)}
          value={value}
        />{" "}
        {label}
      </label>
    </>
  );
};
