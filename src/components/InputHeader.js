import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
// import { withRouter } from "react-router"

import InputForm from "./InputForm"

function InputHeader() {
	const classes = useStyles();
	const [formVisible, setFormVisible] = useState(false)
	const toggleDrawer = () => setFormVisible(state => !state)

	return (
		<div id="input-header" className={classes.root}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="stretch"
			>
				<Grid item xs={12} md={6}>
					<Typography component="h1" variant="h3" align="left" className={classes.heroTitle}>
						Enrollment is just around the corner. Get a preview of your benefit options.
        	</Typography>
					<Typography variant="h5" align="left" component="p" className={classes.heroSubTitle}>
						Explore the plans, insurance carriers and prices that will be available to you when you enroll.
        	</Typography>

					<Chip className={classes.optionChip} label="Get me Started" onClick={toggleDrawer} />

				</Grid>
				<Grid item xs={12} md={4}>
					<Hidden smDown>{null}
						{/* <img src={heroimg} alt="heroImg" /> */}
					</Hidden>
				</Grid>
			</Grid>
			<InputForm open={formVisible} onClose={toggleDrawer} />
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	root: {
		flexGrow: 1,
		padding: '7px',
		// background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
		// backgroundImage: 'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)'
		background: '#1d4354',

	},
	heroTitle: { fontWeight: 'bold', color: '#efefef' },
	heroSubTitle: { color: '#eee' },
	getStartedBtn: {
		margin: '20px 0px',
		fontWeight: 'bold',
		padding: '5px 20px'
	},
	optionChip: {
		margin: '20px 0px',
		cursor: 'pointer',
		fontWeight: 'bold',
		padding: '5px 20px',
		background: 'linear-gradient(to right, #d3cce3, #e9e4f0)',

		'& span': { padding: '0px 30px', textTransform: 'uppercase', textDecoration: 'none' }
	}
}));

export default (InputHeader)
