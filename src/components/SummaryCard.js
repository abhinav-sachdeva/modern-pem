"a benevolent smile"

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 275,
		marginRight: 5
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function SimpleCard() {
	const classes = useStyles();

	return (
		<Card elevation={0} variant="outlined" className={classes.root}>
			<CardContent>
				<Typography variant="overline" color="textSecondary" gutterBottom>
					Tier Name
        </Typography>
				<Typography className={classes.pos} color="textSecondary">
					Some description about this item corresponding to the tier mentioned.
        </Typography>
				{/* <Typography variant="body2" component="p">
					Some description about this item corresponding to the tier mentioned.
				</Typography> */}
			</CardContent>
		</Card>
	);
}