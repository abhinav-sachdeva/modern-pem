import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Typography, Button, Grid, Drawer, Container, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router'
// import axios from "axios"

import UserContext from "../contexts/user"
import BenefitsContext from "../contexts/benefits"
const formatResults = (res) => {
	const out = {}
	out.output_state = res.output_state
	out.output_dental_rates = res.output_dental_rates
	out.output_vision_rates = res.output_vision_rates
	out.output_medical_rates = []
	out.output_medical_annual = []
	const carrierNA = []
	for (let index = 0; index < res.output_medical_rates.length; index++) {
		if (index === 2) {
			for (let ind = 0; ind < res.output_medical_rates[index].length; ind++) {
				if (!res.output_medical_rates[index][ind]) carrierNA.push(ind)
			}
		}
	}
	for (let i = 0; i < res.output_medical_rates.length; i++) {
		if (i !== 2) {
			const rateRow = res.output_medical_rates[i].filter((rate, ind) => carrierNA.indexOf(ind) < 0)
			out.output_medical_rates[i] = [...rateRow]
			const annual_rateRow = res.output_medical_annual[i].filter((rate, ind) => carrierNA.indexOf(ind) < 0)
			out.output_medical_annual[i] = [...annual_rateRow]

		}
	}
	return out
}
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			resolve({
				"output_dental_rates": [
					["id", "aetna", "cigna", "deltaca", "metlife", "UnitedHealthcare"],
					["label", "Aetna", "Cigna", "Delta Dental", "MetLife", "UnitedHealthcare"],
					["Plan in Network?", true, true, true, true, true],
					["Bronze", 16.0, 15.0, 14.0, 13.0, 15.0],
					["Silver", 29.0, 29.0, 29.0, 30.0, 28.0],
					["Gold", 51.0, 53.0, 54.0, 52.0, 49.0],
					["Platinum", 16.0, 13.0, 13.0, 13.0, 15.0]
				],
				"output_state": "California",
				"output_vision_rates": [
					["id", "eyemed", "metlife", "united", "vsp"],
					["label", "EyeMed", "MetLife", "UnitedHealthcare", "VSP"],
					["Bronze", 1.0, 2.0, 2.0, 2.0],
					["Silver", 5.0, 4.0, 5.0, 7.0],
					["Gold", 8.0, 10.0, 9.0, 11.0]
				], "output_deductible_copay": [
					["", "Deductible", "Copay Max"],
					["Bronze", 3300.0, 3100.0],
					["Bronze Plus", 2450.0, 1450.0],
					["Silver", 1500.0, 2300.0],
					["Gold", 800.0, 2800.0],
					["Gold II", 0.0, 5400.0],
					["Platinum", 0.0, 1600.0]
				],
				"output_medical_annual": [
					["id", "aetna", "cigna", "dean_prevea", "florida blue", "geisinger", "healthnet", "kaiser", "medical mutual of ohio", "priority health", "united", "upmc", "N/A", "N/A"],
					["label", "Aetna", "Cigna", "Dean", "Florida Blue", "Geisinger", "Health Net", "Kaiser", "Medical Mutual", "Priority Health", "UnitedHealthcare", "UPMC", "N/A", "N/A"],
					["In Network?", true, true, false, true, false, true, true, false, false, true, false, false, false],
					["Bronze", 6005.0, 4696.0, 0.0, 5326.0, 0.0, 8244.0, 4157.0, 0.0, 0.0, 5938.0, 0.0, 0.0, 0.0],
					["Bronze Plus", 6683.0, 5122.0, 0.0, 5949.0, 0.0, 8623.0, 4308.0, 0.0, 0.0, 6768.0, 0.0, 0.0, 0.0],
					["Silver", 7386.0, 5608.0, 0.0, 6915.0, 0.0, 10460.0, 4579.0, 0.0, 0.0, 7043.0, 0.0, 0.0, 0.0],
					["Gold", 9208.0, -1.0, 0.0, 11525.0, 0.0, -1.0, -1.0, 0.0, 0.0, 8915.0, 0.0, 0.0, 0.0],
					["Gold II", -1.0, 7063.0, 0.0, -1.0, 0.0, 5443.0, 6015.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0],
					["Platinum", 11765.0, 8928.0, 0.0, 14951.0, 0.0, 7645.0, 6579.0, 0.0, 0.0, 11375.0, 0.0, 0.0, 0.0]
				],
				"output_medical_rates": [
					["id", "aetna", "cigna", "dean_prevea", "florida blue", "geisinger", "healthnet", "kaiser", "medical mutual of ohio", "priority health", "united", "upmc", "N/A", "N/A"],
					["label", "Aetna", "Cigna", "Dean", "Florida Blue", "Geisinger", "Health Net", "Kaiser", "Medical Mutual", "Priority Health", "UnitedHealthcare", "UPMC", "N/A", "N/A"],
					["In Network?", true, true, false, true, false, true, true, false, false, true, false, false, false],
					["Bronze", 500.0, 391.0, 0.0, 444.0, 0.0, 687.0, 346.0, 0.0, 0.0, 495.0, 0.0, 0.0, 0.0],
					["Bronze Plus", 557.0, 427.0, 0.0, 496.0, 0.0, 719.0, 359.0, 0.0, 0.0, 564.0, 0.0, 0.0, 0.0],
					["Silver", 616.0, 467.0, 0.0, 576.0, 0.0, 872.0, 382.0, 0.0, 0.0, 587.0, 0.0, 0.0, 0.0],
					["Gold", 767.0, -1.0, 0.0, 960.0, 0.0, -1.0, -1.0, 0.0, 0.0, 743.0, 0.0, 0.0, 0.0],
					["Gold II", -1.0, 589.0, 0.0, -1.0, 0.0, 454.0, 501.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0],
					["Platinum", 980.0, 744.0, 0.0, 1246.0, 0.0, 637.0, 548.0, 0.0, 0.0, 948.0, 0.0, 0.0, 0.0]
				],
				"output_calcSheetName": "Darden.V13.1.xlsx"
			})
		}, 250)
	})
}

