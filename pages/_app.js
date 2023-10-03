import Head from "next/head"

// Global Styles
import "../styles/globals.scss"

// Global Context
import { Store } from "../context/store"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Context Demo</title>
        <meta name="description" content="A demo app that loads external content via an API into global context" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Store>
          <Component className="app" {...pageProps} />
      </Store>
    </>
  )
}