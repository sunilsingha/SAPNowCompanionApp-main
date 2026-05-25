import { Img, Video } from '@abdc/messer';
import { clsx } from 'clsx';
import { ReactNode, useRef } from 'react';

import { getGlobalMediaKey } from '../../../utils/helpers';

import classes from './BackgroundWrapper.module.css';

export interface BackgroundWrapperProps {
  children?: ReactNode;
  imageSrc: string;
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
  return (
    <div className={clsx(className, classes.container)}>
      {!isVideo && (
        <Img
          className={classes.backgroundImage}
          src={imageSrc}
          alt="background"
        />
      )}
      {isVideo && (
        <>
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
        </>
      )}
      <div className={classes.wrap} data-is-light={lightDesign}>
        <div>{children}</div>
          <h1 className={classes.bottomFooter}>
            Powered by SAP Business Technology Platform.
          </h1>
        </div>
      </div>
  );
};