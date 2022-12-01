import React, { createContext, ReactNode, useState } from "react";
import { RadioOptionType, StateType } from "../types";

interface ContextState<T> {
  state: T;
  saveData: (values: T) => void;
  resetState: () => void;
}

export const AppContext = createContext({} as ContextState<StateType>);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    firstAnswer: RadioOptionType.No,
    secondAnswer: undefined,
    thirdAnswer: undefined
  });

  function saveData<StateType>(data: StateType) {
    setState((prev) => {
      return {
        ...prev,
        ...data
      };
    });
  }

  function resetState() {
    setState({
      firstAnswer: RadioOptionType.No,
      secondAnswer: undefined,
      thirdAnswer: undefined
    });
  }

  return (
    <AppContext.Provider value={{ state, saveData, resetState }}>
      {children}
    </AppContext.Provider>
  );
};
