
import { Paper, Tabs, Tab } from '@material-ui/core/';
import _ from 'lodash';

interface TabNavigatorProps {
    /**
     * Button variant
     */
    tabs: Array<string>;
  }

const TabNavigator = ({ tabs = ['Default'] } : TabNavigatorProps)  => {
    return (
        <Paper variant="outlined">
            <Tabs variant="scrollable" scrollButtons="auto" value={0} >
                {tabs?.map((tab, i) => (
                    <Tab key={i} label={tab} />
                ))}
            </Tabs>
        </Paper>
    );
};

export default TabNavigator;
