import React, { FC, useContext, useState } from "react";
import { RadioButton } from "./RadioButton";
import { Button } from "../common/Button";
import "../common.styles.css";
import "./styles.css";
import { RadioOptionType, GenericFormProps, FormStepType } from "../../types";
import { AppContext } from "../../context/AppContext";

export const FormFirstStep: FC<GenericFormProps<FormStepType>> = ({
  currentFormStep,
  selectFormStep
}) => {
  const [checkedValue, setCheckedValue] = useState<RadioOptionType>(
    RadioOptionType.No
  );
  const { state, saveData } = useContext(AppContext);

  const handleChange = (value: RadioOptionType): void => {
    setCheckedValue(value);
  };

  const saveValues = () => {
    saveData({
      ...state,
      firstAnswer: checkedValue
    });
  };

  return (
    <div className="FormContainer">
      <h3 className="Title">Do You like JavaScript?</h3>
      <div className="RadioButtonContainer">
        <RadioButton
          label="Yes"
          checkedValue={checkedValue === RadioOptionType.Yes}
          handleChange={handleChange}
          value={RadioOptionType.Yes}
        />
        <RadioButton
          label="No"
          checkedValue={checkedValue === RadioOptionType.No}
          handleChange={handleChange}
          value={RadioOptionType.No}
        />
      </div>
      <div className="ButtonContainer">
        <Button
          label="Next"
          selectFormStep={() => selectFormStep(currentFormStep.id + 1)}
          saveData={saveValues}
          disabled={false}
        />
      </div>
    </div>
  );
};
