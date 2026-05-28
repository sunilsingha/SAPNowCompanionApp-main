import { LoadingOverlay } from "@abdc/messer";
import { useNavigate, useParams, To } from "react-router-dom";
import { BACKGROUND_IMAGE_SRC, getLearningMediaKey } from "../utils";
import { Routes } from "../../routing/Routes";
import { useUnlockStation } from "../../hooks/useUnlockStation";
import { useCheckUser } from "../../hooks/useCheckUser";
import { StationButton } from "../../commons/components/StationButton";
import { BackgroundWrapper } from "../../commons/components/BackgroundWrapper";
import { Header } from "../../commons/components/Header";
import { Button } from "../../commons/components/Button";
import { ReactNode, useEffect, useState } from "react";
import classes from "./Map.module.css";
import gameMap from "../../assets/game_map.png";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { motion } from "motion/react";
import { fetchUserData } from "../SocialCard/helpers/api";

export interface MapProps {
  children?: ReactNode;
  className?: string;
  resetTo?: To;
  onReset?: () => void;
}

export const Map = () => {
  const [badgeScanInput, setBadgeScanInput] = useState("");
  const { userid } = useParams<{ userid: string }>();
  // console.log(userid);
  const [userName, setUserName] = useState<string | null>(null);
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false);
  const [qrError, setQrError] = useState<boolean>(false);
  const {
    // isStationTwoUnlocked,
    // isStationThreeUnlocked,
    isCheckStationStatusLoading,
    isStationOneDone,
    isStationTwoDone,
    personality,
  } = useCheckUser(userid);
  const [currentStationSelected, setCurrentStationSelected] =
    useState<string>("");
  const { unlockStation } = useUnlockStation();
  const navigate = useNavigate();
  const isPersonalityQuizCompleted = Boolean(personality);

  useEffect(() => {
    console.log("Scanned Value:", badgeScanInput);
    console.log("Current Station Selected:", currentStationSelected);
    if (!currentStationSelected || !badgeScanInput) {
      return;
    }
    if (currentStationSelected == "2" && badgeScanInput == "2") {
      unlockStation(userid, 2);
      navigate(`/${Routes.Quiz}/${userid}`);
    } else if (currentStationSelected == "3" && badgeScanInput == "3") {
      if (!isPersonalityQuizCompleted) {
        setQrError(true);
        setBadgeScanInput("");
        return;
      }
      unlockStation(userid, 3);
      navigate(`/${Routes.SocialCard}/${userid}`);
    } else {
      setQrError(true);
    }
    setBadgeScanInput("");
  }, [badgeScanInput, currentStationSelected, isPersonalityQuizCompleted, navigate, unlockStation, userid]);

  useEffect(() => {
    if (qrError) {
      setTimeout(() => {
        setQrError(false);
      }, 5000);
    }
  }, [qrError]);

  useEffect(() => {
    const fetchAccess = async () => {
      if (!userid) return;
      const result = await fetchUserData(userid);
      const fullName = `${result.firstName} ${result.lastName}`.trim();
      setUserName(fullName);
    };

    fetchAccess();
  }, [userid]);

  const highlightedStation = (() => {
    if (!isStationOneDone) return "1";
    if (!isStationTwoDone) return "2";
    return "3";
  })();

  const isLoading = isCheckStationStatusLoading || !userName;

  if (isLoading) {
    return <LoadingOverlay withBackdrop size="large" />;
  }

  if (isQrCodeOpen && !badgeScanInput) {
    return (
      <BackgroundWrapper
        imageSrc={getLearningMediaKey(BACKGROUND_IMAGE_SRC)}
        className={classes.wrap}
      >
        <Header></Header>
        <div className={classes.qrCodeWrapper}>
          <BarcodeScannerComponent
            width={"90%"}
            height={"90%"}
            // width={400}
            // height={400}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onUpdate={(err: unknown, result: any) => {
              if (result) {
                setBadgeScanInput(result.text);
              } else console.log(err);
            }}
          />
        </div>
        {qrError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout
          >
            <div className={classes.cardWrapper}>
              <div className={classes.introBox}>
                <h2 className={classes.introHeading}>Wrong QR Code</h2>
                <p className={classes.introText}>
                  Please scan the correct QR code for the station you are trying
                  to access.
                </p>
              </div>
            </div>
          </motion.div>
        )}
        <div className={classes.footer}>
          <Button design="white" onClick={() => setIsQrCodeOpen(false)}>
            Close QR Code Scanner
          </Button>
        </div>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper
      imageSrc={getLearningMediaKey(BACKGROUND_IMAGE_SRC)}
      className={classes.wrap}
    >
      <Header></Header>
      <div
        style={{
          borderBottom: "1px solid #ccc",
          margin: "8px 0",
        }}
      />
      <div />
      <h1 className={classes.header}>
        Welcome to AI Quest, <span>{userName}</span>!
      </h1>
      <div className={classes.mapPageContainer}>
        <img src={gameMap} alt="Map" className={classes.mapImage} />
        {!isCheckStationStatusLoading && (
          <div>
            <StationButton
              userId={userid}
              stationNumber={"1"}
              unlocked={true}
              text={"AI Avatar"}
              route={Routes.Avatar}
              isHighlighted={highlightedStation === "1"}
              setIsQrCodeOpen={setIsQrCodeOpen}
              setCurrentStationSelected={setCurrentStationSelected}
            />
            <StationButton
              userId={userid}
              stationNumber={"2"}
              unlocked={true}
              text={"Personality Quiz"}
              route={Routes.Quiz}
              isHighlighted={highlightedStation === "2"}
              setIsQrCodeOpen={setIsQrCodeOpen}
              setCurrentStationSelected={setCurrentStationSelected}
              onLockedClick={async (uid) => {
                if (!uid) return;
                await unlockStation(uid, 2);
                navigate(`/${Routes.Quiz}/${uid}`);
              }}
            />
            <StationButton
              userId={userid}
              stationNumber={"3"}
              unlocked={true}
              disabled={!isPersonalityQuizCompleted}
              text={"Social Card"}
              route={Routes.SocialCard}
              isHighlighted={highlightedStation === "3" && isPersonalityQuizCompleted}
              setIsQrCodeOpen={setIsQrCodeOpen}
              setCurrentStationSelected={setCurrentStationSelected}
              onLockedClick={async (uid) => {
                if (!uid || !isPersonalityQuizCompleted) return;
                await unlockStation(uid, 3);
                navigate(`/${Routes.SocialCard}/${uid}`);
              }}
            />
          </div>
        )}
      </div>
      <div className={classes.stationsList}></div>
    </BackgroundWrapper>
  );
};
