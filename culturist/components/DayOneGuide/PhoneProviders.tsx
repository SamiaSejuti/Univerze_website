import { Box, Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

export function PhoneProviders() {

    const majorProviders = `When it comes to choosing a mobile network provider in Australia, you have three major options to consider: Telstra, Optus, and Vodafone. 
    These providers have different plans and services to suit your needs. Click on any provider below to learn more.`
    const telstra = `Telstra offers the best 4G/5G network coverage in Australia. However, they are more expensive than their competitors.`
    const vodafone = `Vodafone provides a wide range of prepaid options with flexible data packages.`
    const optus = `Optus offers both 4G and 5G options, with international minutes included.`

    return (
        <Box>
            <Box component="div" className="uv-flex" sx={{ my: 2}}>
                <Typography className='uv-text'>
                    {majorProviders}
                </Typography>
            </Box>
            <Grid container className='uv-flex' spacing={2}>
                <Grid item sm={12} md={3}>
                    <a href="https://shorturl.at/nEIQ1" target="_blank">
                        <Card sx={{ height: 200}} className="transition duration-500 transform hover:scale-105 uv-card-bg">
                            <CardMedia className='uv-flex' sx={{ my: 2, height: '50px'}}>
                                <Image src="/images/sim/telstra.png" alt='telstra' width={100} height={75} />
                            </CardMedia>
                            <CardContent>
                            <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }} color="text.secondary">
                                {telstra}
                            </Typography>
                            </CardContent>
                        </Card>
                    </a>
                </Grid>
                <Grid item sm={12} md={3}>
                    <a href="https://www.vodafone.com.au/students" target="_blank">
                        <Card sx={{ height: 200 }} className="transition duration-500 transform hover:scale-105 uv-card-bg">
                            <CardMedia className='uv-flex' sx={{ my: 2, height: '50px'}}>
                                <Image src="/images/sim/vodaphn.png" alt='vodaphone' width={100} height={75} />
                            </CardMedia>
                            <CardContent>
                            <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }} color="text.secondary">
                                {vodafone}
                            </Typography>
                            </CardContent>
                        </Card>
                    </a>
                </Grid>
                <Grid item sm={12} md={3}>
                    <a href="https://www.optus.com.au/mobile/plans/shop" target="_blank">
                        <Card sx={{ height: 200 }} className="transition duration-500 transform hover:scale-105 uv-card-bg">
                            <CardMedia className='uv-flex' sx={{ my: 2, height: '50px'}}>
                                <Image src="/images/sim/optus.png" alt='optus' width={100} height={75} />
                            </CardMedia>
                            <CardContent>
                            <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }} color="text.secondary">
                                {optus}
                            </Typography>
                            </CardContent>
                        </Card>
                    </a>
                </Grid>
            </Grid>
        </Box>
    )
}