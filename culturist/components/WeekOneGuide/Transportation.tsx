import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import TramStopAndBusStop from '../TramStopAndBusStop';

export default function Transportation() {
  
    const intro = 
    `
    For convenient and budget-friendly transportation in Melbourne, public transit stands
    out as the optimal choice due to its affordability, accessibility, and frequent service. To ensure a smooth experience,
    we will introduce the PTV system.
    `
    const introptv =
    `Public Transport Victoria (PTV) serves as Melbourne's comprehensive transportation system,
    encompassing an extensive network of trains, trams, and buses that span the entire Victoria region. PTV stands
    as your top choice for affordable, convenient, and frequent transportation, ensuring accessibility to your desired
    destinations.
    `
    const resources = [
        { 
            title: `PTV App`,
            description: 
            `The PTV app offers user-friendly functionality to help oyu plan your trips with public transportation efficiently. 
            The app allows you to instantly recharge your Myki card, access real-time travel updates, protect your Myki balance, and much more. 
            The PTV app streamlines journey planning and simplifies Myki management, ensuring a rich experience.`,
            links: [
                { 
                    name: `apple`,
                    link: `https://apps.apple.com/au/app/public-transport-victoria-app/id318696180`,
                    image: `/images/trans/apple.png`
                },
                { 
                    name: `google`,
                    link: `https://play.google.com/store/apps/details?id=au.gov.vic.ptv&hl=en_AU&gl=US&pli=1`,
                    image: `/images/trans/google.png`
                }
            ]
        }
    ]

    return (
        <Container>
            <Box component="div" className="uv-flex" sx={{ my: 2}}>
                <Typography className='uv-text'>
                    {intro}
                </Typography>
            </Box>
            <Box component="div" className="uv-flex" sx={{ my: 2}}>
                <Typography className='uv-text'>
                    {introptv}
                </Typography>
            </Box>
            <Grid container>
                {resources.map((resource, index) => (
                    <Grid item sm={12} md={12} key={index}>
                        <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                            <Typography className="uv-title" mx={1.5}>
                                {resource.title}
                            </Typography>
                            <CardContent>
                            <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                                {resource.description}
                            </Typography>
                            </CardContent>
                            <Box component='div' className='uv-flex'>
                                {resource.links?.map((link, index) => (
                                    <a href={link.link} key={index} target='_blank' className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '300px'}}>
                                        <Image src={link.image} alt='ptv app' key={index} width={link.name == 'apple' ? 850 : 350} height={200} />
                                    </a>
                                ))}
                            </Box>
                        </Card>
                    </Grid>
                ))}               
            </Grid>
            {/* <Grid container>
                <Grid item sm={12} md={12}>
                    <Card sx={{ minHeight: 100, m: 1 }}>
                        <TramStopAndBusStop />
                    </Card>
                </Grid>
            </Grid> */}
        </Container>
    )
}
