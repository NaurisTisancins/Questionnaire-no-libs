import React, { FC, useMemo, useState } from "react";
import "./mainContainer.styles.css";
import { FormFirstStep } from "../components/FormFirstStep/FormFirstStep";
import { FormSecondStep } from "../components/FormSecondStep/FormSecondStep";
import { FormThirdStep } from "../components/FormThirdStep/FormThirdStep";
import { Answers } from "../components/Answers/Answers";

export type FormStepType = {
  id: number;
  name: string;
};

const formSteps: FormStepType[] = [
  { id: 1, name: "First Question" },
  { id: 2, name: "Second Question" },
  { id: 3, name: "Third Question" },
  { id: 4, name: "Your Answers" }
];

interface IMainContainerProps {}

export const MainContainer: FC<IMainContainerProps> = () => {
  const [currentFormStep, setCurrentFormStep] = useState<FormStepType>(
    formSteps[0]
  );

  const selectFormStep = (id: number): void => {
    const step = formSteps.filter((item: FormStepType) => {
      return item.id === id;
    });
    setCurrentFormStep(() => {
      return step[0];
    });
  };

  const switchFormSteps = useMemo(() => {
    switch (currentFormStep.id) {
      case 1:
        return (
          <FormFirstStep
            currentFormStep={currentFormStep}
            selectFormStep={selectFormStep}
          />
        );
      case 2:
        return (
          <FormSecondStep
            currentFormStep={currentFormStep}
            selectFormStep={selectFormStep}
          />
        );
      case 3:
        return (
          <FormThirdStep
            currentFormStep={currentFormStep}
            selectFormStep={selectFormStep}
          />
        );
      case 4:
        return (
          <Answers
            currentFormStep={currentFormStep}
            selectFormStep={selectFormStep}
          />
        );
    }
  }, [currentFormStep]);

  return <div className="MainContainer">{switchFormSteps}</div>;
};
