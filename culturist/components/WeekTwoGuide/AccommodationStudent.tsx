import { Box, Card, CardContent, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

export default function AccommodationStudent() {

    const intro =`
    Student accomodation is a great way to learn the art of sharing your fridge space! 
    It is a good place to meet new people and make friends, which is a great head start. 
    Most student accomodations offer a flat weekly fee while some accomodations require tenants to pay additional electricity, gas and water fees.
    `

    const campusTitle = `On-campus Student Accommodation`
    const campusDesc = `
    Most universities offer on-campus student accomodations. 
    Depending on the university you are enrolled in, we can offer resources tailored to your specific institution.`
    const campusAction = `Click on any university below to learn more about their on-campus accommodations`

    const campus = [
        {name: 'Monash University', image: '/images/accom/monash.jpg', url: 'https://www.monash.edu/accommodation/accommodation/on-campus-options'},
        {name: 'Deakin University', image: '/images/accom/deakin.png', url: 'https://www.deakin.edu.au/accommodation  '},
        {name: 'RMIT University', image: '/images/accom/rmit.png', url: 'https://www.rmit.edu.au/students/student-life/accommodation'},
        {name: 'La Trobe University', image: '/images/accom/la_trobe.png', url: 'https://www.latrobe.edu.au/accommodation'},
        {name: 'Swinburne University of Technology', image: '/images/accom/swinburne.png', url: 'https://www.swinburne.edu.au/life-at-swinburne/student-support-services/accommodation/on-campus-accommodation/'},
        {name: 'Australian Catholic University', image: '/images/accom/acu.png', url: 'https://www.acu.edu.au/student-life/student-accommodation/melbourne-accommodation'},
        {name: 'Federation University AUstralia', image: '/images/accom/fua.png', url: 'https://federation.edu.au/about-us/facilities-and-services/commercial-services/fedliving/accommodation-options'},
        {name: 'Victoria University', image: '/images/accom/vic_u.png', url: 'https://www.vu.edu.au/current-students/campus-life/housing-accommodation'},
        {name: 'Unviersity of Melbourne', image: '/images/accom/mel.png', url: 'https://study.unimelb.edu.au/accommodation'}
    ]

    const offCampTitle = `Off-Campus student accommodation`
    const offCampDesc = 
    `Off-campus student accommodation provides college and university students with housing options located near their campus, 
    offering independence and convenience with shared apartments and student-oriented amenities.`
    const offCampAction = `Click on any student lodge provider below to learn more about their services`

    const offCampus = [
        {name: 'scape', image: '/images/accom/scape.png', url: 'https://www.scape.com.au/melbourne/'},
        {name: 'uniLodge', image: '/images/accom/unilodge.png', url: 'https://www.unilodge.com.au/'},
        {name: 'studHousing', image: '/images/accom/studHousing.png', url: 'https://sha.com.au/'},
        {name: 'yugo', image: '/images/accom/yugo.png', url: 'https://yugo.com/en-gb/global/australia'},
    ]

  return (
    <Grid container>
        <Box component="div" className="uv-flex" sx={{ my: 2}}>
            <Typography className='uv-text'>
                {intro}
            </Typography>
        </Box>
        {/* on-campus accommodation */}
        <Grid container>
            <Grid item sm={12} md={12}>
                <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                    <Typography className="uv-title" mx={1.5}>
                        {campusTitle}
                    </Typography>
                    <CardContent>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                        {campusDesc}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                        <i><b>{campusAction}</b></i>
                    </Typography>
                    <Grid container>
                    {campus.map((uni, index) => (
                        <Grid item sm={12} md={2} key={index}>
                            <a href={uni.url} target='_blank' className="transition duration-500 transform hover:scale-105">
                                <Image src={uni.image} alt={uni.name} width={100} height={60} key={index}></Image>
                            </a>
                        </Grid>
                    ))}
                    </Grid>
                    </CardContent>
                </Card>
            </Grid>   
        </Grid>
        {/* off-campus student accommodation */}
        <Grid container>
            <Grid item sm={12} md={12}>
                <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                    <Typography className="uv-title" mx={1.5}>
                        {offCampTitle}
                    </Typography>
                    <CardContent>
                    <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                        {offCampDesc}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1.5 }}>
                        <i><b>{offCampAction}</b></i>
                    </Typography>
                    
                    <Grid container>
                    {offCampus.map((uni, index) => (
                        <Grid item sm={12} md={2} key={index}>
                            <a href={uni.url} target='_blank' className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                                <Image src={uni.image} alt={uni.name} width={100} height={100} key={index}></Image>
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
