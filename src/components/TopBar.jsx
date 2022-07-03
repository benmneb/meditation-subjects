import {
	AppBar,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@mui/material'
import {
	InfoOutlined,
	FilterListRounded,
	CloseRounded,
} from '@mui/icons-material'
import { alpha, styled } from '@mui/material/styles'

import { useSelector, useDispatch } from 'react-redux'

import { Filters } from './index'
import { toggleAboutDrawer, toggleFilters } from '../store'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	top: 0,
	marginBottom: theme.spacing(1),
	transition: `height ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeInOut}`,
	...theme.mixins.appbar,
	clipPath: 'inset(0px 0px -10px 0px)',
	backgroundColor: alpha(theme.palette.background.paper, 0.97),
}))

export default function TopBar() {
	const dispatch = useDispatch()

	const showAboutDrawer = useSelector((state) => state.showAboutDrawer)
	const showFilters = useSelector((state) => state.showFilters)
	const totalVisibleSubjects = useSelector(
		(state) => state.totalVisibleSubjects
	)
	const smDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

	function handleShowAboutDrawer() {
		dispatch(toggleAboutDrawer(!showAboutDrawer))
	}
	function handleToggleFilters() {
		dispatch(toggleFilters(!showFilters))
	}

	return (
		<StyledAppBar
			position="sticky"
			color="inherit"
			sx={{
				...(!smDown &&
					showFilters && {
						'&.MuiAppBar-root': {
							height: 128,
						},
					}),
			}}
		>
			<Toolbar>
				<Tooltip title="About this site" placement="right">
					<IconButton
						edge="start"
						color="inherit"
						aria-label="about"
						onClick={handleShowAboutDrawer}
						size="large"
					>
						<InfoOutlined />
					</IconButton>
				</Tooltip>
				<Typography
					variant="h6"
					component="h1"
					sx={{ flexGrow: 1, textAlign: 'center' }}
				>
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
						size="large"
					>
						{!smDown && showFilters ? <CloseRounded /> : <FilterListRounded />}
					</IconButton>
				</Tooltip>
			</Toolbar>
			{!smDown && showFilters && (
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'center',
						top: (theme) => theme.spacing(-1),
					}}
				>
					<Filters smDown={smDown} />
				</Toolbar>
			)}
		</StyledAppBar>
	)
}
