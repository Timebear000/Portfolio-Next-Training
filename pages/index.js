import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          align="center"
          mb={6}
        >
          Hello, I&apos;m a full-stack developer base in Korea!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kim YoHwan
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/yohwan.jpeg"
              alt="Profile Img"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a freelancer and a full stack developer who lives in Busan and
            is working. Basically, I&apos;m interested in IT services as a
            whole, and I&apos;m putting a lot of effort into creating app
            applications and webs. I like to plan and design from product
            database to launch.{' '}
            <NextLink href="/works/indrop">
              <Link>Inkdrop</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2019</BioYear>
            Transfer to Chonbuk National University
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Korea Institute of Intangible Cultural Studies
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Joining Busan Seagull
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated from Chonbuk National University
          </BioSection>
          <BioSection>
            <BioYear>2022 ~ </BioYear>
            Working as a freelancer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Community
          </Heading>
          <Paragraph>
            <NextLink href="https://discord.gg/nfHvUTTsQbp">
              <Link>Dev Night Discord : https://discord.gg/nfHvUTTsQb </Link>
            </NextLink>
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
export default Home
