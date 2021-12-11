// Next.js
import type { AppProps } from 'next/app';

// Original
import 'styles/globals.min.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
