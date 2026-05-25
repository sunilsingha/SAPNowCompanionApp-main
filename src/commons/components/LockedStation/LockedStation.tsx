import { BackgroundWrapper } from "../BackgroundWrapper";
import { Header } from "../Header";
import { BackToMapButton } from "../BackToMapButton"
import classes from "./LockedStation.module.css";
import gameMap from "../../../assets/game_map.png";

import {
  BACKGROUND_IMAGE_SRC,
  getLearningMediaKey,
} from "../../../commons/utils";

export interface LockedStationProps {
  stationNumber: number;
}

export const LockedStation = ({
  stationNumber
}: LockedStationProps) => {

  const backgroundImageSrc = getLearningMediaKey(BACKGROUND_IMAGE_SRC);
  return (
    <BackgroundWrapper imageSrc={backgroundImageSrc}>
      <Header />
      <div className={classes.cardWrapper}>
        <div className={classes.introBox}>
          <h2 className={classes.introHeading}>Station Locked</h2>
          <p className={classes.introText}>
            Oops Station {stationNumber} is still locked. Please complete the
            previous station, then head to the relevant foyer to unlock it.
          </p>
        </div>
      </div>
      <div className={classes.mapPageContainer}>
        <img src={gameMap} alt="Map" className={classes.mapImage} />
      </div>
			<BackToMapButton />
    </BackgroundWrapper>
  );
};
