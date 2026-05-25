import { containerAnimationProps, defaultCardVariants } from '@abdc/messer';
import { clsx } from 'clsx';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { Card } from '../../../../commons/components/Card';
import { ShadowButton } from '../../../../commons/components/ShadowButton';

import classes from './QuizCancelCard.module.css';

export interface QuizCancelCardProps {
  className?: string;
  onCancel?: () => void;
  onBack?: () => void;
}

export const QuizCancelCard = ({ className, onCancel, onBack }: QuizCancelCardProps) => {
  const { t } = useTranslation();
  return (
    <motion.div className={clsx(classes.wrap, className)} {...containerAnimationProps}>
      <Card variants={defaultCardVariants}>
        <div className={classes.title}>{t('learning.feedback.cancel-title')}</div>
        <div className={classes.text}>{t('learning.feedback.cancel-text')}</div>
        <div className={classes.footer}>
          <ShadowButton onClick={onBack}>{t('learning.feedback.cancel-button-back')}</ShadowButton>
          <ShadowButton design="selected" onClick={onCancel}>
            {t('learning.feedback.cancel-button-cancel')}
          </ShadowButton>
        </div>
      </Card>
    </motion.div>
  );
};
