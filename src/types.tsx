export type FormStepType = {
  id: number;
  name: string;
};

export type CheckableAnswerType = {
  id: number;
  label: string;
};

export enum RadioOptionType {
  Yes = "Yes",
  No = "No"
}

export type StateType = {
  firstAnswer?: RadioOptionType;
  secondAnswer?: CheckableAnswerType[];
  thirdAnswer?: string;
};

export interface GenericFormProps<T> {
  currentFormStep: T;
  selectFormStep: (value: number) => void;
}
