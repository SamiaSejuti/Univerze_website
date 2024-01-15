import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';

export default function AccommodationPrivate() {

  const intro = 
  `When it comes to private rental properties in Melbourne, we're talking spaces bigger than a kangaroo's pouch.
  The advantages of these are they are often larger spaces with multiple rooms.`
  const notice = `Tenants are typically responsible for their own utility bills such as electricity, gas, water, and internet.`
  const directions = `Click on any of the images below to learn more`
  const options = [
    {
      name: `micm`,
      url: `https://www.micm.com.au/`,
      image: `/images/accom/micm.png`
    },
    {
      name: `realestate`,
      url: `https://www.realestate.com.au/`,
      image: `/images/accom/realEstate.png`
    },
    {
      name: `raywhite`,
      url: `https://www.raywhite.com/`,
      image: `/images/accom/rayWhite.jpg`
    },
    {
      name: `domain`,
      url: `https://www.domain.com.au/`,
      image: `/images/accom/domain.png`
    },
    {
      name: `rent.com`,
      url: `https://www.rent.com.au/`,
      image: `/images/accom/rent.png`
    }
  ]

  return (
    <Grid container>
      <Box component="div" className="uv-flex" sx={{ my: 2}}>
          <Typography className='uv-text'>
              {intro}
          </Typography>
      </Box>
      <Box component="div" className="uv-flex">
          <Typography sx={{ color: 'red'}}>
            <InfoIcon /> <i>{notice}</i>
          </Typography>
      </Box>
      
      <Grid container>
      <Box component="div" className="uv-flex">
          <Typography className='uv-text'>
            {directions}
          </Typography>
      </Box>
        <Grid item sm={12} md={12}>
          <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
              <CardContent>
              <Grid container>
                {options.map((option, index) => (
                  <Grid item sm={12} md={2} key={index}>
                      <a href={option.url} target='_blank'>
                          <Image src={option.image} alt={option.name} width={100} height={100} key={index} className="transition duration-500 transform hover:scale-105"></Image>
                      </a>
                  </Grid>
                ))}
              </Grid>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
      
    </Grid>
  )
}
