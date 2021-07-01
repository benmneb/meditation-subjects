import { Box, SwipeableDrawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';
import { Link } from '../utils/';

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

export default function AboutDrawer() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	function toggleAboutDrawer() {
		dispatch({
			type: 'TOGGLE_ABOUT_DRAWER',
			showAboutDrawer: !state.showAboutDrawer
		});
	}

	return (
		<SwipeableDrawer
			classes={{ paper: styles.drawerPaper }}
			anchor="left"
			disableDiscovery
			disableSwipeToOpen
			open={state.showAboutDrawer}
			onClose={toggleAboutDrawer}
			onOpen={toggleAboutDrawer}
		>
			<Box component="section" margin={2}>
				<Box component="header" fontWeight="fontWeightBold">
					<Typography variant="inherit" component="h1" paragraph>
						About
					</Typography>
				</Box>
				<Typography paragraph>
					This site is my attempt to simplify and make more accessible the meditation
					instructions in the Visuddhimagga, while helping me study the commentaries to
					the suttas of the Pali Canon.
				</Typography>
				<Typography paragraph>
					Any corrections or additions please{' '}
					<Link
						href="https://github.com/benmneb/meditation-subjects"
						target="_blank"
						rel="noopener"
					>
						file an issue or make a pull request on GitHub
					</Link>
					.
				</Typography>
				<Typography paragraph>
					The Visuddhimagga, translated as “Path to Purification”, is an extensive
					commentary on the fundamental aspects of Buddhist practise and theory as
					understood within the classical Theravada commentarial system. It was assembled,
					edited, and translated into Pali by Bhante Buddhaghosa in the 5th century. It
					was translated from Pali into English by Bhikkhu Nānamoli in the 20th century.
				</Typography>
				<Typography paragraph>
					You can freely{' '}
					<Link
						href="https://archive.org/details/Visuddhimagga-ThePathOfPurification"
						target="_blank"
						rel="noopener"
					>
						read the Vishuddhimagga online
					</Link>{' '}
					or learn more about it in a{' '}
					<Link
						href="https://learn.dhammanet.org/courses/introductory/the-visuddhimagga-for-sutta-lovers/"
						target="_blank"
						rel="noopener"
					>
						four part video course
					</Link>
					.
				</Typography>
			</Box>
		</SwipeableDrawer>
	);
}
