import clsx from 'clsx';
import {
	AppBar,
	Hidden,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@material-ui/core';
import {
	InfoOutlined,
	FilterListRounded,
	CloseRounded,
} from '@material-ui/icons';
import { makeStyles, fade } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { Filters } from './index';
import { toggleAboutDrawer, toggleFilters } from '../store';

const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 0,
		marginBottom: theme.spacing(1),
		transition: `height ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeInOut}`,
		...theme.mixins.appbar,
		clipPath: 'inset(0px 0px -10px 0px)',
		backgroundColor: fade(theme.palette.background.paper, 0.97),
	},
	appBarWithFilters: {
		height: 128,
	},
	title: {
		flexGrow: 1,
		textAlign: 'center',
	},
	filters: {
		display: 'flex',
		justifyContent: 'center',
		top: theme.spacing(-1),
	},
}));

export default function TopBar() {
	const styles = useStyles();
	const dispatch = useDispatch();

	const showAboutDrawer = useSelector((state) => state.showAboutDrawer);
	const showFilters = useSelector((state) => state.showFilters);
	const totalVisibleSubjects = useSelector(
		(state) => state.totalVisibleSubjects
	);
	const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	function handleShowAboutDrawer() {
		dispatch(toggleAboutDrawer(!showAboutDrawer));
	}
	function handleToggleFilters() {
		dispatch(toggleFilters(!showFilters));
	}

	return (
		<AppBar
			position="sticky"
			color="inherit"
			className={clsx(styles.appBar, {
				[styles.appBarWithFilters]: !smDown && showFilters,
			})}
		>
			<Toolbar>
				<Tooltip title="About this site" placement="right">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="about"
						onClick={handleShowAboutDrawer}
					>
						<InfoOutlined />
					</IconButton>
				</Tooltip>
				<Typography variant="h6" component="h1" className={styles.title}>
					Showing {totalVisibleSubjects} of 40
				</Typography>
				<Tooltip
					title={!smDown && showFilters ? 'Hide filters' : 'Show filters'}
					placement="left"
				>
					<IconButton
						edge="end"
						color="inherit"
						aria-label="filters"
						onClick={handleToggleFilters}
					>
						{!smDown && showFilters ? <CloseRounded /> : <FilterListRounded />}
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
