/** @jsxImportSource theme-ui */

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  Link,
} from 'theme-ui'
import BGImg from '../components/bg'
import AssembleImgFile from '../public/assemble.jpg'
import { motion } from 'framer-motion'
import Marquee from 'react-marquee-slider'
import times from 'lodash/times'

import Icon from '@hackclub/icons'
import theme from '../lib/theme'
import Meta from '../components/meta'
import ScrollHint from '../components/scroll-hint'

export default function Index({ target = 'teenagers' }) {
  return (
    <Box
      sx={{
        backgroundImage: `radial-gradient(
      ellipse farthest-corner at top left,
      rgba(37, 36, 41, 0.80),
      rgba(18, 18, 23, 0.90)
    ), url(https://cloud-fiuzhcn11-hack-club-bot.vercel.app/0img_8991__2_.jpg)`,
        backgroundSize: 'cover',
      }}
    >
      <Meta target={target || 'teenagers'} />
      <Flex sx={{ flexDirection: 'column', height: '100vh' }}>
        <Flex sx={{ color: 'muted', p: 3, alignItems: 'center' }}>
          <Image src="/android-icon-192x192.png" sx={{ height: '56px' }} />
          <Box sx={{ mr: 2, flexGrow: 1, textAlign: 'right', fontSize: 1 }}>
            Event open sourced on: <br />
            <Text sx={{ textTransform: 'uppercase', fontSize: ['5vw', 2] }}>
              <Link href="https://github.com/lioncityhacks/site" color="smoke">GitHub</Link> & <Link color="smoke" href="https://bank.hackclub.com/lion-city-hacks/">Hack Club Bank</Link>
            </Text>
          </Box>
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '880px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            margin: 'auto',
            flexGrow: 1,
            color: 'white',
            paddingBottom: '72px',
            px: 3,
          }}
        >
          <Heading
            sx={{
              fontSize: [3, 3],
              display: 'flex',
              flexDirection: ['column', 'row'],
              gap: 2,
              borderBottom: ['2px solid white', 'none'],
              mb: [2, 0],
              pb: [2, 0],
            }}
          >
            <Text>LION CITY HACKS:</Text>
            <Text>DECEMBER 3RD 2022</Text>
          </Heading>
          <Heading sx={{ fontSize: [5, 5, 6], mt: 2 }}>
            150 teengers gathered in Singapore to build apps, websites, games
            and more!
          </Heading>
          <Flex mt={3} sx={{ flexDirection: ['column', null, 'row'], gap: 2 }}>
            <Button
              as="a"
              sx={{
                fontSize: 2,
                backgroundImage: theme.util.gx('blue', 'green'),
                pt: '12px',
              }}
              href="https://photos.app.goo.gl/sJt8GnZYxdGdRvkN8"
              target="_blank"
            >
              BROWSE OUR PHOTO ALBUM
            </Button>
            <Button
              as="a"
              sx={{
                backgroundImage: theme.util.gx('red', 'orange'),
                fontSize: 2,
                pt: '12px',
              }}
              href="https://hackathons.hackclub.com/list-of-hackathons-in-singapore"
              target="_blank"
            >
              EXPLORE MORE HACKATHONS
            </Button>
          </Flex>
        </Flex>
        <Box
          sx={{
            bg: 'purple',
            color: 'white',
            p: 3,
            textAlign: 'center',
            pt: '20px',
          }}
        >
          With thanks from Arsh, Dama, Dev, Edwin, Gabriel, Ishnaa, Neil, Neer, Sam,
          Yuyoung & Victoria.
        </Box>
      </Flex>
    </Box>
  )
}
