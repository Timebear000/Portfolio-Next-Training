import { Container, Box, Heading } from '@chakra-ui/react'

const Home = ()=> {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center" mb={6}>
        Hello, I&apos;m a full-stack developer base in Korea!
      </Box>

      <Box display={{ md: 'flex' }} >
        
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kim YoHwan
          </Heading>
        </Box>
      </Box>

    </Container>
  )
}
export default Home