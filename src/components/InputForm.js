import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Typography, Button, Grid, Drawer, Container, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router'
import axios from "axios"

import UserContext from "../contexts/user"

const InputForm = ({ open, onClose, history }) => {
	const [fetching, setFetching] = useState(false)
	const classes = useStyles();
	const userState = useContext(UserContext)

	const fetchResults = async () => {
		setFetching(true)
		const randomTodoId = Math.floor(Math.random() * Math.floor(10)) + 1
		const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${randomTodoId}`);
		console.log(results.data)
		userState.updateDisclaimer(true)

		setTimeout(() => {
			alert(`You just fetched this data:\n${results.data.title}\n\nLook at the console for details.`)
			setFetching(false)
			history.push("/details/medical/plan-pricing")
		}, 1000)
	}
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
						<Button fullWidth variant="contained" color="primary" onClick={fetchResults}>
							{fetching ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Drawer>
	)






	// return (
	// 	<div className={classes.root}>
	// 		<Grid
	// 			container
	// 			direction="row"
	// 			justify="space-around"
	// 			alignItems="stretch"
	// 		>
	// 			<Grid item xs={12} md={8} className={classes.formContainer}>
	// 				<Grid container direction="row">
	// 					<Grid item xs={12}>
	// 						<Typography component="h5" variant="h5" align="left" style={{ margin: '10px 0px' }} color="textPrimary">
	// 							Please fill in the information below to get a preview of the coverages that will be available when you enroll.
	// 						</Typography>
	// 						<hr />
	// 					</Grid>
	// 					{[1, 2, 3].map(e => (
	// 						<Grid key={e} item xs={12} md={6} className={classes.formField}>
	// 							<Typography component="span" variant="h6" align="left" color="textPrimary" >Input {e} </Typography>

	// 							<Typography component="span" variant="subtitle2" align="left" color="textPrimary">Helper text. Not too long.</Typography>
	// 							<div>
	// 								<Chip className={classes.optionChip} color="primary" label="Option 1" />
	// 								<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
	// 								{e === 3 && (<><Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
	// 									<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
	// 									<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" /></>)}
	// 							</div>
	// 						</Grid>

	// 					))}
	// 					<Grid item xs={12} style={{ textAlign: "center" }}>
	// 						<Link to="/details/medical/plan-pricing">
	// 							<Button variant="contained" color="primary" >Get me Started</Button></Link>
	// 					</Grid>
	// 				</Grid>
	// 			</Grid>
	// 		</Grid>
	// 	</div>
	// )
}

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	// root: {
	// 	flexGrow: 1,
	// 	marginTop: '-50px'
	// },
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
