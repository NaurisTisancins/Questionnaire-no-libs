import { FC } from "react";
import "./styles.css";

interface AnswerCardProps {
  question: string;
  answers: string[];
}

export const AnswerCard: FC<AnswerCardProps> = ({ question, answers }) => {
  return (
    <div className="AnswerCardContainer">
      <h4>{question}</h4>
      <div className="AnswerList">
        {answers.map((item) => {
          return <li key={Math.random() * 123}>{item}</li>;
        })}
      </div>
    </div>
  );
};
