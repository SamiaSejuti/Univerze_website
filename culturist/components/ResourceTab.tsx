'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface TabInfo {
  label: string;
  content: React.ReactNode;
}

interface ResourceTabProps {
  tabs: TabInfo[];
}
interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

interface StyledTabProps {
    label: string;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#635ee7', // selected tab underline color
    },
    '& .MuiTabs-indicatorSpan': {
        // maxWidth: 40,
        width: '80%',
        backgroundColor: '#635ee7',
    },
    '& .MuiTabs-scrollButtons.Mui-disabled': {
      opacity: 0.3
    }
});
  
const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
    ))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#635ee7',
    },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      // style={{ backgroundColor: '#EBDAC8'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ResourceTab: React.FC<ResourceTabProps> = ({ tabs }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#F8F9FB', width: '100%', my: 10 }}>
      <AppBar position="static" className='uv-bg-secondary'>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="Resource Tab"
        >
          {tabs.map((tab, index) => (
            <StyledTab label={tab.label} {...a11yProps(index)} key={index} />
            // update the tab header typography to be responsive
          ))}
        </StyledTabs>
      </AppBar>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index} dir={theme.direction}>
          {tab.content}

          {/* navigation buttons in tab content */}
          <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between', height: '50px', m: 1}}>
              <Button
                className='uv-btn-tab'
                disabled={index === 0} // Disable if it's the first tab
                onClick={() => handleChangeIndex(index - 1)}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                className='uv-btn-tab'
                disabled={index === tabs.length - 1} // Disable if it's the last tab
                onClick={() => handleChangeIndex(index + 1)}
              >
                <ChevronRightIcon />
              </Button>
          </Box>          
        </TabPanel>
      ))}
    </Box>
  );
};

export default ResourceTab;