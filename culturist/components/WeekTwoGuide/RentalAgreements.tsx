import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export default function RentalAgreements() {

    const intro = `So you've uncovered the perfect nest for yourself!
    Now, it's time to sign the rental agreement. It's like the sacred bond between you and the landlord, where both parties promise to play nice (well, mostly!)`

    const title = `Rental Agreements`

    const importance = `It's vital to know your rights as a consumer and renter before you sign on the dotted line. 
    Once you're locked in, surprises may lurk around the corner, and you don't want any 'Oops, I didn't sign up for that' moments`
    const action = `You can read more detailed information about rental agreements form the following sources`

    const sources = [
        {
            name: `Study Melbourne`,
            url: `https://www.studymelbourne.vic.gov.au/`,
            image: `/images/accom/studymel.png`
        },
        {
            name: `Consumer Vic`,
            url: `https://www.consumer.vic.gov.au/`,
            image: `/images/accom/consumer.png`
        }
    ]


  return (
    <Container>
        <Box component="div" className="uv-flex" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro}
            </Typography>
        </Box>
        <Grid container>
            <Grid item sm={12} md={12}>
                <Card sx={{ minHeight: 100, my: 1 }} className='uv-card-bg'>
                    <Typography className="uv-title" mx={1.5}>
                        {title}
                    </Typography>
                    <CardContent>
                    <Typography variant="body1" sx={{ mb: 1.5}}>
                        <p>The rental agreement includes the following:</p>
                        <div style={{ marginLeft: '20px' }}>
                            <ol style={{ display: 'inline-block', textAlign: 'left' }}>
                            <li>1. The amount of rent and how it will be paid</li>
                            <li>2. How any increases in rent will be calculated</li>
                            <li>3. The length and type of agreement</li>
                            <li>4. Amount of bond</li>
                            <li>5. Other conditions and rules</li>
                            <li>6. Any special terms</li>
                            </ol>
                        </div>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5}}>
                        {importance}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                        <i><b>{action}</b></i>
                    </Typography>
                    <Grid container spacing={1}>
                        {sources.map((source, index) => (
                            <Grid item sm={12} md={6} key={index}>
                                <a href={source.url} target='_blank' >
                                    <Image src={source.image} alt={source.name} width={250} height={200} key={index} className="transition duration-500 transform hover:scale-105"></Image>
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                    </CardContent>
                </Card>
            </Grid>   
        </Grid>
    </Container>
  )
}
