
import { Paper, Tabs, Tab } from '@material-ui/core/';
import { Link as RouterLink, useLocation } from 'react-router-dom';

type Tab = {
    label: string;
    hash: string;
  }

interface TabNavigatorProps {
    /**
     * Tab values
     */
    tabs: Tab[];
  }

const TabNavigator = ({ tabs} : TabNavigatorProps)  => {
    console.log(tabs)
    const location = useLocation();
    const activeTab = tabs.findIndex(item => item.hash === location.hash.replace('#', ''))
    return (
        <Paper variant="outlined">
            <Tabs variant="scrollable" scrollButtons="auto" value={activeTab > -1 ? activeTab : 0} >
                {tabs?.map((tab, i) => (
                    <Tab key={i} label={tab.label} component={RouterLink} to={`#${tab.hash}`}  />
                ))}
            </Tabs>
        </Paper>
    );
};

export default TabNavigator;
