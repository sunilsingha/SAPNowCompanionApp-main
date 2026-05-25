import { clsx } from "clsx";
import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";

import classes from "./Card.module.css";

export interface CardProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

export const Card = ({
  children,
  className,
  title,
  subtitle,
  onClick,
  ...rest
}: CardProps) => {
  return (
    <motion.div
      className={clsx(classes.wrap, className)}
      onClick={onClick}
      {...rest}
    >
      {/* <div className={classes.cardBorder} /> */}
      <div className={classes.card}>{children}</div>
    </motion.div>
  );
};
