import Head from 'next/head'
import Cursor from '../components/cursor/cursor'
import Header from '../components/navbar/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
          <title>Add Culture + </title>
          <meta name="viewport" content="width=device-width"></meta>
          <meta charset="utf-8"></meta>
          <meta http-equiv="Content-Language" content="en"></meta>
          <meta name="description" content="We amplify the voices that set the tone: hire a minority-owned agency or explore our stories today."></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
          <meta property="og:locale" content="en_US"></meta>
          <meta property="og:type" content="article"></meta>
          <meta property="og:title" content="Ad+d Culture"></meta>
          <meta property="og:description" content="We amplify the voices that set the tone: hire a minority-owned agency or explore our stories today."></meta>
          <meta property="og:url" content="https://addculture.com"></meta>
          <meta property="og:site_name" content="Add Culture"></meta>
          <meta property="article:publisher" content="https://www.facebook.com/raxo.studio/"></meta>
          <meta property="article:modified_time" content="2020-09-02T17:58:32+00:00"></meta>
          <meta property="og:image" content="https://rx.raxo.dev/wp-content/uploads/2020/11/addCulture.jpg"></meta>
          <meta property="og:image:width" content="2000"></meta>
          <meta property="og:image:height" content="1333"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content="Ad+d Culture"></meta>
          <meta name="twitter:description" content="We amplify the voices that set the tone: hire a minority-owned agency or explore our stories today."></meta>
          <meta name="twitter:image" content="https://rx.raxo.dev/wp-content/uploads/2020/11/addCulture.jpg"></meta>
          <meta name="twitter:creator" content="@raxostudio"></meta>
          <meta name="twitter:site" content="@raxostudio"></meta>
          <link rel="icon" href="/favicon.svg" />
      </Head>
      <Cursor />

      <Header />
      <Component {...pageProps} />
      </>
  )
}


export default MyApp
