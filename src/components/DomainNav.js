import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import config from '../config'

export default function DomainTabs({ current, changeDomain }) {
	const handleChange = (event, newValue) => {
		changeDomain(newValue)
	};
	return (
		<Paper>
			<Tabs
				value={current}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
				centered
			>
				{
					config.domains.map((domain, domainIndex) => <Tab key={domainIndex} label={domain} />)
				}
			</Tabs>
		</Paper>
	);
}