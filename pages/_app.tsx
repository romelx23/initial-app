import { NextPage } from 'next'
import '../styles/globals.css'
import { ReactElement } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?:(page:ReactElement)=>ReactElement;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
