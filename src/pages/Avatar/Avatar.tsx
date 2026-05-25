import { useParams } from "react-router-dom";
import clsx from "clsx";
import {
  BACKGROUND_IMAGE_SRC,
  getLearningMediaKey,
  containerVariants,
  wordVariants,
} from "../../commons/utils";
import { Spinner } from "@value-experience-design/libella";
import { containerAnimationProps, defaultCardVariants } from "@abdc/messer";
import { useState, useEffect } from "react";
import { BackgroundWrapper } from "../../commons/components/BackgroundWrapper";
import { Button } from "../../commons/components//Button";
import { Header } from "../../commons/components/Header";
import { Card } from "../../commons/components/Card";
import { motion, AnimatePresence } from "motion/react";
import classes from "./Avatar.module.css";
import { BackToMapButton } from "../../commons/components/BackToMapButton";
import { fetchUserData } from "../SocialCard/helpers/api";

export interface AvatarProps {
  className?: string;
}

export const Avatar = ({ className }: AvatarProps) => {
  //TODO - need to decode userID
  const { userid } = useParams<{ userid: string }>();
  const title = "Your Avatar".split("\n");
  let cardContent;
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);

  const handleDownload = () => {
    if (!avatarUrl) return;
    const link = document.createElement("a");
    link.href = avatarUrl;
    link.download = `avatar_${userid}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let cancelled = false;

    const fetchAccess = async () => {
      if (!userid) return null;
      const result = await fetchUserData(userid);
      if (cancelled) return null;
      const fullName = `${result.firstName ?? ""} ${result.lastName ?? ""}`.trim();
      setUserName(fullName || null);
      return result.profileImag;
    };

    const fetchAvatar = async (profileImag: string) => {
      const response = await fetch(
        `https://sap-nowmumbai-backend-dev.cfapps.in30.hana.ondemand.com/api/avatar/download/${encodeURIComponent(profileImag)}`,
        { method: "GET" }
      );

      if (!response.ok) {
        setIsError(true);
        console.error("Download failed:", await response.text());
        return;
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      if (!cancelled) {
        setAvatarUrl(imageUrl);
      }
    };

    const load = async () => {
      if (!userid) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setIsError(false);
      setAvatarUrl(null);

      try {
        const profileImag = await fetchAccess();
        if (cancelled) return;

        if (!profileImag) {
          setIsError(true);
          return;
        }

        await fetchAvatar(profileImag);
      } catch (error) {
        if (!cancelled) {
          console.error("Avatar load error:", error);
          setIsError(true);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [userid]);

  const displayImage = () => {
    return (
      <>
        <img
          src={avatarUrl!}
          alt="No Avatar saved, please return to station 1"
        />
      </>
    );
  };

  const renderLoading = () => (
    <>
      <div className={classes.loading}>
        <div className={classes.overlaySpinner}>
          {!isError && (
            <>
              <Spinner size="large" tooltip="Loading..." />
              <span>{"Loading..."}</span>
            </>
          )}
          {isError && (
            <div className={classes.error}>{"Something went wrong!"}</div>
          )}
        </div>
      </div>
    </>
  );

  if (isLoading) {
    cardContent = renderLoading();
  } else if (avatarUrl) {
    cardContent = displayImage();
  }

  return (
    <BackgroundWrapper
      imageSrc={getLearningMediaKey(BACKGROUND_IMAGE_SRC)}
      className={clsx(className)}
    >
      <Header />
      <div
        style={{
          borderBottom: "1px solid #ccc",
          margin: "8px 0",
        }}
      />
      <h1 className={classes.header}>
        Welcome to Avatar Generator, <span>{userName}</span>!
      </h1>
      <AnimatePresence mode="wait">
        <motion.div className={classes.container} {...containerAnimationProps}>
          <Card
            className={classes.panel}
            data-is-quiz="false"
            variants={defaultCardVariants}
          >
            <motion.div
              className={classes.title}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {title.map((line) => (
                <motion.div key={line} variants={wordVariants}>
                  {line}
                </motion.div>
              ))}
              <div className={classes.camera}>{cardContent}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button design="blue" onClick={handleDownload}>
                  {"Save to Device"}
                </Button>
                <BackToMapButton />
                {/* <Button design="blue" onClick={() => navigate(`/map/${userid}`)}>{"Home"}</Button> */}
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </BackgroundWrapper>
  );
};
