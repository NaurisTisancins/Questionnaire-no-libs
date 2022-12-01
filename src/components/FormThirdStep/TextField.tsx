import { ChangeEvent, FC } from "react";
import "./styles.css";

interface ITextFieldProps<T> {
  label?: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: T;
}

export const TextField: FC<ITextFieldProps<string>> = ({
  label,
  handleChange,
  value
}) => {
  return (
    <>
      <label>
        <textarea
          className="TextArea"
          onChange={(e) => handleChange(e)}
          value={value}
        />{" "}
        {label}
      </label>
    </>
  );
};
