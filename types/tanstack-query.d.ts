import { AxiosError } from 'axios';

// https://tanstack.com/query/latest/docs/react/typescript#registering-a-global-error
declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}
