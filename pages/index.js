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

const Card = ({ question = 'question', answer = 'answer', sx = {} }) => (
  <Box
    sx={{
      bg: 'white',
      p: 3,
      borderRadius: 3,
      boxShadow: 'card',
      transitionDuration: '0.125s',
      ':hover': {
        boxShadow: 'elevated',
        transform: 'scale(1.0625)',
      },
      ...sx,
    }}
  >
    <Heading as="h4" pb={2}>
      {question}
    </Heading>
    {answer}
  </Box>
)

const Glossary = () => (
  <Box
    sx={{
      backgroundImage:
        'linear-gradient(90deg, rgba(5, 11, 20, 0.8) 0%, rgba(5, 11, 20, 0.8) 100% ), url(https://cloud-hunfczv0s-hack-club-bot.vercel.app/0screenshot_2022-08-30_at_11.42.24_pm.png)',
      backgroundSize: 'cover',
    }}
  >
    <Container sx={{ pt: [4, 6], pb: 4 }}>
      <Text
        variant="text.title"
        sx={{
          color: 'white',
          pb: 4,
          display: 'block',
          textShadow: 'elevated',
          textDecoration: 'underline',
        }}
      >
        Anything else?
      </Text>

      <Grid columns={[1, null, 3]} gap={[3, 3, 3]}>
        <Card
          question="What do I need?"
          answer="Your laptop, chargers, anything for your hack (hardware?), and an open mind."
        />
        <Card
          question="How much does it cost?"
          answer="Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
        />
        <Card
          question="Who is judging?"
          answer={
            <>
              Judging is done by the people that matter the most– attendees. If
              you ship a project you can vote on other projects. That said,
              we'll still have pretty cool people hang out with us.
            </>
          }
        />
        <Card
          question="I'm not that good at coding..."
          answer={
            <>
              This hackathon is for hackers of all skill levels! We'll have
              workshops and other events so join us and let's learn together. If
              you'd like to start exploring some introductory projects, check
              out{' '}
              <a
                style={{ color: 'black' }}
                href="https://workshops.hackclub.com"
              >
                Hack Club Workshops
              </a>{' '}
              .
            </>
          }
        />
        <Card
          question="What can I make?"
          answer={
            <>
              Anything! Apps, art, sites, and hardware projects are all perfect
              for a hackathon.
            </>
          }
        />
        <Card
          question="My parents are worried!"
          answer={
            <>
              We're here to help, ask them to reach out to us at{' '}
              <a
                style={{ color: 'black' }}
                href="mailto:contact@lioncityhacks.com"
              >
                contact@lioncityhacks.com
              </a>{' '}
              and we'll make sure to answer all their questions. Lion City Hacks
              will be supervised by background checked adults.
            </>
          }
        />
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Card
          question="Who is running Lion City Hacks?"
          answer={
            <>
              Lion City Hacks is independently-organized by{' '}
              <a
                style={{ color: 'black' }}
                href="https://innovationcircuit.com/"
                target="_blank"
              >
                a team of teenagers
              </a>
              , we're fiscally sponsored by{' '}
              <a
                style={{ color: 'black' }}
                href="https://the.hackfoundation.org"
                target="_blank"
              >
                The Hack Foundation
              </a>{' '}
              (an international non-profit). Previously our team has worked on
              events such as{' '}
              <a
                style={{ color: 'black' }}
                href="https://photos.google.com/share/AF1QipNu5OKRsEZzw59wu6hGCW1oPpfVk0jn_w_mn27c0k97ttAbRxE3G_WC1gDcltbQJA?key=cFZXbEsxVWRrOFBBNldTU24zT0M1OFJQZnFTUUxn"
                target="_blank"
              >
                CodeDay Singapore
              </a>{' '}
              &{' '}
              <a
                style={{ color: 'black' }}
                href="https://twitter.com/figma/status/1556774728072761344"
                target="_blank"
              >
                Assemble
              </a>
              . We're super excited to welcome you to Lion City Hacks!
            </>
          }
        />
      </Box>
      <Text
        sx={{
          color: 'white',
          pt: 4,
          pb: 2,
          display: 'block',
          textShadow: 'elevated',
          fontSize: 4,
          fontWeight: 900,
        }}
      >
        Thank you to our sponsors & partners!
      </Text>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <SupporterImage
          src="https://www.ibo.org/Assets/Images/logo-163.svg"
          href="https://www.ibo.org"
          sx={{
            bg: 'white',
          }}
        />
        <SupporterImage
          src="https://www.ashoka.org/themes/custom/blanco_ashoka_org/logo.svg"
          href="https://www.ashoka.org/en-sg"
          sx={{
            bg: '#F46523',
            p: '6px',
          }}
        />
        <SupporterImage
          src="https://assets.hackclub.com/flag-standalone.png"
          href="https://hackclub.com"
          sx={{
            bg: 'white',
          }}
        />
        <SupporterImage
          src="https://cloud-iehxwn0k6-hack-club-bot.vercel.app/0first_horz_rgb.png"
          href="https://www.firstinspires.org/"
          sx={{
            bg: 'white',
          }}
        />
        <SupporterImage
          src="https://www.redhat.com/cms/managed-files/Asset-Red_Hat-Logo_page-Logo-RGB.svg?itok=yWDK-rRz"
          href="https://redhat.com"
          sx={{
            bg: 'white',
          }}
        />
      </Flex>
      <Box
        sx={{
          color: 'white',
          opacity: 0.5,
          transition: 'color 0.125s ease-in-out 0s',
          ':hover': { opacity: 0.9 },
          maxWidth: '600px',
          mt: 2,
        }}
      >
        Interested in sponsoring & helping create a magical programming
        experience for teenagers in Singapore?{' '}
        <a href="mailto:contact@lioncityhacks.com" style={{ color: 'white' }}>
          Drop us a line on email
        </a>{' '}
        or  <a href="https://bank.hackclub.com/donations/start/lion-city-hacks" target="_blank" style={{ color: 'white' }}>donate directly</a>!
      </Box>
    </Container>
  </Box>
)

