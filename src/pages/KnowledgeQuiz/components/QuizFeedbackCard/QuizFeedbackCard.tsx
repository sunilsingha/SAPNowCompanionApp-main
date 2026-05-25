import { containerAnimationProps, defaultCardVariants } from '@abdc/messer';
import { clsx } from 'clsx';
import { motion } from 'motion/react';
import { Card } from '../../../../commons/components/Card';

import classes from './QuizFeedbackCard.module.css';

export interface QuizFeedbackCardProps {
  className?: string;
  personality: number;
  description: string;
  shortDescription: string;
  score?: number | null;
}

export const QuizFeedbackCard = ({
  className,
  personality: _personality,
  description,
  shortDescription,
  score,
}: QuizFeedbackCardProps) => {
  return (
    <motion.div className={clsx(classes.wrap, className)} {...containerAnimationProps}>
      <Card className={classes.mainCard} variants={defaultCardVariants}>
        <div>
          <div className={classes.title}>Your Personality</div>
          <div className={classes.points}>{shortDescription}</div>
          <div className={classes.pointsText}>{description}</div>
          {score != null && (
            <>
              <div className={classes.title} style={{ marginTop: '2rem' }}>
                Fastest Finger Score
              </div>
              <div className={classes.points}>{score}</div>
            </>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
