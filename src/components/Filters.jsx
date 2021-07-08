import { Box, Button, Fade, Typography } from '@material-ui/core';
import { RotateLeftRounded } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useGlobalState } from '../state';
import { FiltersSelect } from './index';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		width: (props) => (props.smDown ? '100%' : 1100),
		display: 'flex',
		flexDirection: (props) => (props.smDown ? 'column' : 'row'),
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: (props) => (props.smDown ? '100%' : 'auto'),
		maxHeight: (props) => (props.smDown ? 500 : 'auto'),
	},
}));

export default function Filters(props) {
	const { smDown } = props;
	const styles = useStyles(props);
	const theme = useTheme();
	const [state, dispatch] = useGlobalState();

	const noFiltersApplied =
		Object.values(state.activeFilters)
			.flat()
			.filter((e) => String(e).trim()).length < 1;

	function handleChange(event, source) {
		const filter = Array.isArray(event.target.value)
			? [...event.target.value]
			: event.target.value;

		dispatch({
			type: 'APPLY_FILTER',
			data: { source, filter },
		});
	}

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
				exit: theme.transitions.duration.leavingScreen,
			}}
		>
			<Box className={styles.wrapper}>
				<Typography variant={smDown ? 'h6' : 'button'}>Filter by:</Typography>
				{Object.keys(state.filters).map((filter, i) => (
					<FiltersSelect
						key={filter}
						filter={filter}
						handleChange={handleChange}
						multiSelect={Boolean(i === 0 || i === 3)}
					/>
				))}
				<Button
					startIcon={<RotateLeftRounded />}
					disabled={noFiltersApplied}
					onClick={handleReset}
				>
					Reset
				</Button>
			</Box>
		</Fade>
	);
}
