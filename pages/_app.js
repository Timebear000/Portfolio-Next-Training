import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import Fonts from '../components/fonts'
import theme from '../lib/theme'

import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <AnimatePresence exitBeforeEnter initial={true}>
          <Layout router={router}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}

export default MyApp
