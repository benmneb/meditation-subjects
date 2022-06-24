import { SwipeableDrawer, useMediaQuery } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles';

import { useSelector, useDispatch } from 'react-redux'

import { Filters } from './index'
import { toggleFilters } from '../store'

const useStyles = makeStyles({
	drawerPaper: {
		width: 290,
		maxWidth: '80vw',
	},
})

export default function FiltersDrawer() {
	const styles = useStyles()
	const dispatch = useDispatch()

	const smDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

	const showFilters = useSelector((state) => state.showFilters)

	function handleToggleFilters() {
		dispatch(toggleFilters(!showFilters))
	}

	return (
		<SwipeableDrawer
			classes={{ paper: styles.drawerPaper }}
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
