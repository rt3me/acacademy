import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  ;<>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="school, Christian, preschool, Shenandoah Valley, Virginia, Waynesboro, Staunton, Fishersville"
      />
      <meta name="author" content="Valley Christian Academy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    return <Component {...pageProps} />
  </>
}

export default MyApp
