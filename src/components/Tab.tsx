import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Shedule from '../containers/Shedule';
import FinancialPlanner from '../containers/FinancialPlanner';
import NewTable from '../containers/NewTable';

interface ITabPanel {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanel) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: '3rem 0' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Financial Planner" {...a11yProps(0)} />
          <Tab label="Shedule" {...a11yProps(1)} />
          <Tab label="new Table" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FinancialPlanner />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Shedule />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewTable />
      </TabPanel>
    </Box>
  );
}
