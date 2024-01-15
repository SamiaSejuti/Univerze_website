'use client'
import React from 'react';
import HomeHero from '@/components/HomeHero';
// import HomeText1 from '@/components/HomeText1';
import { motion, useScroll, useSpring } from 'framer-motion';
// import { useParallax, Image } from '../../culturist/components/ParallaxAnimation';
import HomeCardEvents from '@/components/HomeCardEvents';
import HomecardTrivia from '@/components/HomeCardTrivia';
import HomeCardResources from '@/components/HomeCardResources';
import Grid from '@mui/material/Grid';
import HomePointInterest from '@/components/HomePointInterest';

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });

  return (
    <Grid container>
        <HomeHero />
        <HomeCardEvents />
        <HomecardTrivia />
        <HomePointInterest />
    </Grid>
  );
}