import {easeOut } from "motion/react"
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
    transition: { duration: 0.6, ease: easeOut },
  },
};
export const fadeSlideY = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};

const normalizeApiPath = (path: string) =>
  path.startsWith('/') ? path : `/${path}`

/** Direct backend URL (used as fallback when the dev proxy is unavailable). */
export const getBackendUrl = () =>
  import.meta.env.VITE_BACKEND_URL ?? ''

/**
 * Preferred API URL for the current environment.
 * Dev/preview: same-origin `/api` via Vite proxy (phone only talks to your Mac).
 * Production: full backend URL.
 */
const useApiProxy = () =>
  import.meta.env.DEV || import.meta.env.VITE_USE_API_PROXY === 'true'

export const getApiUrl = (path: string) => {
  const normalizedPath = normalizeApiPath(path)

  if (useApiProxy()) {
    return normalizedPath
  }

  const backend = getBackendUrl()
  return backend ? `${backend}${normalizedPath}` : normalizedPath
}

/** @deprecated Use getApiUrl instead */
export const getBaseUrl = () => {
  if (useApiProxy()) {
    return ''
  }
  return getBackendUrl()
}
