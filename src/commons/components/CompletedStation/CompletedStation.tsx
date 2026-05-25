import { BackgroundWrapper } from "../BackgroundWrapper";
import { Header } from "../Header";
import { BackToMapButton } from "../BackToMapButton"
import classes from "./CompletedStation.module.css";
import gameMap from "../../../assets/game_map.png";

import {
  BACKGROUND_IMAGE_SRC,
  getLearningMediaKey,
} from "../../../commons/utils";

export interface LockedStationProps {
  stationNumber: number;
}

export const CompletedStation = ({
  stationNumber
}: LockedStationProps) => {

  const backgroundImageSrc = getLearningMediaKey(BACKGROUND_IMAGE_SRC);
  return (
    <BackgroundWrapper imageSrc={backgroundImageSrc}>
      <Header />
      <div className={classes.cardWrapper}>
        <div className={classes.introBox}>
          <h2 className={classes.introHeading}>Station Completed</h2>
          <p className={classes.introText}>
            You have already completed Station {stationNumber}. Please head to the relevant foyer to unlock and complete the next station.
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
