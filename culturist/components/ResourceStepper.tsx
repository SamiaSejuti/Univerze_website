'use client'
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Box } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  
  const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    }),
  }));

  
  
  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    const icons: { [index: string]: React.ReactElement } = {
      1: <ArticleIcon />,
      2: <SavingsIcon />,
      3: <HomeIcon />,
      4: <DirectionsBusIcon />
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  
  const steps = ['Network Provider', 'Banking', 'Accomodation', 'Transport'];

  export default function ResourceStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState(new Set<number>());
  const [stepperFixed, setStepperFixed] = useState(false);

  const handleStep = (step: number) => () => {
    setActiveStep(step);

    const newCompletedSteps = new Set<number>();
    for (let i = 0; i <= step; i++) {
      newCompletedSteps.add(i);
    }
    setCompletedSteps(newCompletedSteps);

    if (step === 0) {
      document.getElementById('service-provider-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (step === 1) {
      document.getElementById('banking-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (step === 2) {
      document.getElementById('accommodation-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (step === 3) {
      document.getElementById('transport-section')?.scrollIntoView({ behavior: 'smooth' });
    }
   
  };

  useEffect(() => {
    const sections = [
      document.getElementById('service-provider-section'),
      document.getElementById('banking-section'),
      document.getElementById('accommodation-section'),
      document.getElementById('transport-section')
    ];
  
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setStepperFixed(true);
      } else {
        setStepperFixed(false);
      }
  
      const currentSection = sections.findIndex((section, index) => {
        const nextSection = sections[index + 1];
        return (
          section &&
          (!nextSection || window.pageYOffset < nextSection.offsetTop) &&
          window.pageYOffset >= section.offsetTop - 100
        );
      });
  
      setActiveStep(currentSection === -1 ? 0 : currentSection);
  
      const newCompletedSteps = new Set<number>();
      for (let i = 0; i <= currentSection; i++) {
        newCompletedSteps.add(i);
      }
      setCompletedSteps(newCompletedSteps);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <Box
  sx={{
    width: '100%',
    position: stepperFixed ? 'fixed' : 'relative',
    top: stepperFixed ? '0px' : undefined,
    zIndex: stepperFixed ? 1000 : undefined,
    backgroundColor: 'white',
    borderBottom: '2px solid #DAE7DD'
    
  }}
>
  <Stepper alternativeLabel nonLinear activeStep={activeStep} connector={<ColorlibConnector />}>
    {steps.map((label, index) => (
      <Step key={label} onClick={handleStep(index)} completed={completedSteps.has(index)}>
        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
</Box>

  );
}

  

