import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export default function TFN() {

    const intro =
    `
    A Tax File Number (TFN) is a unique identification number issued by the Australian government's tax office (ATO). 
    It is used for tax-related purposes and is essential for various financial transactions and obligations in Australia.
    `
    const useTFNTitle = `Uses of a Tax File Number (TFN)`
    const usesOfTFN = [
        {step: `Income Reporting: `, info: `It is required when filing an income tax return in Australia.`},
        {step: `Employment: `, info: `Providing your TFN to your employer ensures correct taxation on your income.`},
        {step: `Access to Government Services: `, info: `It may be needed when applying for government benefits or assistance programs.`},
        {step: `Banking: `, info: `Most banks and financial institutions may ask for your TFN when opening a bank account.`}
    ]

    const getTitle = `How to Obtain a TFN`

    const getTFNOnline = {    
        title: `Online Application (Recommended)`,
        steps: [
            {step: `Visit the Australian Taxation Office (ATO) website`, link: `https://www.ato.gov.au/`},
            {step: `Locate the TFN application section.`, link: ``},
            {step: `Complete the online application form.`, link: ``}
        ]
    }

    const getTFNPerson = {
        title: `In-person Application`,
        steps: [
            {step: `Visit a nearby ATO office.`, link:  `https://www.ato.gov.au/About-ATO/Contact-us/In-person/`},
            {step: `Request a TFN application form.`, link: ``},
            {step: `Fill out the form and submit it in person.`, link: ``}
        ]
    }

    const reqTitle = `Requirements for a TFN Application`
    const description = `To apply for a TFN, you must meet the following requirements:`

    return (
        <Grid container>
            <Box component="div" className="uv-flex" sx={{ my: 2}}>
                <Typography className='uv-text'>
                    {intro}
                </Typography>
            </Box>
            <Grid container>
                {/* uses of TFN */}
                <Grid item sm={12} md={12}>
                    <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                        <Typography className="uv-title" mx={1.5}>
                            {useTFNTitle}
                        </Typography>
                        <CardContent>
                        <Typography variant="body1" sx={{ mb: 1.5,}}>
                            A TFN is used for the following purposes:
                        </Typography>
                        <Box component='ul'>
                            {usesOfTFN.map((use, index) => (
                                <li key={index}><b>{use.step}</b> {use.info}</li>
                            ))}
                        </Box>
                        </CardContent>
                    </Card>
                </Grid>
                {/* getting a TFN */}
                <Grid item sm={12} md={12}>
                    <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                        <Typography className="uv-title" mx={1.5}>
                            {getTitle}
                        </Typography>
                        <CardContent>
                        <Typography variant="body1" sx={{ mb: 1.5}}>
                            You can ontain a TFN by following these steps:
                        </Typography>
                            {/* Online */}
                            <Box component='div'>
                                <Typography sx={{ fontWeight: 'bold', color: 'black', fontSize: '20px'}}>
                                    {getTFNOnline.title}
                                </Typography>
                                {getTFNOnline.steps.map((use, index) => (
                                    <li key={index}>
                                        <b>
                                            {
                                            use.link? <a href={use.link} target='_blank'><u>{use.step}</u></a> : use.step
                                            }
                                        </b>
                                    </li>
                                ))}
                            </Box>
                            {/* offline */}
                            <Box component='div' mt={2}>
                                <Typography sx={{ fontWeight: 'bold', color: 'black', fontSize: '20px'}}>{getTFNPerson.title}</Typography>
                                    {getTFNPerson.steps.map((use, index) => (
                                        <li key={index}>
                                            <b>
                                                {
                                                use.link? <a href={use.link} target='_blank'><u>{use.step}</u></a> : use.step
                                                }
                                            </b>
                                        </li>
                                    ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid> 
                {/* Requirements for TFN */}
                <Grid item sm={12} md={12}>
                    <Card sx={{ minHeight: 100, m: 1 }} className='uv-card-bg'>
                        <Typography className="uv-title" mx={1.5}>
                            {reqTitle}
                        </Typography>
                        <CardContent>
                        <Typography variant="body1" sx={{ mb: 1.5,}}>
                            {description}
                        </Typography>
                        <Box component='div'>
                            <p>
                                <b>1. Physical Presence in Australia</b>
                                <li>You must be in Australia to apply</li>
                            </p>
                            <p>
                                <b>2. Visa Status</b>
                                <li>Some temporary visa holders are eligible for a TFN, especially if you are a foreign resident for tax purposes.</li>
                            </p>
                            <p>
                                <b>3. Identification Documents</b>
                                <li>Passport or Australian driver&apos;s licence for identification</li>
                                <li>Additional documents may be required based on your specific circumstances.</li>
                            </p>
                                
                        </Box>
                        </CardContent>
                    </Card>
                </Grid>             
            </Grid>
        </Grid>
    )
}
