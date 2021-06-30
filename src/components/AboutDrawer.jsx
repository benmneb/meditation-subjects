import { Box, Link, SwipeableDrawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
				<Typography paragraph>about about about...</Typography>
				<Box component="figure" margin={2}>
					<Typography component="blockquote">"awesome quote"</Typography>
					<Typography
						paragraph
						variant="subtitle2"
						component="figcaption"
						className={styles.figCaption}
					>
						- The Buddha
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
			</Box>
		</SwipeableDrawer>
	);
}
