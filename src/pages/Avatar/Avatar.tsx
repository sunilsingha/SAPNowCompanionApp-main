import { useParams } from "react-router-dom";
import clsx from "clsx";
import {
  containerVariants,
  wordVariants,
} from "../../commons/utils";
import { Spinner } from "@value-experience-design/libella";
import { containerAnimationProps, defaultCardVariants } from "@abdc/messer";
import { useState, useEffect, useRef } from "react";
import { BackgroundWrapper } from "../../commons/components/BackgroundWrapper";
import { Button } from "../../commons/components//Button";
import { Header } from "../../commons/components/Header";
import { Card } from "../../commons/components/Card";
import { motion, AnimatePresence } from "motion/react";
import classes from "./Avatar.module.css";
import { BackToMapButton } from "../../commons/components/BackToMapButton";
import { getApiUrl, getBackendUrl } from "../../commons/utils";
import { fetchUserData } from "../SocialCard/helpers/api";

const blobToDataUrl = (blob: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

const fetchAvatarBlob = async (profileImag: string): Promise<Blob> => {
  const path = `/api/avatar/download/${encodeURIComponent(profileImag)}`
  const urls = [getApiUrl(path)]
  const backend = getBackendUrl()
  if (backend) {
    urls.push(`${backend}${path}`)
  }

  let lastError: unknown
  for (const url of urls) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Avatar fetch failed: ${response.status}`)
      }
      const rawBlob = await response.blob()
      if (!rawBlob.size) {
        throw new Error('Avatar response was empty')
      }
      return rawBlob.type && rawBlob.type.startsWith('image/')
        ? rawBlob
        : new Blob([rawBlob], { type: 'image/jpeg' })
    } catch (err) {
      lastError = err
    }
  }

  throw lastError ?? new Error('Avatar fetch failed')
}

export interface AvatarProps {
  className?: string;
}

export const Avatar = ({ className }: AvatarProps) => {
  const { userid } = useParams<{ userid: string }>();
  const title = "Your Avatar".split("\n");
  let cardContent;
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [avatarBlob, setAvatarBlob] = useState<Blob | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const revokeObjectUrl = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current)
      objectUrlRef.current = null
    }
  }

  const handleDownload = async () => {
    if ((!avatarBlob && !avatarUrl) || isDownloading) return;

    setIsDownloading(true);
    const fileName = `avatar_${userid ?? "user"}.jpg`;

    try {
      let blob = avatarBlob
      if (!blob && avatarUrl?.startsWith('data:')) {
        const response = await fetch(avatarUrl)
        blob = await response.blob()
      }
      if (!blob) {
        throw new Error('No avatar data available')
      }

      const file = new File([blob], fileName, {
        type: blob.type || "image/jpeg",
      });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "My Avatar" });
        return;
      }

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (error) {
      if ((error as Error).name === "AbortError") return;
      console.error("Avatar download failed:", error);
      if (avatarUrl) {
        window.open(avatarUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!userid) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setIsError(false);
      setErrorMessage(null);
      revokeObjectUrl();
      setAvatarUrl(null);
      setAvatarBlob(null);

      try {
        const result = await fetchUserData(userid);
        if (cancelled) return;

        const fullName = `${result.firstName ?? ""} ${result.lastName ?? ""}`.trim();
        setUserName(fullName || null);

        if (!result.profileImag) {
          setIsError(true);
          setErrorMessage(
            "No avatar found. Please create your avatar at Station 1 first."
          );
          return;
        }

        const blob = await fetchAvatarBlob(result.profileImag)
        if (cancelled) return

        const objectUrl = URL.createObjectURL(blob)
        objectUrlRef.current = objectUrl

        let displayUrl = objectUrl
        try {
          displayUrl = await blobToDataUrl(blob)
        } catch {
          displayUrl = objectUrl
        }

        setAvatarBlob(blob)
        setAvatarUrl(displayUrl)
      } catch (error) {
        if (!cancelled) {
          console.error("Avatar load error:", error);
          setIsError(true);
          setErrorMessage("Could not load your avatar. Please try again.");
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
      revokeObjectUrl();
    };
  }, [userid]);

  const displayImage = () => (
    <div className={classes.cameraContent}>
      <div className={classes.imageFrame}>
        <img
          src={avatarUrl!}
          alt="Your avatar"
          onError={() => {
            setIsError(true);
            setErrorMessage("Could not load your avatar. Please try again.");
            setAvatarUrl(null);
          }}
        />
      </div>
      <p className={classes.saveHint}>
        Tip: tap and hold the image, or use Save to Device below.
      </p>
    </div>
  );

  const renderLoading = () => (
    <div className={classes.loading}>
      <div className={classes.overlaySpinner}>
        {!isError && (
          <>
            <Spinner size="large" tooltip="Loading..." />
            <span>Loading...</span>
          </>
        )}
        {isError && (
          <div className={classes.error}>
            {errorMessage ?? "Something went wrong!"}
          </div>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    cardContent = renderLoading();
  } else if (avatarUrl && !isError) {
    cardContent = displayImage();
  } else if (isError) {
    cardContent = renderLoading();
  }

  return (
    <BackgroundWrapper className={clsx(className)}>
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
              <div className={classes.actions}>
                <Button
                  design="blue"
                  disabled={!avatarUrl || isDownloading || isError}
                  onClick={() => void handleDownload()}
                >
                  {isDownloading ? "Saving..." : "Save to Device"}
                </Button>
                <BackToMapButton />
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </BackgroundWrapper>
  );
};
