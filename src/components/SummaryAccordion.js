import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/ExpansionPanel';
import AccordionSummary from '@material-ui/core/ExpansionPanelSummary';
import AccordionDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import SummaryCard from "./SummaryCard"
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	accordionHead: {
		backgroundColor: theme.palette.secondary.main
	},
}));

export default function SimpleAccordion() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary className={classes.accordionHead} aria-controls="panel1a-content">
					<h2 className="no-margin">First Item</h2>
				</AccordionSummary>
				<AccordionDetails>
					<SummaryCard />
					<SummaryCard />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary className={classes.accordionHead} aria-controls="panel1a-content">
					<h2 className="no-margin">Second Item</h2>
				</AccordionSummary>
				<AccordionDetails>

					<SummaryCard />
				</AccordionDetails>
			</Accordion>
		</div>
	);
}