import React, { useState } from 'react';
import config from '../config'
import DomainNav from "../components/DomainNav"
import DetailsTabGroup from "../components/DetailsTabGroup"
import DetailsContent from "../components/DetailsContent"

export default function DetailsPage(props) {
	const [domainIndex, setDomainIndex] = useState(0)
	const [detailsTab, setDetailsTab] = useState(0)

	const domain = config.domains[domainIndex]
	const handleDomainChange = (newDomainIndex) => {
		setDomainIndex(newDomainIndex);
		props.history.push(`${props.match.path}/${config.domains[newDomainIndex].toLowerCase()}/plan-pricing`)
		setDetailsTab(0)
	}
	const handlePaneChange = (newPaneIndex) => {
		setDetailsTab(newPaneIndex)
		let routePath = ''
		if (newPaneIndex === 0) routePath = 'plan-pricing'
		else if (newPaneIndex === 1) routePath = 'cost-summary'
		props.history.push(`${props.match.path}/${domain.toLowerCase()}/${routePath}`)
	}

	return (
		<React.Fragment>
			<DomainNav current={domainIndex} changeDomain={handleDomainChange} />
			<DetailsTabGroup domain={domain} detailsTab={detailsTab} onPaneChange={handlePaneChange} />
			<DetailsContent domain={domain} detailsTab={detailsTab} />
		</React.Fragment>
	);
}