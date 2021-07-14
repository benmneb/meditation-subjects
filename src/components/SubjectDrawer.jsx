import { SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { SubjectDrawerContents } from './index';
import { chooseSubject } from '../store';

const useStyles = makeStyles((theme) => ({
	paper: {
		height: '97%',
		borderRadius: theme.spacing(2, 2, 0, 0),
	},
}));

export default function SubjectDrawer() {
	const styles = useStyles();
	const dispatch = useDispatch();

	const subject = useSelector((state) => state.subject);

	function toggleDrawer() {
		if (subject) {
			dispatch(chooseSubject(null));
		}
	}

	return (
		<SwipeableDrawer
			anchor="bottom"
			classes={{ paper: styles.paper }}
			disableDiscovery
			disableSwipeToOpen
			open={Boolean(subject)}
			onClose={toggleDrawer}
			onOpen={toggleDrawer}
		>
			<SubjectDrawerContents color={subject?.color} />
		</SwipeableDrawer>
	);
}