const InputForm = ({ open, onClose, history }) => {
	const [fetching, setFetching] = useState(false)
	const classes = useStyles();
	const userState = useContext(UserContext)
	const benefitsState = useContext(BenefitsContext)

	const fetchResults = async () => {
		setFetching(true);
		let results = await fetchData();
		results = formatResults(results)
		console.log(results)
		userState.updateDisclaimer(true)
		benefitsState.setBenefits('medical', results.output_medical_rates)
		benefitsState.setBenefits('dental', results.output_dental_rates)
		benefitsState.setBenefits('vision', results.output_vision_rates)
		benefitsState.setBenefits('annual', results.output_medical_annual)
		benefitsState.setBenefits('state', results.state)

		setTimeout(() => {
			alert(`You just fetched some data\n\nLook at the console for details.`)
			setFetching(false)
			history.push("/details/medical/plan-pricing")
		}, 1000)
	}
	console.log()
	return (
		<Drawer className={classes.root} anchor="right" open={open} onClose={onClose}>
			<Container>
				<Grid container direction="row">
					<Grid item xs={10}>
						<Typography component="h5" variant="h6" align="left" color="textPrimary">
							Please fill in the information below to get a preview of the coverages that will be available when you enroll.
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Button fullWidth variant="text" onClick={onClose}>&times;</Button>
					</Grid>
					<hr />
					<Grid item xs={12}>
						{[1, 2, 3].map(e => (
							<div key={e}>
								<Typography component="span" variant="body1" align="left" color="textPrimary" >Input {e} </Typography><br />
								<Typography component="span" variant="subtitle2" align="left" color="textPrimary">Helper text. Not too long.</Typography>
								<div>
									<Chip className={classes.optionChip} color="primary" label="Option 1" />
									<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
									{e === 3 && (<><Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 3" />
										<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 4" />
										<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 5" /></>)}
								</div>
							</div>

						))}
					</Grid>


					<Grid item xs={12}>
						<Button fullWidth disabled={fetching} variant="contained" color="primary" onClick={fetchResults}>
							{fetching ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Drawer>
	)
}

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	formContainer: {
		backgroundColor: theme.palette.light || '#fff',
		boxShadow: '0px 2px 5px #333',
		borderRadius: '5px',
		padding: '10px 15px',
		paddingBottom: '20px',
		marginBottom: '20px',

	},
	formField: {
		marginBottom: '20px',
		padding: '0px 5px'
	},
	optionChip: { marginRight: '10px', marginBottom: '5px', '& span': { padding: '0px 30px' } },
	root: {
		"& .MuiPaper-root": {
			width: '400px',
		}
	},
}));

export default withRouter(InputForm)
