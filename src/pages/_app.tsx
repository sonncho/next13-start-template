// import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import '@/styles/variables.css';
import globalStyles from '@/styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
