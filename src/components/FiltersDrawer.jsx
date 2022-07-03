import { SwipeableDrawer, useMediaQuery } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import { Filters } from './index'
import { toggleFilters } from '../store'

export default function FiltersDrawer() {
	const dispatch = useDispatch()

	const smDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

	const showFilters = useSelector((state) => state.showFilters)

	function handleToggleFilters() {
		dispatch(toggleFilters(!showFilters))
	}

	return (
		<SwipeableDrawer
			sx={{
				'.MuiDrawer-paper': {
					width: 290,
					maxWidth: '80vw',
				},
			}}
			anchor="right"
			disableDiscovery
			disableSwipeToOpen
			open={smDown && showFilters}
			onClose={handleToggleFilters}
			onOpen={handleToggleFilters}
		>
			<Filters smDown={smDown} />
		</SwipeableDrawer>
	)
}
