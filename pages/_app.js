import '../styles/globals.css'
import '../styles/tailwind.css'

import Head from 'next/head'

import Layout from './components/layout'
import CustomCursor from './components/cursor'

function MyApp({ Component, pageProps }) {
  return (
   
    <Layout> 
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&family=Alumni+Sans+Pinstripe&display=swap" rel="stylesheet" />
      </Head>
       <Component {...pageProps} />
       <CustomCursor />
    </Layout>
  )
}

export default MyApp