function SupporterImage({ src, href, sx, ...props }) {
  return (
    <Link href={href}>
      <Image
        src={src}
        sx={{
          height: '90px',
          minWidth: '1px',
          maxWidth: 'none',
          bg: 'white',
          p: '20px',
          borderRadius: 6,
          mr: 2,
          mt: 2,
          ...sx,
        }}
        {...props}
      />
    </Link>
  )
}

const MarketingImage = ({
  href,
  src,
  alt,
  webp,
  objectPosition = undefined,
  sx,
  height = undefined,
}) => {
  const content = (
    <picture>
      {Boolean(webp) && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        title={alt}
        style={{
          objectFit: 'cover',
          border: '3px solid black',
          objectPosition,
          minHeight: height,
          height: '100%',
          width: '100%',
        }}
        sx={sx}
      />
    </picture>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        style={{ padding: 0, margin: 0, height: '100%' }}
      >
        {content}
      </a>
    )
  } else {
    return content
  }
}

const Features = () => (
  <Box
    id="features"
    sx={{
      backgroundAttachment: 'fixed',
      backgroundImage:
        'linear-gradient(90deg, rgba(0,0,0, 0.2) 0%, rgba(0,0,0, 0.2) 100% ), url(patterns/dots_blue.png)',
    }}
  >
    <Grid columns={[1, 1, 2]}>
      <InfoBox
        iconGlyph="support"
        heading="Share Their Knowledge"
        color="green"
      >
        At Lion City Hacks, you'll be able to give & attend workshops from
        peers, gain experience, make connections, and discover yourself. You'll
        meet new people, get help from peers, and support your fellow hackers.
      </InfoBox>
      <MarketingImage
        sx={{
          transitionDuration: '300ms',
          '&:hover': {
            transform: 'translateY(-7px) translateX(7px)',
            boxShadow: '-7px 7px #000',
          },
        }}
        src="https://cloud-cq6xnpswq-hack-club-bot.vercel.app/1hack_club_assemble_00711.jpg"
        href="https://cloud-cq6xnpswq-hack-club-bot.vercel.app/1hack_club_assemble_00711.jpg"
        alt="Hacker delivering a workshop (📸 @kunalbotla)"
        objectPosition="left bottom"
      />
      <InfoBox
        iconGlyph="explore"
        heading="Build The Unexpected"
        sx={{ gridColumn: [null, null, '2/3'] }}
        color="red"
      >
        At Lion City Hacks, you're encouraged to create a project no hacker
        would expect to see at demos. You'll build something to showcase to
        other hackers, not pitching to impress a business-type. Learning and
        creating is valued far above a long-term product plan.
      </InfoBox>
      <Box
        sx={{ gridColumn: [null, null, '1/2'], gridRow: [null, null, '2/3'] }}
      >
        <MarketingImage
          sx={{
            transitionDuration: '300ms',
            '&:hover': {
              transform: 'translateY(-7px) translateX(7px)',
              boxShadow: '-7px 7px #000',
            },
          }}
          src="https://cloud-cq6xnpswq-hack-club-bot.vercel.app/2hack_club_assemble_01601.jpg"
          href="https://cloud-cq6xnpswq-hack-club-bot.vercel.app/2hack_club_assemble_01601.jpg"
          alt="Hacker reverse engineering a lamp (📸 @kunalbotla)"
        />
      </Box>
      <InfoBox
        iconGlyph="friend"
        heading="Create Lifelong Memories"
        color="cyan"
      >
        We won't be coding all twelve hours. We'll come together to have fun,
        get to know one another and participate in all sorts of activities. The
        people you meet at a hackathon are special, you'll have wonderful
        conversations with your fellow attendees and get inspired from each
        other.
      </InfoBox>
      <MarketingImage
        sx={{
          transitionDuration: '300ms',
          '&:hover': {
            transform: 'translateY(-7px) translateX(7px)',
            boxShadow: '-7px 7px #000',
          },
        }}
        src="https://cloud-cq6xnpswq-hack-club-bot.vercel.app/0hack_club_assemble_01887.jpg"
        href="https://cloud-cq6xnpswq-hack-club-bot.vercel.app/0hack_club_assemble_01887.jpg"
        alt="An unexpected dinosaur arrives! (📸 @kunalbotla)"
        height="320px"
      />
    </Grid>
  </Box>
)

