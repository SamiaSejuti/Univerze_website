import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export default function Bonds() {

    const title = `Bond Payments`
    const intro = `
    As part of signing your rental agreement, you will also have to pay a bond fee to Residential Tenancies Bond Authority (RTBA).
    `
    const intro2 = `
    A bond is a security deposit paid at the start of your tenancy. The bond covers any damages and any cost the rental providers may have to pay when you move out.
    `
    const intro3 = `
    When moving out, ensure thorough checking of the condition report to avoid fee deduction from your bond at the end of the lease.
    `
    const action = `For more information on bonds, click on the sources below`

    const sources = [
        {
            name: `RTBA`,
            url: `https://rentalbonds.vic.gov.au/`,
            image: `/images/accom/rtba.jpg`
        },
        {
            name: `Consumers Victoria`,
            url: `https://www.consumer.vic.gov.au/`,
            image: `/images/accom/consumer.png`
        },
        {
            name: `Tenants Victoria`,
            url: `https://tenantsvic.org.au/`,
            image: `/images/accom/tenants.png`
        }
    ]

  return (
    <Container>
        <Box component="div" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro}
            </Typography>
        </Box>
        <Box component="div" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro2}
            </Typography>
        </Box>
        <Box component="div" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro3}
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
                        <p>The basic steps to lodging your bond are as follows:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '80px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>1</div>
                            <div className='textBody' style={{ marginTop: '20px' }}>Complete the bond lodgement form from RTBA</div>
                            </div>
                            {/* Step 2 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>2</div>
                            <div className='textBody' style={{ marginTop: '20px' }}>Sign the bond form and receive a copy of the bond</div>
                            </div>
                            {/* Step 3 */}
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>3</div>
                            <div className='textBody' style={{ marginTop: '20px' }}>Lodge your bond along with the payment within 10 business days</div>
                            </div>
                        </div>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                        <i><b>{action}</b></i>
                    </Typography>
                    <Grid container spacing={1}>
                        {sources.map((source, index) => (
                            <Grid item sm={12} md={4} key={index}>
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
