import { LoadingOverlay } from "@abdc/messer";
import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import * as htmlToImage from "html-to-image";
import { useCheckUser } from "../../hooks/useCheckUser";
import { useCompleteStation } from "../../hooks/useCompleteStation";
import { fetchUserData, fetchUserPersonality } from "./helpers/api";
import { PERSONALITY_MAP } from "./helpers/personalityMap";
import { samplePortrait, bgImage } from "./helpers/constants";
import { BackgroundWrapper } from "../../commons/components/BackgroundWrapper";
import { Header } from "../../commons/components/Header";
import { BackToMapButton } from "../../commons/components/BackToMapButton";
import { Button } from "../../commons/components/Button";
import { Card } from "../../commons/components/Card";

import { BACKGROUND_IMAGE_SRC, getLearningMediaKey } from "../../commons/utils";

import "./SocialCard.css";

interface CardProps {
  name: string;
  company: string;
  personalityTitle: string;
  personalityDesc: string;
  portraitUrl: string;
}

const shareText = `I just completed the SAP NOW 2026 AI Quest and discovered my SAP persona! 🚀 #SAPNOW #AIQuest`;

const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
  "https://www.sap.com/"
)}&summary=${encodeURIComponent(shareText)}`;

export const SocialCard = () => {
  const { userid } = useParams<{ userid: string }>();
  const [data, setData] = useState<CardProps | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [company, setCompany] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cardReady, setCardReady] = useState(false);

  
  const backgroundImageSrc = getLearningMediaKey(BACKGROUND_IMAGE_SRC);

  const cardRef = useRef<HTMLDivElement>(null);

  const {
    isCheckStationStatusLoading,
    isStationOneDone,
    isStationTwoDone,
  } = useCheckUser(userid);

  useEffect(() => {
    if (!isCheckStationStatusLoading && userid) {
      console.log(`[Access Check ✅] User: ${userid}`);
      console.log(`→ Station 1 Done: ${isStationOneDone}`);
      console.log(`→ Station 2 Done: ${isStationTwoDone}`);
    }
  }, [
    isCheckStationStatusLoading,
    isStationOneDone,
    isStationTwoDone,
    userid,
  ]);

  const { completeStation } = useCompleteStation();

  useEffect(() => {
    if (!data || !cardRef.current) return;

    const checkCardReady = async () => {
      const cardEl = cardRef.current!;
      const portraitImg = cardEl.querySelector("img");

      if (!portraitImg) return;

      await document.fonts.ready;

      // Wait until the image is fully loaded
      if (!portraitImg.complete || portraitImg.naturalHeight === 0) {
        await new Promise((resolve) => {
          portraitImg.onload = resolve;
          portraitImg.onerror = resolve;
        });
      }

      // Extra buffer for CSS background image to paint
      requestAnimationFrame(() => {
        setCardReady(true);
      });
    };

    setCardReady(false); // reset first
    checkCardReady();
  }, [data]);

  useEffect(() => {
    const fetchInitialCardData = async () => {
      if (!userid) return;

      try {
        const result = await fetchUserData(userid);
        const fullName = `${result.firstName} ${result.lastName}`.trim();
        setUserName(fullName);
        setCompany(result.company);
      } catch (err) {
        console.error("Failed to load info", err);
      }
    };

    fetchInitialCardData();
  }, [userid]);

  const handleGenerate = async () => {
    setIsLoading(true);
    if (!userid) return;

    try {
      const userData = await fetchUserData(userid);
      const personalityId = await fetchUserPersonality(userid);

      if (!userData || !personalityId) {
        throw new Error("Unable to load user or personality data.");
      }

      const fullName = `${userData.firstName} ${userData.lastName}`.trim();
      const personality = PERSONALITY_MAP[personalityId] || PERSONALITY_MAP[1];
      const profileImag = userData.profileImag;

      let portraitUrl = profileImag || samplePortrait;
      try {
        if (profileImag) {
          const avatarRes = await fetch(
            `https://sap-nowmumbai-backend-dev.cfapps.in30.hana.ondemand.com/api/avatar/download/${encodeURIComponent(profileImag)}`
          );

          if (avatarRes.ok) {
            const blob = await avatarRes.blob();
            portraitUrl = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          }
        }
      } catch {
        console.warn("Avatar fetch failed. Using fallback portrait.");
      }
      

      let displayCompany = company || "";
      if (fullName.length > 22 || displayCompany.length > 27) {
        displayCompany = "";
      }

      const cardData = {
        name: fullName,
        company: displayCompany,
        personalityTitle: personality.title,
        personalityDesc: personality.desc,
        portraitUrl,
      };

      setData(cardData);

      await completeStation(userid, 3);
    } catch {
      console.log("An error occurred while generating the card.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkedInShare = async () => {
    if (!userid || !cardRef.current) return;

    try {
      window.open(linkedInUrl, "_blank");
    } catch (err) {
      console.error("Error sharing on LinkedIn:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleSave = async () => {
    if (!cardRef.current || !cardReady) return;

    try {
      const blob = await htmlToImage.toBlob(cardRef.current);
      if (!blob) throw new Error("Could not generate image");

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `${data?.name || "card"}_card.png`;
      link.href = url;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to export card as PNG:", err);
    }
  };

  if (isCheckStationStatusLoading) {
    return <LoadingOverlay withBackdrop={true} size="large" />;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert("Caption copied to clipboard!");
  };

  return (
    <BackgroundWrapper imageSrc={backgroundImageSrc}>
      <Header />
      <div className="card-wrapper">
        <h1 className="header">
          Welcome, <span>{userName ?? userid}</span>!
        </h1>

        {!data ? (
          isLoading ? (
            <LoadingOverlay withBackdrop={true} size="large" />
          ) : (
            <div className="intro-box">
              <h2 className="intro-heading">Let’s Get Started</h2>
              <p className="intro-text">
                It’s now time for you to create your social card to share with
                your peers.
              </p>
              <Button onClick={handleGenerate}>Generate Card</Button>
            </div>
          )
        ) : (
          <>
            <div
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0 1rem",
              }}
            >
              <div
                ref={cardRef}
                className="card"
                style={{
                  backgroundImage: `url(${bgImage})`,
                }}
              >
                <img
                  src={data.portraitUrl}
                  alt="Portrait"
                  className="portrait"
                />
                <div className="name-company">
                  <div className="name">{data.name}</div>
                  <div className="company">{data.company}</div>
                </div>
                <div className="sap-personality">
                  <div className="title">{data.personalityTitle}</div>
                  <div className="desc">{data.personalityDesc}</div>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSave}
              disabled={!cardReady || isLoading}
              className="save-btn"
            >
              {cardReady ? "Save to Device" : "Loading..."}
            </Button>
            <Card className="linkedin-share-card">
              <h3 className="linkedin-title">
                Congratulations on completing all tasks!
              </h3>
              <p className="linkedin-text">
                Let’s share your SAP NOW Social Card!
              </p>
              <textarea
                readOnly
                value={shareText}
                style={{
                  width: "100%",
                  height: "35px",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  fontSize: "1rem",
                }}
              />
              <button onClick={copyToClipboard} style={{ marginRight: "1rem" }}>
                Copy Caption
              </button>
              <Button
                className="linkedin-share-button"
                onClick={handleLinkedInShare}
              >
                Share on LinkedIn
              </Button>
            </Card>
            <BackToMapButton />
          </>
        )}
      </div>
    </BackgroundWrapper>
  );
};
