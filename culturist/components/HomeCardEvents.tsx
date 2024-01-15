import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';


export default function HomeCardEvent() {
 
    const title = `-Did You Know?-`
    const eventsTitle = `Events in Melbourne`
    const eventsDescription = `With the title of one of the most liveable cities in the world,
    Melbourne has countless events, festivals, live music, and more. Find out what's happening and get involved!`

    return (
        
        <Container sx={{ my: 6}}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <Typography className='uv-title-secondary'>
                    {title}
                </Typography>
            </Box>
            <Grid container spacing={2} mt= {2}>
                <Grid item xs={12} sm={12} md={6} >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                        <Image src="/images/home/home_discover.jpg" alt="Events 1" width={600} height={350} />
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{backgroundColor: '#EBDAC8', height: 225, my: 5 }}>
                        <CardContent>
                            <Typography className='uv-title' gutterBottom>
                                {eventsTitle}
                            </Typography>
                            <Typography>
                                {eventsDescription}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}>
                                <a href="/events">
                                    <Button className='uv-btn-primary'>Discover</Button>
                                </a>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}    
// import React, { useState, useEffect } from 'react';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
// } from "@material-tailwind/react";
// import Link from 'next/link';
// import Button from '@mui/material/Button';
// import Image from 'next/image';

// const HomeCardEvent: React.FC = () => {
//     const [imageUrl, setImageUrl] = useState("/images/con1.jpg");

//     useEffect(() => {
//         const images = [
//             "/images/con1.jpg",
//             "/images/opera_colord2.jpg",
//             "/images/con3.jpg",
//             "/images/colored_cloth.jpg",
//             "/images/con5.jpg",
//             "/images/con6.jpg",
//             "/images/con7.jpg",
//             "/images/con8.jpg"
//         ];

//         let index = 0;
//         const intervalId = setInterval(() => {
//             index = (index + 1) % images.length;
//             setImageUrl(images[index]);
//         }, 2000);

//         return () => clearInterval(intervalId); 
//     }, []);

//     return (
//         <div className="mt-12" style={{ height: '100vh' }}>
//             <div className="text-center mb-4">
//             <p   className="landing_head">
//                 Find upcoming events in Melbourne
//                 </p>
//             </div>
//             <div className="flex flex-col md:flex-row">
//                 {/* Image Card Component */}
//                 <Card className="bg-#e7e9cd w-full md:w-1/2 rounded-lg overflow-hidden" style={{ marginLeft: '20px', marginBottom:'20px' }}>
//                     <CardHeader
//                         shadow={false}
//                         floated={false}
//                         className="p-0"
//                         style={{ height: '500px' }}
//                     >
//                         <Image fill={true} src={imageUrl} alt="card-image"  />
//                     </CardHeader>
//                 </Card>
    
//                 {/* Text Card Component */}
//                 <Card className="bg-#e7e9cd w-full md:w-1/2 rounded-lg flex flex-col justify-center pl-4">
//                     <CardBody>
                        
//                         <div style={{
//                             width: '80%',
//                             padding: '20px',
//                             border: '1px solid #ccc',
//                             borderRadius: '15px',
//                             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//                             backgroundColor: '#e5cbac'
//                           }}>
//                             <Typography variant="h4" color="gray" className="text-sm md:text-md lg:text-lg mb-8 font-normal" style={{fontSize: '20px'}}>
//                                 Experience Melbourne like never before through a calendar bursting with thrilling events
//                             </Typography>

//                             <Link href="/events">
//                             <button
//                                 type="button"
//                                 className="btn"
//                                 style={{
//                                     fontSize: '20px',
//                                     textTransform: 'none',
//                                     backgroundImage: 'linear-gradient(to right, #ef5c72, #e9bc38)',
//                                     border: 'none',
//                                     color: 'white',
//                                 }}
//                             >
//                                 Explore Now!
//                             </button>
//                         </Link>
//                         </div>
                        
                        
//                     </CardBody>
//                 </Card>
//             </div>
//         </div>
//     );
// }    
// export default HomeCardEvent;
