import { Icon, IconKeys } from '@value-experience-design/libella';
import { clsx } from 'clsx';

import classes from './IconButton.module.css';

export interface IconButtonProps {
  className?: string;
  iconSrc: IconKeys;
  label?: string;
  onClick?: () => void;
}

export const IconButton = ({ className, iconSrc, label, onClick }: IconButtonProps) => {
  return (
    <button className={clsx(classes.wrap, className)} onClick={onClick}>
      <div className={classes.buttonBorder}> </div>
      <div className={classes.buttonContent}>
        <Icon src={iconSrc} className={classes.icon} />
        <span className={classes.label}>{label}</span>
      </div>
    </button>
  );
};
