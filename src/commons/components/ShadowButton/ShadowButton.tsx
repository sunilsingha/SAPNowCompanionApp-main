import { Icon, IconKeys } from "@value-experience-design/libella";
import { clsx } from "clsx";
import { ReactNode } from "react";

import classes from "./ShadowButton.module.css";

export interface ShadowButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  iconSrc?: IconKeys;
  iconPosition?: "left" | "right";
  design?: "normal" | "selected" | "success" | "error";
  disabled?: boolean;
}

export const ShadowButton = ({
  className,
  children,
  design = "normal",
  iconSrc,
  iconPosition = "left",
  onClick,
  disabled,
}: ShadowButtonProps) => {
  return (
    <div className={clsx(className, classes.wrap)}>
      {/* <div className={classes.buttonBorder} data-is-design={design} /> */}
      <button
        type="button"
        className={classes.buttonContent}
        data-is-design={design}
        disabled={disabled}
        onClick={onClick}
      >
        {iconSrc && iconPosition === "left" && (
          <Icon
            src={iconSrc}
            className={clsx(classes.iconLeft)}
            data-is-design={design}
          />
        )}

        {children && <span>{children}</span>}
        {iconSrc && iconPosition === "right" && (
          <span>
            <Icon
              src={iconSrc}
              data-is-design={design}
              className={clsx(classes.iconRight)}
            />
          </span>
        )}
      </button>
    </div>
  );
};
