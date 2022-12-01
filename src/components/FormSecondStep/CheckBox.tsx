import React, { FC } from "react";
import "./styles.css";

interface ICheckBoxProps {
  id: number;
  label: string;
  checkAnswer: (value: number) => void;
  checked: boolean;
}

export const CheckBox: FC<ICheckBoxProps> = ({
  id,
  label,
  checkAnswer,
  checked
}) => {
  return (
    <>
      <label>
        <input
          className="CheckBox"
          type="checkbox"
          name={label}
          id={id.toString()}
          onChange={() => checkAnswer(id)}
          checked={checked}
        />{" "}
        {label}
      </label>
    </>
  );
};
