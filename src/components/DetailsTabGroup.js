import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function DetailsTabGroup({ domain, detailsTab, onPaneChange }) {
	const handleChange = (evt, newValue) => {
		onPaneChange(newValue)
	};
	return (
		<Paper>
			<Tabs
				value={detailsTab}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab data-route='plan-pricing' label={"Plan Pricing"} />
				<Tab data-route='cost-summary' label={"Cost Summary"} />
			</Tabs>
		</Paper>
	);
}