import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SubjectDrawerContents } from './index';
import { useGlobalState } from '../state';

const useStyles = makeStyles((theme) => ({
	paper: {
		height: '97%',
		borderRadius: theme.spacing(2, 2, 0, 0),
	},
}));

export default function SubjectDrawer() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	function toggleDrawer() {
		if (state.subject) {
			dispatch({ type: 'CHOOSE_SUBJECT', subject: null });
		}
	}

	return (
		<SwipeableDrawer
			anchor="bottom"
			classes={{ paper: styles.paper }}
			disableDiscovery
			disableSwipeToOpen
			open={Boolean(state.subject)}
			onClose={toggleDrawer}
			onOpen={toggleDrawer}
		>
			<SubjectDrawerContents color={state?.subject?.color} />
		</SwipeableDrawer>
	);
}
