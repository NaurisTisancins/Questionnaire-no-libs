import React, { FC } from "react";
import "./styles.css";

interface ButtonProps {
  disabled?: boolean;
  label: string;
  saveData: () => void;
  selectFormStep: () => void;
}

export const Button: FC<ButtonProps> = ({
  disabled,
  label,
  saveData,
  selectFormStep
}) => {
  const handleClick = () => {
    selectFormStep();
    saveData();
  };

  return (
    <>
      <button disabled={disabled} className="Button" onClick={handleClick}>
        {label}
      </button>
    </>
  );
};
