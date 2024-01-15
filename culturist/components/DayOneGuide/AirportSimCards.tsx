import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import InfoIcon from '@mui/icons-material/Info';

export function AirportSimCards() {

  const introduction = 
  `The easiest way to get a local SIM card is to purchase one on arrival at Tullamarine. Luckily, there are stores available for all 3 major providers.
  If purchasing a sim card from the airport, we recommend purchasing from a provider's official retail store.`
  const intro2 = 
  `Before purchasing a SIM card, ensure that your phone is unlocked and compatible with Australian networks. 
  If your phone is locked to a specific carrier in your home country, contact them to request an unlock.
  `
  const telstra = {
    location: 'On the left-hand side of the arrival hall',
    info: 'Services available in Chinese and Vietnamese. Sells prepaid SIM cards from Telstra and Boost.',
    hours: 'Open from 06:00 am to 02:00 pm and from 5:30 pm to midnight',
    notice: 'The Welcome Center is NOT an official Telstra retail store. It is simply a reseller.'
  }
  const vodafone = {
    location: 'On the right-hand side of the arrival hall',
    info: 'Offers a variety of prepaid SIM cards with different data packages',
    hours: 'Open from 6:30 am to 11:30 pm',
    notice: ''
  }
  const optus = {
    location: 'On the right-hand side of the arrival hall',
    info: 'Offers 4G and 5G prepaid SIM card options with international minutes included.',
    hours: 'Open from 6:30 am to 11:30 pm',
    notice: ''
  }

  return (
    <Box>
      <Box component='div' className='uv-flex uv-text'>
        <Typography>
          {introduction}
        </Typography>
      </Box>
      <Box component='div' className='uv-flex uv-text' mt={2}>
        <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', color: 'green', fontSize: '0.8rem'}}>
          {intro2}
        </Typography>
      </Box>
      <Grid container className='uv-flex'>
          <Grid item sm={12} md={12}>
              <Card sx={{ minHeight: 200, m: 1 }} className='uv-card-bg'>
                  <CardMedia className='uv-flex' sx={{ height: '50px'}}>
                      <Image src="/images/sim/telstra.png" alt='telstra' width={100} height={75} />
                  </CardMedia>
                  <CardContent>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                      <b>Location:</b> {telstra.location}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                      <b>Details:</b> {telstra.info}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                      <b>Hours:</b> {telstra.hours}
                  </Typography>
                  <Typography sx={{ color: 'red', fontSize: '0.7rem'}}>
                      <InfoIcon /> <i>{telstra.notice}</i>
                  </Typography>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item sm={12} md={12}>
              <Card sx={{ minHeight: 200, m: 1 }} className='uv-card-bg'>
                  <CardMedia className='uv-flex' sx={{height: '50px'}}>
                      <Image src="/images/sim/vodaphn.png" alt='vodaphone' width={100} height={75} />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                    <b>Location:</b> {vodafone.location}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                        <b>Details:</b> {vodafone.info}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                        <b>Hours:</b> {vodafone.hours}
                    </Typography>
                    {/* <Typography className='uv-title-resource' sx={{ color: 'red'}}>
                        <i>Notice: {vodafone.notice}</i>
                    </Typography> */}
                  </CardContent>
              </Card>
          </Grid>
          <Grid item sm={12} md={12}>
              <Card sx={{ minHeight: 200, m: 1 }} className='uv-card-bg'>
                  <CardMedia className='uv-flex' sx={{height: '50px'}}>
                      <Image src="/images/sim/optus.png" alt='optus' width={100} height={75} />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                      <b>Location:</b> {optus.location}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                          <b>Details:</b> {optus.info}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                          <b>Hours:</b> {optus.hours}
                      </Typography>
                      {/* <Typography className='uv-title-resource' sx={{ color: 'red'}}>
                          <i>Notice: {optus.notice}</i>
                    </Typography> */}
                  </CardContent>
              </Card>
          </Grid>
      </Grid>
    </Box>
  )
}
