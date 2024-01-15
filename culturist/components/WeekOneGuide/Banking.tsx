import { Card, CardContent, Typography, Link, Container, Box, Grid, Button } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

const cardStyle = {
  marginBottom: '20px', // Add space between cards
};

const BankingOptions = () => {

  const intro = `Selecting a bank is an important step. Consider factors like accessibility, services offered, and any special offers for international students. We'll help you navigate through the options.`
  const notice = `Note: When applying for a bank account, ensure you have all necessary identification and enrollment documents ready. This will help expedite the process.`

  const banks = [
    {
      type: `Big Four Banks`,
      positives: `Numerous branches and ATMs, wide range of services, established reputation.`,
      negatives: `May have higher fees, some require a higher minimum deposit.`,
      description: 
      `Many banks offer student-specific accounts with reduced fees and additional benefits. 
      It's recommended to check with the specific bank for details on their student concessions. 
      Click on any bank below to learn more`,
      options: [
        {
          name: `Commonwealth Bank`,
          url: `https://www.commbank.com.au/banking/students.html`,
        },
        {
          name: `Westpac`,
          url: `https://www.westpac.com.au/personal-banking/bank-accounts/transaction/choice/tertiary-student/`
        },
        {
          name: `ANZ`,
          url: `https://www.anz.com.au/personal/bank-accounts/tips-and-guides/youth-and-money/studying/`
        },
        {
          name: `NAB (National Australia Bank)`,
          url: `https://www.nab.com.au/personal/youth-banking/students`
        }
      ]
    },
    {
      type: `Online Banks`,
      positives: `Lower fees, 24/7 accessibility, innovative technology.`,
      negatives: `Limited physical presence, less personal interaction.`,
      description: `click on any bank below to learn more`,
      options: [
        {
          name: `ING`,
          url: `https://www.ing.com.au/`,
        },
        {
          name: `Up`,
          url: `https://up.com.au/`
        },
        {
          name: `86 400`,
          url: `https://www.86400.com.au/`
        }
      ]
    },
    {
      type: `Credit Unions and Mutual Banks`,
      positives: `Customer-centric approach, competitive rates.`,
      negatives: `Limited branch network, fewer services.`,
      description: `click on any bank below to learn more`,
      options: [
        {
          name: `CUA`,
          url: `https://www.cua.com.au/`,
        },
        {
          name: `Bank Australia`,
          url: `https://bankaust.com.au/`
        }
      ]
    },
  ]

  return (
    <Container>
      <Box component='div' className='uv-flex'>
        <Typography className='uv-text'>
          {intro}
        </Typography>
      </Box>
      <Box component='div' className='uv-flex' mt={2}>
        <Typography sx={{ color: 'red', fontWeight: 'bold'}}>
            <InfoIcon /> <i>{notice}</i>
        </Typography>
      </Box>

      {/* <Typography variant="h4">Banking Options for International Students in Australia</Typography> */}
      {/* <Typography variant="body1" paragraph>
        Find the right banking option to manage your finances as an international student in Australia.
      </Typography> */}
      
      <Grid container>
        {banks.map((bank, index) => (
          <Grid item sm={12} md={12} key={index}>
            <Card sx={{ minHeight: 100, my: 1 }} className='uv-card-bg'>
              <Typography className="uv-title" mx={1.5}>
                {bank.type}
              </Typography>
              <Typography sx={{ m: 1.5}}>
                <b>Positives:</b> {bank.positives}
              </Typography>
              <Typography sx={{ m: 1.5}}>
                <b>Negatives:</b> {bank.negatives}
              </Typography>
              <Typography sx={{ m: 1.5, color: 'red', fontWeight: 'bold'}}>
                <InfoIcon /> <i>{bank.description}</i>
              </Typography>
              <CardContent>
                <Grid container>
                  {bank.options.map((option, index) => (
                    <Grid item sm={12} md={3} key={index}>
                      <Button className='uv-btn-primary-lg'>
                        <a href={option.url} target="_blank">
                          {option.name}
                        </a>
                      </Button>
                    </Grid> 
                  ))}
                </Grid>
                
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item sm={12} md={12}>
          <Card sx={{ minHeight: 100, my: 1 }} className='uv-card-bg'>
            <Typography className="uv-title" mx={1.5}>
              Typical documents required For Opening An Account
            </Typography>
            <CardContent>
              Valid Passport, Student Visa, Proof of Enrolment
            </CardContent>
          </Card>
        </Grid> 
      </Grid>

      
    </Container>
  );
}

export default BankingOptions;
