import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ isOpen, messageId, onClose }) {
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			{messageId === "HELP1" && <DialogTitle id="alert-dialog-title">{"This is the question you clicked on"}</DialogTitle>}
			{messageId === "HELP1" && <DialogContent>
				<DialogContentText id="alert-dialog-description">
					I'll tell you everything about it. We have you sorted out don't worry.
          </DialogContentText>
			</DialogContent>}
			{messageId === "HELP2" && <DialogTitle id="alert-dialog-title">{"This is another question you clicked on"}</DialogTitle>}
			{messageId === "HELP2" && <DialogContent>
				<DialogContentText id="alert-dialog-description">
					I'll tell you everything about it. We have you sorted out don't worry. Keep your cool.
          </DialogContentText>
			</DialogContent>}
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Close
          </Button>
			</DialogActions>
		</Dialog>
	);
}