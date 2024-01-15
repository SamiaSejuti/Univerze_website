import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Myki() {

  const intro = `Myki is a card that allows your to ride on busses, trams, trains, or anything else managed by PTV. 
  After creating your PTV account, you are able to register up to 10 Myki cards on it.`

  const intro2 = 
  `
  With a registered Myki, you can check your balance, top-up, purchase a new Myki, configure notifications for Myki expiration, and much more. 
  These are some of the locations you can purchase a Myki.
  `
  const resource = {
    title: `Purchasing a Myki`,
    description: `As an international student, you can benefit from half-price fares by applying for a
    Myki concession card. To check your eligibility with your institution, `,
    purchase: [
      {}
    ]
  } 

  return (
    <Grid container>
        <Box component="div" className="uv-flex" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro}
            </Typography>
        </Box>
        <Box component="div" className="uv-flex" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro2}
            </Typography>
        </Box>
          <Grid container>
              <Grid item sm={12} md={12}>
                  <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                      <Typography className="uv-title" mx={1.5}>
                          {resource.title}
                      </Typography>
                      <CardContent>
                      <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                          {resource.description}
                          <a
                          href='https://www.ptv.vic.gov.au/tickets/myki/concessions-and-free-travel/children-and-students/tertiary-students/'
                          className="underline hover:text-blue-500 cursor-pointer"
                          target="_blank"
                          >click here.</a>
                      </Typography>
                        <Box component='div' sx={{ fontSize: '0.8rem', fontWeight: 'bold'}}>
                          <p>Concession cards are offered for 3 durations: </p>
                          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p>1. 90 day pass at $270</p>
                            <p>2. 180 day pass for $540</p>
                            <p>3. Yearly pass at $975</p>
                          </div>
                        </Box>
                        <Box component='div' sx={{ fontSize: '0.8rem', fontWeight: 'bold', mt: 2}}>
                          <p>To apply:</p>
                          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p>1. Check if your institution is part of the international student travel pass program</p>
                            <p>2. Talk to a university representative to get a student travel pass code</p>
                            <p>3. Register your details on the {' '}
                              <a
                                href="https://www.ptv.vic.gov.au/tickets/myki/concessions-and-free-travel/children-and-students/international-students/"
                                className="underline hover:text-blue-500 cursor-pointer"
                                target="_blank"
                              >
                                International Student Travel Pass
                              </a> website
                            </p>
                            <p>4. Buy the international student travel pass</p>
                          </div>
                        </Box>
                      </CardContent>
                  </Card>
              </Grid>              
            </Grid>
    </Grid>
  )
}
