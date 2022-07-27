import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
