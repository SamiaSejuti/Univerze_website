import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from "@mui/material";

export function DocumentRequirements() {
  const introduction = 
  `From simple tasks like purchasing a sim card to more complex tasks like applying for a job or leasing an apartment, identification is requried while in Australia. 
  It is best practice to organise all relevant documents and have them handy to ensure that you are not scrambling to find them when required.`

  const intro2 = `You will find below the general documents and identification requirements during your stay in Australia.`

  const documents = [
    {
      name: 'Passport', 
      description: `Your passport is your primary mode of identification. Most students keep their passport on their person as it can be used for identifiying yourself in any situation.
      It's imperative that you keep your passport secure at all times. Learn how to keep it secure by following the link below. 
      `,
      links: [
        {link_name: 'passports.gov.au', link_url: 'https://www.passports.gov.au/passport-care/using-and-protecting-your-passport'}
      ]
      
    },
    {
      name: 'TFN', 
      description: `Your Tax File Number is primarily used for employment and tax purposes. 
      If you plan on working as you study, it's imperative to apply for a TFN from the Australian Tax Office (ATO) as soon as possible.`,
      links: [
        {link_name: 'ATO', link_url: 'https://www.ato.gov.au/individuals/tax-file-number/'}
      ]
    },
    { 
      name: `Driver's License`, 
      description: `If you plan to drive in Australia, you will require a driver's license. In Melbourne, you are allowed to use your internal license for up to six months. 
      Afterwards, you will have to convert to an Australian license. Visit VicRoads below for more details.`,
      links: [
        {link_name: `VicRoads`, link_url: `https://www.vicroads.vic.gov.au/licences/new-to-victoria/convert-your-overseas-licence`}
      ]
    },
    {
      name: 'Visa Grant', 
      description: `Your Visa Grant has many purposes. Some of the most important are that it is used for employment and accommodation.
      We recommend students check their visa rights and conditions to ensure that they remain compliant of any requirements during your stay. 
      You can check your visa conditions online at the homeaffair's Visa Enrolment Verification Online (VEVO) system.`,
      links: [
        {link_name: `VEVO`, link_url: `link url`}
      ]
    },
    {
      name: 'Letter of Enrolment/University ID', 
      description: `Your letter of enrolment or your university ID is generally used to prove your status as a student. It is helpful in cases where student concessions are available to you.`,
      links: []
    }
  ]

  return (
    <Box>
      <Typography  m={1} className="uv-text">
        {introduction}
      </Typography>
      <Typography m={1} className="uv-text">
        {intro2}
      </Typography>
      <Grid container>
        {documents.map((document, index) => (
          <Grid item sm={12} md={12} key={index}>
            <Card sx={{ minHeight: 100, m: 1 }} className="uv-card-bg">
                <Typography className="uv-title" mx={1.5}>
                  {document.name}
                </Typography>
                <CardContent>
                <Typography variant="body1" sx={{ mb: 1.5, fontSize: '0.8rem' }}>
                    {document.description}
                </Typography>
                <Box component='div' sx={{ display: 'flex'}}>
                  <Grid container sx={{ display: 'flex'}} spacing={2}>
                    {document.links?.map((link, index) => (
                        <Grid item key={index}>
                          <Button className='uv-btn-primary-lg'>
                            <a target="_blank" href={link.link_url}>
                              {link.link_name}
                            </a>
                          </Button>
                          
                        </Grid>
                    ))}
                    </Grid>
                </Box>
                </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}