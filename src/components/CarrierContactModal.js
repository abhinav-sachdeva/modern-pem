import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function SimpleDialog(props) {
	const { open, carrierId, onClose } = props;

	return (
		<Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
			<DialogTitle>Carrier Name (id-{carrierId})</DialogTitle>
			<List>
				<ListItem button component="a">
					<ListItemText primary="carrier_email@carrier.com" />
				</ListItem>
				<ListItem button component="a">
					<ListItemText primary="1800-900-200" />
				</ListItem>
			</List>
		</Dialog>
	);
}