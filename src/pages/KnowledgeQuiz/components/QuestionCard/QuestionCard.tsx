import { clsx } from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import { randomizeArray } from '../../../../commons/utils';
import classes from './QuestionCard.module.css';


export type Question = {
  id: string;
  text: string;
  answers: { id: string; text: string }[];
};

export interface QuestionCardProps {
  children?: ReactNode;
  className?: string;
  question: Question;
  selected: string;
  correctCount: number;
  isCorrect?: boolean;
  disabled?: boolean;
  onSelect: (id: string) => void;
}

export const QuestionCard = ({
  children,
  className,
  question,
  selected,
  disabled = false,
  onSelect,
}: QuestionCardProps) => {
  const [randomizedAnswers, setRandomizedAnswers] = useState(question.answers || []);

  useEffect(() => {
    setRandomizedAnswers(randomizeArray(question.answers || []));
  }, [question]);

  return (
    <div className={clsx(className, classes.wrap)}>
      <div className={classes.question}>{question.text}</div>
      {
        <div>
          {randomizedAnswers.map((answer) => {
            return (
              <div
                key={answer.id}
                className={clsx(classes.answer, {
                  [classes.selected]: selected === answer.id,
                })}
              >
                <button
                  type="button"
                  disabled={disabled}
                  data-state={
                    selected == answer.id ? 'success' : 'normal'
                  }
                  onClick={() => onSelect(answer.id ?? '')}
                >
                  <span>{answer.text}</span>
                </button>
              </div>
            );
          })}
        </div>
      }
      {children}
    </div>
  );
};
