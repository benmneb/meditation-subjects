import { SwipeableDrawer, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { Filters } from './index';
import { toggleFilters } from '../store';

const useStyles = makeStyles({
	drawerPaper: {
		width: 290,
		maxWidth: '80vw',
	},
});

export default function FiltersDrawer() {
	const styles = useStyles();
	const dispatch = useDispatch();

	const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	const showFilters = useSelector((state) => state.showFilters);

	function handleToggleFilters() {
		dispatch(toggleFilters(!showFilters));
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
	);
}
