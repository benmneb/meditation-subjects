import { Box, Button, Fade, Typography } from '@mui/material'
import { RotateLeftRounded } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

import { useSelector, useDispatch } from 'react-redux'

import { FiltersSelect } from './index'
import { applyFilter, resetFilters } from '../store'

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
}))

export default function Filters(props) {
	const { smDown } = props

	const styles = useStyles(props)
	const theme = useTheme()
	const dispatch = useDispatch()

	const activeFilters = useSelector((state) => state.activeFilters)
	const showFilters = useSelector((state) => state.showFilters)
	const filters = useSelector((state) => state.filters)

	const noFiltersApplied =
		Object.values(activeFilters)
			.flat()
			.filter((e) => String(e).trim()).length < 1

	function handleChange(event, source) {
		const filter = Array.isArray(event.target.value)
			? [...event.target.value]
			: event.target.value

		dispatch(applyFilter(source, filter))
	}

	function handleReset() {
		dispatch(resetFilters())
	}

	return (
		<Fade
			in={showFilters}
			timeout={{
				enter: smDown
					? theme.transitions.duration.enteringScreen
					: theme.transitions.duration.complex,
				exit: theme.transitions.duration.leavingScreen,
			}}
		>
			<Box className={styles.wrapper}>
				<Typography variant={smDown ? 'h6' : 'button'}>Filter by:</Typography>
				{Object.keys(filters).map((filter, i) => (
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
	)
}
