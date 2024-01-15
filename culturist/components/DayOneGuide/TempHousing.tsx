import { Box, Button, Card, CardContent, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import Map from '../Map/Map'
import TempAccom from '../TempAccom'

export function TempHousing() {

  const introduction = 
  `Securing temporary accommodation is an important step in ensuring a smooth transition to a new environment.
  It servers as a base to explore your surroundings and focus on finding more permanent housing. 
  `
  const preBook = 
  `To reduce the stress of travelling, we recommend booking temporary accommodation in advance of your arrival.
  We will go through your temporary accommodation options to find what is best suited to your situation.
  `
  const tempHousing = [
      {
        name: 'Hostels', 
        description: `If you're seeking budget-friendly, short-term accommodation, hostels are a great choice. 
        They offer a mix of private rooms and dormitories, providing a social atmosphere for international students. 
        `,
        links: [
          
        ]
        
      },
      {
        name: 'Discounted Hotel Rates', 
        description: `For those looking for lower-cost hotel options, discounted hotels might be your best bet.
        `,
        links: [
          {link_name: 'agora', link_url: 'https://www.agoda.com/en-au/'},
          {link_name: 'wotif', link_url: 'https://www.wotif.com'},
          {link_name: 'lastminute', link_url: 'https://www.lastminute.com.au'}
        ]
        
      },
      {
        name: 'Homestay', 
        description: `Experience the warmth of local hospitality by opting for a homestay. 
        This involves living with a host family, providing you with a support network in a new country. 
        You'll have your own furnished bedroom and most meals will be provided.
        `,
        links: [
          {link_name: 'AHN', link_url: 'https://www.homestaynetwork.org'}
        ]
        
      },
  ]

  return (
    <Box>
      <Typography className='uv-flex'>
        {introduction}
      </Typography>
      <Typography className='uv-flex'>
        {preBook}
      </Typography>
      <Grid container>
        {tempHousing.map((temp, index) => (
          <Grid item sm={12} md={12} key={index}>
            <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                <Typography className="uv-title" mx={1.5}>
                  {temp.name}
                </Typography>
                <CardContent>
                <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                    {temp.description}
                </Typography>
                <Box component='div'>
                  <Grid container key={index} spacing={2} display='flex'>
                    {temp.links?.map((link, index) => (
                        <Grid item sm={12} md={3} key={index}>
                          <Button className='uv-btn-primary'>
                            <Link target="_blank" href={link.link_url} rel="noopener">
                              {link.link_name}
                            </Link>
                          </Button>
                        </Grid>
                    ))}
                    </Grid>
                </Box>
                </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid container>
            <Grid item sm={12} md={12}>
                <Card sx={{ minHeight: 100, m: 1 }}>
                    <TempAccom />
                </Card>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}