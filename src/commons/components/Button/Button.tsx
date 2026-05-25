import { Icon, IconKeys } from '@value-experience-design/libella';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

import classes from './Button.module.css';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  iconSrc?: IconKeys;
  iconPosition?: 'left' | 'right';
  design?: 'white' | 'grey' | 'blue';
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  design = 'grey',
  iconSrc,
  iconPosition = 'left',
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={clsx(className, classes.wrap)}
      data-design={design}
      disabled={disabled}
      data-icon-end={iconPosition === 'left' ? undefined : true}
      onClick={onClick}
    >
      {iconSrc && <Icon src={iconSrc} data-design={design} />}
      {children && <span>{children}</span>}
    </button>
  );
};