const InfoBox = ({ iconGlyph, heading, color, children, sx }) => (
  <Box
    sx={{
      p: 1,
      pb: [2, 4],
      color: 'black',
      textAlign: 'left',
      backgroundSize: '30px',
      border: '3px solid',
      color: 'white',
      borderColor: color || 'orange',
      transitionDuration: '300ms',
      '&:hover': {
        transform: 'translateY(-7px) translateX(7px)',
        boxShadow: '-7px 7px #000',
      },
      ...sx,
    }}
  >
    <Box
      sx={{
        p: 3,
        display: 'flex',
        gap: '12px',
        fontSize: 2,
      }}
    >
      <Box>
        <Heading
          as="h3"
          mt={2}
          mb={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            ml: '-2px',
            width: 'fit-content',
            fontSize: 32,
          }}
        >
          <Box
            sx={{
              color: '#FF544A',
              display: ['none', 'flex'],
              alignItems: 'center',

              transform: 'translateY(-4px)',
            }}
          >
            <Icon glyph={iconGlyph} size={36} color={theme.colors[color]} />
          </Box>
          {heading}
        </Heading>
        {children}
      </Box>
    </Box>
  </Box>
)

export default function Index(props) {
  return (
    <>
      {/*<motion.a
        animate={{
          opacity: [0, 0, 0, 0, 0, 1],
        }}
        transition={{ ease: 'easeInOut', duration: 3.5 }}
        href="https://hackclub.com/"
        target="_blank"
        style={{
          position: 'absolute',
          top: '10px',
          left: 0,
          border: 0,
          zIndex: '300',
          width: '150px',
          marginTop: '16px',
          opacity: 0.7,
        }}
      >
        <img
          width="150px"
          src={'https://assets.hackclub.com/banners/'.concat('2022', '.svg')}
        />
      </motion.a>*/}
      <motion.div
        animate={{
          opacity: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          height: [
            '100vh',
            '100vh',
            '100vh',
            '100vh',
            '100vh',
            '100vh',
            '100vh',
            '100vh',
            '0vh',
          ],
        }}
        transition={{ ease: 'easeInOut', duration: 4.5 }}
        style={{
          height: '100vh',
          backgroundColor: '#000000',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 80 80'%3E%3Cg fill='%23121217' fill-opacity='0.5'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 950,
          position: 'absolute',
          top: 0,
          width: '100vw',
          color: 'white',
          textAlign: 'center',
          fontSize: '7em',
          overflow: 'hidden',
        }}
      >
        <motion.h1
          animate={{ opacity: [1, 1, 0, 0, 0, 0, 0] }}
          transition={{ ease: 'easeInOut', duration: 3 }}
          style={{
            position: 'absolute',
            top: -30,
            display: 'flex',
            zIndex: 960,
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100vw',
          }}
        >
          THREE,
        </motion.h1>
        <motion.h1
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
          transition={{ ease: 'easeInOut', duration: 3.2 }}
          style={{
            position: 'absolute',
            top: -30,
            zIndex: 960,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100vw',
          }}
        >
          TWO,
        </motion.h1>
        <motion.h1
          animate={{ opacity: [0, 0, 0, 1, 0, 0, 0] }}
          transition={{ ease: 'easeInOut', duration: 3.4 }}
          style={{
            position: 'absolute',
            top: -30,
            zIndex: 960,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100vw',
          }}
        >
          ONE,
        </motion.h1>
        <svg
          color="#273444"
          viewBox="0 0 2559 972"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            zIndex: 800,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100vw',
          }}
        >
          <path
            d="M0.368942 872.711L217.54 870.949L245.733 286.835L273.044 288.597L289.783 197.852L354.978 246.308V249.997L361.916 250.658V244.381C361.916 244.381 456.735 260.735 462.021 266.517L475.071 275.272L459.543 797.274L476.062 797.77L478.705 619.364L489.608 611.93L489.112 601.688L496.215 598.549L503.979 600.862L505.631 537.429L518.846 520.249L528.097 230.67H540.817V226.21L618.291 225.549L620.108 222.41L631.011 221.584L677.264 256.109L671.813 446.243H692.462V440.957L695.27 438.314L712.945 439.14V448.391H718.561L719.057 537.759H731.281L730.455 562.868L741.192 588.142L739.705 765.061L744 765.557L745.982 486.385L764.649 472.674L841.463 477.795V524.379H846.584L843.115 529.004C843.115 529.004 850.714 571.293 850.218 589.133L856.826 589.298V592.767H861.947V692.377H873.676V627.127L885.9 627.457L875.658 624.484L906.714 585.169L930.832 617.712L961.557 618.373L985.51 615.565L986.171 523.884L1018.71 516.285L1053.9 520.415L1054.89 367.614C1054.89 367.614 1046.96 364.641 1054.89 361.337L1054.56 353.738C1054.56 353.738 1046.3 349.773 1054.89 345.644L1054.73 328.134C1054.73 328.134 1048.45 325.987 1054.73 323.343L1054.4 298.564H1052.25V292.617H1055.55C1055.55 292.617 1055.06 287.331 1058.2 287.166C1061.34 287.001 1060.01 293.113 1060.01 293.113H1062.33V299.39H1059.35V323.838C1059.35 323.838 1065.3 324.994 1059.19 327.803L1059.02 344.322C1059.02 344.322 1075.21 339.366 1104.45 342.34L1116.18 344.157L1117.5 187.391L1123.94 177.81H1127.74L1127.08 169.385L1131.87 168.063L1131.05 159.143L1135.84 157.987V147.084L1196.46 148.075L1196.96 160.299L1200.92 162.281L1201.75 169.715L1206.04 171.862L1205.55 179.956L1210.51 180.947L1215.63 190.198L1214.8 392.226L1220.09 405.772L1221.08 433.524L1285.34 443.766L1318.71 422.787L1317.22 235.956H1320.85L1320.52 224.227L1371.57 225.879L1371.73 213.985H1378.01V226.044L1417.16 225.879L1416.99 213.49H1422.94V227.036H1467.38L1469.36 324.664L1493.48 316.404V250.823L1549.15 240.912L1547.33 79.521L1572.11 28.312L1577.06 29.634L1576.57 0.0650024H1579.05L1582.19 31.451L1641.65 54.743L1644.79 187.391L1772.82 181.609L1779.59 360.51L1811.64 361.666L1813.45 406.598L1824.85 409.737L1827 491.011L1834.93 492.828L1839.22 680.319L1869.62 679.328L1857.06 260.9L1870.77 258.587L1866.14 132.877L1875.39 129.408L1873.08 87.119L1879.19 82.824L1878.53 76.382L1895.71 64.488H1953.2V57.054H1963.94V65.644H1975.33V124.617L1981.61 129.242L1982.11 134.198L1986.24 135.52L1990.37 257.1L2003.91 262.056L2005.89 354.067L2052.31 360.014L2054.79 436.497H2060.57V427.412L2075.6 427.577L2075.93 436.662L2125.33 441.122L2124.83 433.028H2137.55L2149.94 709.227H2159.68L2160.51 715.504L2164.14 716.165L2164.31 711.705H2166.95L2166.79 699.811L2182.15 697.994L2181.32 694.36L2185.45 693.038L2179.34 543.706L2304.23 521.405L2364.52 525.039L2367.82 606.974L2391.94 608.791L2401.85 796.117L2416.06 796.943L2412.26 708.566L2417.38 705.593L2416.89 700.142L2521.45 701.133L2521.78 707.41H2529.22L2529.71 711.705H2532.69L2535.66 780.094H2558.95V971.5H0.36895C0.36895 971.5 0.368942 868.816 0.368942 872.711Z"
            fill="#17171d"
          />
        </svg>
        <motion.h1
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 1] }}
          transition={{ ease: 'easeInOut', duration: 3.6 }}
          style={{
            position: 'absolute',
            top: -30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            zIndex: 960,
            width: '100vw',
          }}
        >
          HACK!
        </motion.h1>
      </motion.div>
      <Box
        sx={{
          bg: 'dark',
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'relative', overflow: 'visible', width: '100%' }}>
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              height: 'fit-content',
              overflow: 'visible',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
            }}
          >
            <motion.div
              animate={{
                y: [1000, 1000, 1000, 1000, 1000, 0],
              }}
              transition={{ ease: 'easeInOut', duration: 3.5 }}
              style={{ zIndex: 2 }}
            >
              <Container
                as="main"
                py={4}
                variant="copy"
                sx={{
                  backgroundColor: '#e8e0cc',
                  backgroundImage: `url("https://www.transparenttextures.com/patterns/beige-paper.png")`,
                  borderRadius: 16,
                  zIndex: 2,
                  fontSize: 3,
                  px: 4,
                  boxShadow: 'elevated',
                  fontFamily: 'cursive',
                }}
              >
                <p style={{ marginBlockStart: '0em' }}>Dear hacker,</p>
                <p>
                  We're inviting you to{' '}
                  <Text as="b" sx={{ fontWeight: 900, color: 'red' }}>
                    🦁 Lion City Hacks
                  </Text>
                  , a hackathon for teenagers in Singapore, on{' '}
                  <i>
                    <u>December 3rd</u>
                  </i>{' '}
                  at{' '}
                  <i>
                    <Link
                      sx={{ textDecoration: 'underline', color: 'black' }}
                      target="_blank"
                      href="https://www.google.com/maps/place/Red+Hat+Asia+Pacific+Pte+Ltd/@1.2841018,103.8477742,17z/data=!3m1!4b1!4m5!3m4!1s0x31da191377716ae1:0x166080ad6b7de256!8m2!3d1.2841018!4d103.8499629"
                    >
                      RedHat Singapore
                    </Link>
                  </i>
                  . Join us for twelve hours of hacking, workshops & friendship.
                </p>
                <p style={{ marginBlockEnd: '0em' }}>
                  <Link
                    sx={{ textDecoration: 'underline', color: 'red' }}
                    target="_blank"
                    href="https://register.lioncityhacks.com"
                  >
                    RSVP today
                  </Link>{' '}
                  or read on for more details.
                </p>
              </Container>
            </motion.div>
          </motion.div>
        </Box>
        <BGImg
          src={AssembleImgFile}
          alt="Hack Clubbers assemble at Figma HQ for the first IRL hackathon in SF since 2020: Assemble. 📸 Photo by Kunal Botla, Hack Clubber in MA!"
          priority
        />
      </Box>
      <Box sx={{ bg: 'darker', pt: 3, zIndex: 999, position: 'relative' }}>
        <Box
          sx={{
            background: 'darker',
            borderTop: '8px solid',
            borderBottom: '8px solid',
            color: 'orange',
            position: 'relative',
            py: 2,
            fontStyle: 'italic',
            fontWeight: 800,
            fontSize: 2,
          }}
        >
          <Marquee velocity={12}>
            {times(10, Number).map(id => (
              <Box key={id}>
                WAIT, WHAT THE HACK IS A HACKATHON?
                <Text sx={{ mx: 2, transform: 'translateY(-4px)' }}>—</Text>
              </Box>
            ))}
          </Marquee>
        </Box>
        <Container sx={{ color: 'white' }}>
          <Heading as="h1" pt={5} pb={4} sx={{ fontSize: 5 }}>
            A <Text color="orange">hackathon</Text> is a social coding event
            where <Text color="green">teens come together</Text> to{' '}
            <Text color="red">build projects</Text> in a short amount of time
            and <Text color="cyan">share them with the world</Text>.
          </Heading>
          <Heading as="h1" pb={4} sx={{ fontSize: 5 }}>
            <Text sx={{ fontWeight: 500 }}>
              At Lion City Hacks, 100+ teenagers will gather to:
            </Text>
          </Heading>
          <Features />
        </Container>
        <Box bg="purple" color="white" mt={5} py={5}>
          <Container>
            <Heading as="h1" sx={{ fontSize: 4, mb: 4 }}>
              <u>The Rundown & Registration</u>
            </Heading>
            <Grid sx={{ color: 'black', fontSize: 2 }} gap={3}>
              <Box bg="white" sx={{ p: 3 }}>
                <b>Date & Time:</b> Starts at 9:00am and ends at 9:00pm on
                December 3rd.
              </Box>
              <Grid bg="white" sx={{ p: 3 }} columns={[1, 1, 2]}>
                <Box>
                  <b>Venue:</b> RedHat Singapore, <br />
                  88 Market Street, <br />
                  Level 45 of CapitaSpring, Singapore 048948 <br />
                  <Text as="small" sx={{ opacity: 0.7 }}>
                    (Near Raffles Place Station)
                  </Text>
                  <Grid columns={[1, 2, 2]} mt={2}>
                    <MarketingImage
                      src="https://www.mmoser.com/wp-content/uploads/2017/02/Red-Hat-Singapore-workplace-lounge-reception-1200x675.jpg"
                      href="https://www.mmoser.com/wp-content/uploads/2017/02/Red-Hat-Singapore-workplace-lounge-reception-1200x675.jpg"
                      alt="The entrance to RedHat's office."
                    />
                    <MarketingImage
                      src="https://www.mmoser.com/wp-content/uploads/2017/02/Red-Hat-Singapore-workplace-canteen-kitchen-collaboration-2000x1125.jpg"
                      href="https://www.mmoser.com/wp-content/uploads/2017/02/Red-Hat-Singapore-workplace-canteen-kitchen-collaboration-2000x1125.jpg"
                      alt="Inside RedHat's office"
                    />
                  </Grid>
                </Box>

                <Box>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8163414110145!2d103.8477742148047!3d1.2841017990634407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191377716ae1%3A0x166080ad6b7de256!2sRed%20Hat%20Asia%20Pacific%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1663668468118!5m2!1sen!2ssg"
                    height="100%"
                    width="100%"
                    style={{ border: '0', minHeight: '300px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Grid>
              <Box bg="white" sx={{ p: 3 }}>
                <b>Eligibility:</b> all secondary, pre-university and JC
                students are welcome to join (no experience required!).
              </Box>
              <Box bg="white" sx={{ p: 3 }}>
                <b>COVID-19:</b> We require all participants to be vaccinated
                against COVID-19 or to have a medical exemption. We will be
                providing participants with N95 masks (for optional but recommended
                usage, inline with MOH guidelines). 
              </Box>
              <Box
                bg="green"
                as="a"
                href="https://register.lioncityhacks.com"
                sx={{
                  p: 3,
                  fontSize: 3,
                  fontWeight: 900,
                  textDecoration: 'underline',
                  color: 'white',
                  textShadow: 'elevated',
                  textAlign: 'center',
                }}
              >
                REGISTER ➚
              </Box>
            </Grid>
          </Container>
        </Box>
        <Glossary />
        <Box
          bg="purple"
          color="white"
          pt={3}
          pb={3}
          sx={{ textAlign: 'center' }}
        >
          <Box pt={1}>
            An event by{' '}
            <Link
              sx={{
                fontWeight: 900,
                color: 'white',
                textDecoration: 'underline',
              }}
              href="https://innovationcircuit.com"
              target="_blank"
            >
              The Innovation Circuit
            </Link>
            , fiscally sponsored by{' '}
            <Link
              sx={{
                fontWeight: 900,
                color: 'white',
                textDecoration: 'underline',
              }}
              href="https://the.hackfoundation.org"
              target="_blank"
            >
              The Hack Foundation
            </Link>
            .
          </Box>
        </Box>
      </Box>
      <style>
        {`

        h1 {
        margin-block-start: 0em;
margin-block-end: 0em;
        }`}
      </style>
    </>
  )
}
