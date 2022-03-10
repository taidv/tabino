import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Router } from 'next/router';
import { StylesProvider } from '@material-ui/core';
function Tabino({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StylesProvider injectFirst>
          <Component {...pageProps} />
        </StylesProvider>
      )}
    </>
  );
}

export default Tabino;
