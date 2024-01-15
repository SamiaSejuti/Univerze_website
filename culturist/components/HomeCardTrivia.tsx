import React from 'react';
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

export default function HomecardTrivia() {

    const title = `-Learn To Speak Like a True Australian-`
    const callToAction = `Get Up to Speed with Aussie Slang`
    const description = `Play an interactive trivia game that teaches you Australian slang, pop icons, and more!`

    return (
      
        <Grid container sx={{ background: '#EBDAC8', width: '100%'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', mt: 3}}>
            <Typography className='uv-title-secondary'>
                {title}
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Image src='/images/home/home_trivia.jpg' alt="trivia" width={1200} height={200} />
        </Box>
        <Grid container my={4}>
            {/* <Grid item sm={12} md={6} >
                <Typography className='uv-title-secondary'sx={{ pl: 14 }}>
                    {callToAction}
                </Typography>
            </Grid> */}
            <Grid item sm={12} md={12}>
                <Grid container>
                    <Grid item sm={12} md={12}>
                        <Typography className='uv-flex uv-text'>
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button href='/trivia' className='uv-btn-primary'>Play</Button>
                        </Box>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
       </Grid> 
      
    );
};
