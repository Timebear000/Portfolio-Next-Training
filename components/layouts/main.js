import { Box, Container, NavBar } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
const Main = ({ children, router }) => {
  return (
    <>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>TimeBear - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
