import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';

import SummaryCard from "./SummaryCard"
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	accordionHead: {
		backgroundColor: theme.palette.secondary.main
	},
	accordionContent: { overflow: 'auto' },
	cardContainer: { minWidth: '250px' }
}));

export default function SimpleAccordion() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary className={classes.accordionHead}>
					<h2 className="no-margin">First Item</h2>
				</AccordionSummary>
				<AccordionDetails className={classes.accordionContent}>
					<Grid spacing={1} container direction="row" wrap="nowrap">
						{
							[1, 2, 3, 4, 5, 6].map(tier => (<Grid key={tier} item className={classes.cardContainer}>
								<SummaryCard tier={'Tier ' + tier} desc="Some description about this item corresponding to the tier mentioned." />
							</Grid>))
						}
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary className={classes.accordionHead}>
					<h2 className="no-margin">Second Item</h2>
				</AccordionSummary>
				<AccordionDetails className={classes.accordionContent}>
					<Grid spacing={1} container direction="row" wrap="nowrap">
						{
							[1, 2, 3, 4].map(tier => (<Grid key={tier} item className={classes.cardContainer}>
								<SummaryCard tier={'Tier ' + tier} desc="Some description about this item corresponding to the tier mentioned." />
							</Grid>))
						}
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}