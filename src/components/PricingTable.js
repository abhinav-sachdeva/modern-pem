import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Collapse, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Hidden }
	from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	tableContainer: {
		marginBottom: "10px"
	},
	btnGradGold: {
		backgroundImage: 'linear-gradient(to right, #F09819 0%, #EDDE5D 51%, #F09819 100%)',
		"& :hover": { backgroundPosition: 'right center' }
	},
	btnGradSilver: {
		backgroundImage: 'linear-gradient(to right, #ECE9E6 0%, #FFFFFF 51%, #ECE9E6 100%)',
		"& :hover": { backgroundPosition: 'right center' }
	},
	tierContainer: {
		lineHeight: '25px',
		fontWeight: 'bold',
		cursor: 'pointer',
		backgroundColor: "#f7f7f7"
	},
	btngrad: {
		width: "25px",
		height: "25px",
		padding: "2px",
		borderRadius: "100%",
		border: '1px solid #ccc',
		float: 'left',
		marginRight: '5px'
	},
	narrowText: { lineHeight: '16px', backgroundColor: "#f7f7f7", cursor: 'pointer' },
	textbadge: {
		backgroundColor: "#ebedee",
		padding: "5px 15px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "0.5rem",
		textAlign: "center"
	}
}))

const Row = (props) => {
	const classes = useStyles();
	const { row, rowId } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow >
				<TableCell className={classes.tierContainer} onClick={() => setOpen(!open)}>
					<div className={`${classes.btngrad} ${rowId % 2 ? classes.btnGradGold : classes.btnGradSilver}`} aria-label="expand row">
						{open ? "" : ""}
					</div>
					<Hidden smDown><Typography variant="inherit">Tier {rowId + 1} </Typography></Hidden>{" "}
					{rowId < 2 && <Hidden smDown><Typography className={classes.textbadge} variant="button">HSA Eligible</Typography></Hidden>}
				</TableCell>
				<TableCell align="center">{row.calories}</TableCell>
				<TableCell align="center">{row.fat}</TableCell>
				<TableCell align="center">{row.carbs}</TableCell>
				<TableCell align="center">{row.protein}</TableCell>
				<TableCell align="center">{row.carbs}</TableCell>
				<TableCell align="center">{row.fat}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Typography variant="h6" gutterBottom component="div">
							Description {rowId < 2 && <Hidden smUp><Typography className={classes.textbadge} variant="button">HSA Eligible</Typography></Hidden>}
						</Typography>

						<Typography variant="body2" gutterBottom component="div">Some generic description to tell about this tier</Typography>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}



export default function CollapsibleTable({ rows, onCarrierClick }) {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} className={classes.tableContainer}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell className={classes.narrowText}>
							<Hidden smDown>
								<h2 className="no-margin">Coverage Tier</h2>
							</Hidden>
						</TableCell>
						<TableCell onClick={() => onCarrierClick(1)} className={classes.narrowText}>Carrier Name</TableCell>
						<TableCell onClick={() => onCarrierClick(2)} className={classes.narrowText}>Carrier Name</TableCell>
						<TableCell onClick={() => onCarrierClick(3)} className={classes.narrowText}>Carrier</TableCell>
						<TableCell onClick={() => onCarrierClick(4)} className={classes.narrowText}>Carrier Name</TableCell>
						<TableCell onClick={() => onCarrierClick(5)} className={classes.narrowText}>Carrier Name</TableCell>
						<TableCell onClick={() => onCarrierClick(6)} className={classes.narrowText}>CarrierName Long</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, id) => (
						<Row key={id} row={row} rowId={id} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
