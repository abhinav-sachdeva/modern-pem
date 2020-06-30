import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Chip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

export default () => {
	useEffect(() => {
		window.scrollBy({
			top: 200,
			left: 0,
			behavior: 'smooth'
		})
	}, [])
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid
				container
				direction="row"
				justify="space-around"
				alignItems="stretch"
			>
				<Grid item xs={12} md={8} className={classes.formContainer}>
					<Grid container direction="row">
						<Grid item xs={12}>
							<Typography component="h5" variant="h5" align="left" style={{ margin: '10px 0px' }} color="textPrimary">
								Please fill in the information below to get a preview of the coverages that will be available when you enroll.
							</Typography>
							<hr />
						</Grid>
						{[1, 2, 3].map(e => (
							<Grid key={e} item xs={12} md={6} className={classes.formField}>
								<Typography component="span" variant="h6" align="left" color="textPrimary" >Input {e} </Typography>

								<Typography component="span" variant="subtitle2" align="left" color="textPrimary">Helper text. Not too long.</Typography>
								<div>
									<Chip className={classes.optionChip} color="primary" label="Option 1" />
									<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
									{e === 3 && (<><Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
										<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" />
										<Chip className={classes.optionChip} variant="outlined" color="primary" label="Option 2" /></>)}
								</div>
							</Grid>

						))}
						<Grid item xs={12} style={{ textAlign: "center" }}>
							<Link to="/details/medical/plan-pricing">
								<Button variant="contained" color="primary" >Get me Started</Button></Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	root: {
		flexGrow: 1,
		marginTop: '-50px'
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
	drawerPaper: {
		width: '400px',
	},
}));
