import { Button, Fade, Typography, styled } from '@mui/material'
import { RotateLeftRounded } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import { useSelector, useDispatch } from 'react-redux'

import { FiltersSelect } from './index'
import { applyFilter, resetFilters } from '../store'

const Wrapper = styled('div', {
	shouldForwardProp: (prop) => prop !== 'smDown',
})(({ smDown }) => ({
	width: smDown ? '100%' : 1100,
	display: 'flex',
	flexDirection: smDown ? 'column' : 'row',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	height: smDown ? '100%' : 'auto',
	maxHeight: smDown ? 500 : 'auto',
}))

export default function Filters({ smDown }) {
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
			<Wrapper smDown={smDown}>
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
			</Wrapper>
		</Fade>
	)
}
