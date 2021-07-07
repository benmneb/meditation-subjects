import { SwipeableDrawer, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Filters } from './index';
import { useGlobalState } from '../state';

const useStyles = makeStyles({
	drawerPaper: {
		width: 290,
		maxWidth: '80vw'
	},
	figCaption: {
		display: 'flex',
		alignItems: 'baseline',
		justifyContent: 'flex-end'
	}
});

export default function FiltersDrawer() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();
	const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	function toggleFilters() {
		dispatch({
			type: 'TOGGLE_FILTERS',
			show: !state.showFilters
		});
	}

	return (
		<SwipeableDrawer
			classes={{ paper: styles.drawerPaper }}
			anchor="right"
			disableDiscovery
			disableSwipeToOpen
			open={smDown && state.showFilters}
			onClose={toggleFilters}
			onOpen={toggleFilters}
		>
			<Filters smDown={smDown} />
		</SwipeableDrawer>
	);
}
