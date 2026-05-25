import { createUseMediaUrl, getMediaKeyWithPrefix, useResetSearchParams } from '@abdc/messer';
import { IconKeys, ValueState } from '@value-experience-design/libella';
import { createIsOfType, isLocalDev } from '@value-experience-design/ui-toolkit-core';
import { isAxiosError } from 'axios';
import { useMemo } from 'react';
import { Path, To } from 'react-router';

// import { useIsSingleScreenMode } from 'hooks/useIsSingleScreenMode';
// import { Routes } from 'routing/Routes';

export const IS_LOCAL_DEV = isLocalDev();

export const LETS_GO25_MEDIA_PREFIX = 'lets-go25';
export const CUSTOMER_LOGO_PREFIX = 'customer-logo';
export const LETS_GO25_AVATAR_PREFIX = 'lets-go25-avatar';

export const OUTRO_PREFIX = `${LETS_GO25_MEDIA_PREFIX}-outro`;
export const CUSTOMER_EXPERIENCE_PREFIX = `${LETS_GO25_MEDIA_PREFIX}-cx`;
export const TARIFF_PREFIX = `${LETS_GO25_MEDIA_PREFIX}-tariff`;

export const createGetCaseMediaKey = (prefix: string) => (src?: string) =>
  getMediaKeyWithPrefix({ src, prefix: `${LETS_GO25_MEDIA_PREFIX}-${prefix}` });
export const createCaseUseMediaUrl = (prefix: string) => createUseMediaUrl(`${LETS_GO25_MEDIA_PREFIX}-${prefix}`);
export const getGlobalMediaKey = (src?: string) => getMediaKeyWithPrefix({ src, prefix: LETS_GO25_MEDIA_PREFIX });
export const getCustomerLogoMediaKey = (src?: string) => getMediaKeyWithPrefix({ src, prefix: CUSTOMER_LOGO_PREFIX });
export const getCustomerExperienceMediaKey = (src?: string) =>
  getMediaKeyWithPrefix({ src, prefix: CUSTOMER_EXPERIENCE_PREFIX });

export const getOutroMediaKey = (src?: string) => getMediaKeyWithPrefix({ src, prefix: OUTRO_PREFIX });

export const useGetGlobalMediaUrl = createUseMediaUrl(LETS_GO25_MEDIA_PREFIX);
export const useGetCustomerLogoMediaUrl = createUseMediaUrl(CUSTOMER_LOGO_PREFIX);
export const useGetOutroMediaUrl = createUseMediaUrl(OUTRO_PREFIX);
export const useGetCustomerExperienceMediaUrl = createUseMediaUrl(CUSTOMER_EXPERIENCE_PREFIX);

/**
 * Checks if the provided object is a react-router `To` object
 */
export const isRouterToObjectType = createIsOfType<Partial<Path>>(['pathname']);

/**
 * Try to extract the error message from an unknown error object
 * @param e
 */
export const getHttpErrorMessage = (e: unknown) => {
  return isAxiosError(e) ? (e.response?.data?.error?.message ?? e.message) : e?.toString();
};

export const VALUE_STATE_ICONS: Record<ValueState, IconKeys> = {
  [ValueState.Error]: 'error',
  [ValueState.Warning]: 'alert',
  [ValueState.Success]: 'sys-enter',
  [ValueState.Info]: 'information',
  [ValueState.None]: 'information',
};

export function getRandomEntries<T>(array: T[], count: number, filterFn?: (item: T) => boolean): T[] {
  const filteredArray = filterFn ? array.filter(filterFn) : array;
  const shuffledArray = filteredArray.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
}

type CreateUseCaseResetToProps = {
  pathname: string;
  caseParams: Record<string, string>;
};

export const createUseCaseResetTo = ({ pathname, caseParams }: CreateUseCaseResetToProps): (() => To) => {
  return () => {
    const resetParams = useResetSearchParams();
    return useMemo(() => ({ pathname, search: resetParams(caseParams) }), [resetParams]);
  };
};

// export const createUseCaseSelectionTo = ({ pathname, caseParams }: CreateUseCaseResetToProps): (() => To) => {
//   return () => {
//     const resetParams = useResetSearchParams();
//     const isSingleScreenMode = useIsSingleScreenMode();

//     return useMemo(
//       () => ({ pathname: isSingleScreenMode ? Routes.Home : pathname, search: resetParams(caseParams) }),
//       [isSingleScreenMode, resetParams]
//     );
//   };
// };
