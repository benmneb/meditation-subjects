import clsx from 'clsx';
import {
	AppBar,
	Hidden,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery
} from '@material-ui/core';
import { InfoOutlined, FilterListRounded, CloseRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';
import { Filters } from './index';

const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 0,
		marginBottom: theme.spacing(1),
		transition: `height ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeInOut}`,
		...theme.mixins.appbar
	},
	appBarWithFilters: {
		height: 128
	},
	title: {
		flexGrow: 1,
		textAlign: 'center'
	},
	filters: {
		display: 'flex',
		justifyContent: 'center',
		top: theme.spacing(-1)
	}
}));

export default function TopBar() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();
	const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	function showAboutDrawer() {
		dispatch({
			type: 'TOGGLE_ABOUT_DRAWER',
			show: !state.showAboutDrawer
		});
	}
	function toggleFilters() {
		dispatch({
			type: 'TOGGLE_FILTERS',
			show: !state.showFilters
		});
	}

	return (
		<AppBar
			position="sticky"
			color="inherit"
			className={clsx(styles.appBar, {
				[styles.appBarWithFilters]: !smDown && state.showFilters
			})}
		>
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
				<Tooltip
					title={!smDown && state.showFilters ? 'Hide filters' : 'Show filters'}
					placement="left"
				>
					<IconButton
						edge="end"
						color="inherit"
						aria-label="filters"
						onClick={toggleFilters}
					>
						{!smDown && state.showFilters ? <CloseRounded /> : <FilterListRounded />}
					</IconButton>
				</Tooltip>
			</Toolbar>
			<Hidden smDown>
				<Toolbar className={styles.filters}>
					<Filters smDown={smDown} />
				</Toolbar>
			</Hidden>
		</AppBar>
	);
}
