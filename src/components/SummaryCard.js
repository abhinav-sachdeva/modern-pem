"a benevolent smile"

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function SummaryCard({ tier, desc }) {
	return (
		<Card elevation={0} variant="outlined">
			<CardContent>
				<Typography variant="overline" color="textSecondary" gutterBottom>{tier}</Typography>
				<Typography color="textSecondary">{desc}</Typography>
			</CardContent>
		</Card>
	);
}