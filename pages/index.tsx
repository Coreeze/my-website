import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Title, Button, Grid, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingBottom="40px"
      gridGap="2rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/me.jpg"
          alt="Cristian Lenta"
          width="120px"
          height="120px"
          objectFit="cover"
          className={styles.image}
        />
        <Title>Cristian Lenta</Title>
        <Title
          fontSize="2rem"
          color="rgba(0, 0, 0, 0.6)"
          fontWeight="500"
          as="h2"
        >
          Builder. Dreamer.
        </Title>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
      <Container
        maxWidth="700px"
        gridGap="3rem"
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'black',
          borderRadius: '15px',
        }}
      >
        <Container>
          <Text textAlign="center" style={{ color: 'white', padding: '5px' }}>
            I&apos;m an early stage Web 3.0 Founder & Software Developer. All in
            on blockchain.
          </Text>
          <Container
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'black',
              borderRadius: '15px',
            }}
          >
            <Link href="https://www.lmu.de/de/index.html">
              <Image
                src="/lmu.png"
                alt="Cristian Lenta"
                width="100%"
                height="120px"
                objectFit="contain"
                className={styles.logo}
              />
            </Link>
            <Link href="https://www.unternehmertum.de/en/services/xplore">
              <Image
                src="/xplore.png"
                alt="Cristian Lenta"
                width="100%"
                height="120px"
                objectFit="contain"
                className={styles.logo}
              />
            </Link>
            <Link href="https://direct.mit.edu/artl">
              <Image
                src="/mit.png"
                alt="Cristian Lenta"
                width="100%"
                height="120px"
                objectFit="contain"
                className={styles.logo}
              />
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
        <Title fontSize="3rem" as="h3">
          Get in touch
        </Title>
        <Text textAlign="center">Got a project idea? Let&apos;s talk!</Text>
        <Grid
          gridGap="2rem"
          marginTop="2rem"
          gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
          justifyItems="stretch"
          alignItems="stretch"
        >
          <Link href="mailto:lentacris@gmail.com">
            <Button width="100%">
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.5,
                }}
              >
                👋
              </motion.span>{' '}
              Say hello
            </Button>
          </Link>
          <Link
            target="_blank"
            href="https://calendly.com/cristianlenta/intro-meeting"
          >
            <Button
              width="100%"
              backgroundColor="rgb(226,232,240)"
              color="black"
              variant="secondary"
            >
              Schedule a meeting
            </Button>
          </Link>
        </Grid>
      </Container>
    </Container>
  </Container>
);

export default Home;
