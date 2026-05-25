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
  return (
    <header className={clsx(classes.header, className)}>
      {resetTo ? (
        <button onClick={handleOnReset}>
          <img src={SAPLogo} alt="SAP" />
        </button>
      ) : (
        <img src={SAPLogo} alt="SAP" />
      )}
      {/* <p>{t('learning.header-title')}</p> */}
      <p style={{ fontSize: "30px" }}>SAP NOW AI Tour</p>
      <p style={{ fontSize: "25px" }}>Mumbai</p>
      {/* <p>{t('learning.header-subtitle')}</p> */}
    </header>
  );
};
