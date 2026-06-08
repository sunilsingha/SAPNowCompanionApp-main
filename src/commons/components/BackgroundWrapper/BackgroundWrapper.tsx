import { Video } from '@abdc/messer';
import { clsx } from 'clsx';
import { ReactNode, useRef, useState } from 'react';

import { getGlobalMediaKey } from '../../../utils/helpers';

import classes from './BackgroundWrapper.module.css';

export interface BackgroundWrapperProps {
  children?: ReactNode;
  imageSrc?: string;
  lightDesign?: boolean;
  className?: string;
  isVideo?: boolean;
}

export const BackgroundWrapper = ({
  children,
  imageSrc,
  className,
  lightDesign = true,
  isVideo,
}: BackgroundWrapperProps) => {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const showBackgroundImage = Boolean(imageSrc) && !imageFailed && !isVideo;

  return (
    <div className={clsx(className, classes.container)}>
      {showBackgroundImage && (
        <img
          className={classes.backgroundImage}
          src={imageSrc}
          alt=""
          aria-hidden="true"
          onError={() => setImageFailed(true)}
        />
      )}
      {isVideo && (
        <Video
          ref={backgroundVideoRef}
          className={classes.backgroundVideo}
          src={getGlobalMediaKey("transition-background-optimized.mp4")}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          style={{ opacity: 1 }}
        />
      )}
      <div
        className={classes.wrap}
        data-is-light={lightDesign ? 'true' : 'false'}
      >
        <div className={classes.content}>{children}</div>
        <h1 className={classes.bottomFooter}>
          Powered by SAP BTP Joule Studio.
        </h1>
      </div>
    </div>
  );
};
