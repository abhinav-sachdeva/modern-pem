import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom"

import config from '../config'

import Highlights from "./Highlights"
import PricingTable from "./PricingTable"
import CarrierContact from "./CarrierContactModal"

const capitalize = (str => str[0].toUpperCase() + str.slice(1).toLowerCase())

export default function PlanPricing({ domain, detailsTab }) {
	const [carrierContactVisible, setCarrierContactVisible] = useState(false)
	const [carrierId, setCarrierId] = useState(null)

	return (
		<Grid container spacing={0} >
			<CarrierContact
				open={carrierContactVisible}
				carrierId={carrierId}
				onClose={() => setCarrierContactVisible(false)} />
			<Grid container spacing={3} justify="space-between" alignItems="center">
				<Grid item xs={12} sm={10}>
					<h1 style={{ marginBottom: '0px' }}> {capitalize(domain)} Plan Pricing</h1>
					<h3 style={{ marginTop: '0px', marginBottom: '15px' }}> Here are the plans available to you based on your zip code.</h3>
				</Grid>
				<Grid item xs={12} sm={2} style={{ textAlign: 'right' }}>
					<Link to="/inputs/edit?redirect"><Button variant="contained" fullWidth color="primary">Go Back</Button></Link>
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
						// subheading="Here are the plans available to you based on your zip code."
						highlights={config[domain.toUpperCase()].planPricingHiglights}
					/>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid
						container
						direction="column-reverse"
						// justify="space-around"
						spacing={0}
					>
						<Grid item>
							<Highlights
								heading="Your Inputs"
								subheading="The following numbers are based off the inputs you provided."
								highlights={[]}
							/>
						</Grid>
						<Grid item>
							<Highlights
								heading="A placeholder"
								subheading="For something important, but not too important."
								highlights={[]}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<PricingTable
					onCarrierClick={(id) => { setCarrierId(id); setCarrierContactVisible(true) }}
					rows={[
						createData('Item', 159, 6.0, 24, 4.0, 3.99),
						createData('Item', 237, 9.0, 37, 4.3, 4.99),
						createData('Item', 262, 16.0, 24, 6.0, 3.79),
						createData('Item', 305, 3.7, 67, 4.3, 2.5),
						createData('Item', 356, 16.0, 49, 3.9, 1.5),
					]}
				/>
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

