import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom"

import config from '../config'

import Highlights from "./Highlights"
import PricingTable from "./PricingTable"
import CarrierContact from "./CarrierContactModal"
import HelpButton from "./HelpButton"
import HelpCard from "./HelpCard"
import SummaryAccordion from "./SummaryAccordion"

import starIcon from "../assets/icons/star.svg"
import helpIcon from "../assets/icons/info.svg"

const capitalize = (str => str[0].toUpperCase() + str.slice(1).toLowerCase())

export default function PlanPricing({ domain, detailsTab }) {
	const [carrierContactVisible, setCarrierContactVisible] = useState(false)
	const [carrierId, setCarrierId] = useState(null)
	const [helpCardVisible, setHelpCardVisible] = useState(false)
	const [helpMessageId, setHelpMessageId] = useState("")
	const showHelp = (msgId) => {
		setHelpMessageId(msgId);
		setHelpCardVisible(true)
	}

	return (
		<Grid container spacing={0} >
			<CarrierContact
				open={carrierContactVisible}
				carrierId={carrierId}
				onClose={() => setCarrierContactVisible(false)} />
			<Grid container spacing={3} justify="space-between" alignItems="center">
				<Grid item xs={12} sm={9}>
					<h1 style={{ marginBottom: '0px' }}> {capitalize(domain)} Plan Pricing</h1>
					<h3 style={{ marginTop: '0px', marginBottom: '15px' }}> Here are the plans available to you based on your zip code.</h3>
				</Grid>
				<Grid item xs={12} sm={3} style={{ textAlign: 'right' }}>
					<Link to={{ pathname: "/inputs", state: { openDrawer: true } }}>
						<Button variant="contained" fullWidth color="primary">Go Back</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="stretch"
				spacing={1}
			>
				<Grid item xs={12} md={9}>
					<Highlights
						heading="Plan Highlights"
						highlights={config[domain.toUpperCase()].planPricingHiglights}
						icon={starIcon}
					/>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid
						container
						direction="column"
						spacing={0}
					>
						<Grid item>
							<Highlights
								heading="Your Inputs"
								subheading="The following numbers are based off the inputs you provided."
							/>
						</Grid>
						<Grid item>
							<Highlights
								heading="A placeholder"
								subheading="For something important, but not too important."
								icon={helpIcon}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<PricingTable
					onCarrierClick={(id) => { setCarrierId(id); setCarrierContactVisible(true) }}
					rows={[
						createData('Item', 15, 60, 24, 40, 39),
						createData('Item', 237, 9.0, 37, 4.3, 4.99),
						createData('Item', 262, 16.0, 24, 6.0, 3.79),
						createData('Item', 305, 3.7, 67, 4.3, 2.5),
						createData('Item', '1,356', '1,600', '2,449', '1,239', 1.5),
					]}
				/>
			</Grid>
			<Grid item xs={12}>
				<HelpButton helpId="HELP1" onPress={showHelp} message="Help me out" />
				<HelpButton helpId="HELP2" onPress={showHelp} message="Help me out again" />
				<HelpButton helpId="HELP1" onPress={showHelp} message="Help me out with this really long question" />
				<HelpCard isOpen={helpCardVisible} messageId={helpMessageId} onClose={() => {
					setHelpCardVisible(false)
				}} />
			</Grid>
			<br /><br />
			<Grid item xs={12}>
				<h1 style={{ marginBottom: '10px' }}> Benefits Summary</h1>
				<SummaryAccordion />
			</Grid>
		</Grid>
	)
}

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price
	};
}

