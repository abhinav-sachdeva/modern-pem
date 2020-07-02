import React, { useEffect } from 'react';
import { withRouter } from 'react-router'
import { Route } from "react-router-dom"
import PlanPricing from "./PlanPricing"
import CostSummary from "./CostSummary"
import { Container } from '@material-ui/core'

const DetailsContent = ({ match, domain, detailsTab }) => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [])

	return (
		<Container>
			<Route path={`${match.path}/:domain/plan-pricing`} component={() => <PlanPricing domain={domain} />} />
			<Route path={`${match.path}/:domain/cost-summary`} component={() => <CostSummary domain={domain} />} />
		</Container>
	)
}

export default withRouter(DetailsContent)
