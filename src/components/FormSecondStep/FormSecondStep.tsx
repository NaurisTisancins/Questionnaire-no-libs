import { CheckBox } from "./CheckBox";
import "./styles.css";
import "../common.styles.css";
import { useState, FC, useContext } from "react";
import { Button } from "../common/Button";
import {
  CheckableAnswerType,
  GenericFormProps,
  FormStepType
} from "../../types";
import { AppContext } from "../../context/AppContext";

const checkableAnswers: CheckableAnswerType[] = [
  { id: 1, label: "TypeScript" },
  { id: 2, label: "React" },
  { id: 3, label: "NodeJS/Express" },
  { id: 4, label: "Redux" }
];

export const FormSecondStep: FC<GenericFormProps<FormStepType>> = ({
  currentFormStep,
  selectFormStep
}) => {
  const { state, saveData } = useContext(AppContext);
  const [checkedAnswers, setCheckedAnswers] = useState<CheckableAnswerType[]>(
    state.secondAnswer ? state.secondAnswer : []
  );

  const isChecked = (id: number) => {
    const value = checkedAnswers.findIndex((item) => {
      return item.id === id;
    });
    return value !== -1;
  };

  const checkAnswer = (id: number) => {
    const entryExists = checkedAnswers.find(
      (item: CheckableAnswerType) => item.id === id
    );
    if (entryExists) {
      const updatedAnswers: CheckableAnswerType[] = checkedAnswers.filter(
        (item: CheckableAnswerType) => {
          return item.id !== id;
        }
      );
      setCheckedAnswers(updatedAnswers);
    } else {
      const findAnswer: CheckableAnswerType[] = checkableAnswers.filter(
        (item: CheckableAnswerType) => {
          return item.id === id;
        }
      );
      setCheckedAnswers((prev) => {
        return [...prev, findAnswer[0]];
      });
    }
  };

  const saveValues = () => {
    saveData({
      ...state,
      secondAnswer: checkedAnswers
    });
  };

  return (
    <div className="FormContainer">
      <h3 className="Title">What Technologies do You use?</h3>
      <div className="CheckBoxContainer">
        {checkableAnswers.map((item: CheckableAnswerType) => {
          return (
            <CheckBox
              id={item.id}
              key={item.id}
              label={item.label}
              checkAnswer={checkAnswer}
              checked={isChecked(item.id)}
            />
          );
        })}
      </div>
      <div className="ButtonContainer">
        <Button
          label="Prev"
          selectFormStep={() => selectFormStep(currentFormStep.id - 1)}
          saveData={saveValues}
        />
        <Button
          disabled={checkedAnswers.length === 0}
          label="Next"
          selectFormStep={() => selectFormStep(currentFormStep.id + 1)}
          saveData={saveValues}
        />
      </div>
    </div>
  );
};
