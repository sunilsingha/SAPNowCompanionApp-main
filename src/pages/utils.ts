import { createGetCaseMediaKey } from '../utils/helpers';

export const LETS_GO25_LEARNING_PREFIX = 'learning';
export const LETS_GO25_AVATAR_PREFIX = 'avatar';
export const BACKGROUND_IMAGE_SRC = 'background-cropped.png';

export const getAvatarMediaKey = createGetCaseMediaKey('avatar');
export const getLearningMediaKey = createGetCaseMediaKey(LETS_GO25_LEARNING_PREFIX);

export const randomizeArray = <T>(arr: T[]): T[] => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const wordVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
export const fadeSlideY = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};
