import React from 'react';
import config from '../config'
import Highlights from "./Highlights"

const capitalize = (str => str[0].toUpperCase() + str.slice(1).toLowerCase())

export default function CostSummary({ domain, detailsTab }) {
	return (
		<>
			<h1> {capitalize(domain)} Cost Summary</h1>
			<Highlights
				heading="Costing Highlights"
				subheading="Here are the plans available to you based on your zip code."
				highlights={config[domain.toUpperCase()].costSummaryHighlights}
			/>
		</>
	)
}