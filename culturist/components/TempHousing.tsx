import { Box, Typography } from '@mui/material'
import React from 'react'
import Map from '../components/Map/Map'

export function TempHousing() {

  const introduction = 
  `Securing temporary accommodation is an important step in ensuring a smooth transition to a new environment.
  It servers as a base to explore your surroundings and focus on finding more permanent housing. 
  `
  const preBook = 
  `To reduce the stress of travelling, we recommend booking temporary accommodation in advance of your arrival.
  We will go through your temporary accommodation options to find what is best suited to your situation.
  `

  return (
    <Box>
      <Typography className='uv-flex'>
        {introduction}
      </Typography>
      <Typography className='uv-flex'>
        {preBook}
      </Typography>
      <Box component='div' className='uv-flex'>
        <Map />
      </Box>
    </Box>
  )
}