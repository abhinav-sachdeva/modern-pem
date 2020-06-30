import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default () => {
	const classes = useStyles();
	return (
		<AppBar position="static" color="default" elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

const useStyles = makeStyles((theme) => ({
	appBar: {
		// borderBottom: `1px solid ${theme.palette.divider}`,
		// background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
		// backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
		// marginBottom: '20px'
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
	}
}));
