import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export default function HomePointInterest() {

    const title = `-Great Places to Visit-`
    const poiTitle = `Explore Melbourne`
    const poiDescription = `Discover Melbourne, Australia's treasures! 
    From the iconic Fed Square to the breathtaking Great Ocean Road, there's an adventure waiting for you at every turn. 
    Dive into art, culture, and natural wonders unlike any other. Start exploring today!`

    return (
        
        <Container sx={{ my: 10}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <Typography className='uv-title-secondary'>
                    {title}
                </Typography>
            </Box>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={12} md={6} >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                        <Image src="/images/home/poi1.jpeg" alt="point of interest 1" width={600} height={350} />
                        </Grid>
                    </Grid>                 
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ backgroundColor: '#EBDAC8', height: 250, my: 5 }}>
                        <CardContent>
                            <Typography className='uv-title' gutterBottom>
                                {poiTitle}
                            </Typography>
                            <Typography>
                                {poiDescription}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}>
                                <Button href='/points' className='uv-btn-primary'>Explore</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
       
  )
}