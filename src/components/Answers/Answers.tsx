import "./styles.css";
import { FC, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AnswerCard } from "./AnswerCard";
import { Button } from "../common/Button";
import { GenericFormProps, FormStepType } from "../../types";

export const Answers: FC<GenericFormProps<FormStepType>> = ({
  selectFormStep
}) => {
  const { state, resetState } = useContext(AppContext);

  return (
    <div className="AnswersContainer">
      {state.firstAnswer && (
        <AnswerCard
          question="Do You like JavaScript?"
          answers={[state.firstAnswer]}
        />
      )}
      {state.secondAnswer && (
        <AnswerCard
          question="What Technologies do You use?"
          answers={[...state.secondAnswer.map((item) => item.label)]}
        />
      )}
      {state.thirdAnswer && (
        <AnswerCard
          question="Please tell us more about your self?"
          answers={[state.thirdAnswer]}
        />
      )}
      <Button
        disabled={false}
        label="Try Again"
        saveData={resetState}
        selectFormStep={() => selectFormStep(1)}
      />
    </div>
  );
};
