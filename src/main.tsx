import './utils/i18n';
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { MesserProvider} from '@abdc/messer';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { UsageTrackingProvider } from '@six/usage-tracking';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

// import { ErrorPage } from 'pages/ErrorPage';
// import { AppError } from 'enums/AppError';
import './index.css'
import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      networkMode: 'always',
      staleTime: 1000 * 60 * 10,
      retry: 1,
    },
  },
});

// const ErrorFallback = ({ error }: FallbackProps) => {
//   const isLazyLoadError =
//     error.message.includes('Failed to fetch dynamically imported module') ||
//     error.message.includes('Failed to load module script');

//   // Request user to refresh page when loading of a chunk fails. This will usually occur when a new deployment was activated.
//   return <ErrorPage type={isLazyLoadError ? AppError.AppUpdated : AppError.SomethingWentWrong} />;
// };

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MesserProvider queryClient={queryClient} theme="sap-brand">
      {/* <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}> */}
        <UsageTrackingProvider applicationId="lets-go25" enabledOnLocalDev={false} apiPath={'/api/websocket'}>
          <HelmetProvider>
            <Suspense fallback={<div />}>
              <App />
            </Suspense>
          </HelmetProvider>
        </UsageTrackingProvider>
      {/* </ErrorBoundary> */}

      <ReactQueryDevtools initialIsOpen={false} />
    </MesserProvider>
  </StrictMode>
)
