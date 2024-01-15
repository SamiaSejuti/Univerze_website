import React from 'react'
import { ScrollDownButton } from './ScrollDownButton'
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import Link from 'next/link';

export default function HomeHero() {
  const title = `Welcome to Univerze, where you can enhance your experience as an international students in Melbourne`
  const introduction = 
  <>
 Univerze helps <span  style={{ color: '#E2A329' }}>international students</span> in Melbourne settle quickly
  so you can focus on your studies. Engage with our guides to help you settle quickly so you can begin classes with confidence
  </>


  return (
    
      <Grid container sx={{ background: '#EBDAC8', height: '100vh', width: '100%'}}>
        <Grid item xs={12} sm={12} md={12} m={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography className='uv-title' sx={{ maxWidth: '1000px', mt: 7}}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography className='uv-text' sx={{ maxWidth: '1000px', mt: 1}}>
              {introduction}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Grid item xs={12} sm={12} md={12} my={2}> */}
              <Button className='uv-btn-primary-lg' sx={{ mt: 4}}>
                <Link href='/resources'>
                  Start Your Journey Now
                </Link> 
              </Button>
            {/* </Grid> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} m={4} pb={5}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image src="/images/home/home_hero.jpg" alt='home hero' width={1200} height={200} className='uv-home-img' />
          </Box>
          
        </Grid>
        
      </Grid>
    
  )
}

