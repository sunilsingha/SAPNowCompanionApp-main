/* eslint-disable import/no-duplicates */
// https://www.i18next.com/overview/typescript

import 'i18next';

import { ParseKeys, TOptions } from 'i18next';

import translation from '../public/locales/en/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof translation;
    };
  }
}

declare module 'react-i18next' {
  type TranslationKey = ParseKeys<'translation', TOptions>;
}
