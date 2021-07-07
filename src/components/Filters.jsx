import {
	Box,
	Button,
	Checkbox,
	Fade,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	Typography
} from '@material-ui/core';
import { RotateLeftRounded } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useGlobalState } from '../state';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		width: (props) => (props.smDown ? '100%' : 1100),
		display: 'flex',
		flexDirection: (props) => (props.smDown ? 'column' : 'row'),
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: (props) => (props.smDown ? '100%' : 'auto'),
		maxHeight: (props) => (props.smDown ? 500 : 'auto')
	},
	formControl: {
		width: 200,
		minWidth: 185
	},
	select: {
		borderRadius: theme.shape.borderRadius,
		'&:focus': {
			borderRadius: theme.shape.borderRadius
		}
	},
	menuItemRoot: {
		paddingTop: 0,
		paddingBottom: 0
	}
}));

export default function Filters(props) {
	const { smDown } = props;
	const styles = useStyles(props);
	const theme = useTheme();
	const [state, dispatch] = useGlobalState();

	const handleChange = (event, source) => {
		const filter = Array.isArray(event.target.value)
			? [...event.target.value]
			: event.target.value;

		dispatch({
			type: 'APPLY_FILTER',
			data: { source, filter }
		});
	};

	function handleReset() {
		dispatch({ type: 'RESET_FILTERS' });
	}

	return (
		<Fade
			in={state.showFilters}
			timeout={{
				enter: smDown
					? theme.transitions.duration.enteringScreen
					: theme.transitions.duration.complex,
				exit: theme.transitions.duration.leavingScreen
			}}
		>
			<Box className={styles.wrapper}>
				<Typography variant={smDown ? 'h6' : 'button'}>Filter by:</Typography>
				<FormControl
					variant="outlined"
					size="small"
					margin="dense"
					className={styles.formControl}
				>
					<InputLabel id="classifications-label">Classification(s)</InputLabel>
					<Select
						labelId="classifications-label"
						multiple
						value={state.activeFilters.classifications}
						onChange={(event) => handleChange(event, 'classifications')}
						input={<OutlinedInput label="Classification(s)" />}
						renderValue={(selected) => selected.join(', ')}
						classes={{ select: styles.select }}
						MenuProps={{ variant: 'menu' }}
					>
						{state.filters.classifications.map((type) => (
							<MenuItem key={type} value={type} classes={{ root: styles.menuItemRoot }}>
								<Checkbox
									size="small"
									checked={state.activeFilters.classifications.indexOf(type) > -1}
								/>
								<ListItemText primary={type} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl
					variant="outlined"
					size="small"
					margin="dense"
					className={styles.formControl}
				>
					<InputLabel id="possibleFor-label">Possible for...</InputLabel>
					<Select
						labelId="possibleFor-label"
						value={state.activeFilters.possibleFor}
						onChange={(event) => handleChange(event, 'possibleFor')}
						label="Possible for..."
						classes={{ select: styles.select }}
					>
						<MenuItem value="">
							<em>All</em>
						</MenuItem>
						{state.filters.possibleFor.map((type) => (
							<MenuItem key={type} value={type}>
								{type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl
					variant="outlined"
					size="small"
					margin="dense"
					className={styles.formControl}
				>
					<InputLabel id="maxAbsoprtion-label">Max absoprtion</InputLabel>
					<Select
						labelId="maxAbsoprtion-label"
						value={state.activeFilters.maxAbsorption}
						onChange={(event) => handleChange(event, 'maxAbsorption')}
						label="Max absoprtion"
						classes={{ select: styles.select }}
					>
						<MenuItem value="">
							<em>All</em>
						</MenuItem>
						{state.filters.maxAbsorption.map((type) => (
							<MenuItem key={type} value={type}>
								{type}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl
					variant="outlined"
					size="small"
					margin="dense"
					className={styles.formControl}
				>
					<InputLabel id="temperaments-label">Temperament(s)</InputLabel>
					<Select
						labelId="temperaments-label"
						multiple
						value={state.activeFilters.temperaments}
						onChange={(event) => handleChange(event, 'temperaments')}
						input={<OutlinedInput label="Temperament(s)" />}
						renderValue={(selected) => selected.join(', ')}
						classes={{ select: styles.select }}
						MenuProps={{ variant: 'menu' }}
					>
						{state.filters.temperaments.map((type) => (
							<MenuItem key={type} value={type} classes={{ root: styles.menuItemRoot }}>
								<Checkbox
									size="small"
									checked={state.activeFilters.temperaments.indexOf(type) > -1}
								/>
								<ListItemText primary={type} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button startIcon={<RotateLeftRounded />} onClick={handleReset}>
					Reset
				</Button>
			</Box>
		</Fade>
	);
}
