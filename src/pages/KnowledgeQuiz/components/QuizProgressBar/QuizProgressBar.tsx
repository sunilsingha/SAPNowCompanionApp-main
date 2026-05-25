import { clsx } from 'clsx';

import classes from './QuizProgressBar.module.css';

export interface QuizProgressBarProps {
  className?: string;
  currentIndex: number;
  items: number;
}

export const QuizProgressBar = ({ className, currentIndex, items }: QuizProgressBarProps) => {
  const bars = Array.from({ length: items }, (_, i) => (
    <div key={i} className={classes.bar} data-is-filled={i <= currentIndex} />
  ));
  return <div className={clsx(classes.wrap, className)}>{bars}</div>;
};
