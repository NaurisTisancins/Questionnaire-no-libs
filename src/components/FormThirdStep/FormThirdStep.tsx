import { ChangeEvent, FC, useContext, useState } from "react";
import { TextField } from "./TextField";
import { GenericFormProps, FormStepType } from "../../types";
import { Button } from "../common/Button";
import "./styles.css";
import "../common.styles.css";
import { AppContext } from "../../context/AppContext";

export const FormThirdStep: FC<GenericFormProps<FormStepType>> = ({
  currentFormStep,
  selectFormStep
}) => {
  const [value, setValue] = useState("");
  const { state, saveData } = useContext(AppContext);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const saveValues = () => {
    saveData({
      ...state,
      thirdAnswer: value
    });
  };

  return (
    <div className="FormContainer">
      <h3 className="Title">Please tell us more about your self?</h3>
      <div className="TextAreaContainer">
        <TextField handleChange={handleChange} />
      </div>
      <div className="ButtonContainer">
        <Button
          label="Prev"
          selectFormStep={() => selectFormStep(currentFormStep.id - 1)}
          saveData={saveValues}
        />
        <Button
          disabled={value === ""}
          label="Done"
          selectFormStep={() => selectFormStep(currentFormStep.id + 1)}
          saveData={saveValues}
        />
      </div>
    </div>
  );
};
