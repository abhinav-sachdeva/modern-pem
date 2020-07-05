import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

export default function Highlights({ heading, subheading, highlights, icon }) {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.higlightsContainer}>
			<h2 className={classes.noMargin}>{icon && <img alt="" src={icon} className={classes.icon} />}{heading}</h2>
			<h3 className={classes.noMargin}>{subheading}</h3>
			<List dense>
				{highlights && highlights.map((h, i) => (
					<ListItem key={i}>
						<ListItemIcon className={classes.olCount}>{i + 1}</ListItemIcon>
						<ListItemText primary={h} />
					</ListItem>
				)
				)}
			</List>
		</Paper>
	)
}

const useStyles = makeStyles((theme) => ({
	noMargin: { margin: '0px' },
	olCount: {
		backgroundColor: theme.palette.primary.main,
		textAlign: 'center',
		padding: '2px 5px',
		display: 'inline',
		minWidth: '20px',
		color: '#fff',
		marginRight: '7px',
		borderRadius: '5px'
	},
	higlightsContainer: {
		backgroundColor: '#ebedee',
		padding: '5px 10px',
		borderRadius: '5px',
		marginTop: '5px',
		marginBottom: '10px'
	},
	icon: {
		width: '24px',
		marginRight: '3px',
		verticalAlign: 'text-top'
	}
}));
