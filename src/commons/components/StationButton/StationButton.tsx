import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

import classes from "./StationButton.module.css";

export interface StationButtonProps {
  userId: string | undefined;
  stationNumber: string;
  unlocked: boolean;
  text: string;
  route: string;
  setCurrentStationSelected: React.Dispatch<React.SetStateAction<string>>;
  setIsQrCodeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHighlighted?: boolean;
  disabled?: boolean;
  /** When set, a locked station uses this instead of opening the QR scanner (e.g. direct unlock + navigate). */
  onLockedClick?: (userId: string | undefined) => void | Promise<void>;
}

export const StationButton = ({
  userId,
  stationNumber,
  unlocked,
  text,
  route,
  setCurrentStationSelected,
  setIsQrCodeOpen,
  isHighlighted = false,
  disabled = false,
  onLockedClick,
}: StationButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (disabled) return;
    if (unlocked) {
      navigate(`/${route}/${userId}`);
    } else if (onLockedClick) {
      void onLockedClick(userId);
    } else {
      setIsQrCodeOpen(true);
    }
  };

  return (
    <div className={classes.stationCard}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          design="white"
          className={`${classes.stationActionBtn} ${
            isHighlighted ? classes.highlighted : ""
          }`}
          disabled={disabled}
          onClick={() => {
            if (disabled) return;
            setCurrentStationSelected(stationNumber);
            handleClick();
          }}
        >
          {unlocked ? `View ${text}` : `Unlock Station ${stationNumber}`}
        </Button>
      </div>
      <div style={{ height: "20px" }}></div>
    </div>
  );
};
