import { useNavigateWithQuery } from "@abdc/messer";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { To } from "react-router";

import SAPLogo from "../../../assets/images/SAP_logo.png";

import classes from "./Header.module.css";

export interface HeaderProps {
  children?: ReactNode;
  className?: string;
  resetTo?: To;
  onReset?: () => void;
}

export const Header = ({ className, resetTo, onReset }: HeaderProps) => {
  const navigate = useNavigateWithQuery();
  const handleOnReset = async () => {
    if (onReset) {
      await Promise.resolve(onReset());
    }
    navigate(resetTo!, { replace: true });
  };

  const logo = (
    <img className={classes.logo} src={SAPLogo} alt="SAP" />
  );

  return (
    <header className={clsx(classes.header, className)}>
      <div className={classes.topRow}>
        <div className={classes.brandRow}>
          {resetTo ? (
            <button type="button" onClick={handleOnReset}>
              {logo}
            </button>
          ) : (
            logo
          )}
        </div>
        <div className={classes.titleGroup}>
          <p className={classes.title}>SAP NOW AI Tour</p>
          <p className={classes.subtitle}>Mumbai</p>
        </div>
        <div className={classes.brandSpacer} aria-hidden="true" />
      </div>
    </header>
  );
};
