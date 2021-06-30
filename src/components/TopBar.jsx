import { AppBar, Toolbar, Tooltip, Typography, IconButton } from '@material-ui/core';
import { InfoOutlined, FilterListRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';

const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 0,
		marginBottom: theme.spacing(1)
	},
	title: {
		flexGrow: 1,
		textAlign: 'center'
	}
}));

export default function TopBar() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	function showAboutDrawer() {
		dispatch({
			type: 'TOGGLE_ABOUT_DRAWER',
			showAboutDrawer: !state.showAboutDrawer
		});
	}

	return (
		<AppBar position="sticky" color="inherit" className={styles.appBar}>
			<Toolbar>
				<Tooltip title="About this site" placement="right">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="about"
						onClick={showAboutDrawer}
					>
						<InfoOutlined />
					</IconButton>
				</Tooltip>
				<Typography variant="h6" component="h1" className={styles.title}>
					Showing 40 of 40
				</Typography>
				<Tooltip title="Apply filters" placement="left">
					<IconButton
						edge="end"
						color="inherit"
						aria-label="filters"
						onClick={showAboutDrawer}
					>
						<FilterListRounded />
					</IconButton>
				</Tooltip>
			</Toolbar>
		</AppBar>
	);
}
