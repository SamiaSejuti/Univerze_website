import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import FlightLandIcon from '@mui/icons-material/FlightLand';


export default function SupportServices() {

  const pageTitle = `Welcome to your Student Survival Kit`
  const description = `Wondering about what to do when you first land? Follow our step-by-step guides on how to plan and manage the logistics of settling in Melbourne.`

  const dayOne = `Hit the ground running! Learn how to connect your phone and find a place to rest temporarily.`
  const weekOne = `After settling into your temporary accommodation, it's tiem to secure financing and transportation`
  const weekTwo = `It's time to find a home and acquire your Tax File Number.`

  return (
    <main>
      {/* Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '105%', mt: 10}}>
        <Box sx={{ width: '600px'}}>
          <Typography className='uv-title' sx={{m: 2}}>
              {pageTitle}
          </Typography>
        </Box>
        
      </Box>
      {/* Page description */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '110%', my: 2}}>
        <Box sx={{ width: '1200px'}}>
          <Typography className='uv-text' sx={{m: 2}}>
              {description}
          </Typography>
        </Box>
      </Box>
      {/* Guides */}
      <Grid container m={3} className='uv-flex'>
        {/* day one guide */}
        <Grid item sm={12} md={2} m={2}>
          <Card sx={{ backgroundColor: 'indianred', height: 275 }} className='transition duration-500 transform hover:scale-105'>
           <Link href="/resources/first">
              <CardMedia className='uv-flex' sx={{ my: 2}}>
                {/* <FlightLandIcon sx={{ fontSize: '50px'}} /> */}
                <Image src="/images/landing/resources/calendar_6375501.png" alt='Day 1' width={80} height={150} />
              </CardMedia>
              <Box className='uv-flex'>
                <Typography className='uv-title-resource'>
                  Day 1 Guide
                </Typography>
              </Box>
              <CardContent className='uv-flex'>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {dayOne}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
        {/* week 1 guide */}
        <Grid item sm={12} md={2} m={2}>
          <Card sx={{ backgroundColor: 'lightyellow', height: 275 }} className='transition duration-500 transform hover:scale-105'>
            <Link href="/resources/second">
              <CardMedia className='uv-flex' sx={{ my: 2}}>
                {/* <FlightLandIcon sx={{ fontSize: '50px'}} /> */}
                <Image src="/images/landing/resources/calendar_2773340.png" alt='Day 1' width={80} height={150} />
              </CardMedia>
              <Box className='uv-flex'>
                <Typography className='uv-title-resource'>
                  Week 1 Guide
                </Typography>
              </Box>
              <CardContent className='uv-flex'>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {weekOne}
                </Typography>
            </CardContent>
            </Link>
          </Card>
        </Grid>
        {/* week 2 guide */}
        <Grid item sm={12} md={2} m={2}>
          <Card sx={{ backgroundColor: 'limegreen', height: 275 }} className='transition duration-500 transform hover:scale-105'>
            <Link href="/resources/third">
              <CardMedia className='uv-flex' sx={{ my: 2}}>
                {/* <FlightLandIcon sx={{ fontSize: '50px'}} /> */}
                <Image src="/images/landing/resources/calendars_183259.png" alt='Day 1' width={80} height={150} />
              </CardMedia>
              <Box className='uv-flex'>
                <Typography className='uv-title-resource'>
                  Following Weeks
                </Typography>
              </Box>
              <CardContent className='uv-flex'>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {weekTwo}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      </Grid>
      <Box component="div" className='uv-flex'>
        <Image src="/images/home/home_hero2.jpg" alt="resource landing" width={1400} height={200} />
      </Box>
    </main>
  );
}

